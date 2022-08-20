const {
  e,
  ref,
  Struct,
  push_export
} = require('./api');

e.SDL_RWOPS_UNKNOWN = 0;
e.SDL_RWOPS_WINFILE = 1;
e.SDL_RWOPS_STDFILE = 2;
e.SDL_RWOPS_JNIFILE = 3;
e.SDL_RWOPS_MEMORY = 4;
e.SDL_RWOPS_MEMORY_RO = 5;

e.RW_SEEK_SET = 0;
e.RW_SEEK_CUR = 1;
e.RW_SEEK_END = 2;

e.SDL_RWops = Struct({
  size: 'int64*',
  seek: 'int64*',
  read: 'size_t*',
  write: 'size_t*',
  close: 'int*',
  type: 'Uint32',
  hidden: 'void*' // TODO
});

push_export({
  'SDL_RWFromFile': [ref.refType(e.SDL_RWops), ['string', 'string']],
  'SDL_RWFromFP': [ref.refType(e.SDL_RWops), ['void*', 'int']],
  'SDL_RWFromMem': [ref.refType(e.SDL_RWops), ['void*', 'int']],
  'SDL_RWFromConstMem': [ref.refType(e.SDL_RWops), ['void*', 'int']],
  'SDL_RWFromConstMem': [ref.refType(e.SDL_RWops), ['void*', 'int']],
  'SDL_AllocRW': [ref.refType(e.SDL_RWops), []],
  'SDL_FreeRW': ['void', ['void*']],
  'SDL_RWsize': ['int64', ['void*']],
  'SDL_RWseek': ['int64', ['void*', 'int64', 'int']],
  'SDL_RWtell': ['int64', ['void*']],
  'SDL_RWread': ['size_t', ['void*', 'void*', 'size_t', 'size_t']],
  'SDL_RWwrite': ['size_t', ['void*', 'void*', 'size_t', 'size_t']],
  'SDL_RWclose': ['int', ['void*']],
  'SDL_LoadFile_RW': ['void*', ['void*', 'size_t*', 'int']],
  'SDL_LoadFile': ['void*', ['string', 'size_t*']],
  'SDL_ReadU8': ['Uint8*', ['void*']],
  'SDL_ReadLE16': ['Uint16*', ['void*']],
  'SDL_ReadBE16': ['Uint16*', ['void*']],
  'SDL_ReadLE32': ['Uint32*', ['void*']],
  'SDL_ReadBE32': ['Uint32*', ['void*']],
  'SDL_ReadLE64': ['Uint64*', ['void*']],
  'SDL_WriteBE64': ['Uint64*', ['void*']],
  'SDL_WriteU8': ['size_t', ['void*', 'Uint8']],
  'SDL_WriteLE16': ['size_t', ['void*', 'Uint16']],
  'SDL_WriteBE16': ['size_t', ['void*', 'Uint16']],
  'SDL_WriteLE32': ['size_t', ['void*', 'Uint32']],
  'SDL_WriteBE32': ['size_t', ['void*', 'Uint32']],
  'SDL_WriteLE64': ['size_t', ['void*', 'Uint64']],
  'SDL_WriteBE64': ['size_t', ['void*', 'Uint64']]
});
