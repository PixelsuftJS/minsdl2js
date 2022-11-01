const {
  e,
  Struct,
  push_export
} = require('./api');

e.SDL_version = Struct({
  major: 'Uint8',
  minor: 'Uint8',
  patch: 'Uint8'
});

e.SDL_MAJOR_VERSION = 2;
e.SDL_MINOR_VERSION = 24;
e.SDL_PATCHLEVEL = 2;

e.SDL_VERSION = function(x) {
  x.major = e.SDL_MAJOR_VERSION;
  x.minor = e.SDL_MINOR_VERSION;
  x.patch = e.SDL_PATCHLEVEL;
  return x;
}
e.SDL_VERSIONNUM = function(X, Y, Z) {
  return X * 1000 + Y * 100 + Z;
}
e.SDL_COMPILEDVERSION = e.SDL_VERSIONNUM(e.SDL_MAJOR_VERSION, e.SDL_MINOR_VERSION, e.SDL_PATCHLEVEL);
e.SDL_VERSION_ATLEAST = function(X, Y, Z) {
  return ((e.SDL_MAJOR_VERSION >= X) &&
    (e.SDL_MAJOR_VERSION > X || e.SDL_MINOR_VERSION >= Y) &&
    (e.SDL_MAJOR_VERSION > X || e.SDL_MINOR_VERSION > Y || e.SDL_PATCHLEVEL >= Z));
}

push_export({
  'SDL_GetVersion': ['void', ['void*']],
  'SDL_GetRevision': ['string', []],
  // 'SDL_GetRevisionNumber': ['int', []]
});
