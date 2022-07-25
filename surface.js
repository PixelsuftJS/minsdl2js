const {
  e,
  l,
  ffi,
  ref,
  Struct,
  Union,
  from_hex,
  en,
  push_export
} = require('./api');

e.SDL_SWSURFACE = 0;
e.SDL_PREALLOC = 0x00000001;
e.SDL_RLEACCEL = 0x00000002;
e.SDL_DONTFREE = 0x00000004;
e.SDL_SIMD_ALIGNED = 0x00000008;
e.SDL_MUSTLOCK = function(S) {
  return (S.flags & e.SDL_RLEACCEL) != 0;
}

e.SDL_YUV_CONVERSION_JPEG = en(0);
e.SDL_YUV_CONVERSION_BT601 = en();
e.SDL_YUV_CONVERSION_BT709 = en();
e.SDL_YUV_CONVERSION_AUTOMATIC = en();

e.SDL_Surface = Struct({
  flags: 'Uint32',
  format: ref.refType(e.SDL_PixelFormat),
  w: 'int',
  h: 'int',
  pixels: 'void*',
  userdata: 'void*',
  locked: 'int',
  list_blitmap: 'void*',
  clip_rect: e.SDL_Rect,
  map: 'void*',
  refcount: 'int'
});

e.SDL_LoadBMP = function(file) {
  return l.SDL_LoadBMP_RW(l.SDL_RWFromFile(file, "rb"), 1);
}
e.SDL_SaveBMP = function(surface, file) {
  return l.SDL_SaveBMP_RW(surface, l.SDL_RWFromFile(file, "wb"), 1);
}
e.SDL_BlitSurface = function(src, srcrect, dst, dstrect) {
  return l.SDL_UpperBlit(src, srcrect, dst, dstrect);
}
e.SDL_BlitScaled = function(src, srcrect, dst, dstrect) {
  return l.SDL_UpperBlitScaled(src, srcrect, dst, dstrect);
}

push_export({
  'SDL_CreateRGBSurface': [ref.refType(e.SDL_Surface), ['Uint32', 'int', 'int', 'int', 'Uint32', 'Uint32', 'Uint32', 'Uint32']],
  'SDL_CreateRGBSurfaceWithFormat': [ref.refType(e.SDL_Surface), ['Uint32', 'int', 'int', 'int', 'Uint32']],
  'SDL_CreateRGBSurfaceFrom': [ref.refType(e.SDL_Surface), ['void*', 'int', 'int', 'int', 'int', 'Uint32', 'Uint32', 'Uint32', 'Uint32']],
  'SDL_CreateRGBSurfaceWithFormatFrom': [ref.refType(e.SDL_Surface), ['void*', 'int', 'int', 'int', 'int', 'Uint32']],
  'SDL_FreeSurface': ['void', ['void*']],
  'SDL_SetSurfacePalette': ['int', ['void*', 'void*']],
  'SDL_LockSurface': ['int', ['void*']],
  'SDL_UnlockSurface': ['void', ['void*']],
  'SDL_LoadBMP_RW': [ref.refType(e.SDL_Surface), ['void*', 'int']],
  'SDL_SaveBMP_RW': ['int', ['void*', 'void*', 'int']],
  'SDL_SetSurfaceRLE': ['int', ['void*', 'int']],
  'SDL_HasSurfaceRLE': ['int', ['void*']],
  'SDL_SetColorKey': ['int', ['void*', 'int', 'Uint32']],
  'SDL_SetSurfaceRLE': ['int', ['void*', 'int']],
  'SDL_HasColorKey': ['int', ['void*']],
  'SDL_GetColorKey': ['int', ['void*', 'Uint32*']],
  'SDL_SetSurfaceColorMod': ['int', ['void*', 'Uint8', 'Uint8', 'Uint8']],
  'SDL_GetSurfaceColorMod': ['int', ['void*', 'Uint8*', 'Uint8*', 'Uint8*']],
  'SDL_SetSurfaceAlphaMod': ['int', ['void*', 'Uint8']],
  'SDL_GetSurfaceAlphaMod': ['int', ['void*', 'Uint8*']],
  'SDL_SetSurfaceBlendMode': ['int', ['void*', 'int']],
  'SDL_GetSurfaceBlendMode': ['int', ['void*', 'int*']],
  'SDL_SetClipRect': ['int', ['void*', 'void*']],
  'SDL_GetClipRect': ['void', ['void*', 'void*']],
  'SDL_DuplicateSurface': [ref.refType(e.SDL_Surface), ['void*']],
  'SDL_ConvertSurface': [ref.refType(e.SDL_Surface), ['void*', 'void*', 'Uint32']],
  'SDL_ConvertSurfaceFormat': [ref.refType(e.SDL_Surface), ['void*', 'Uint32', 'Uint32']],
  'SDL_ConvertPixels': ['int', ['int', 'int', 'Uint32', 'void*', 'int', 'Uint32', 'void*', 'int']],
  'SDL_PremultiplyAlpha': ['int', ['int', 'int', 'Uint32', 'void*', 'int', 'Uint32', 'void*', 'int']],
  'SDL_FillRect': ['int', ['void*', 'void*', 'Uint32']],
  'SDL_FillRects': ['int', ['void*', 'void*', 'int', 'Uint32']],
  'SDL_UpperBlit': ['int', ['void*', 'void*', 'void*', 'void*']],
  'SDL_LowerBlit': ['int', ['void*', 'void*', 'void*', 'void*']],
  'SDL_SoftStretch': ['int', ['void*', 'void*', 'void*', 'void*']],
  'SDL_SoftStretchLinear': ['int', ['void*', 'void*', 'void*', 'void*']],
  'SDL_UpperBlitScaled': ['int', ['void*', 'void*', 'void*', 'void*']],
  'SDL_LowerBlitScaled': ['int', ['void*', 'void*', 'void*', 'void*']],
  'SDL_SetYUVConversionMode': ['void', ['int']],
  'SDL_GetYUVConversionMode': ['int', []],
  'SDL_GetYUVConversionModeForResolution': ['int', ['int', 'int']]
});
