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

e.SDL_ENOMEM = en(0);
e.SDL_EFREAD = en();
e.SDL_EFWRITE = en();
e.SDL_EFSEEK = en();
e.SDL_UNSUPPORTED = en();
e.SDL_LASTERROR = en();

push_functions({
  'SDL_OutOfMemory': function() {
    return l.SDL_Error(e.SDL_ENOMEM);
  },
  'SDL_Unsupported': function() {
    return l.SDL_Error(e.SDL_UNSUPPORTED);
  },
  'SDL_InvalidParamError': function(param) {
    return l.SDL_SetError(`Parameter '${param}' is invalid`);
  }
});

push_export({
  'SDL_SetError': ['int', ['string']],
  'SDL_GetError': ['string', []],
  'SDL_GetErrorMsg': ['string', ['string', 'int']],
  'SDL_ClearError': ['void', []],
  'SDL_Error': ['int', ['int']]
});
