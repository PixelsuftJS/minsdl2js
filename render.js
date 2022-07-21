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

e.SDL_RENDERER_SOFTWARE = en(0x00000001);
e.SDL_RENDERER_ACCELERATED = en(0x00000002);
e.SDL_RENDERER_PRESENTVSYNC = en(0x00000004);
e.SDL_RENDERER_TARGETTEXTURE = en(0x00000008);

e.SDL_RendererInfo = Struct({
  name: 'string',
  flags: 'Uint32',
  num_texture_formats: 'Uint32',
  texture_formats: 'Uint32*',
  max_texture_width: 'int',
  max_texture_height: 'int'
});
e.SDL_Vertex = Struct({
  position: e.SDL_FPoint,
  color: e.SDL_Color,
  tex_coord: e.SDL_FPoint
});

e.SDL_ScaleModeNearest = en(0);
e.SDL_ScaleModeLinear = en();
e.SDL_ScaleModeBest = en();

e.SDL_TEXTUREACCESS_STATIC = en(0);
e.SDL_TEXTUREACCESS_STREAMING = en();
e.SDL_TEXTUREACCESS_TARGET = en();

e.SDL_TEXTUREMODULATE_NONE = en(0x00000000);
e.SDL_TEXTUREMODULATE_COLOR = en(0x00000001);
e.SDL_TEXTUREMODULATE_ALPHA = en(0x00000002);

e.SDL_FLIP_NONE = en(0x00000000);
e.SDL_FLIP_HORIZONTAL = en(0x00000001);
e.SDL_FLIP_VERTICAL = en(0x00000002);

push_export({
  'SDL_GetNumRenderDrivers': ['int', []],
  'SDL_GetRenderDriverInfo': ['int', ['int', 'void*']],
  'SDL_CreateWindowAndRenderer': ['int', ['int', 'int', 'Uint32', 'void**', 'void**']],
  'SDL_CreateRenderer': ['void*', ['void*', 'int', 'Uint32']],
  'SDL_CreateSoftwareRenderer': ['void*', ['void*']],
  'SDL_GetRenderer': ['void*', ['void*']],
  'SDL_RenderGetWindow': ['void*', ['void*']],
  'SDL_GetRendererInfo': ['int', ['void*', 'void*']],
  'SDL_GetRendererOutputSize': ['int', ['void*', 'int*', 'int*']],
  'SDL_CreateTexture': ['void*', ['void*', 'Uint32', 'int', 'int', 'int']],
  'SDL_CreateTextureFromSurface': ['void*', ['void*', 'void*']],
  'SDL_QueryTexture': ['int', ['void*', 'Uint32*', 'int*', 'int*', 'int*']],
  'SDL_SetTextureColorMod': ['int', ['void*', 'Uint8', 'Uint8', 'Uint8']],
  'SDL_GetTextureColorMod': ['int', ['void*', 'Uint8*', 'Uint8*', 'Uint8*']],
  'SDL_SetTextureAlphaMod': ['int', ['void*', 'Uint8']],
  'SDL_GetTextureAlphaMod': ['int', ['void*', 'Uint8*']],
  'SDL_SetTextureBlendMode': ['int', ['void*', 'int']],
  'SDL_GetTextureBlendMode': ['int', ['void*', 'int*']],
  'SDL_SetTextureScaleMode': ['int', ['void*', 'int']],
  'SDL_GetTextureScaleMode': ['int', ['void*', 'int*']],
  'SDL_SetTextureUserData': ['int', ['void*', 'void*']],
  'SDL_GetTextureUserData': ['void*', ['void*']],
  'SDL_UpdateTexture': ['int', ['void*', 'void*', 'void*', 'int']],
  'SDL_UpdateYUVTexture': ['int', ['void*', 'void*', 'Uint8*', 'int', 'Uint8*', 'int', 'Uint8*', 'int']],
  'SDL_UpdateNVTexture': ['int', ['void*', 'void*', 'Uint8*', 'int', 'Uint8*', 'int']],
  'SDL_LockTexture': ['int', ['void*', 'void*', 'void**', 'int*']],
  'SDL_LockTextureToSurface': ['int', ['void*', 'void*', 'void**']],
  'SDL_UnlockTexture': ['void', ['void*']],
  'SDL_RenderTargetSupported': ['int', ['void*']],
  'SDL_SetRenderTarget': ['int', ['void*', 'void*']],
  'SDL_GetRenderTarget': ['void*', ['void*']],
  'SDL_RenderSetLogicalSize': ['int', ['void*', 'int', 'int']],
  'SDL_RenderGetLogicalSize': ['void', ['void*', 'int*', 'int*']],
  'SDL_RenderSetIntegerScale': ['int', ['void*', 'int']],
  'SDL_RenderGetIntegerScale': ['int', ['void*']],
  'SDL_RenderSetViewport': ['int', ['void*', 'void*']],
  'SDL_RenderGetViewport': ['void', ['void*', 'void*']],
  'SDL_RenderSetClipRect': ['int', ['void*', 'void*']],
  'SDL_RenderGetClipRect': ['void', ['void*', 'void*']],
  'SDL_RenderIsClipEnabled': ['int', ['void*']],
  'SDL_RenderSetScale': ['int', ['void*', 'float', 'float']],
  'SDL_RenderGetScale': ['void', ['void*', 'float*', 'float*']],
  'SDL_RenderWindowToLogical': ['void', ['void*', 'int', 'int', 'float*', 'float*']],
  'SDL_RenderLogicalToWindow': ['void', ['void*', 'float', 'float', 'int*', 'int*']],
  'SDL_SetRenderDrawColor': ['int', ['void*', 'Uint8', 'Uint8', 'Uint8', 'Uint8']],
  'SDL_GetRenderDrawColor': ['int', ['void*', 'Uint8*', 'Uint8*', 'Uint8*', 'Uint8*']],
  'SDL_SetRenderDrawBlendMode': ['int', ['void*', 'int']],
  'SDL_GetRenderDrawBlendMode': ['int', ['void*', 'int*']],
  'SDL_RenderClear': ['int', ['void*']],
  'SDL_RenderDrawPoint': ['int', ['void*', 'int', 'int']],
  'SDL_RenderDrawPoints': ['int', ['void*', 'void*', 'int']],
  'SDL_RenderDrawLine': ['int', ['void*', 'int', 'int', 'int', 'int']],
  'SDL_RenderDrawLines': ['int', ['void*', 'void*', 'int']],
  'SDL_RenderDrawRect': ['int', ['void*', 'void*']],
  'SDL_RenderDrawRects': ['int', ['void*', 'void*', 'int']],
  'SDL_RenderFillRect': ['int', ['void*', 'void*']],
  'SDL_RenderFillRects': ['int', ['void*', 'void*', 'int']],
  'SDL_RenderCopy': ['int', ['void*', 'void*', 'void*', 'void*']],
  'SDL_RenderCopyEx': ['int', ['void*', 'void*', 'void*', 'void*', 'double', 'void*', 'int']],
  'SDL_RenderDrawPointF': ['int', ['void*', 'float', 'float']],
  'SDL_RenderDrawPointsF': ['int', ['void*', 'void*', 'int']],
  'SDL_RenderDrawLineF': ['int', ['void*', 'float', 'float', 'float', 'float']],
  'SDL_RenderDrawLinesF': ['int', ['void*', 'void*', 'int']],
  'SDL_RenderDrawRectF': ['int', ['void*', 'void*']],
  'SDL_RenderDrawRectsF': ['int', ['void*', 'void*', 'int']],
  'SDL_RenderFillRectF': ['int', ['void*', 'void*']],
  'SDL_RenderFillRectsF': ['int', ['void*', 'void*', 'int']],
  'SDL_RenderCopyF': ['int', ['void*', 'void*', 'void*', 'void*']],
  'SDL_RenderCopyExF': ['int', ['void*', 'void*', 'void*', 'void*', 'double', 'void*', 'int']],
  'SDL_RenderGeometry': ['int', ['void*', 'void*', 'void*', 'int', 'int*', 'int']],
  'SDL_RenderGeometryRaw': ['int', ['void*', 'void*', 'void*', 'int', 'void*', 'int', 'float*', 'int', 'int', 'void*', 'int', 'int']],
  'SDL_RenderReadPixels': ['int', ['void*', 'void*', 'Uint32', 'void*', 'int']],
  'SDL_RenderPresent': ['void', ['void*']],
  'SDL_DestroyTexture': ['void', ['void*']],
  'SDL_DestroyRenderer': ['void', ['void*']],
  'SDL_RenderFlush': ['int', ['void*']],
  'SDL_GL_BindTexture': ['int', ['void*', 'float*', 'float*']],
  'SDL_GL_UnbindTexture': ['int', ['void*']],
  'SDL_RenderGetMetalLayer': ['void*', ['void*']],
  'SDL_RenderGetMetalCommandEncoder': ['void*', ['void*']],
  'SDL_RenderSetVSync': ['int', ['void*', 'int']]
});
