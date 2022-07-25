const {
  e,
  l,
  ffi,
  ref,
  Struct,
  Union,
  from_hex,
  en,
  push_export,
  push_functions
} = require('./api');

e.SDL_METALVIEW_TAG = 255;

e.SDL_SYSWM_UNKNOWN = en(0);
e.SDL_SYSWM_WINDOWS = en();
e.SDL_SYSWM_X11 = en();
e.SDL_SYSWM_DIRECTFB = en();
e.SDL_SYSWM_COCOA = en();
e.SDL_SYSWM_UIKIT = en();
e.SDL_SYSWM_WAYLAND = en();
e.SDL_SYSWM_MIR = en();
e.SDL_SYSWM_WINRT = en();
e.SDL_SYSWM_ANDROID = en();
e.SDL_SYSWM_VIVANTE = en();
e.SDL_SYSWM_OS2 = en();
e.SDL_SYSWM_HAIKU = en();
e.SDL_SYSWM_KMSDRM = en();
e.SDL_SYSWM_RISCOS = en();

e.SDL_SysWMmsg = Struct({
  version: e.SDL_version,
  subsystem: 'int',
  info: 'void*' // TODO
});

e.SDL_SysWMinfo = Struct({
  version: e.SDL_version,
  subsystem: 'int',
  info: 'void*' // TODO
});

push_export({
  'SDL_GetWindowWMInfo': ['int', ['void*', 'void*']]
});
