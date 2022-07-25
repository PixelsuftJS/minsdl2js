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

push_export({
  'SDL_CreateThread': ['void*', ['int*', 'string', 'void*', 'void*', 'void*']],
  'SDL_CreateThreadWithStackSize': ['void*', ['int*', 'string', 'size_t', 'void*', 'void*', 'void*']],
  'SDL_GetThreadName': ['string', ['void*']],
  'SDL_ThreadID': ['Ulong', []],
  'SDL_GetThreadID': ['Ulong', ['void*']],
  'SDL_SetThreadPriority': ['int', ['int']],
  'SDL_WaitThread': ['void', ['void*', 'int*']],
  'SDL_DetachThread': ['void', ['void*']],
  'SDL_TLSCreate': ['Uint', []],
  'SDL_TLSGet': ['void*', ['int']],
  'SDL_TLSSet': ['int', ['int', 'void*', 'void*']],
  'SDL_TLSCleanup': ['void', []]
});
