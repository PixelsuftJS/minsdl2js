const {
  e,
  ffi,
  ref,
  Struct,
  Union,
  from_hex,
  en,
  push_export
} = require('./api');

e.SDL_WINDOWEVENT_NONE = en(0);
e.SDL_WINDOWEVENT_SHOWN = en();
e.SDL_WINDOWEVENT_HIDDEN = en();
e.SDL_WINDOWEVENT_EXPOSED = en();
e.SDL_WINDOWEVENT_MOVED = en();
e.SDL_WINDOWEVENT_RESIZED = en();
e.SDL_WINDOWEVENT_SIZE_CHANGED = en();
e.SDL_WINDOWEVENT_MINIMIZED = en();
e.SDL_WINDOWEVENT_MAXIMIZED = en();
e.SDL_WINDOWEVENT_RESTORED = en();
e.SDL_WINDOWEVENT_ENTER = en();
e.SDL_WINDOWEVENT_LEAVE = en();
e.SDL_WINDOWEVENT_FOCUS_GAINED = en();
e.SDL_WINDOWEVENT_FOCUS_LOST = en();
e.SDL_WINDOWEVENT_CLOSE = en();
e.SDL_WINDOWEVENT_TAKE_FOCUS = en();
e.SDL_WINDOWEVENT_HIT_TEST = en();
e.SDL_WINDOWEVENT_ICCPROF_CHANGED = en();
e.SDL_WINDOWEVENT_DISPLAY_CHANGED = en();

e.SDL_DISPLAYEVENT_NONE = en(0);
e.SDL_DISPLAYEVENT_ORIENTATION = en();
e.SDL_DISPLAYEVENT_CONNECTED = en();
e.SDL_DISPLAYEVENT_DISCONNECTED = en();

e.SDL_ORIENTATION_UNKNOWN = en(0);
e.SDL_ORIENTATION_LANDSCAPE = en();
e.SDL_ORIENTATION_LANDSCAPE_FLIPPED = en();
e.SDL_ORIENTATION_PORTRAIT = en();
e.SDL_ORIENTATION_PORTRAIT_FLIPPED = en();

e.SDL_FLASH_CANCEL = en(0);
e.SDL_FLASH_BRIEFLY = en();
e.SDL_FLASH_UNTIL_FOCUSED = en();

e.SDL_GL_RED_SIZE = en(0);
e.SDL_GL_GREEN_SIZE = en();
e.SDL_GL_BLUE_SIZE = en();
e.SDL_GL_ALPHA_SIZE = en();
e.SDL_GL_BUFFER_SIZE = en();
e.SDL_GL_DOUBLEBUFFER = en();
e.SDL_GL_DEPTH_SIZE = en();
e.SDL_GL_STENCIL_SIZE = en();
e.SDL_GL_ACCUM_RED_SIZE = en();
e.SDL_GL_ACCUM_GREEN_SIZE = en();
e.SDL_GL_ACCUM_BLUE_SIZE = en();
e.SDL_GL_ACCUM_ALPHA_SIZE = en();
e.SDL_GL_STEREO = en();
e.SDL_GL_MULTISAMPLEBUFFERS = en();
e.SDL_GL_MULTISAMPLESAMPLES = en();
e.SDL_GL_ACCELERATED_VISUAL = en();
e.SDL_GL_RETAINED_BACKING = en();
e.SDL_GL_CONTEXT_MAJOR_VERSION = en();
e.SDL_GL_CONTEXT_MINOR_VERSION = en();
e.SDL_GL_CONTEXT_EGL = en();
e.SDL_GL_CONTEXT_FLAGS = en();
e.SDL_GL_CONTEXT_PROFILE_MASK = en();
e.SDL_GL_SHARE_WITH_CURRENT_CONTEXT = en();
e.SDL_GL_FRAMEBUFFER_SRGB_CAPABLE = en();
e.SDL_GL_CONTEXT_RELEASE_BEHAVIOR = en();
e.SDL_GL_CONTEXT_RESET_NOTIFICATION = en();
e.SDL_GL_CONTEXT_NO_ERROR = en();

e.SDL_GL_CONTEXT_PROFILE_CORE = en(0x0001);
e.SDL_GL_CONTEXT_PROFILE_COMPATIBILITY = en(0x0002);
e.SDL_GL_CONTEXT_PROFILE_ES = en(0x0004);

e.SDL_GL_CONTEXT_DEBUG_FLAG = en(0x0001);
e.SDL_GL_CONTEXT_FORWARD_COMPATIBLE_FLAG = en(0x0002);
e.SDL_GL_CONTEXT_ROBUST_ACCESS_FLAG = en(0x0004);
e.SDL_GL_CONTEXT_RESET_ISOLATION_FLAG = en(0x0008);

e.SDL_GL_CONTEXT_RELEASE_BEHAVIOR_NONE = en(0x0000);
e.SDL_GL_CONTEXT_RELEASE_BEHAVIOR_FLUSH = en(0x0001);

e.SDL_GL_CONTEXT_RESET_NO_NOTIFICATION = en(0x0000);
e.SDL_GL_CONTEXT_RESET_LOSE_CONTEXT = en(0x0001);

e.SDL_WINDOW_FULLSCREEN = 0x00000001;
e.SDL_WINDOW_OPENGL = 0x00000002;
e.SDL_WINDOW_SHOWN = 0x00000004;
e.SDL_WINDOW_HIDDEN = 0x00000008;
e.SDL_WINDOW_BORDERLESS = 0x00000010;
e.SDL_WINDOW_RESIZABLE = 0x00000020;
e.SDL_WINDOW_MINIMIZED = 0x00000040;
e.SDL_WINDOW_MAXIMIZED = 0x00000080;
e.SDL_WINDOW_MOUSE_GRABBED = 0x00000100;
e.SDL_WINDOW_INPUT_FOCUS = 0x00000200;
e.SDL_WINDOW_MOUSE_FOCUS = 0x00000400;
e.SDL_WINDOW_FULLSCREEN_DESKTOP = e.SDL_WINDOW_FULLSCREEN | 0x00001000;
e.SDL_WINDOW_FOREIGN = 0x00000800;
e.SDL_WINDOW_ALLOW_HIGHDPI = 0x00002000;
e.SDL_WINDOW_MOUSE_CAPTURE = 0x00004000;
e.SDL_WINDOW_ALWAYS_ON_TOP = 0x00008000;
e.SDL_WINDOW_SKIP_TASKBAR = 0x00010000;
e.SDL_WINDOW_UTILITY = 0x00020000;
e.SDL_WINDOW_TOOLTIP = 0x00040000;
e.SDL_WINDOW_POPUP_MENU = 0x00080000;
e.SDL_WINDOW_KEYBOARD_GRABBED = 0x00100000;
e.SDL_WINDOW_VULKAN = 0x10000000;
e.SDL_WINDOW_METAL = 0x20000000;
e.SDL_WINDOWPOS_UNDEFINED_MASK = from_hex('0x1FFF0000u');
e.SDL_WINDOWPOS_UNDEFINED_DISPLAY = function(X) {
  return e.SDL_WINDOWPOS_UNDEFINED_MASK | X;
};
e.SDL_WINDOWPOS_UNDEFINED = e.SDL_WINDOWPOS_UNDEFINED_DISPLAY(0);
e.SDL_WINDOWPOS_ISUNDEFINED = function(X) {
  return (X & 0xFFFF0000) == SDL_WINDOWPOS_UNDEFINED_MASK;
}
e.SDL_WINDOWPOS_CENTERED_MASK = from_hex('0x2FFF0000u');
e.SDL_WINDOWPOS_CENTERED_DISPLAY = function(X) {
  return e.SDL_WINDOWPOS_UNDEFINED_MASK | X;
};
e.SDL_WINDOWPOS_CENTERED = e.SDL_WINDOWPOS_CENTERED_DISPLAY(0);
e.SDL_WINDOWPOS_ISCENTERED = function(X) {
  return (X & 0xFFFF0000) == SDL_WINDOWPOS_CENTERED_MASK;
}

e.SDL_DisplayMode = Struct({
  format: 'Uint32',
  w: 'int',
  h: 'int',
  refresh_rate: 'int',
  driverdata: 'void*'
});

push_export({
  'SDL_GetNumVideoDrivers': ['int', []],
  'SDL_GetVideoDriver': ['string', ['int']],
  'SDL_GetCurrentVideoDriver': ['string', []],
  'SDL_GetNumVideoDisplays': ['int', []],
  'SDL_GetDisplayName': ['string', ['int']],
  'SDL_GetDisplayBounds': ['int', ['int', 'void*']],
  'SDL_GetDisplayUsableBounds': ['int', ['int', 'void*']],
  'SDL_GetDisplayDPI': ['int', ['int', 'float*', 'float*', 'float*']],
  'SDL_GetDisplayOrientation': ['int', ['int']],
  'SDL_GetNumDisplayModes': ['int', ['int']],
  'SDL_GetDisplayMode': ['int', ['int', 'int', 'void*']],
  'SDL_GetDesktopDisplayMode': ['int', ['int', 'void*']],
  'SDL_GetCurrentDisplayMode': ['int', ['int', 'void*']],
  'SDL_GetWindowDisplayIndex': ['int', ['void*']],
  'SDL_SetWindowDisplayMode': ['int', ['void*', 'void*']],
  'SDL_GetWindowDisplayMode': ['int', ['void*', 'void*']],
  'SDL_GetWindowICCProfile': ['void*', ['void*', 'size_t*']],
  'SDL_GetWindowPixelFormat': ['Uint32', ['void*']],
  'SDL_CreateWindow': ['void*', ['string', 'int', 'int', 'int', 'int', 'Uint32']],
  'SDL_CreateWindowFrom': ['void*', ['void*']],
  'SDL_GetWindowID': ['Uint32', ['void*']],
  'SDL_GetWindowFromID': ['void*', ['Uint32']],
  'SDL_GetWindowFlags': ['Uint32', ['void*']],
  'SDL_SetWindowTitle': ['void', ['void*', 'string']],
  'SDL_GetWindowTitle': ['string', ['void*']],
  'SDL_SetWindowIcon': ['void', ['void*', 'void*']],
  'SDL_SetWindowData': ['void*', ['void*', 'string', 'void*']],
  'SDL_GetWindowData': ['void*', ['void*', 'string']],
  'SDL_SetWindowPosition': ['void', ['void*', 'int', 'int']],
  'SDL_GetWindowPosition': ['void', ['void*', 'int*', 'int*']],
  'SDL_SetWindowSize': ['void', ['void*', 'int', 'int']],
  'SDL_GetWindowSize': ['void', ['void*', 'int*', 'int*']],
  'SDL_GetWindowBordersSize': ['int', ['void*', 'int*', 'int*', 'int*', 'int*']],
  'SDL_SetWindowMinimumSize': ['void', ['void*', 'int', 'int']],
  'SDL_GetWindowMinimumSize': ['void', ['void*', 'int*', 'int*']],
  'SDL_SetWindowMaximumSize': ['void', ['void*', 'int', 'int']],
  'SDL_GetWindowMaximumSize': ['void', ['void*', 'int*', 'int*']],
  'SDL_SetWindowBordered': ['void', ['void*', 'int']],
  'SDL_SetWindowResizable': ['void', ['void*', 'int']],
  'SDL_SetWindowAlwaysOnTop': ['void', ['void*', 'int']],
  'SDL_ShowWindow': ['void', ['void*']],
  'SDL_HideWindow': ['void', ['void*']],
  'SDL_RaiseWindow': ['void', ['void*']],
  'SDL_MaximizeWindow': ['void', ['void*']],
  'SDL_MinimizeWindow': ['void', ['void*']],
  'SDL_RestoreWindow': ['void', ['void*']],
  'SDL_SetWindowFullscreen': ['void', ['void*', 'Uint32']],
  'SDL_GetWindowSurface': ['void*', ['void*']],
  'SDL_UpdateWindowSurface': ['int', ['void*']],
  'SDL_UpdateWindowSurfaceRects': ['int', ['void*', 'void*', 'int']],
  'SDL_SetWindowGrab': ['void', ['void*', 'int']],
  'SDL_SetWindowKeyboardGrab': ['void', ['void*', 'int']],
  'SDL_SetWindowMouseGrab': ['void', ['void*', 'int']],
  'SDL_GetWindowGrab': ['int', ['void*']],
  'SDL_GetWindowKeyboardGrab': ['int', ['void*']],
  'SDL_GetWindowMouseGrab': ['int', ['void*']],
  'SDL_GetGrabbedWindow': ['void*', []],
  'SDL_SetWindowMouseRect': ['int', ['void*', 'void*']],
  'SDL_GetWindowMouseRect': ['void*', ['void*']],
  'SDL_SetWindowBrightness': ['int', ['void*', 'float']],
  'SDL_GetWindowBrightness': ['float', ['void*']],
  'SDL_SetWindowOpacity': ['int', ['void*', 'float']],
  'SDL_GetWindowOpacity': ['int', ['void*', 'float*']],
  'SDL_SetWindowModalFor': ['int', ['void*', 'void*']],
  'SDL_SetWindowInputFocus': ['int', ['void*']],
  'SDL_SetWindowGammaRamp': ['int', ['void*', 'Uint16*', 'Uint16*', 'Uint16*']],
  'SDL_GetWindowGammaRamp': ['int', ['void*', 'Uint16*', 'Uint16*', 'Uint16*']],
  'SDL_FlashWindow': ['int', ['void*', 'int']],
  'SDL_DestroyWindow': ['void', ['void*']],
  'SDL_IsScreenSaverEnabled': ['int', []],
  'SDL_EnableScreenSaver': ['int', []],
  'SDL_DisableScreenSaver': ['int', []]
});
