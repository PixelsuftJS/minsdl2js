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

e.SDL_TTF_MAJOR_VERSION = e.TTF_MAJOR_VERSION = 2;
e.SDL_TTF_MINOR_VERSION = e.TTF_MINOR_VERSION = 20;
e.SDL_TTF_PATCHLEVEL = e.TTF_PATCHLEVEL = 0;

e.SDL_TTF_VERSION = e.TTF_VERSION = function(X) {
  X.major = e.SDL_TTF_MAJOR_VERSION;
  X.minor = e.SDL_TTF_MINOR_VERSION;
  X.patch = e.SDL_TTF_PATCHLEVEL;
  return X;
}

if (e.SDL_TTF_MAJOR_VERSION < 3 && e.SDL_MAJOR_VERSION) {
  e.SDL_TTF_COMPILEDVERSION = function() {
    return e.SDL_VERSIONNUM(e.SDL_TTF_MAJOR_VERSION, e.SDL_TTF_MINOR_VERSION, e.SDL_TTF_PATCHLEVEL);
  }
}

e.SDL_TTF_VERSION_ATLEAST = function(X, Y, Z) {
  return ((e.SDL_TTF_MAJOR_VERSION >= X) &&
    (e.SDL_TTF_MAJOR_VERSION > X || e.SDL_TTF_MINOR_VERSION >= Y) &&
    (e.SDL_TTF_MAJOR_VERSION > X || e.SDL_TTF_MINOR_VERSION > Y || e.SDL_TTF_PATCHLEVEL >= Z));
}

e.TTF_DIRECTION_LTR = en(0);
e.TTF_DIRECTION_RTL = en();
e.TTF_DIRECTION_TTB = en();
e.TTF_DIRECTION_BTT = en();

e.UNICODE_BOM_NATIVE = 0xFEFF;
e.UNICODE_BOM_NATIVE = 0xFFFE;

e.TTF_STYLE_NORMAL = 0x00;
e.TTF_STYLE_BOLD = 0x01;
e.TTF_STYLE_ITALIC = 0x02;
e.TTF_STYLE_UNDERLINE = 0x04;
e.TTF_STYLE_STRIKETHROUGH = 0x08;

e.TTF_HINTING_NORMAL = 0;
e.TTF_HINTING_LIGHT = 1;
e.TTF_HINTING_MONO = 2;
e.TTF_HINTING_NONE = 3;
e.TTF_HINTING_LIGHT_SUBPIXEL = 4;

e.TTF_WRAPPED_ALIGN_LEFT = 0;
e.TTF_WRAPPED_ALIGN_CENTER = 1;
e.TTF_WRAPPED_ALIGN_RIGHT = 2;

e.TTF_SetError = function(...data) {
  return e.SDL_SetError(...data);
}
e.TTF_GetError = function(...data) {
  return e.SDL_GetError(...data);
}

e.TTF_RenderText = function(font, text, fg, bg) {
  return l.TTF_RenderText_Shaded(font, text, fg, bg);
}
e.TTF_RenderUTF8 = function(font, text, fg, bg) {
  return l.TTF_RenderUTF8_Shaded(font, text, fg, bg);
}
e.TTF_RenderUNICODE = function(font, text, fg, bg) {
  return l.TTF_RenderUNICODE_Shaded(font, text, fg, bg);
}

exports.library_exports = {
  'TTF_Linked_Version': [ref.refType(e.SDL_version), []],
  'TTF_GetFreeTypeVersion': ['void', ['int*', 'int*', 'int*']],
  'TTF_GetHarfBuzzVersion': ['void', ['int*', 'int*', 'int*']],
  'TTF_ByteSwappedUNICODE': ['void', ['int']],
  'TTF_Init': ['int', []],
  'TTF_OpenFont': ['void*', ['string', 'int']],
  'TTF_OpenFontIndex': ['void*', ['string', 'int', 'long']],
  'TTF_OpenFontRW': ['void*', ['void*', 'int', 'int']],
  'TTF_OpenFontIndexRW': ['void*', ['void*', 'int', 'int', 'int']],
  'TTF_OpenFontDPI': ['void*', ['string', 'int', 'Uint', 'Uint']],
  'TTF_OpenFontIndexDPI': ['void*', ['string', 'int', 'long', 'Uint', 'Uint']],
  'TTF_OpenFontDPIRW': ['void*', ['void*', 'int', 'int', 'Uint']],
  'TTF_OpenFontDPIRW': ['void*', ['void*', 'int', 'int', 'Uint', 'Uint']],
  'TTF_OpenFontIndexDPIRW': ['void*', ['void*', 'int', 'int', 'long', 'Uint', 'Uint']],
  'TTF_SetFontSize': ['int', ['void*', 'int']],
  'TTF_SetFontSizeDPI': ['int', ['void*', 'int', 'Uint', 'Uint']],
  'TTF_GetFontStyle': ['int', ['void*']],
  'TTF_SetFontStyle': ['void', ['void*', 'int']],
  'TTF_GetFontOutline': ['int', ['void*']],
  'TTF_SetFontOutline': ['void', ['void*', 'int']],
  'TTF_GetFontHinting': ['int', ['void*']],
  'TTF_SetFontHinting': ['void', ['void*', 'int']],
  'TTF_GetFontWrappedAlign': ['int', ['void*']],
  'TTF_SetFontWrappedAlign': ['void', ['void*', 'int']],
  'TTF_FontHeight': ['int', ['void*']],
  'TTF_FontAscent': ['int', ['void*']],
  'TTF_FontDescent': ['int', ['void*']],
  'TTF_FontLineSkip': ['int', ['void*']],
  'TTF_GetFontKerning': ['int', ['void*']],
  'TTF_SetFontKerning': ['void', ['void*', 'int']],
  'TTF_FontFaces': ['long', ['void*']],
  'TTF_FontFaceIsFixedWidth': ['int', ['void*']],
  'TTF_FontFaceFamilyName': ['string', ['void*']],
  'TTF_FontFaceStyleName': ['string', ['void*']],
  'TTF_GlyphIsProvided': ['int', ['void*', 'Uint16']],
  'TTF_GlyphIsProvided32': ['int', ['void*', 'Uint32']],
  'TTF_GlyphMetrics': ['int', ['void*', 'Uint16', 'int*', 'int*', 'int*', 'int*', 'int*']],
  'TTF_GlyphMetrics32': ['int', ['void*', 'Uint32', 'int*', 'int*', 'int*', 'int*', 'int*']],
  'TTF_SizeText': ['int', ['void*', 'string', 'int*', 'int*']],
  'TTF_SizeUTF8': ['int', ['void*', 'string', 'int*', 'int*']],
  'TTF_SizeUNICODE': ['int', ['void*', 'Uint16*', 'int*', 'int*']],
  'TTF_MeasureText': ['int', ['void*', 'string', 'int', 'int*', 'int*']],
  'TTF_MeasureUTF8': ['int', ['void*', 'string', 'int', 'int*', 'int*']],
  'TTF_MeasureUNICODE': ['int', ['void*', 'Uint16*', 'int', 'int*', 'int*']],
  'TTF_FontHeight': ['int', ['void*']],
  'TTF_RenderText_Solid': [ref.refType(e.SDL_Surface), ['void*', 'string', e.SDL_Color]],
  'TTF_RenderUTF8_Solid': [ref.refType(e.SDL_Surface), ['void*', 'string', e.SDL_Color]],
  'TTF_RenderUNICODE_Solid': [ref.refType(e.SDL_Surface), ['void*', 'Uint16*', e.SDL_Color]],
  'TTF_RenderText_Solid_Wrapped': [ref.refType(e.SDL_Surface), ['void*', 'string', e.SDL_Color, 'Uint32']],
  'TTF_RenderUTF8_Solid_Wrapped': [ref.refType(e.SDL_Surface), ['void*', 'string', e.SDL_Color, 'Uint32']],
  'TTF_RenderUNICODE_Solid_Wrapped': [ref.refType(e.SDL_Surface), ['void*', 'Uint16*', e.SDL_Color, 'Uint32']],
  'TTF_RenderGlyph_Solid': [ref.refType(e.SDL_Surface), ['void*', 'Uint16', e.SDL_Color]],
  'TTF_RenderGlyph32_Solid': [ref.refType(e.SDL_Surface), ['void*', 'Uint32', e.SDL_Color]],
  'TTF_RenderText_Shaded': [ref.refType(e.SDL_Surface), ['void*', 'string', e.SDL_Color, e.SDL_Color]],
  'TTF_RenderUTF8_Shaded': [ref.refType(e.SDL_Surface), ['void*', 'string', e.SDL_Color, e.SDL_Color]],
  'TTF_RenderUNICODE_Shaded': [ref.refType(e.SDL_Surface), ['void*', 'Uint16*', e.SDL_Color, e.SDL_Color]],
  'TTF_RenderText_Shaded_Wrapped': [ref.refType(e.SDL_Surface), ['void*', 'string', e.SDL_Color, 'Uint32', e.SDL_Color]],
  'TTF_RenderUTF8_Shaded_Wrapped': [ref.refType(e.SDL_Surface), ['void*', 'string', e.SDL_Color, 'Uint32', e.SDL_Color]],
  'TTF_RenderUNICODE_Shaded_Wrapped': [ref.refType(e.SDL_Surface), ['void*', 'Uint16*', e.SDL_Color, 'Uint32', e.SDL_Color]],
  'TTF_RenderGlyph_Shaded': [ref.refType(e.SDL_Surface), ['void*', 'Uint16', e.SDL_Color, e.SDL_Color]],
  'TTF_RenderGlyph32_Shaded': [ref.refType(e.SDL_Surface), ['void*', 'Uint32', e.SDL_Color, e.SDL_Color]],
  'TTF_RenderText_Blended': [ref.refType(e.SDL_Surface), ['void*', 'string', e.SDL_Color]],
  'TTF_RenderUTF8_Blended': [ref.refType(e.SDL_Surface), ['void*', 'string', e.SDL_Color]],
  'TTF_RenderUNICODE_Blended': [ref.refType(e.SDL_Surface), ['void*', 'Uint16*', e.SDL_Color]],
  'TTF_RenderText_Blended_Wrapped': [ref.refType(e.SDL_Surface), ['void*', 'string', e.SDL_Color, 'Uint32']],
  'TTF_RenderUTF8_Blended_Wrapped': [ref.refType(e.SDL_Surface), ['void*', 'string', e.SDL_Color, 'Uint32']],
  'TTF_RenderUNICODE_Blended_Wrapped': [ref.refType(e.SDL_Surface), ['void*', 'Uint16*', e.SDL_Color, 'Uint32']],
  'TTF_RenderGlyph_Blended': [ref.refType(e.SDL_Surface), ['void*', 'Uint16', e.SDL_Color]],
  'TTF_RenderGlyph32_Blended': [ref.refType(e.SDL_Surface), ['void*', 'Uint32', e.SDL_Color]],
  'TTF_RenderText_LCD': [ref.refType(e.SDL_Surface), ['void*', 'string', e.SDL_Color, e.SDL_Color]],
  'TTF_RenderUTF8_LCD': [ref.refType(e.SDL_Surface), ['void*', 'string', e.SDL_Color, e.SDL_Color]],
  'TTF_RenderUNICODE_LCD': [ref.refType(e.SDL_Surface), ['void*', 'Uint16*', e.SDL_Color, e.SDL_Color]],
  'TTF_RenderText_LCD_Wrapped': [ref.refType(e.SDL_Surface), ['void*', 'string', e.SDL_Color, 'Uint32', e.SDL_Color]],
  'TTF_RenderUTF8_LCD_Wrapped': [ref.refType(e.SDL_Surface), ['void*', 'string', e.SDL_Color, 'Uint32', e.SDL_Color]],
  'TTF_RenderUNICODE_LCD_Wrapped': [ref.refType(e.SDL_Surface), ['void*', 'Uint16*', e.SDL_Color, 'Uint32', e.SDL_Color]],
  'TTF_RenderGlyph_LCD': [ref.refType(e.SDL_Surface), ['void*', 'Uint16', e.SDL_Color, e.SDL_Color]],
  'TTF_RenderGlyph32_LCD': [ref.refType(e.SDL_Surface), ['void*', 'Uint32', e.SDL_Color, e.SDL_Color]],
  'TTF_CloseFont': ['void', ['void*']],
  'TTF_Quit': ['void', []],
  'TTF_WasInit': ['int', []],
  'TTF_WasInit': ['int', []],
  // 'TTF_GetFontKerningSize': ['int', ['void*', 'int', 'int']],
  'TTF_GetFontKerningSizeGlyphs': ['int', ['void*', 'Uint16', 'Uint16']],
  'TTF_GetFontKerningSizeGlyphs32': ['int', ['void*', 'Uint32', 'Uint32']],
  'TTF_SetFontSDF': ['int', ['void*', 'int']],
  'TTF_GetFontSDF': ['int', ['void*']],
  // 'TTF_SetDirection': ['int', ['int']],
  // 'TTF_SetScript': ['int', ['int']],
  'TTF_SetFontDirection': ['int', ['void*', 'int']],
  'TTF_SetFontScriptName': ['int', ['void*', 'string']]
};
