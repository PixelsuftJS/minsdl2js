process.env.sdl2_global_export = 'true';
const fs = require('fs');
const ref = require('ref-napi');
// Use require('minsdl2js') for your project
const sdl2 = require('./index');

function fatal() {
  console.log('Error:', SDL_GetError());
  process.exit(1);
}

function log(...data) {
  console.log(...data);
}

function random_bool() {
  return Math.floor(Math.random() * 2);
}

function random_color() {
  return Math.floor(Math.random() * 255) << 16 |
    Math.floor(Math.random() * 255) << 8 |
    Math.floor(Math.random() * 255);
}

var prefix = process.platform == 'win32' ? '' : 'lib';
var postfix = '';
if (process.argv.includes('--cygwin')) {
  prefix = 'cyg';
  postfix = '-2-0-0';
}
sdl2.load_sdl2_library(prefix + 'SDL2' + postfix);
sdl2.load_sdl2_image_library(prefix + 'SDL2_image' + postfix);
sdl2.load_sdl2_ttf_library(prefix + 'SDL2_ttf' + postfix);
sdl2.load_sdl2_mixer_library(prefix + 'SDL2_mixer' + postfix);
sdl2.load_sdl2_net_library(prefix + 'SDL2_net' + postfix);
sdl2.load_sdl2_gfx_library(prefix + 'SDL2_gfx' + postfix);
sdl2.load_sdl2_sound_library(prefix + 'SDL2_sound' + postfix);
sdl2.export_sdl2_library(global);
sdl2.export_sdl2_image_library(global);
sdl2.export_sdl2_ttf_library(global);
sdl2.export_sdl2_mixer_library(global);
sdl2.export_sdl2_net_library(global);
sdl2.export_sdl2_gfx_library(global);
sdl2.export_sdl2_sound_library(global);
if (SDL_Init(SDL_INIT_VIDEO | SDL_INIT_EVENTS | SDL_INIT_AUDIO))
  fatal();
if (!IMG_Init(IMG_INIT_JPG | IMG_INIT_PNG))
  fatal();
if (TTF_Init())
  fatal();
if (!Mix_Init(MIX_INIT_MP3 | MIX_INIT_OGG | MIX_INIT_MID | MIX_INIT_OPUS))
  fatal();
if (SDLNet_Init())
  fatal();
if (!Sound_Init())
  fatal();
log(`CPU: ${SDL_GetCPUCount()} CPUs, RAM: ${SDL_GetSystemRAM()}MB`);
log('Platform:', SDL_GetPlatform());
log('Video Driver:', SDL_GetCurrentVideoDriver());
log('Base Path:', SDL_GetBasePath());
log('Language:', SDL_GetPreferredLocales().deref().language);
if (display = SDL_GetDisplayName(0)) {
  var dm = new SDL_DisplayMode();
  var ub = new SDL_Rect();
  SDL_GetDesktopDisplayMode(0, dm.ref());
  SDL_GetDisplayBounds(0, ub.ref());
  log('Display:', display);
  log(`Current Mode: [${dm.w}x${dm.h}@${dm.refresh_rate}Hz]`);
  log(`Usable Bounds: From [${ub.x}x${ub.y}] to [${ub.x + ub.w}x${ub.y + ub.h}]`);
} else
  fatal();
// log('Data Path:', SDL_GetPrefPath(null, 'minsdl2'));
var w = 640;
var h = 480;
const window = SDL_CreateWindow(
  'Hello, World!',
  SDL_WINDOWPOS_CENTERED,
  SDL_WINDOWPOS_CENTERED,
  w,
  h,
  SDL_WINDOW_ALLOW_HIGHDPI | SDL_WINDOW_RESIZABLE
);
//if (icon = SDL_LoadBMP('d:/1.bmp')) {
if (icon = SDL_CreateRGBSurface(0, 32, 32, 32, 0, 0, 0, 0)) {
  SDL_FillRect(icon, new SDL_Rect({
    x: 0,
    y: 0,
    w: 32,
    h: 32
  }).ref(), random_color());
  SDL_SetWindowIcon(window, icon);
  SDL_FreeSurface(icon);
} else fatal();
const renderer = SDL_CreateRenderer(
  window,
  // DirectX 11 On Windows
  (process.platform == 'win32' && SDL_GetNumRenderDrivers() > 1) ? 1 : -1,
  (process.argv.includes('--software') ? SDL_RENDERER_SOFTWARE : 0) |
  (process.argv.includes('--no-accel') ? 0 : SDL_RENDERER_ACCELERATED) |
  (process.argv.includes('--no-vsync') ? 0 : SDL_RENDERER_PRESENTVSYNC)
);
if (renderer == null)
  fatal();

/*const wavSpec = new SDL_AudioSpec;
const wavLength = new Uint32Array(1);
const wavBuffer = ref.ref(new Uint8Array(19574784));
SDL_LoadWAV('d:/music/hatebit - track3.wav', wavSpec.ref(), wavBuffer, wavLength);
const deviceId = SDL_OpenAudioDevice(null, 0, wavSpec.ref(), null, 0);
const success = SDL_QueueAudio(deviceId, wavBuffer.deref(), wavLength);
SDL_PauseAudioDevice(deviceId, 0);*/
const music_path = 'D:/Music/Master Boot Record - XCOPY.EXE.mp3';
var music;
if (fs.existsSync(music_path)) {
  Mix_OpenAudio(44100, AUDIO_S16SYS, 2, 320);
  music = Mix_LoadMUS(music_path);
  Mix_PlayMusic(music, -1);
}

const bg_path = 'D:/other/win7.png';
const font_path = 'C:/Windows/Fonts/segoeuib.ttf';
const bg = fs.existsSync(bg_path) ? IMG_Load(bg_path) : null;
const bg_texture = bg ? SDL_CreateTextureFromSurface(renderer, bg) : null;
if (bg)
  SDL_FreeSurface(bg);
const font = fs.existsSync(font_path) ? TTF_OpenFont(font_path, 32) : null;
var text = '';
var cube_rect = new SDL_FRect({
  x: 0,
  y: 0,
  w: 50,
  h: 50
});
var mouse_point = new SDL_Point;
var speed_x = 250 * (Math.random() + 0.5);
var speed_y = 250 * (Math.random() + 0.5);
var is_colliding = false;
var delta_array = new Array(50).fill(0);
var last_tick = SDL_GetTicks();

log('Allocations:', SDL_GetNumAllocations());

// Do NOT create while(true) {...} - it will leak memory
async function tick() {
  var event = new SDL_Event;
  while (SDL_PollEvent(event.ref())) {
    switch (event.type) {
      case SDL_QUIT:
        if (bg_texture)
          SDL_DestroyTexture(bg_texture);
        SDL_DestroyRenderer(renderer);
        SDL_DestroyWindow(window);
        Sound_Quit();
        SDLNet_Quit();
        if (music)
          Mix_FreeMusic(music);
        Mix_Quit();
        if (font)
          TTF_CloseFont(font);
        TTF_Quit();
        IMG_Quit();
        SDL_Quit();
        log('Allocations:', SDL_GetNumAllocations());
        return;
      case SDL_MOUSEMOTION:
        mouse_point.x = event.motion.x;
        mouse_point.y = event.motion.y;
        //SDL_SetWindowTitle(window, `Mouse Pos: [${event.motion.x}x${event.motion.y}]`);
        break;
      case SDL_KEYDOWN:
        if (event.key.keysym.sym == SDLK_BACKSPACE) {
          if (!text) {
            SDL_ShowSimpleMessageBox(SDL_MESSAGEBOX_WARNING, 'Warning!', 'Already Empty!', window);
            continue;
          }
          text = text.substr(0, text.length - 1);
        } else
          text += SDL_GetKeyName(event.key.keysym.sym);
        SDL_SetWindowTitle(window, `Typing: ${text}`);
        break;
      case SDL_WINDOWEVENT:
        switch (event.window.event) {
          case SDL_WINDOWEVENT_RESIZED:
            w = event.window.data1;
            h = event.window.data2;
            break;
        }
        break;
    }
  }
  const now = SDL_GetTicks();
  const delta = (now - last_tick) / 1000;
  last_tick = now;

  cube_rect.x += speed_x * delta;
  cube_rect.y += speed_y * delta;

  if (cube_rect.x + cube_rect.w >= w)
    speed_x = Math.min(speed_x, -speed_x);
  else if (cube_rect.x <= 0)
    speed_x = Math.max(speed_x, -speed_x);
  if (cube_rect.y + cube_rect.h >= h)
    speed_y = Math.min(speed_y, -speed_y);
  else if (cube_rect.y <= 0)
    speed_y = Math.max(speed_y, -speed_y);

  if (SDL_PointInFRect(mouse_point, cube_rect)) {
    if (!is_colliding) {
      is_colliding = true;
      if (random_bool()) {
        speed_x *= -1;
        if (random_bool()) speed_y *= -1;
      } else {
        speed_y *= -1;
        if (random_bool()) speed_x *= -1;
      }
      speed_x = (speed_x > 0 ? 1 : -1) * 250 * (Math.random() + 0.5);
      speed_y = (speed_y > 0 ? 1 : -1) * 250 * (Math.random() + 0.5);
    }
  } else if (is_colliding)
    is_colliding = false;

  if (bg_texture) {
    SDL_RenderCopy(renderer, bg_texture, null, null);
  } else {
    SDL_SetRenderDrawColor(renderer, 0, 0, 0, 255);
    SDL_RenderClear(renderer);
  }

  filledCircleRGBA(renderer, w >> 1, h >> 1, (w + h) >> 3, 255, 255, 255, 50);

  SDL_SetRenderDrawColor(renderer, 255, 0, 0, 255);
  SDL_RenderFillRectF(renderer, cube_rect.ref());

  const fps = 1 / delta;
  delta_array.shift();
  delta_array.push(delta);
  SDL_SetRenderDrawColor(renderer, 0, 255, 0, 255);
  for (var i = 0; i < delta_array.length; i++) {
    // SDL_RenderDrawPoint(renderer, i, 125 - delta_array[i] * 125);
    SDL_RenderDrawLine(renderer, i, 125 - delta_array[i] * 125, i + 1, 125);
  }

  if (font) {
    const text_surface = TTF_RenderText_Blended(
      font,
      'FPS: ' + Math.round(fps).toString(),
      new SDL_Color({
        r: 0,
        g: 255,
        b: 255
      })
    );
    const text_texture = SDL_CreateTextureFromSurface(renderer, text_surface);
    SDL_RenderCopy(
      renderer,
      text_texture,
      null,
      new SDL_Rect({
        x: 0,
        y: 0,
        w: text_surface.deref().w,
        h: text_surface.deref().h
      }).ref()
    );
    SDL_DestroyTexture(text_texture);
    SDL_FreeSurface(text_surface);
  }

  // TODO: Does it work?
  SDL_RenderPresent.async(renderer, tick);
}
tick();
