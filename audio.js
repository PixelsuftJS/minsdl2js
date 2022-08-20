const {
  e,
  l,
  ffi,
  ref,
  Struct,
  Union,
  ArrayType,
  from_hex,
  en,
  push_export
} = require('./api');

e.SDL_AUDIO_MASK_BITSIZE = 0xFF;
e.SDL_AUDIO_MASK_DATATYPE = 1 << 8;
e.SDL_AUDIO_MASK_ENDIAN = 1 << 12;
e.SDL_AUDIO_MASK_SIGNED = 1 << 15;
e.SDL_AUDIO_BITSIZE = function(x) {
  return x & e.SDL_AUDIO_MASK_BITSIZE;
}
e.SDL_AUDIO_ISFLOAT = function(x) {
  return x & e.SDL_AUDIO_MASK_DATATYPE;
}
e.SDL_AUDIO_ISBIGENDIAN = function(x) {
  return x & e.SDL_AUDIO_MASK_ENDIAN;
}
e.SDL_AUDIO_ISSIGNED = function(x) {
  return x & e.SDL_AUDIO_MASK_SIGNED;
}
e.SDL_AUDIO_ISINT = function(x) {
  return !e.SDL_AUDIO_ISFLOAT(x);
}
e.SDL_AUDIO_ISLITTLEENDIAN = function(x) {
  return !e.SDL_AUDIO_ISBIGENDIAN(x);
}
e.SDL_AUDIO_ISUNSIGNED = function(x) {
  return !e.SDL_AUDIO_ISSIGNED(x);
}
e.AUDIO_U8 = 0x0008;
e.AUDIO_S8 = 0x8008;
e.AUDIO_U16LSB = 0x0010;
e.AUDIO_S16LSB = 0x8010;
e.AUDIO_U16MSB = 0x1010;
e.AUDIO_S16MSB = 0x9010;
e.AUDIO_U16 = e.AUDIO_U16LSB;
e.AUDIO_S16 = e.AUDIO_S16LSB;
e.AUDIO_S32LSB = 0x8020;
e.AUDIO_S32MSB = 0x9020;
e.AUDIO_S32 = e.AUDIO_S32LSB;
e.AUDIO_F32LSB = 0x8120;
e.AUDIO_F32MSB = 0x9120;
if (e.SDL_BYTEORDER == e.SDL_LIL_ENDIAN) {
  e.AUDIO_U16SYS = e.AUDIO_U16LSB;
  e.AUDIO_S16SYS = e.AUDIO_S16LSB;
  e.AUDIO_S32SYS = e.AUDIO_S32LSB;
  e.AUDIO_F32SYS = e.AUDIO_F32LSB;
} else {
  e.AUDIO_U16SYS = e.AUDIO_U16MSB;
  e.AUDIO_S16SYS = e.AUDIO_S16MSB;
  e.AUDIO_S32SYS = e.AUDIO_S32MSB;
  e.AUDIO_F32SYS = e.AUDIO_F32MSB;
}
e.SDL_AUDIO_ALLOW_FREQUENCY_CHANGE = 0x00000001;
e.SDL_AUDIO_ALLOW_FORMAT_CHANGE = 0x00000002;
e.SDL_AUDIO_ALLOW_CHANNELS_CHANGE = 0x00000004;
e.SDL_AUDIO_ALLOW_SAMPLES_CHANGE = 0x00000008;
e.SDL_AUDIO_ALLOW_ANY_CHANGE = e.SDL_AUDIO_ALLOW_FREQUENCY_CHANGE | e.SDL_AUDIO_ALLOW_FORMAT_CHANGE | e.SDL_AUDIO_ALLOW_CHANNELS_CHANGE | e.SDL_AUDIO_ALLOW_SAMPLES_CHANGE;

e.SDL_AUDIOCVT_MAX_FILTERS = 9;

e.SDL_MIX_MAXVOLUME = 128;

e.SDL_AudioSpec = Struct({
  freq: 'int',
  format: 'Uint16',
  channels: 'Uint8',
  silence: 'Uint8',
  samples: 'Uint16',
  padding: 'Uint16',
  size: 'Uint32',
  callback: 'void*',
  userdata: 'void*'
});
e.SDL_AudioCVT = Struct({
  needed: 'int',
  src_format: 'Uint16',
  dst_format: 'Uint16',
  rate_incr: 'double',
  buf: 'Uint8*',
  len: 'int',
  len_cvt: 'int',
  len_mult: 'int',
  len_ratio: 'double',
  filters: ArrayType('void*', SDL_AUDIOCVT_MAX_FILTERS + 1),
  filter_index: 'int'
});

e.SDL_AUDIO_STOPPED = en(0);
e.SDL_AUDIO_PLAYING = en();
e.SDL_AUDIO_PAUSED = en();

e.SDL_LoadWAV = function(file, spec, audio_buf, audio_len) {
  return l.SDL_LoadWAV_RW(l.SDL_RWFromFile(file, "rb"), 1, spec, audio_buf, audio_len);
}

push_export({
  'SDL_GetNumAudioDrivers': ['int', []],
  'SDL_GetAudioDriver': ['string', ['int']],
  'SDL_AudioInit': ['int', ['string']],
  'SDL_AudioQuit': ['void', []],
  'SDL_GetCurrentAudioDriver': ['string', []],
  'SDL_OpenAudio': ['int', ['void*', 'void*']],
  'SDL_GetNumAudioDevices': ['int', ['int']],
  'SDL_GetAudioDeviceName': ['string', ['int', 'int']],
  'SDL_GetAudioDeviceSpec': ['int', ['int', 'int', 'void*']],
  'SDL_GetDefaultAudioInfo': ['int', ['char**', 'void*', 'int']],
  'SDL_OpenAudioDevice': ['Uint32', ['string', 'int', 'void*', 'void*', 'int']],
  'SDL_GetAudioStatus': ['int', []],
  'SDL_GetAudioDeviceStatus': ['int', ['Uint32']],
  'SDL_PauseAudio': ['void', ['int']],
  'SDL_PauseAudioDevice': ['void', ['Uint32', 'int']],
  'SDL_LoadWAV_RW': [ref.refType(e.SDL_AudioSpec), ['void*', 'int', 'void*', 'Uint8**', 'Uint32*']],
  'SDL_FreeWAV': ['void', ['Uint8*']],
  'SDL_BuildAudioCVT': ['int', ['void*', 'Uint16', 'Uint8', 'int', 'Uint16', 'Uint8', 'int']],
  'SDL_ConvertAudio': ['int', ['void*']],
  'SDL_NewAudioStream': ['void*', ['Uint16', 'Uint8', 'int', 'Uint16', 'Uint8', 'int']],
  'SDL_AudioStreamPut': ['int', ['void*', 'void*', 'int']],
  'SDL_AudioStreamGet': ['int', ['void*', 'void*', 'int']],
  'SDL_AudioStreamAvailable': ['int', ['void*']],
  'SDL_AudioStreamFlush': ['int', ['void*']],
  'SDL_AudioStreamClear': ['void', ['void*']],
  'SDL_FreeAudioStream': ['void', ['void*']],
  'SDL_MixAudio': ['void', ['Uint8*', 'Uint8', 'Uint32', 'int']],
  'SDL_MixAudioFormat': ['void', ['Uint8*', 'Uint8', 'Uint16', 'Uint32', 'int']],
  'SDL_QueueAudio': ['int', ['Uint32', 'void*', 'Uint32']],
  'SDL_DequeueAudio': ['Uint32', ['Uint32', 'void*', 'Uint32']],
  'SDL_GetQueuedAudioSize': ['Uint32', ['Uint32']],
  'SDL_ClearQueuedAudio': ['void', ['Uint32']],
  'SDL_LockAudio': ['void', []],
  'SDL_LockAudioDevice': ['void', ['Uint32']],
  'SDL_UnlockAudio': ['void', []],
  'SDL_UnlockAudioDevice': ['void', ['Uint32']],
  'SDL_CloseAudio': ['void', []],
  'SDL_CloseAudioDevice': ['void', ['Uint32']]
});
