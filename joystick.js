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

e.JOYSTICK_TYPE_UNKNOWN = en(0);
e.JOYSTICK_TYPE_GAMECONTROLLER = en();
e.JOYSTICK_TYPE_WHEEL = en();
e.JOYSTICK_TYPE_ARCADE_STICK = en();
e.JOYSTICK_TYPE_FLIGHT_STICK = en();
e.JOYSTICK_TYPE_DANCE_PAD = en();
e.JOYSTICK_TYPE_GUITAR = en();
e.JOYSTICK_TYPE_DRUM_KIT = en();
e.JOYSTICK_TYPE_ARCADE_PAD = en();
e.JOYSTICK_TYPE_THROTTLE = en();

e.JOYSTICK_POWER_UNKNOWN = en(-1);
e.JOYSTICK_POWER_EMPTY = en();
e.JOYSTICK_POWER_LOW = en();
e.JOYSTICK_POWER_MEDIUM = en();
e.JOYSTICK_POWER_FULL = en();
e.JOYSTICK_POWER_WIRED = en();
e.JOYSTICK_POWER_MAX = en();

e.SDL_IPHONE_MAX_GFORCE = 5.0;

e.SDL_JOYSTICK_AXIS_MAX = 32767;
e.SDL_JOYSTICK_AXIS_MIN = -32768;

e.SDL_HAT_CENTERED = 0x00;
e.SDL_HAT_UP = 0x01;
e.SDL_HAT_RIGHT = 0x02;
e.SDL_HAT_DOWN = 0x04;
e.SDL_HAT_LEFT = 0x008;
e.SDL_HAT_RIGHTUP = e.SDL_HAT_RIGHT | e.SDL_HAT_UP;
e.SDL_HAT_RIGHTDOWN = e.SDL_HAT_RIGHT | e.SDL_HAT_DOWN;
e.SDL_HAT_LEFTUP = e.SDL_HAT_LEFT | e.SDL_HAT_UP;
e.SDL_HAT_LEFTDOWN = e.SDL_HAT_LEFT | e.SDL_HAT_DOWN;

e.SDL_JoystickGUID = Struct({
  data: 'Uint8*'
});

push_export({
  'SDL_LockJoysticks': ['void', []],
  'SDL_UnlockJoysticks': ['void', []],
  'SDL_NumJoysticks': ['int', []],
  'SDL_JoystickNameForIndex': ['string', ['int']],
  'SDL_JoystickGetDevicePlayerIndex': ['int', ['int']],
  'SDL_JoystickGetDeviceGUID': [e.SDL_JoystickGUID, ['int']],
  'SDL_JoystickGetDeviceVendor': ['Uint16', ['int']],
  'SDL_JoystickGetDeviceProduct': ['Uint16', ['int']],
  'SDL_JoystickGetDeviceProductVersion': ['Uint16', ['int']],
  'SDL_JoystickGetDeviceType': ['int', ['int']],
  'SDL_JoystickGetDeviceInstanceID': ['int32', ['int']],
  'SDL_JoystickOpen': ['void*', ['int']],
  'SDL_JoystickFromInstanceID': ['void*', ['int32']],
  'SDL_JoystickFromPlayerIndex': ['void*', ['int']],
  'SDL_JoystickAttachVirtual': ['int', ['int', 'int', 'int', 'int']],
  'SDL_JoystickIsVirtual': ['int', ['int']],
  'SDL_JoystickSetVirtualAxis': ['int', ['void*', 'int', 'int16']],
  'SDL_JoystickSetVirtualButton': ['int', ['void*', 'int', 'Uint8']],
  'SDL_JoystickSetVirtualHat': ['int', ['void*', 'int', 'Uint8']],
  'SDL_JoystickName': ['string', ['void*']],
  'SDL_JoystickGetPlayerIndex': ['int', ['void*']],
  'SDL_JoystickSetPlayerIndex': ['int', ['void*', 'int']],
  'SDL_JoystickGetGUID': [e.SDL_JoystickGUID, ['void*']],
  'SDL_JoystickGetVendor': ['Uint16', ['void*']],
  'SDL_JoystickGetProduct': ['Uint16', ['void*']],
  'SDL_JoystickGetProductVersion': ['Uint16', ['void*']],
  'SDL_JoystickGetSerial': ['string', ['void*']],
  'SDL_JoystickGetType': ['int', ['void*']],
  'SDL_JoystickGetGUIDString': ['void', [e.SDL_JoystickGUID, 'string', 'int']],
  'SDL_JoystickGetGUIDFromString': [e.SDL_JoystickGUID, ['string']],
  'SDL_JoystickGetAttached': ['int', ['void*']],
  'SDL_JoystickInstanceID': ['int32', ['void*']],
  'SDL_JoystickNumAxes': ['int', ['void*']],
  'SDL_JoystickNumBalls': ['int', ['void*']],
  'SDL_JoystickNumHats': ['int', ['void*']],
  'SDL_JoystickNumButtons': ['int', ['void*']],
  'SDL_JoystickUpdate': ['void', []],
  'SDL_JoystickEventState': ['int', ['void*']],
  'SDL_JoystickGetAxis': ['int16', ['void*', 'int']],
  'SDL_JoystickGetAxisInitialState': ['int', ['void*', 'int', 'int16']],
  'SDL_JoystickGetHat': ['Uint8', ['void*', 'int']],
  'SDL_JoystickGetBall': ['int', ['void*', 'int', 'int*', 'int*']],
  'SDL_JoystickGetButton': ['Uint8', ['void*', 'int']],
  'SDL_JoystickRumble': ['int', ['void*', 'Uint16', 'Uint16', 'Uint32']],
  'SDL_JoystickRumbleTriggers': ['int', ['void*', 'Uint16', 'Uint16', 'Uint32']],
  'SDL_JoystickHasLED': ['int', ['void*']],
  'SDL_JoystickHasRumble': ['int', ['void*']],
  'SDL_JoystickHasRumbleTriggers': ['int', ['void*']],
  'SDL_JoystickSetLED': ['int', ['void*', 'Uint8', 'Uint8', 'Uint8']],
  'SDL_JoystickSendEffect': ['int', ['void*', 'void*', 'int']],
  'SDL_JoystickCurrentPowerLevel': ['int', ['void*']]
});
