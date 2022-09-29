const {
  e,
  l,
  ref,
  defines,
  Struct,
  Func,
  ArrayType,
  from_hex,
  en,
  push_export,
  push_functions
} = require('./api');
const os = require('os');

e.SDL_INIT_TIMER = from_hex('0x00000001u');
e.SDL_INIT_AUDIO = from_hex('0x00000010u');
e.SDL_INIT_VIDEO = from_hex('0x00000020u');
e.SDL_INIT_JOYSTICK = from_hex('0x00000200u');
e.SDL_INIT_HAPTIC = from_hex('0x00001000u');
e.SDL_INIT_GAMECONTROLLER = from_hex('0x00002000u');
e.SDL_INIT_EVENTS = from_hex('0x00004000u');
e.SDL_INIT_SENSOR = from_hex('0x00008000u');
e.SDL_INIT_EVERYTHING = e.SDL_INIT_TIMER | e.SDL_INIT_AUDIO |
  e.SDL_INIT_VIDEO | e.SDL_INIT_EVENTS | e.SDL_INIT_JOYSTICK |
  e.SDL_INIT_HAPTIC | e.SDL_INIT_GAMECONTROLLER | e.SDL_INIT_SENSOR;

// SDL_cpuinfo.h
e.SDL_CACHELINE_SIZE = 128;

// SDL_endian.h
e.SDL_LIL_ENDIAN = 1234;
e.SDL_BIG_ENDIAN = 4321;
e.SDL_BYTEORDER = e.SDL_FLOATWORDORDER = os.endianness() == 'LE' ? e.SDL_LIL_ENDIAN : e.SDL_BIG_ENDIAN;

// SDL_guid.h
e.SDL_GUID = Struct({
  data: ArrayType('Uint8', 16)
});

// SDL_locale.h
e.SDL_Locale = Struct({
  language: 'string',
  country: 'string'
});

// SDL_power.h
e.SDL_POWERSTATE_UNKNOWN = en(0);
e.SDL_POWERSTATE_ON_BATTERY = en();
e.SDL_POWERSTATE_NO_BATTERY = en();
e.SDL_POWERSTATE_CHARGING = en();
e.SDL_POWERSTATE_CHARGED = en();

// SDL_revision.h
e.SDL_REVISION = 'https://github.com/libsdl-org/SDL.git@8c9beb0c873f6ca5efbd88f1ad2648bfc793b2ac';
e.SDL_REVISION_NUMBER = 0;

// SDL_system.h
if (defines['WIN32'] || defines['__WINGDK__']) {
  e.SDL_WindowsMessageHook = Func('void', ['void*', 'void*', 'Uint', 'Uint64', 'int64']);
  push_export({
    'SDL_SetWindowsMessageHook': ['void', [e.SDL_WindowsMessageHook, 'void*']],
    'SDL_Direct3D9GetAdapterIndex': ['int', ['int']],
    'SDL_RenderGetD3D9Device': ['void*', ['void*']],
    'SDL_RenderGetD3D11Device': ['void*', ['void*']],
    'SDL_RenderGetD3D12Device': ['void*', ['void*']],
    'SDL_DXGIGetOutputInfo': ['int', ['int', 'int', 'int*', 'int*']]
  });
}

// SDL_timer.h
e.SDL_TICKS_PASSED = function(A, B) {
  return (B - A) <= 0;
}

push_functions({
  // SDL_bits.h
  'SDL_HasExactlyOneBitSet32': function(x) {
    if (x && !(x & (x - 1))) {
      return true;
    }
    return false;
  },
  'SDL_MostSignificantBitIndex32': function(x) {
   const b = new Uint32Array([0x2, 0xC, 0xF0, 0xFF00, 0xFFFF0000]);
   const S = new Int32Array([1, 2, 4, 8, 16]);
   var msbIndex = 0;
   var i;
   if (x == 0) {
     return -1;
   }
   for (i = 4; i >= 0; i--) {
     if (x & b[i]) {
       x >>= S[i];
       msbIndex |= S[i];
     }
   }
   return msbIndex;
  },
  // SDL_quit.h
  'SDL_QuitRequested': function() {
    l.SDL_PumpEvents();
    return l.SDL_PeepEvents(NULL, 0, e.SDL_PEEKEVENT, e.SDL_QUIT, e.SDL_QUIT) > 0;
  }
});

push_export({
  'SDL_Init': ['int', ['Uint32']],
  'SDL_InitSubSystem': ['int', ['Uint32']],
  'SDL_QuitSubSystem': ['void', ['Uint32']],
  'SDL_WasInit': ['Uint32', ['Uint32']],
  'SDL_Quit': ['void', []],
  // SDL_clipboard.h
  'SDL_SetClipboardText': ['int', ['string']],
  'SDL_GetClipboardText': ['string', []],
  'SDL_HasClipboardText': ['int', []],
  // SDL_cpuinfo.h
  'SDL_GetCPUCount': ['int', []],
  'SDL_GetCPUCacheLineSize': ['int', []],
  'SDL_HasRDTSC': ['int', []],
  'SDL_HasAltiVec': ['int', []],
  'SDL_HasMMX': ['int', []],
  'SDL_Has3DNow': ['int', []],
  'SDL_HasSSE': ['int', []],
  'SDL_HasSSE2': ['int', []],
  'SDL_HasSSE3': ['int', []],
  'SDL_HasSSE41': ['int', []],
  'SDL_HasSSE42': ['int', []],
  'SDL_HasAVX': ['int', []],
  'SDL_HasAVX2': ['int', []],
  'SDL_HasAVX512F': ['int', []],
  'SDL_HasARMSIMD': ['int', []],
  'SDL_HasNEON': ['int', []],
  'SDL_HasLSX': ['int', []],
  'SDL_HasLASX': ['int', []],
  'SDL_GetSystemRAM': ['int', []],
  'SDL_SIMDGetAlignment': ['size_t', []],
  'SDL_SIMDAlloc': ['void*', ['size_t']],
  'SDL_SIMDRealloc': ['void*', ['void*', 'size_t']],
  'SDL_SIMDFree': ['void', ['void*']],
  // SDL_filesystem.h
  'SDL_GetBasePath': ['string', []],
  'SDL_GetPrefPath': ['string', ['string', 'string']],
  // SDL_gesture.h
  'SDL_RecordGesture': ['int', ['int64']],
  'SDL_SaveAllDollarTemplates': ['int', ['void**']],
  'SDL_SaveDollarTemplate': ['int', ['void*', 'void**']],
  'SDL_LoadDollarTemplates': ['int', ['void*', 'void**']],
  // SDL_gui.h
  'SDL_GUIDToString': ['void*', [e.SDL_GUID, 'string', 'int']],
  'SDL_GUIDFromString': [e.SDL_GUID, ['string']],
  // SDL_loadso.h
  'SDL_LoadObject': ['void*', ['string']],
  'SDL_LoadFunction': ['void*', ['void*', 'string']],
  'SDL_UnloadObject': ['void', ['void*']],
  // SDL_locale.h
  'SDL_GetPreferredLocales': [ref.refType(e.SDL_Locale), []],
  // SDL_main.h
  'SDL_SetMainReady': ['void', []],
  // SDL_metal.h
  'SDL_Metal_CreateView': ['void*', ['void*']],
  'SDL_Metal_DestroyView': ['void', ['void*']],
  'SDL_Metal_GetLayer': ['void*', ['void*']],
  'SDL_Metal_GetLayer': ['void', ['void*', 'int*', 'int*']],
  // SDL_misc.h
  'SDL_OpenURL': ['int', ['string']],
  // SDL_platform.h
  'SDL_GetPlatform': ['string', []],
  // SDL_power.h
  'SDL_GetPowerInfo': ['int', ['int*', 'int*']],
  // SDL_system.h
  'SDL_IsTablet': ['int', []],
  'SDL_OnApplicationWillTerminate': ['void', []],
  'SDL_OnApplicationDidReceiveMemoryWarning': ['void', []],
  'SDL_OnApplicationWillResignActive': ['void', []],
  'SDL_OnApplicationDidEnterBackground': ['void', []],
  'SDL_OnApplicationWillEnterForeground': ['void', []],
  'SDL_OnApplicationDidBecomeActive': ['void', []],
  // SDL_timer.h
  'SDL_GetTicks': ['Uint32', []],
  'SDL_GetTicks64': ['Uint64', []],
  'SDL_GetPerformanceCounter': ['Uint64', []],
  'SDL_GetPerformanceFrequency': ['Uint64', []],
  'SDL_Delay': ['void', ['Uint32']],
  'SDL_AddTimer': ['int', ['Uint32', 'Uint32*', 'void*']],
  'SDL_RemoveTimer': ['int', ['int']],
  // SDL_vulkan.h
  'SDL_Vulkan_LoadLibrary': ['int', ['string']],
  'SDL_Vulkan_GetVkGetInstanceProcAddr': ['void*', []],
  'SDL_Vulkan_UnloadLibrary': ['void', []],
  'SDL_Vulkan_GetInstanceExtensions': ['int', ['void*', 'Uint', ref.refType('string')]],
  'SDL_Vulkan_CreateSurface': ['int', ['void*', 'void*', 'void**']],
  'SDL_Vulkan_GetDrawableSize': ['void', ['void*', 'int*', 'int*']],
});
