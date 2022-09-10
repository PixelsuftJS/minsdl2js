const {
  e,
  en,
  Func,
  push_export
} = require('./api');

e.SDL_THREAD_PRIORITY_LOW = en(0);
e.SDL_THREAD_PRIORITY_NORMAL = en();
e.SDL_THREAD_PRIORITY_HIGH = en();
e.SDL_THREAD_PRIORITY_TIME_CRITICAL = en();

e.SDL_ThreadFunction = Func('int', ['void*']);

push_export({
  'SDL_CreateThread': ['void*', [e.SDL_ThreadFunction, 'string', 'void*', 'void*', 'void*']],
  'SDL_CreateThreadWithStackSize': [e.SDL_ThreadFunction, ['int*', 'string', 'size_t', 'void*', 'void*', 'void*']],
  'SDL_GetThreadName': ['string', ['void*']],
  'SDL_ThreadID': ['Ulong', []],
  'SDL_GetThreadID': ['Ulong', ['void*']],
  'SDL_SetThreadPriority': ['int', ['int']],
  'SDL_WaitThread': ['void', ['void*', 'int*']],
  'SDL_DetachThread': ['void', ['void*']],
  'SDL_TLSCreate': ['Uint', []],
  'SDL_TLSGet': ['void*', ['int']],
  'SDL_TLSSet': ['int', ['int', 'void*', Func('void', ['void*'])]],
  'SDL_TLSCleanup': ['void', []]
});
