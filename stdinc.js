const {
  e,
  l,
  ref,
  en,
  Struct,
  Func,
  from_hex,
  push_export,
  push_functions
} = require('./api');

e.SDL_SIZE_MAX = (1 << ref.sizeof.size_t) - 1;

e.SDL_FALSE = 0;
e.SDL_TRUE = 1;

e.SDL_MAX_SINT8 = 0x7F;
e.SDL_MIN_SINT8 = ~0x7F;
e.SDL_MAX_UINT8 = 0xFF;
e.SDL_MIN_UINT8 = 0x00;
e.SDL_MAX_SINT16 = 0x7FFF;
e.SDL_MIN_SINT16 = ~0x7FFF;
e.SDL_MAX_UINT16 = 0xFFFF;
e.SDL_MIN_UINT16 = 0x0000;
e.SDL_MAX_SINT32 = 0x7FFFFFFF;
e.SDL_MIN_SINT32 = ~0x7FFFFFFF;
e.SDL_MAX_UINT32 = from_hex('0xFFFFFFFFu');
e.SDL_MIN_UINT32 = 0x00000000;
e.SDL_MAX_SINT64 = from_hex('0x7FFFFFFFFFFFFFFFll');
e.SDL_MIN_SINT64 = ~from_hex('0x7FFFFFFFFFFFFFFFll');
e.SDL_MAX_UINT64 = from_hex('0xFFFFFFFFFFFFFFFFull');
e.SDL_MIN_UINT64 = from_hex('0x0000000000000000ull');

e.SDL_FLT_EPSILON = 1.1920928955078125e-07;
e.M_PI = Math.PI;
e.SDL_ICONV_ERROR = -1;
e.SDL_ICONV_E2BIG = -2;
e.SDL_ICONV_EILSEQ = -3;
e.SDL_ICONV_EINVAL = -4;

/*
https://stackoverflow.com/questions/5672746/what-exactly-is-the-file-keyword-in-c
typedef struct _iobuf
{
    char*   _ptr;
    int _cnt;
    char*   _base;
    int _flag;
    int _file;
    int _charbuf;
    int _bufsiz;
    char*   _tmpfname;
} FILE;
*/
e.FILE = Struct({
  _ptr: 'string',
  _cnt: 'int',
  _base: 'string',
  _flag: 'int',
  _file: 'int',
  _charbuf: 'int',
  _bufsiz: 'int',
  _tmpfname: 'string'
});

e.SDL_FOURCC = function(A, B, C, D) {
  return (A & 0xFF) << 0 |
    (B & 0xFF) << 8 |
    (C & 0xFF) << 16 |
    (D & 0xFF) << 24;
}

e.SDL_malloc_func = Func('void*', ['size_t']);
e.SDL_calloc_func = Func('void*', ['size_t', 'size_t']);
e.SDL_realloc_func = Func('void*', ['void*', 'size_t']);
e.SDL_free_func = Func('void', ['void*']);

push_functions({
  'SDL_stack_alloc': function(type_size, count) {
    return l.SDL_malloc(type_size * count);
  },
  'SDL_stack_free': function(data) {
    return l.SDL_free(data);
  },
  'SDL_min': Math.min,
  'SDL_max': Math.max,
  'SDL_clamp': function(x, a, b) {
    return Math.max(a, Math.min(b, x));
  },
  'SDL_memcpy4': function(dst, src, dwords) {
    return l.SDL_memcpy(dst, src, dwords * 4);
  },
  'SDL_iconv_utf8_locale': function(S) {
    return l.SDL_iconv_string("", "UTF-8", S, l.SDL_strlen(S) + 1);
  },
  'SDL_iconv_utf8_ucs2': function(S) {
    return l.SDL_iconv_string("UCS-2-INTERNAL", "UTF-8", S, l.SDL_strlen(S) + 1);
  },
  'SDL_iconv_utf8_ucs4': function(S) {
    return l.SDL_iconv_string("UCS-2-INTERNAL", "UTF-8", S, l.SDL_strlen(S) + 1);
  },
  'SDL_iconv_wchar_utf8': function(S) {
    return l.SDL_iconv_string("UTF-8", "WCHAR_T", S, (l.SDL_strlen(S) + 1) * 2);
  },
  'SDL_size_mul_overflow': function(a, b, ret) {
    if (a != 0 && b > e.SDL_SIZE_MAX / a) {
      return -1;
    }
    ret[0] = a * b;
    return 0;
  },
  'SDL_size_add_overflow': function(a, b, ret) {
    if (b > e.SDL_SIZE_MAX - a) {
      return -1;
    }
    ret[0] = a + b;
    return 0;
  }
});

push_export({
  'SDL_malloc': ['void*', ['size_t']],
  'SDL_calloc': ['void*', ['size_t', 'size_t']],
  'SDL_realloc': ['void*', ['void*', 'size_t']],
  'SDL_free': ['void', ['void*']],
  'SDL_GetOriginalMemoryFunctions': ['void', [ref.refType(e.SDL_malloc_func), ref.refType(e.SDL_calloc_func), ref.refType(e.SDL_realloc_func), ref.refType(e.SDL_free_func)]],
  'SDL_GetMemoryFunctions': ['void', [ref.refType(e.SDL_malloc_func), ref.refType(e.SDL_calloc_func), ref.refType(e.SDL_realloc_func), ref.refType(e.SDL_free_func)]],
  'SDL_SetMemoryFunctions': ['int', [e.SDL_malloc_func, e.SDL_calloc_func, e.SDL_realloc_func, e.SDL_free_func]],
  'SDL_GetNumAllocations': ['int', []],
  'SDL_getenv': ['string', ['string']],
  'SDL_setenv': ['int', ['string', 'string', 'int']],
  'SDL_qsort': ['void', ['void*', 'size_t', 'size_t', 'int*']],
  'SDL_bsearch': ['void', ['void*', 'void*', 'size_t', 'int*']],
  'SDL_isalpha': ['int', ['int']],
  'SDL_isalnum': ['int', ['int']],
  'SDL_isblank': ['int', ['int']],
  'SDL_iscntrl': ['int', ['int']],
  'SDL_isdigit': ['int', ['int']],
  'SDL_isxdigit': ['int', ['int']],
  'SDL_ispunct': ['int', ['int']],
  'SDL_isspace': ['int', ['int']],
  'SDL_isupper': ['int', ['int']],
  'SDL_islower': ['int', ['int']],
  'SDL_isprint': ['int', ['int']],
  'SDL_isgraph': ['int', ['int']],
  'SDL_toupper': ['int', ['int']],
  'SDL_tolower': ['int', ['int']],
  'SDL_crc16': ['Uint16', ['Uint32', 'void*', 'size_t']],
  'SDL_crc32': ['Uint32', ['Uint32', 'void*', 'size_t']],
  'SDL_memset': ['void*', ['void*', 'int', 'size_t']],
  'SDL_memcpy': ['void*', ['void*', 'void*', 'size_t']],
  'SDL_memmove': ['void*', ['void*', 'void*', 'size_t']],
  'SDL_memcmp': ['int', ['void*', 'void*', 'size_t']],
  'SDL_wcslen': ['size_t', ['Uint16*']],
  'SDL_wcslcpy': ['size_t', ['Uint16*', 'Uint16*', 'size_t']],
  'SDL_wcslcat': ['size_t', ['Uint16*', 'Uint16*', 'size_t']],
  'SDL_wcsdup': ['Uint16*', ['Uint16*']],
  'SDL_wcsstr': ['Uint16*', ['Uint16*', 'Uint16*']],
  'SDL_wcscmp': ['int', ['Uint16*', 'Uint16*']],
  'SDL_wcsncmp': ['int', ['Uint16*', 'Uint16*', 'size_t']],
  'SDL_wcscasecmp': ['int', ['Uint16*', 'Uint16*']],
  'SDL_wcsncasecmp': ['int', ['Uint16*', 'Uint16*', 'size_t']],
  'SDL_strlen': ['size_t', ['string']],
  'SDL_strlcpy': ['size_t', ['string', 'string', 'size_t']],
  'SDL_utf8strlcpy': ['size_t', ['string', 'string', 'size_t']],
  'SDL_strlcat': ['size_t', ['string', 'string', 'size_t']],
  'SDL_strdup': ['string', ['string']],
  'SDL_strrev': ['string', ['string']],
  'SDL_strupr': ['string', ['string']],
  'SDL_strlwr': ['string', ['string']],
  'SDL_strchr': ['string', ['string', 'int']],
  'SDL_strrchr': ['string', ['string', 'int']],
  'SDL_strstr': ['string', ['string', 'string']],
  'SDL_strtokr': ['string', ['string', 'string', ref.refType('string')]],
  'SDL_utf8strlen': ['size_t', ['string']],
  'SDL_utf8strnlen': ['size_t', ['string', 'size_t']],
  'SDL_itoa': ['string', ['int', 'string', 'int']],
  'SDL_uitoa': ['string', ['Uint', 'string', 'int']],
  'SDL_ltoa': ['string', ['long', 'string', 'int']],
  'SDL_ultoa': ['string', ['Ulong', 'string', 'int']],
  'SDL_lltoa': ['string', ['int64', 'string', 'int']],
  'SDL_ulltoa': ['string', ['Uint64', 'string', 'int']],
  'SDL_atoi': ['int', ['string']],
  'SDL_atof': ['double', ['string']],
  'SDL_strtol': ['long', ['string', ref.refType('string'), 'int']],
  'SDL_strtoul': ['Ulong', ['string', ref.refType('string'), 'int']],
  'SDL_strtoll': ['int64', ['string', ref.refType('string'), 'int']],
  'SDL_strtoull': ['Uint64', ['string', ref.refType('string'), 'int']],
  'SDL_strtod': ['double', ['string', ref.refType('string')]],
  'SDL_strcmp': ['int', ['string', 'string']],
  'SDL_strncmp': ['int', ['string', 'string', 'size_t']],
  'SDL_strcasecmp': ['int', ['string', 'string']],
  'SDL_strncasecmp': ['int', ['string', 'string', 'size_t']],
  'SDL_sscanf': ['int', ['string', 'string']],
  'SDL_vsscanf': ['int', ['string', 'string', 'void*']],
  'SDL_snprintf': ['int', ['string', 'size_t', 'string']],
  'SDL_vsnprintf': ['int', ['string', 'size_t', 'string', 'void*']],
  'SDL_asprintf': ['int', [ref.refType('string'), 'string']],
  'SDL_vasprintf': ['int', [ref.refType('string'), 'string', 'void*']],
  'SDL_acos': ['double', ['double']],
  'SDL_acosf': ['float', ['float']],
  'SDL_asin': ['double', ['double']],
  'SDL_asinf': ['float', ['float']],
  'SDL_atan': ['double', ['double']],
  'SDL_atanf': ['float', ['float']],
  'SDL_atan2': ['double', ['double', 'double']],
  'SDL_atan2f': ['float', ['float', 'float']],
  'SDL_ceil': ['double', ['double']],
  'SDL_ceilf': ['float', ['float']],
  'SDL_copysign': ['double', ['double', 'double']],
  'SDL_copysignf': ['float', ['float', 'float']],
  'SDL_cos': ['double', ['double']],
  'SDL_cosf': ['float', ['float']],
  'SDL_exp': ['double', ['double']],
  'SDL_expf': ['float', ['float']],
  'SDL_fabs': ['double', ['double']],
  'SDL_fabsf': ['float', ['float']],
  'SDL_floor': ['double', ['double']],
  'SDL_floorf': ['float', ['float']],
  'SDL_trunc': ['double', ['double']],
  'SDL_truncf': ['float', ['float']],
  'SDL_fmod': ['double', ['double', 'double']],
  'SDL_fmodf': ['float', ['float', 'float']],
  'SDL_log': ['double', ['double']],
  'SDL_logf': ['float', ['float']],
  'SDL_log10': ['double', ['double']],
  'SDL_log10f': ['float', ['float']],
  'SDL_pow': ['double', ['double', 'double']],
  'SDL_powf': ['float', ['float', 'float']],
  'SDL_round': ['double', ['double']],
  'SDL_roundf': ['float', ['float']],
  'SDL_lround': ['long', ['double']],
  'SDL_lroundf': ['long', ['float']],
  'SDL_scalbn': ['double', ['double', 'int']],
  'SDL_scalbnf': ['float', ['float', 'int']],
  'SDL_sin': ['double', ['double']],
  'SDL_sinf': ['float', ['float']],
  'SDL_sqrt': ['double', ['double']],
  'SDL_sqrtf': ['float', ['float']],
  'SDL_tan': ['double', ['double']],
  'SDL_tanf': ['float', ['float']],
  'SDL_iconv_open': ['void*', ['string', 'string']],
  'SDL_iconv_close': ['int', ['void*']],
  'SDL_iconv': ['size_t', ['void*', ref.refType('string'), 'size_t', 'char**', 'size_t']],
  'SDL_iconv_string': ['string', ['string', 'string', 'string', 'size_t']],
});
