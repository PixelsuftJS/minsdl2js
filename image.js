const {
  e,
  ffi,
  ref,
  Struct,
  Union,
  from_hex,
  en,
  push_export
} = require('./api');

e.SDL_IMAGE_MAJOR_VERSION = 2;
e.SDL_IMAGE_MINOR_VERSION = 6;
e.SDL_IMAGE_PATCHLEVEL = 0;

e.SDL_IMAGE_VERSION = function(X) {
  X.major = e.SDL_IMAGE_MAJOR_VERSION;
  X.minor = e.SDL_IMAGE_MINOR_VERSION;
  X.patch = e.SDL_IMAGE_PATCHLEVEL;
  return X;
}

if (e.SDL_IMAGE_MAJOR_VERSION < 3 && e.SDL_MAJOR_VERSION) {
  e.SDL_IMAGE_COMPILEDVERSION = e.SDL_VERSIONNUM(e.SDL_IMAGE_MAJOR_VERSION, e.SDL_IMAGE_MINOR_VERSION, e.SDL_IMAGE_PATCHLEVEL);
}

e.SDL_IMAGE_VERSION_ATLEAST = function(X, Y, Z) {
  return ((e.SDL_IMAGE_MAJOR_VERSION >= X) &&
    (e.SDL_IMAGE_MAJOR_VERSION > X || e.SDL_IMAGE_MINOR_VERSION >= Y) &&
    (e.SDL_IMAGE_MAJOR_VERSION > X || e.SDL_IMAGE_MINOR_VERSION > Y || e.SDL_IMAGE_PATCHLEVEL >= Z));
}

e.IMG_INIT_JPG = en(0x00000001);
e.IMG_INIT_PNG = en(0x00000002);
e.IMG_INIT_TIF = en(0x00000004);
e.IMG_INIT_WEBP = en(0x00000008);
e.IMG_INIT_JXL = en(0x00000010);
e.IMG_INIT_AVIF = en(0x00000020);

e.IMG_Animation = Struct({
  w: 'int',
  h: 'int',
  count: 'int',
  frames: ref.refType(ref.refType(e.SDL_Surface)),
  delays: 'int*'
});

e.IMG_SetError = function(...data) {
  return e.SDL_SetError(...data);
}
e.IMG_GetError = function(...data) {
  return e.SDL_GetError(...data);
}

exports.library_exports = {
  'IMG_Linked_Version': [ref.refType(e.SDL_version), []],
  'IMG_Init': ['int', ['int']],
  'IMG_Quit': ['void', []],
  'IMG_LoadTyped_RW': [ref.refType(e.SDL_Surface), ['void*', 'int', 'string']],
  'IMG_Load': [ref.refType(e.SDL_Surface), ['string']],
  'IMG_Load_RW': [ref.refType(e.SDL_Surface), ['string', 'int']],
  'IMG_LoadTexture': [ref.refType(e.SDL_Surface), ['void*', 'string']],
  'IMG_LoadTexture_RW': [ref.refType(e.SDL_Surface), ['void*', 'string', 'int']],
  'IMG_LoadTextureTyped_RW': [ref.refType(e.SDL_Surface), ['void*', 'void*', 'int', 'string']],
  'IMG_isAVIF': ['int', ['void*']],
  'IMG_isICO': ['int', ['void*']],
  'IMG_isCUR': ['int', ['void*']],
  'IMG_isBMP': ['int', ['void*']],
  'IMG_isGIF': ['int', ['void*']],
  'IMG_isJPG': ['int', ['void*']],
  'IMG_isJXL': ['int', ['void*']],
  'IMG_isLBM': ['int', ['void*']],
  'IMG_isPCX': ['int', ['void*']],
  'IMG_isPNG': ['int', ['void*']],
  'IMG_isPNM': ['int', ['void*']],
  'IMG_isSVG': ['int', ['void*']],
  'IMG_isQOI': ['int', ['void*']],
  'IMG_isTIF': ['int', ['void*']],
  'IMG_isXCF': ['int', ['void*']],
  'IMG_isXPM': ['int', ['void*']],
  'IMG_isXV': ['int', ['void*']],
  'IMG_isWEBP': ['int', ['void*']],
  'IMG_LoadAVIF_RW': [ref.refType(e.SDL_Surface), ['void*']],
  'IMG_LoadICO_RW': [ref.refType(e.SDL_Surface), ['void*']],
  'IMG_LoadCUR_RW': [ref.refType(e.SDL_Surface), ['void*']],
  'IMG_LoadBMP_RW': [ref.refType(e.SDL_Surface), ['void*']],
  'IMG_LoadGIF_RW': [ref.refType(e.SDL_Surface), ['void*']],
  'IMG_LoadJPG_RW': [ref.refType(e.SDL_Surface), ['void*']],
  'IMG_LoadJXL_RW': [ref.refType(e.SDL_Surface), ['void*']],
  'IMG_LoadLBM_RW': [ref.refType(e.SDL_Surface), ['void*']],
  'IMG_LoadPCX_RW': [ref.refType(e.SDL_Surface), ['void*']],
  'IMG_LoadPNG_RW': [ref.refType(e.SDL_Surface), ['void*']],
  'IMG_LoadPNM_RW': [ref.refType(e.SDL_Surface), ['void*']],
  'IMG_LoadSVG_RW': [ref.refType(e.SDL_Surface), ['void*']],
  'IMG_LoadQOI_RW': [ref.refType(e.SDL_Surface), ['void*']],
  'IMG_LoadTGA_RW': [ref.refType(e.SDL_Surface), ['void*']],
  'IMG_LoadTIF_RW': [ref.refType(e.SDL_Surface), ['void*']],
  'IMG_LoadXCF_RW': [ref.refType(e.SDL_Surface), ['void*']],
  'IMG_LoadXPM_RW': [ref.refType(e.SDL_Surface), ['void*']],
  'IMG_LoadXV_RW': [ref.refType(e.SDL_Surface), ['void*']],
  'IMG_LoadWEBP_RW': [ref.refType(e.SDL_Surface), ['void*']],
  'IMG_LoadSizedSVG_RW': [ref.refType(e.SDL_Surface), ['void*', 'int', 'int']],
  'IMG_ReadXPMFromArray': [ref.refType(e.SDL_Surface), [ref.refType('string')]],
  'IMG_ReadXPMFromArrayToRGB888': [ref.refType(e.SDL_Surface), [ref.refType('string')]],
  'IMG_SavePNG': ['int', ['void*', 'string']],
  'IMG_SavePNG_RW': ['int', ['void*', 'void*', 'int']],
  'IMG_SaveJPG': ['int', ['void*', 'string', 'int']],
  'IMG_SaveJPG_RW': ['int', ['void*', 'void*', 'int', 'int']],
  'IMG_LoadAnimation': [ref.refType(e.IMG_Animation), ['string']],
  'IMG_LoadAnimation_RW': [ref.refType(e.IMG_Animation), ['void*', 'int']],
  'IMG_LoadAnimationTyped_RW': [ref.refType(e.IMG_Animation), ['void*', 'int', 'string']],
  'IMG_FreeAnimation': ['void*', ['void*']],
  'IMG_LoadGIFAnimation_RW': [ref.refType(e.IMG_Animation), ['void*']]
};
