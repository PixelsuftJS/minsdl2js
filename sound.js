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

e.SOUND_VER_MAJOR = 2;
e.SOUND_VER_MINOR = 0;
e.SOUND_VER_PATCH = 1;

e.SOUND_SAMPLEFLAG_NONE = en(0);
e.SOUND_SAMPLEFLAG_CANSEEK = en(1);
e.SOUND_SAMPLEFLAG_EOF = en(1 << 29);
e.SOUND_SAMPLEFLAG_ERROR = en(1 << 30);
e.SOUND_SAMPLEFLAG_EAGAIN = en(1 << 31);

e.Sound_AudioInfo = Struct({
  format: 'Uint8',
  channels: 'Uint16',
  rate: 'Uint32'
});
e.Sound_DecoderInfo = Struct({
  extensions: 'char**',
  description: 'string',
  author: 'string',
  url: 'string'
});
e.Sound_Sample = Struct({
  opaque: 'void*',
  decoder: ref.refType(e.Sound_DecoderInfo),
  desired: e.Sound_AudioInfo,
  actual: e.Sound_AudioInfo,
  buffer: 'void*',
  buffer_size: 'Uint32',
  flags: 'int'
});
e.Sound_Version = Struct({
  major: 'int',
  minor: 'int',
  patch: 'int'
});

e.SOUND_VERSION = function(X) {
  X.major = e.SOUND_VER_MAJOR;
  X.minor = e.SOUND_VER_MINOR;
  X.patch = e.SOUND_VER_PATCH;
  return X;
}

exports.library_exports = {
  'Sound_GetLinkedVersion': ['void', ['void*']],
  'Sound_Init': ['int', []],
  'Sound_Quit': ['int', []],
  'Sound_AvailableDecoders': [ref.refType(ref.refType(e.Sound_DecoderInfo)), []],
  'Sound_GetError': ['string', []],
  'Sound_ClearError': ['void', []],
  'Sound_NewSample': [ref.refType(e.Sound_Sample), ['void*', 'string', 'void*', 'Uint32']],
  'Sound_NewSampleFromMem': [ref.refType(e.Sound_Sample), ['Uint8*', 'Uint32', 'string', 'void*', 'Uint32']],
  'Sound_NewSampleFromFile': [ref.refType(e.Sound_Sample), ['string', 'void*', 'Uint32']],
  'Sound_FreeSample': ['void', ['void*']],
  'Sound_GetDuration': ['int32', ['void*']],
  'Sound_SetBufferSize': ['int', ['void*', 'Uint32']],
  'Sound_Decode': ['Uint32', ['void*']],
  'Sound_DecodeAll': ['Uint32', ['void*']],
  'Sound_Rewind': ['int', ['void*']],
  'Sound_GetDuration': ['int', ['void*', 'Uint32']]
};
