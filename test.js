process.env.sdl2_global_export = 'true';
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

sdl2.load_sdl2_library('SDL2.dll', ignore_list=[]);
sdl2.export_sdl2_library(global);
if (SDL_Init(SDL_INIT_VIDEO | SDL_INIT_EVENTS))
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
  SDL_RENDERER_ACCELERATED | SDL_RENDERER_PRESENTVSYNC
);
if (renderer == null)
  fatal();
log('Allocations:', SDL_GetNumAllocations());

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
var last_tick = SDL_GetTicks64();

// Do NOT create while(true) {...} - it will leak memory
function tick() {
  var event = new SDL_Event;
  while (SDL_PollEvent(event.ref())) {
    switch (event.type) {
      case SDL_QUIT:
        SDL_DestroyRenderer(renderer);
        SDL_DestroyWindow(window);
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
  const now = SDL_GetTicks64();
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

  SDL_SetRenderDrawColor(renderer, 0, 0, 0, 0);
  SDL_RenderClear(renderer);
  SDL_SetRenderDrawColor(renderer, 255, 0, 0, 0);
  SDL_RenderFillRectF(renderer, cube_rect.ref());
  SDL_RenderPresent(renderer);
  setImmediate(tick);
}
setImmediate(tick);
