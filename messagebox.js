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

e.SDL_MESSAGEBOX_ERROR = en(0x00000010);
e.SDL_MESSAGEBOX_WARNING = en(0x00000020);
e.SDL_MESSAGEBOX_INFORMATION = en(0x00000040);
e.SDL_MESSAGEBOX_BUTTONS_LEFT_TO_RIGHT = en(0x00000080);
e.SDL_MESSAGEBOX_BUTTONS_RIGHT_TO_LEFT = en(0x00000100);

e.SDL_MESSAGEBOX_BUTTON_RETURNKEY_DEFAULT = en(0x00000001);
e.SDL_MESSAGEBOX_BUTTON_ESCAPEKEY_DEFAULT = en(0x00000002);

e.SDL_MESSAGEBOX_COLOR_BACKGROUND = en(0);
e.SDL_MESSAGEBOX_COLOR_TEXT = en();
e.SDL_MESSAGEBOX_COLOR_BUTTON_BORDER = en();
e.SDL_MESSAGEBOX_COLOR_BUTTON_BACKGROUND = en();
e.SDL_MESSAGEBOX_COLOR_BUTTON_SELECTED = en();
e.SDL_MESSAGEBOX_COLOR_MAX = en();

e.SDL_MessageBoxButtonData = Struct({
  flags: 'Uint32',
  buttonid: 'int',
  text: 'string'
});
e.SDL_MessageBoxColor = Struct({
  r: 'Uint8',
  g: 'Uint8',
  b: 'Uint8'
});
e.SDL_MessageBoxColorScheme = Struct({
  colors: ref.refType(e.SDL_MessageBoxColor)
});
e.SDL_MessageBoxData = Struct({
  flags: 'Uint32',
  window: 'void*',
  title: 'string',
  message: 'string',
  numbuttons: 'int',
  buttons: ref.refType(e.SDL_MessageBoxButtonData),
  colorScheme: ref.refType(e.SDL_MessageBoxColorScheme)
});

push_export({
  'SDL_ShowMessageBox': ['int', ['void*', 'int*']],
  'SDL_ShowSimpleMessageBox': ['int', ['Uint32', 'string', 'string', 'void*']]
});
