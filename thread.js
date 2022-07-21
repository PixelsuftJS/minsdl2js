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

e.SDL_THREAD_PRIORITY_LOW = en(0);
e.SDL_THREAD_PRIORITY_NORMAL = en();
e.SDL_THREAD_PRIORITY_HIGH = en();
e.SDL_THREAD_PRIORITY_TIME_CRITICAL = en();

/* TODO: .....................*/
