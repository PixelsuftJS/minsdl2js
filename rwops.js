const {
  e,
  ref,
  defines,
  Func,
  Struct,
  Union,
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

var hidden = {};
if (defines['__ANDROID__']) {
  hidden['androidio'] = Struct({
    asset: 'void*'
  });
}
else if (defines['__WIN32__'] || defines['__GDK__']) {
  hidden['windowsio'] = Struct({
    append: 'int',
    h: 'void*',
    buffer: Struct({
      data: 'void*',
      size: 'size_t',
      left: 'size_t'
    })
  });
}
if (defines['HAVE_STDIO_H']) {
  hidden['stdio'] = Struct({
    autoclose: 'int',
    fp: ref.refType(e.FILE)
  });
}
hidden['mem'] = Struct({
  base: 'Uint8*',
  here: 'Uint8*',
  stop: 'Uint8*'
});
hidden['unknown'] = Struct({
  data1: 'void*',
  data2: 'void*'
});

e.SDL_RWops = Struct({
  size: Func('int64', ['void*']),
  seek: Func('int64', ['void*', 'int64', 'int']),
  read: Func('size_t', ['void*', 'void*', 'size_t', 'size_t']),
  write: Func('size_t', ['void*', 'void*', 'size_t', 'size_t']),
  close: Func('int', ['void*']),
  type: 'Uint32',
  hidden: Union(hidden)
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
