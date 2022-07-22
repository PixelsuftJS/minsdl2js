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

e.SDL_MIXER_MAJOR_VERSION = e.MIX_MAJOR_VERSION = 2;
e.SDL_MIXER_MINOR_VERSION = e.MIX_MINOR_VERSION = 6;
e.SDL_MIXER_PATCHLEVEL = e.MIX_PATCHLEVEL = 1;

e.SDL_MIXER_VERSION = e.MIX_VERSION = function(X) {
  X.major = e.SDL_MIXER_MAJOR_VERSION;
  X.minor = e.SDL_MIXER_MINOR_VERSION;
  X.patch = e.SDL_MIXER_PATCHLEVEL;
  return X;
}

if (e.SDL_MIXER_MAJOR_VERSION < 3 && e.SDL_MAJOR_VERSION) {
  e.SDL_MIXER_COMPILEDVERSION = e.SDL_VERSIONNUM(e.SDL_MIXER_MAJOR_VERSION, e.SDL_MIXER_MINOR_VERSION, e.SDL_MIXER_PATCHLEVEL);
}

e.SDL_MIXER_VERSION_ATLEAST = function(X, Y, Z) {
  return ((e.SDL_MIXER_MAJOR_VERSION >= X) &&
    (e.SDL_MIXER_MAJOR_VERSION > X || e.SDL_MIXER_MINOR_VERSION >= Y) &&
    (e.SDL_MIXER_MAJOR_VERSION > X || e.SDL_MIXER_MINOR_VERSION > Y || e.SDL_MIXER_PATCHLEVEL >= Z));
}

e.MIX_INIT_FLAC = en(0x00000001);
e.MIX_INIT_MOD = en(0x00000002);
e.MIX_INIT_MP3 = en(0x00000008);
e.MIX_INIT_OGG = en(0x00000010);
e.MIX_INIT_MID = en(0x00000020);
e.MIX_INIT_OPUS = en(0x00000040);

e.MIX_CHANNELS = 8;
e.MIX_DEFAULT_CHANNELS = 2;

e.MIX_DEFAULT_FREQUENCY = 44100;
if (e.SDL_BYTEORDER = e.SDL_LIL_ENDIAN) {
  e.MIX_DEFAULT_FORMAT = e.AUDIO_S16LSB;
} else {
  e.MIX_DEFAULT_FORMAT = e.AUDIO_S16MSB;
}

e.Mix_Chunk = Struct({
  allocated: 'int',
  abuf: 'Uint8*',
  alen: 'Uint32',
  volume: 'Uint8'
});

e.MIX_NO_FADING = en(0);
e.MIX_FADING_OUT = en();
e.MIX_FADING_IN = en();

e.MUS_NONE = en(0);
e.MUS_CMD = en();
e.MUS_WAV = en();
e.MUS_MOD = en();
e.MUS_MID = en();
e.MUS_OGG = en();
e.MUS_MP3 = en();
e.MUS_MP3_MAD_UNUSED = en();
e.MUS_FLAC = en();
e.MUS_MODPLUG_UNUSED = en();
e.MUS_OPUS = en();

e.Mix_SetError = function(...data) {
  return e.SDL_SetError(...data);
}
e.Mix_GetError = function(...data) {
  return e.SDL_GetError(...data);
}
e.Mix_ClearError = function(...data) {
  return e.SDL_ClearError(...data);
}
e.Mix_OutOfMemory = function(...data) {
  return e.SDL_OutOfMemory(...data);
}

e.MIX_CHANNEL_POST = -2;
e.MIX_EFFECTSMAXSPEED = "MIX_EFFECTSMAXSPEED";

exports.library_exports = {
  'Mix_Linked_Version': [ref.refType(e.SDL_version), []],
  'Mix_Init': ['int', ['int']],
  'Mix_Quit': ['void', []],
  'Mix_OpenAudio': ['int', ['int', 'Uint16', 'int', 'int']],
  'Mix_OpenAudioDevice': ['int', ['int', 'Uint16', 'int', 'int', 'string', 'int']],
  'Mix_QuerySpec': ['int', ['int*', 'Uint16*', 'int*']],
  'Mix_AllocateChannels': ['int', ['int']],
  'Mix_LoadWAV_RW': [ref.refType(e.Mix_Chunk), ['void*', 'int']],
  'Mix_LoadWAV': [ref.refType(e.Mix_Chunk), ['string']],
  'Mix_LoadMUS': ['void*', ['string']],
  'Mix_LoadMUS_RW': ['void*', ['string', 'int']],
  'Mix_LoadMUSType_RW': ['void*', ['void*', 'int', 'int']],
  'Mix_QuickLoad_WAV': [ref.refType(e.Mix_Chunk), ['Uint8*']],
  'Mix_QuickLoad_RAW': [ref.refType(e.Mix_Chunk), ['Uint8*', 'Uint32']],
  'Mix_FreeChunk': ['void', ['void*']],
  'Mix_FreeMusic': ['void', ['void*']],
  'Mix_GetNumChunkDecoders': ['int', []],
  'Mix_GetChunkDecoder': ['string', ['int']],
  'Mix_HasChunkDecoder': ['int', ['string']],
  'Mix_GetNumMusicDecoders': ['int', []],
  'Mix_GetMusicDecoder': ['string', ['int']],
  'Mix_HasMusicDecoder': ['int', ['string']],
  'Mix_GetMusicType': ['int', ['void*']],
  'Mix_GetMusicTitle': ['string', ['void*']],
  'Mix_GetMusicTitleTag': ['string', ['void*']],
  'Mix_GetMusicArtistTag': ['string', ['void*']],
  'Mix_GetMusicAlbumTag': ['string', ['void*']],
  'Mix_GetMusicCopyrightTag': ['string', ['void*']],
  'Mix_SetPostMix': ['void', ['void*', 'void*']],
  'Mix_HookMusic': ['void', ['void*', 'void*']],
  'Mix_HookMusicFinished': ['void', ['void*']],
  'Mix_GetMusicHookData': ['void*', []],
  'Mix_ChannelFinished': ['void', ['void*']],
  'Mix_RegisterEffect': ['int', ['int', 'void*', 'void*', 'void*']],
  'Mix_UnregisterEffect': ['int', ['int', 'void*']],
  'Mix_UnregisterAllEffects': ['int', ['int']],
  'Mix_SetPanning': ['int', ['int', 'Uint8', 'Uint8']],
  'Mix_SetPosition': ['int', ['int', 'int16', 'Uint8']],
  'Mix_SetDistance': ['int', ['int', 'Uint8']],
  'Mix_SetReverseStereo': ['int', ['int', 'int']],
  'Mix_ReserveChannels': ['int', ['int']],
  'Mix_GroupChannel': ['int', ['int', 'int']],
  'Mix_GroupChannels': ['int', ['int', 'int', 'int']],
  'Mix_GroupAvailable': ['int', ['int']],
  'Mix_GroupCount': ['int', ['int']],
  'Mix_GroupOldest': ['int', ['int']],
  'Mix_GroupNewer': ['int', ['int']],
  'Mix_PlayChannel': ['int', ['int', 'void*', 'int']],
  'Mix_PlayChannelTimed': ['int', ['int', 'void*', 'int', 'int']],
  'Mix_PlayMusic': ['int', ['void*', 'int']],
  'Mix_FadeInMusic': ['int', ['void*', 'int', 'int']],
  'Mix_FadeInMusicPos': ['int', ['void*', 'int', 'int', 'double']],
  'Mix_FadeInChannel': ['int', ['int', 'void*', 'int', 'int']],
  'Mix_FadeInChannelTimed': ['int', ['int', 'void*', 'int', 'int', 'int']],
  'Mix_Volume': ['int', ['int', 'int']],
  'Mix_VolumeChunk': ['int', ['void*', 'int']],
  'Mix_VolumeMusic': ['int', ['int', 'int']],
  'Mix_GetMusicVolume': ['int', ['void*']],
  'Mix_MasterVolume': ['int', ['int']],
  'Mix_HaltChannel': ['int', ['int']],
  'Mix_HaltGroup': ['int', ['int']],
  'Mix_HaltMusic': ['int', []],
  'Mix_ExpireChannel': ['int', ['int', 'int']],
  'Mix_FadeOutChannel': ['int', ['int', 'int']],
  'Mix_FadeOutGroup': ['int', ['int', 'int']],
  'Mix_FadeOutMusic': ['int', ['int']],
  'Mix_FadingMusic': ['int', []],
  'Mix_FadingChannel': ['int', ['int']],
  'Mix_Pause': ['void', ['int']],
  'Mix_Resume': ['void', ['int']],
  'Mix_Paused': ['int', ['int']],
  'Mix_PauseMusic': ['void', []],
  'Mix_ResumeMusic': ['void', []],
  'Mix_RewindMusic': ['void', []],
  'Mix_PausedMusic': ['int', []],
  'Mix_ModMusicJumpToOrder': ['int', ['int']],
  'Mix_SetMusicPosition': ['int', ['double']],
  'Mix_GetMusicPosition': ['double', ['void*']],
  'Mix_MusicDuration': ['double', ['void*']],
  'Mix_GetMusicLoopStartTime': ['double', ['void*']],
  'Mix_GetMusicLoopEndTime': ['double', ['void*']],
  'Mix_GetMusicLoopLengthTime': ['double', ['void*']],
  'Mix_Playing': ['int', ['int']],
  'Mix_PlayingMusic': ['int', []],
  'Mix_SetMusicCMD': ['int', ['string']],
  'Mix_SetSynchroValue': ['int', ['int']],
  'Mix_GetSynchroValue': ['int', []],
  'Mix_SetSoundFonts': ['int', ['string']],
  'Mix_GetSoundFonts': ['string', []],
  'Mix_EachSoundFont': ['int', ['int*', 'void*']],
  'Mix_SetTimidityCfg': ['int', ['string']],
  'Mix_GetTimidityCfg': ['string', []],
  'Mix_GetChunk': [ref.refType(e.Mix_Chunk), ['int']],
  'Mix_CloseAudio': ['void', []]
};
