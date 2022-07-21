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

e.SDL_MUTEX_TIMEDOUT = 1;
e.SDL_MUTEX_MAXWAIT = ~0;

push_functions({
  'SDL_mutexP': function(m) {
    return l.SDL_LockMutex(m);
  },
  'SDL_mutexV': function(m) {
    return l.SDL_UnlockMutex(m);
  }
});

push_export({
  'SDL_CreateMutex': ['void*', []],
  'SDL_LockMutex': ['int', ['void*']],
  'SDL_TryLockMutex': ['int', ['void*']],
  'SDL_UnlockMutex': ['int', ['void*']],
  'SDL_DestroyMutex': ['void', ['void*']],
  'SDL_CreateSemaphore': ['void*', ['Uint32']],
  'SDL_DestroySemaphore': ['void', ['void*']],
  'SDL_SemWait': ['int', ['void*']],
  'SDL_SemTryWait': ['int', ['void*']],
  'SDL_SemWaitTimeout': ['int', ['void*', 'Uint32']],
  'SDL_SemPost': ['int', ['void*']],
  'SDL_SemValue': ['Uint32', ['void*']],
  'SDL_CreateCond': ['void*', []],
  'SDL_DestroyCond': ['void', ['void*']],
  'SDL_CondSignal': ['int', ['void*']],
  'SDL_CondBroadcast': ['int', ['void*']],
  'SDL_CondWait': ['int', ['void*', 'void*']],
  'SDL_CondWaitTimeout': ['int', ['void*', 'void*', 'Uint32']],
});
