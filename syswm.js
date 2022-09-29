const {
  e,
  defines,
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
if (defines['__WIN32__']) {
  msg['win'] = Struct({
    hwnd: 'void*',
    msg: 'Uint',
    wParam: 'Uint*',
    lParam: 'Uint*'
  });
}
if (defines['SDL_VIDEO_DRIVER_X11']) {
  msg['x11'] = Struct({
    event: 'void*'
  });
}
if (defines['SDL_VIDEO_DRIVER_DIRECTFB']) {
  msg['dfb'] = Struct({
    event: 'void*'
  });
}
if (defines['SDL_VIDEO_DRIVER_COCOA']) {
  msg['cocoa'] = Struct({
    dummy: 'int'
  });
}
if (defines['SDL_VIDEO_DRIVER_UIKIT']) {
  msg['uikit'] = Struct({
    dummy: 'int'
  });
}
if (defines['SDL_VIDEO_DRIVER_VIVANTE']) {
  msg['vivante'] = Struct({
    dummy: 'int'
  });
}
if (defines['SDL_VIDEO_DRIVER_OS2']) {
  msg['os2'] = Struct({
    fFrame: 'int',
    hwnd: 'void*',
    msg: 'Ulong',
    mp1: 'void*',
    mp2: 'void*'
  });
}
msg['dummy'] = 'int';

var info = {};
if (defines['__WIN32__']) {
  info['win'] = Struct({
    window: 'void*',
    hdc: 'void*',
    hinstance: 'void*'
  });
}
if (defines['SDL_VIDEO_DRIVER_WINRT']) {
  info['winrt'] = Struct({
    window: 'void*'
  });
}
if (defines['SDL_VIDEO_DRIVER_X11']) {
  info['x11'] = Struct({
    display: 'void*',
    window: 'void*'
  });
}
if (defines['SDL_VIDEO_DRIVER_DIRECTFB']) {
  info['dfb'] = Struct({
    dfb: 'void*',
    window: 'void*',
    surface: 'void*'
  });
}
if (defines['SDL_VIDEO_DRIVER_COCOA']) {
  info['cocoa'] = Struct({
    window: 'void*'
  });
}
if (defines['SDL_VIDEO_DRIVER_UIKIT']) {
  info['uikit'] = Struct({
    window: 'void*',
    framebuffer: 'void*',
    colorbuffer: 'void*',
    resolveFramebuffer: 'void*'
  });
}
if (defines['SDL_VIDEO_DRIVER_WAYLAND']) {
  info['wl'] = Struct({
    display: 'void*',
    surface: 'void*',
    shell_surface: 'void*',
    egl_window: 'void*',
    xdg_surface: 'void*',
    xdg_toplevel: 'void*',
    xdg_popup: 'void*',
    xdg_positioner: 'void*'
  });
}
if (defines['SDL_VIDEO_DRIVER_ANDROID']) {
  info['android'] = Struct({
    window: 'void*',
    surface: 'void*'
  });
}
if (defines['SDL_VIDEO_DRIVER_OS2']) {
  info['os2'] = Struct({
    hwnd: 'void*',
    hwndFrame: 'void*'
  });
}
if (defines['SDL_VIDEO_DRIVER_VIVANTE']) {
  info['vivante'] = Struct({
    display: 'void*',
    window: 'void*'
  });
}
if (defines['SDL_VIDEO_DRIVER_KMSDRM']) {
  info['kmsdrm'] = Struct({
    dev_index: 'int',
    drm_fd: 'int',
    gbm_dev: 'void*'
  });
}
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
