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

e.SDL_SYSTEM_CURSOR_ARROW = en(0);
e.SDL_SYSTEM_CURSOR_IBEAM = en();
e.SDL_SYSTEM_CURSOR_WAIT = en();
e.SDL_SYSTEM_CURSOR_CROSSHAIR = en();
e.SDL_SYSTEM_CURSOR_WAITARROW = en();
e.SDL_SYSTEM_CURSOR_SIZENWSE = en();
e.SDL_SYSTEM_CURSOR_SIZENESW = en();
e.SDL_SYSTEM_CURSOR_SIZEWE = en();
e.SDL_SYSTEM_CURSOR_SIZENS = en();
e.SDL_SYSTEM_CURSOR_SIZEALL = en();
e.SDL_SYSTEM_CURSOR_NO = en();
e.SDL_SYSTEM_CURSOR_HAND = en();
e.SDL_NUM_SYSTEM_CURSORS = en();

e.SDL_MOUSEWHEEL_NORMAL = en(0);
e.SDL_MOUSEWHEEL_FLIPPED = en();

e.SDL_BUTTON = function(X) {
  return 1 << ((X) - 1);
}
e.SDL_BUTTON_LEFT = 1;
e.SDL_BUTTON_MIDDLE = 2;
e.SDL_BUTTON_RIGHT = 3;
e.SDL_BUTTON_X1 = 4;
e.SDL_BUTTON_X2 = 5;
e.SDL_BUTTON_LMASK = e.SDL_BUTTON(e.SDL_BUTTON_LEFT);
e.SDL_BUTTON_MMASK = e.SDL_BUTTON(e.SDL_BUTTON_MIDDLE);
e.SDL_BUTTON_RMASK = e.SDL_BUTTON(e.SDL_BUTTON_RIGHT);
e.SDL_BUTTON_X1MASK = e.SDL_BUTTON(e.SDL_BUTTON_X1);
e.SDL_BUTTON_X2MASK = e.SDL_BUTTON(e.SDL_BUTTON_X2);

push_export({
  'SDL_GetMouseFocus': ['void*', []],
  'SDL_GetMouseState': ['Uint32', ['int*', 'int*']],
  'SDL_GetGlobalMouseState': ['Uint32', ['int*', 'int*']],
  'SDL_GetRelativeMouseState': ['Uint32', ['int*', 'int*']],
  'SDL_WarpMouseInWindow': ['void', ['void*', 'int*', 'int*']],
  'SDL_WarpMouseGlobal': ['int', ['int', 'int']],
  'SDL_SetRelativeMouseMode': ['int', ['int']],
  'SDL_CaptureMouse': ['int', ['int']],
  'SDL_CreateCursor': ['void*', ['Uint8*', 'Uint8*', 'int', 'int', 'int', 'int']],
  'SDL_CreateColorCursor': ['void*', ['void*', 'int', 'int']],
  'SDL_CreateSystemCursor': ['void*', ['int']],
  'SDL_SetCursor': ['void', ['void*']],
  'SDL_GetCursor': ['void*', []],
  'SDL_GetDefaultCursor': ['void*', []],
  'SDL_FreeCursor': ['void', ['void*']],
  'SDL_ShowCursor': ['int', ['int']]
});
