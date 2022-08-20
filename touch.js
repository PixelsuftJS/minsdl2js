const {
  e,
  ref,
  Struct,
  en,
  push_export
} = require('./api');

e.SDL_TOUCH_DEVICE_INVALID = en(-1);
e.SDL_TOUCH_DEVICE_DIRECT = en();
e.SDL_TOUCH_DEVICE_INDIRECT_ABSOLUTE = en();
e.SDL_TOUCH_DEVICE_INDIRECT_RELATIVE = en();

e.SDL_Finger = Struct({
  id: 'int64',
  x: 'float',
  y: 'float',
  pressure: 'float'
});

e.SDL_TOUCH_MOUSEID = -1;
e.SDL_MOUSE_TOUCHID = -1;

push_export({
  'SDL_GetNumTouchDevices': ['int', []],
  'SDL_GetTouchDevice': ['int', ['int']],
  'SDL_GetTouchName': ['string', ['int']],
  'SDL_GetTouchDeviceType': ['int', ['int64']],
  'SDL_GetNumTouchFingers': ['int', ['int64']],
  'SDL_GetTouchFinger': [ref.refType(e.SDL_Finger), ['int', 'int']]
});
