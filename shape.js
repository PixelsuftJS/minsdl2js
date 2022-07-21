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

e.SDL_NONSHAPEABLE_WINDOW = -1;
e.SDL_INVALID_SHAPE_ARGUMENT = -2;
e.SDL_WINDOW_LACKS_SHAPE = -3;

e.ShapeModeDefault = en(0);
e.ShapeModeBinarizeAlpha = en();
e.ShapeModeReverseBinarizeAlpha = en();
e.ShapeModeColorKey = en();

e.SDL_SHAPEMODEALPHA = function(mode) {
  return mode == e.ShapeModeDefault || mode == e.ShapeModeBinarizeAlpha || mode == e.ShapeModeReverseBinarizeAlpha;
}

e.SDL_WindowShapeParams = Union({
  binarizationCutoff: 'Uint8',
  colorKey: e.SDL_Color
});
e.SDL_WindowShapeMode = Union({
  mode: 'int',
  parameters: e.SDL_WindowShapeParams
});

push_export({
  'SDL_SetWindowShape': ['int', ['void*', 'void*', 'void*']],
  'SDL_GetShapedWindowMode': ['int', ['void*', 'void*']]
});
