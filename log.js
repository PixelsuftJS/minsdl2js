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

e.SDL_MAX_LOG_MESSAGE = 4096;

e.SDL_LOG_CATEGORY_APPLICATION = en(0);
e.SDL_LOG_CATEGORY_ERROR = en();
e.SDL_LOG_CATEGORY_ASSERT = en();
e.SDL_LOG_CATEGORY_SYSTEM = en();
e.SDL_LOG_CATEGORY_AUDIO = en();
e.SDL_LOG_CATEGORY_VIDEO = en();
e.SDL_LOG_CATEGORY_RENDER = en();
e.SDL_LOG_CATEGORY_INPUT = en();
e.SDL_LOG_CATEGORY_TEST = en();
e.SDL_LOG_CATEGORY_RESERVED1 = en();
e.SDL_LOG_CATEGORY_RESERVED2 = en();
e.SDL_LOG_CATEGORY_RESERVED3 = en();
e.SDL_LOG_CATEGORY_RESERVED4 = en();
e.SDL_LOG_CATEGORY_RESERVED5 = en();
e.SDL_LOG_CATEGORY_RESERVED6 = en();
e.SDL_LOG_CATEGORY_RESERVED7 = en();
e.SDL_LOG_CATEGORY_RESERVED8 = en();
e.SDL_LOG_CATEGORY_RESERVED9 = en();
e.SDL_LOG_CATEGORY_RESERVED10 = en();
e.SDL_LOG_CATEGORY_CUSTOM = en();

e.SDL_LOG_PRIORITY_VERBOSE = en(1);
e.SDL_LOG_PRIORITY_DEBUG = en();
e.SDL_LOG_PRIORITY_INFO = en();
e.SDL_LOG_PRIORITY_WARN = en();
e.SDL_LOG_PRIORITY_ERROR = en();
e.SDL_LOG_PRIORITY_CRITICAL = en();
e.SDL_NUM_LOG_PRIORITIES = en();

push_export({
  'SDL_LogSetAllPriority': ['void', ['int']],
  'SDL_LogSetPriority': ['void', ['int', 'int']],
  'SDL_LogGetPriority': ['int', ['int']],
  'SDL_LogResetPriorities': ['void', []],
  'SDL_Log': ['void', ['string']],
  'SDL_LogVerbose': ['void', ['int', 'string']],
  'SDL_LogDebug': ['void', ['int', 'string']],
  'SDL_LogInfo': ['void', ['int', 'string']],
  'SDL_LogWarn': ['void', ['int', 'string']],
  'SDL_LogError': ['void', ['int', 'string']],
  'SDL_LogCritical': ['void', ['int', 'string']],
  'SDL_LogMessage': ['void', ['int', 'int', 'string']],
  'SDL_LogMessageV': ['void', ['int', 'int', 'string', 'void*']],
  'SDL_LogGetOutputFunction': ['void', ['void**', 'void**']],
  'SDL_LogSetOutputFunction': ['void', ['void*', 'void*']],
});
