const {
  e,
  l,
  Struct,
  push_export
} = require('./api');

e.SDL_atomic_t = Struct({
  value: 'int'
});

e.SDL_AtomicIncRef = function(a) {
  return l.SDL_AtomicAdd(a, 1);
}
e.SDL_AtomicDecRef = function(a) {
  return l.SDL_AtomicAdd(a, -1) == 1;
}
e.SDL_CompilerBarrier = function() {
  var tmp = 0;
  l.SDL_AtomicLock(tmp);
  return l.SDL_AtomicUnlock(tmp);
}
e.SDL_MemoryBarrierRelease = function() {
  return l.SDL_MemoryBarrierReleaseFunction();
}
e.SDL_MemoryBarrierAcquire = function() {
  return l.SDL_MemoryBarrierAcquireFunction();
}

push_export({
  'SDL_AtomicTryLock': ['int', ['int*']],
  'SDL_AtomicLock': ['void', ['int*']],
  'SDL_AtomicUnlock': ['void', ['int*']],
  'SDL_MemoryBarrierReleaseFunction': ['void', []],
  'SDL_MemoryBarrierAcquireFunction': ['void', []],
  'SDL_AtomicCAS': ['int', ['void*', 'int', 'int']],
  'SDL_AtomicSet': ['void', ['void*', 'int']],
  'SDL_AtomicGet': ['void', ['void*']],
  'SDL_AtomicAdd': ['void', ['void*', 'int']],
  'SDL_AtomicCASPtr': ['int', ['void**', 'void*', 'void*']],
  'SDL_AtomicSetPtr': ['void*', ['void**', 'void*']],
  'SDL_AtomicGetPtr': ['void*', ['void**']]
});
