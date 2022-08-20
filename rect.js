const {
  e,
  ffi,
  ref,
  Struct,
  Union,
  from_hex,
  en,
  push_export,
  push_functions,
  l
} = require('./api');

e.SDL_Point = Struct({
  x: 'int',
  y: 'int'
});
e.SDL_FPoint = Struct({
  x: 'float',
  y: 'float'
});
e.SDL_Rect = Struct({
  x: 'int',
  y: 'int',
  w: 'int',
  h: 'int'
});
e.SDL_FRect = Struct({
  x: 'float',
  y: 'float',
  w: 'float',
  h: 'float'
});

push_functions({
  'SDL_PointInRect': function(p, r) {
    return ((p.x >= r.x) && (p.x < (r.x + r.w)) &&
      (p.y >= r.y) && (p.y < (r.y + r.h)));
  },
  'SDL_RectEmpty': function(r) {
    return ((!r) || (r.w <= 0) || (r.h <= 0));
  },
  'SDL_RectEquals': function(a, b) {
    return (a && b && (a.x == b.x) && (a.y == b.y) &&
      (a.w == b.w) && (a.h == b.h));
  },
  'SDL_PointInFRect': function(p, r) {
    return ((p.x >= r.x) && (p.x < (r.x + r.w)) &&
      (p.y >= r.y) && (p.y < (r.y + r.h)));
  },
  'SDL_FRectEmpty': function(r) {
    return ((!r) || (r.w <= 0) || (r.h <= 0));
  },
  'SDL_FRectEqualsEpsilon': function(a, b, epsilon) {
    return (a && b && ((a == b) ||
      ((l.SDL_fabsf(a.x - b.x) <= epsilon) &&
        (l.SDL_fabsf(a.y - b.y) <= epsilon) &&
        (l.SDL_fabsf(a.w - b.w) <= epsilon) &&
        (l.SDL_fabsf(a.h - b.h) <= epsilon))));
  },
  'SDL_FRectEquals': function(a, b) {
    return l.SDL_FRectEqualsEpsilon(a, b, e.SDL_FLT_EPSILON);
  }
});

push_export({
  'SDL_HasIntersection': ['int', ['void*', 'void*']],
  'SDL_IntersectRect': ['int', ['void*', 'void*']],
  'SDL_UnionRect': ['void', ['void*', 'void*', 'void*']],
  'SDL_EnclosePoints': ['int', ['void*', 'int', 'void*', 'void*']],
  'SDL_IntersectRectAndLine': ['int', ['void*', 'int*', 'int*', 'int*', 'int*']],
  'SDL_HasIntersectionF': ['int', ['void*', 'void*']],
  'SDL_IntersectFRect': ['int', ['void*', 'void*']],
  'SDL_UnionFRect': ['void', ['void*', 'void*', 'void*']],
  'SDL_EncloseFPoints': ['int', ['void*', 'int', 'void*', 'void*']],
  'SDL_IntersectFRectAndLine': ['int', ['void*', 'float*', 'float*', 'float*', 'float*']]
});
