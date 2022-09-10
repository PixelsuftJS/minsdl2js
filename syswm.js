const {
  e,
  Struct,
  Union,
  ArrayType,
  en,
  push_export
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

var msg = {};
if (process.platform == 'win32') {
  msg['win'] = Struct({
    hwnd: 'void*',
    msg: 'Uint',
    wParam: 'Uint*',
    lParam: 'Uint*'
  });
}
// TODO: some other platforms specific
msg['dummy'] = 'int';

var info = {};
if (process.platform == 'win32') {
  info['win'] = Struct({
    window: 'void*',
    hdc: 'void*',
    hinstance: 'void*'
  });
}
// TODO: some other platforms specific
info['dummy'] = ArrayType('Uint8', 64);

e.SDL_SysWMmsg = Struct({
  version: e.SDL_version,
  subsystem: 'int',
  msg: Union(msg)
});

e.SDL_SysWMinfo = Struct({
  version: e.SDL_version,
  subsystem: 'int',
  info: Union(info)
});

push_export({
  'SDL_GetWindowWMInfo': ['int', ['void*', 'void*']]
});
