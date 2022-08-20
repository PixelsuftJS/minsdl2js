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

e.SDL_RTF_MAJOR_VERSION = e.RTF_MAJOR_VERSION = 2;
e.SDL_RTF_MINOR_VERSION = e.RTF_MINOR_VERSION = 20;
e.SDL_RTF_PATCHLEVEL = e.RTF_PATCHLEVEL = 1;

e.SDL_RTF_VERSION = e.RTF_VERSION = function(X) {
  X.major = e.SDL_RTF_MAJOR_VERSION;
  X.minor = e.SDL_RTF_MINOR_VERSION;
  X.patch = e.SDL_RTF_PATCHLEVEL;
  return X;
}

if (e.SDL_RTF_MAJOR_VERSION < 3 && e.SDL_MAJOR_VERSION) {
  e.SDL_RTF_COMPILEDVERSION = e.SDL_VERSIONNUM(e.SDL_RTF_MAJOR_VERSION, e.SDL_RTF_MINOR_VERSION, e.SDL_RTF_PATCHLEVEL);
}

e.SDL_RTF_VERSION_ATLEAST = function(X, Y, Z) {
  return ((e.SDL_RTF_MAJOR_VERSION >= X) &&
    (e.SDL_RTF_MAJOR_VERSION > X || e.SDL_RTF_MINOR_VERSION >= Y) &&
    (e.SDL_RTF_MAJOR_VERSION > X || e.SDL_RTF_MINOR_VERSION > Y || e.SDL_RTF_PATCHLEVEL >= Z));
}

e.RTF_FontDefault = en(0);
e.RTF_FontRoman = en();
e.RTF_FontSwiss = en();
e.RTF_FontModern = en();
e.RTF_FontScript = en();
e.RTF_FontDecor = en();
e.RTF_FontTech = en();
e.RTF_FontBidi = en();

e.RTF_FontNormal = en(0x00);
e.RTF_FontBold = en(0x01);
e.RTF_FontItalic = en(0x02);
e.RTF_FontUnderline = en(0x04);

e.RTF_FONT_ENGINE_VERSION = 1;

e.RTF_FontEngine = Struct({
  version: 'int',
  CreateFont: 'void*',
  GetLineSpacing: 'int*',
  GetCharacterOffsets: 'int*',
  RenderText: 'void**',
  FreeFont: 'void*'
});

e.RTF_SetError = function(...data) {
  return e.SDL_SetError(...data);
}
e.RTF_GetError = function(...data) {
  return e.SDL_GetError(...data);
}

exports.library_exports = {
  'RTF_Linked_Version': [ref.refType(e.SDL_version), []],
  'RTF_CreateContext': ['void*', ['void*', 'void*']],
  'RTF_Load': ['int', ['void*', 'string']],
  'RTF_Load_RW': ['int', ['void*', 'void*', 'int']],
  'RTF_GetTitle': ['string', ['void*']],
  'RTF_GetSubject': ['string', ['void*']],
  'RTF_GetAuthor': ['string', ['void*']],
  'RTF_GetHeight': ['int', ['void*', 'int']],
  'RTF_Render': ['void', ['void*', 'void*', 'int']],
  'RTF_FreeContext': ['void', ['void*']]
};
