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

e.SDL_CONTROLLER_TYPE_UNKNOWN = en(0);
e.SDL_CONTROLLER_TYPE_XBOX360 = en();
e.SDL_CONTROLLER_TYPE_XBOXONE = en();
e.SDL_CONTROLLER_TYPE_PS3 = en();
e.SDL_CONTROLLER_TYPE_PS4 = en();
e.SDL_CONTROLLER_TYPE_NINTENDO_SWITCH_PRO = en();
e.SDL_CONTROLLER_TYPE_VIRTUAL = en();
e.SDL_CONTROLLER_TYPE_PS5 = en();
e.SDL_CONTROLLER_TYPE_AMAZON_LUNA = en();
e.SDL_CONTROLLER_TYPE_GOOGLE_STADIA = en();
e.SDL_CONTROLLER_TYPE_NVIDIA_SHIELD = en();
e.SDL_CONTROLLER_TYPE_NINTENDO_SWITCH_JOYCON_LEFT = en();
e.SDL_CONTROLLER_TYPE_NINTENDO_SWITCH_JOYCON_RIGHT = en();
e.SDL_CONTROLLER_TYPE_NINTENDO_SWITCH_JOYCON_PAIR = en();

e.SDL_CONTROLLER_BINDTYPE_NONE = en(0);
e.SDL_CONTROLLER_BINDTYPE_BUTTON = en();
e.SDL_CONTROLLER_BINDTYPE_AXIS = en();
e.SDL_CONTROLLER_BINDTYPE_HAT = en();

e.SDL_CONTROLLER_AXIS_INVALID = en(-1);
e.SDL_CONTROLLER_AXIS_LEFTX = en();
e.SDL_CONTROLLER_AXIS_LEFTY = en();
e.SDL_CONTROLLER_AXIS_RIGHTX = en();
e.SDL_CONTROLLER_AXIS_RIGHTY = en();
e.SDL_CONTROLLER_AXIS_TRIGGERLEFT = en();
e.SDL_CONTROLLER_AXIS_TRIGGERRIGHT = en();
e.SDL_CONTROLLER_AXIS_MAX = en();

e.SDL_CONTROLLER_BUTTON_INVALID = en(-1);
e.SDL_CONTROLLER_BUTTON_A = en();
e.SDL_CONTROLLER_BUTTON_B = en();
e.SDL_CONTROLLER_BUTTON_X = en();
e.SDL_CONTROLLER_BUTTON_Y = en();
e.SDL_CONTROLLER_BUTTON_BACK = en();
e.SDL_CONTROLLER_BUTTON_GUIDE = en();
e.SDL_CONTROLLER_BUTTON_START = en();
e.SDL_CONTROLLER_BUTTON_LEFTSTICK = en();
e.SDL_CONTROLLER_BUTTON_RIGHTSTICK = en();
e.SDL_CONTROLLER_BUTTON_LEFTSHOULDER = en();
e.SDL_CONTROLLER_BUTTON_RIGHTSHOULDER = en();
e.SDL_CONTROLLER_BUTTON_DPAD_UP = en();
e.SDL_CONTROLLER_BUTTON_DPAD_DOWN = en();
e.SDL_CONTROLLER_BUTTON_DPAD_LEFT = en();
e.SDL_CONTROLLER_BUTTON_DPAD_RIGHT = en();
e.SDL_CONTROLLER_BUTTON_MISC1 = en();
e.SDL_CONTROLLER_BUTTON_PADDLE1 = en();
e.SDL_CONTROLLER_BUTTON_PADDLE2 = en();
e.SDL_CONTROLLER_BUTTON_PADDLE3 = en();
e.SDL_CONTROLLER_BUTTON_PADDLE4 = en();
e.SDL_CONTROLLER_BUTTON_TOUCHPAD = en();
e.SDL_CONTROLLER_BUTTON_MAX = en();

e.SDL_GameControllerButtonBind = Struct({
  bindType: 'int',
  value: Union({
    button: 'int',
    axis: 'int',
    hat: Struct({
      hat: 'int',
      hat_mask: 'int'
    })
  })
});

e.SDL_GameControllerAddMappingsFromFile = function(file) {
  return l.SDL_GameControllerAddMappingsFromRW(l.SDL_RWFromFile(file, "rb"), 1);
}

push_export({
  'SDL_GameControllerAddMappingsFromRW': ['int', ['void*', 'int']],
  'SDL_GameControllerAddMapping': ['int', ['string']],
  'SDL_GameControllerNumMappings': ['int', []],
  'SDL_GameControllerMappingForIndex': ['string', ['int']],
  'SDL_GameControllerMappingForGUID': ['string', [e.SDL_JoystickGUID]],
  'SDL_GameControllerMapping': ['string', ['void*']],
  'SDL_IsGameController': ['int', ['int']],
  'SDL_GameControllerNameForIndex': ['string', ['int']],
  'SDL_GameControllerPathForIndex': ['string', ['int']],
  'SDL_GameControllerTypeForIndex': ['int', ['int']],
  'SDL_GameControllerMappingForDeviceIndex': ['string', ['int']],
  'SDL_GameControllerOpen': ['void*', ['int']],
  'SDL_GameControllerFromInstanceID': ['void*', ['int32']],
  'SDL_GameControllerFromPlayerIndex': ['void*', ['int']],
  'SDL_GameControllerName': ['string', ['void*']],
  'SDL_GameControllerPath': ['string', ['void*']],
  'SDL_GameControllerGetType': ['int', ['void*']],
  'SDL_GameControllerGetPlayerIndex': ['int', ['void*']],
  'SDL_GameControllerSetPlayerIndex': ['void', ['void*', 'int']],
  'SDL_GameControllerGetVendor': ['Uint16', ['void*']],
  'SDL_GameControllerGetProduct': ['Uint16', ['void*']],
  'SDL_GameControllerGetProductVersion': ['Uint16', ['void*']],
  'SDL_GameControllerGetFirmwareVersion': ['Uint16', ['void*']],
  'SDL_GameControllerGetSerial': ['string', ['void*']],
  'SDL_GameControllerGetAttached': ['int', ['void*']],
  'SDL_GameControllerGetJoystick': ['void*', ['void*']],
  'SDL_GameControllerEventState': ['int', ['int']],
  'SDL_GameControllerUpdate': ['void', []],
  'SDL_GameControllerGetAxisFromString': ['int', ['string']],
  'SDL_GameControllerGetStringForAxis': ['string', ['int']],
  'SDL_GameControllerGetBindForAxis': [e.SDL_GameControllerButtonBind, ['void*', 'int']],
  'SDL_GameControllerHasAxis': ['int', ['void*', 'int']],
  'SDL_GameControllerGetAxis': ['int16', ['void*', 'int']],
  'SDL_GameControllerGetButtonFromString': ['int', ['string']],
  'SDL_GameControllerGetStringForButton': ['string', ['int']],
  'SDL_GameControllerGetBindForButton': [e.SDL_GameControllerButtonBind, ['void*', 'int']],
  'SDL_GameControllerHasButton': ['int', ['void*', 'int']],
  'SDL_GameControllerGetButton': ['Uint8', ['void*', 'int']],
  'SDL_GameControllerGetNumTouchpads': ['int', ['void*']],
  'SDL_GameControllerGetNumTouchpadFingers': ['int', ['void*', 'int']],
  'SDL_GameControllerGetTouchpadFinger': ['int', ['void*', 'int', 'int', 'Uint8', 'float*', 'float*', 'float*']],
  'SDL_GameControllerHasSensor': ['int', ['void*', 'int']],
  'SDL_GameControllerSetSensorEnabled': ['int', ['void*', 'int', 'int']],
  'SDL_GameControllerIsSensorEnabled': ['int', ['void*', 'int']],
  'SDL_GameControllerGetSensorDataRate': ['float', ['void*', 'int']],
  'SDL_GameControllerGetSensorData': ['int', ['void*', 'int', 'float*', 'int']],
  'SDL_GameControllerRumble': ['int', ['void*', 'Uint16', 'Uint16', 'Uint32']],
  'SDL_GameControllerRumbleTriggers': ['int', ['void*', 'Uint16', 'Uint16', 'Uint32']],
  'SDL_GameControllerHasLED': ['int', ['void*']],
  'SDL_GameControllerHasRumble': ['int', ['void*']],
  'SDL_GameControllerHasRumbleTriggers': ['int', ['void*']],
  'SDL_GameControllerSetLED': ['int', ['void*', 'Uint8', 'Uint8', 'Uint8']],
  'SDL_GameControllerSendEffect': ['int', ['void*', 'void*', 'int']],
  'SDL_GameControllerClose': ['void', ['void*']],
  'SDL_GameControllerGetAppleSFSymbolsNameForButton': ['string', ['void*', 'int']],
  'SDL_GameControllerGetAppleSFSymbolsNameForAxis': ['string', ['void*', 'int']]
});
