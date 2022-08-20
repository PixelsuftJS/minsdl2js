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
  push_export,
  push_functions
} = require('./api');

e.SDL_FIRSTEVENT = en(0);
e.SDL_QUIT = en(0x100);
e.SDL_APP_TERMINATING = en();
e.SDL_APP_LOWMEMORY = en();
e.SDL_APP_WILLENTERBACKGROUND = en();
e.SDL_APP_DIDENTERBACKGROUND = en();
e.SDL_APP_WILLENTERFOREGROUND = en();
e.SDL_APP_DIDENTERFOREGROUND = en();
e.SDL_LOCALECHANGED = en();
e.SDL_DISPLAYEVENT = en(0x150);
e.SDL_WINDOWEVENT = en(0x200);
e.SDL_SYSWMEVENT = en();
e.SDL_KEYDOWN = en(0x300);
e.SDL_KEYUP = en();
e.SDL_TEXTEDITING = en();
e.SDL_TEXTINPUT = en();
e.SDL_KEYMAPCHANGED = en();
e.SDL_TEXTEDITING_EXT = en();
e.SDL_MOUSEMOTION = en(0x400);
e.SDL_MOUSEBUTTONDOWN = en();
e.SDL_MOUSEBUTTONUP = en();
e.SDL_MOUSEWHEEL = en();
e.SDL_JOYAXISMOTION = en(0x600);
e.SDL_JOYBALLMOTION = en();
e.SDL_JOYHATMOTION = en();
e.SDL_JOYBUTTONDOWN = en();
e.SDL_JOYBUTTONUP = en();
e.SDL_JOYDEVICEADDED = en();
e.SDL_JOYDEVICEREMOVED = en();
e.SDL_JOYBATTERYUPDATED = en();
e.SDL_CONTROLLERAXISMOTION = en(0x650);
e.SDL_CONTROLLERBUTTONDOWN = en();
e.SDL_CONTROLLERBUTTONUP = en();
e.SDL_CONTROLLERDEVICEADDED = en();
e.SDL_CONTROLLERDEVICEREMOVED = en();
e.SDL_CONTROLLERDEVICEREMAPPED = en();
e.SDL_CONTROLLERTOUCHPADDOWN = en();
e.SDL_CONTROLLERTOUCHPADMOTION = en();
e.SDL_CONTROLLERTOUCHPADUP = en();
e.SDL_CONTROLLERSENSORUPDATE = en();
e.SDL_FINGERDOWN = en(0x700);
e.SDL_FINGERUP = en();
e.SDL_FINGERMOTION = en();
e.SDL_DOLLARGESTURE = en(0x800);
e.SDL_DOLLARRECORD = en();
e.SDL_MULTIGESTURE = en();
e.SDL_CLIPBOARDUPDATE = en(0x900);
e.SDL_DROPFILE = en(0x1000);
e.SDL_DROPTEXT = en();
e.SDL_DROPBEGIN = en();
e.SDL_DROPCOMPLETE = en();
e.SDL_AUDIODEVICEADDED = en(0x1100);
e.SDL_AUDIODEVICEREMOVED = en();
e.SDL_SENSORUPDATE = en(0x1200);
e.SDL_RENDER_TARGETS_RESET = en(0x2000);
e.SDL_RENDER_DEVICE_RESET = en();
e.SDL_POLLSENTINEL = en(0x7F00);
e.SDL_USEREVENT = en(0x8000);
e.SDL_LASTEVENT = en(0xFFFF);

e.SDL_ADDEVENT = en(0);
e.SDL_PEEKEVENT = en();
e.SDL_GETEVENT = en();

e.SDL_QUERY = -1;
e.SDL_IGNORE = 0;
e.SDL_DISABLE = 0;
e.SDL_ENABLE = 1;

e.SDL_RELEASED = 0;
e.SDL_PRESSED = 1;

e.SDL_CommonEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32'
});
e.SDL_DisplayEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  display: 'Uint32',
  event: 'Uint8',
  padding1: 'Uint8',
  padding2: 'Uint8',
  padding3: 'Uint8',
  data1: 'int32'
});
e.SDL_WindowEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  windowID: 'Uint32',
  event: 'Uint8',
  padding1: 'Uint8',
  padding2: 'Uint8',
  padding3: 'Uint8',
  data1: 'int32',
  data2: 'int32'
});
e.SDL_KeyboardEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  windowID: 'Uint32',
  state: 'Uint8',
  repeat: 'Uint8',
  padding2: 'Uint8',
  padding3: 'Uint8',
  keysym: e.SDL_Keysym
});
e.SDL_TextEditingEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  windowID: 'Uint32',
  text: ArrayType('char', e.SDL_TEXTEDITINGEVENT_TEXT_SIZE),
  start: 'int32',
  length: 'int32'
});
e.SDL_TextEditingExtEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  windowID: 'Uint32',
  text: 'string',
  start: 'int32',
  length: 'int32'
});
e.SDL_TextInputEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  windowID: 'Uint32',
  text: ArrayType('char', e.SDL_TEXTINPUTEVENT_TEXT_SIZE)
});
e.SDL_MouseMotionEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  windowID: 'Uint32',
  which: 'Uint32',
  state: 'Uint32',
  x: 'int32',
  y: 'int32',
  xrel: 'int32',
  yrel: 'int32',
});
e.SDL_MouseButtonEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  windowID: 'Uint32',
  which: 'Uint32',
  button: 'Uint8',
  state: 'Uint8',
  clicks: 'Uint8',
  padding1: 'Uint8',
  x: 'int32',
  y: 'int32'
});
e.SDL_MouseWheelEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  windowID: 'Uint32',
  which: 'Uint32',
  x: 'int32',
  y: 'int32',
  direction: 'Uint32',
  preciseX: 'Uint8',
  preciseY: 'Uint8'
});
e.SDL_JoyAxisEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  which: 'int32',
  axis: 'Uint8',
  padding1: 'Uint8',
  padding2: 'Uint8',
  padding3: 'Uint8',
  value: 'int16',
  padding4: 'Uint16'
});
e.SDL_JoyBallEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  which: 'int32',
  ball: 'Uint8',
  padding1: 'Uint8',
  padding2: 'Uint8',
  padding3: 'Uint8',
  xrel: 'int16',
  yrel: 'int16'
});
e.SDL_JoyHatEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  which: 'int32',
  hat: 'Uint8',
  value: 'Uint8',
  padding1: 'Uint8',
  padding2: 'Uint8'
});
e.SDL_JoyButtonEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  which: 'int32',
  button: 'Uint8',
  state: 'Uint8',
  padding1: 'Uint8',
  padding2: 'Uint8'
});
e.SDL_JoyDeviceEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  which: 'int32'
});
e.SDL_JoyBatteryEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  which: 'int32',
  level: 'int'
});
e.SDL_ControllerAxisEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  which: 'int32',
  axis: 'Uint8',
  padding1: 'Uint8',
  padding2: 'Uint8',
  padding3: 'Uint8',
  value: 'int16',
  padding4: 'Uint16'
});
e.SDL_ControllerButtonEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  which: 'int32',
  button: 'Uint8',
  state: 'Uint8',
  padding1: 'Uint8',
  padding2: 'Uint8'
});
e.SDL_ControllerDeviceEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  which: 'int32'
});
e.SDL_ControllerTouchpadEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  which: 'int32',
  touchpad: 'int32',
  finger: 'int32',
  x: 'float',
  y: 'float',
  pressure: 'float'
});
e.SDL_ControllerSensorEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  which: 'int32',
  sensor: 'int32',
  data: ArrayType('float', 3)
});
e.SDL_AudioDeviceEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  windowID: 'Uint32',
  iscapture: 'Uint8',
  padding1: 'Uint8',
  padding2: 'Uint8',
  padding3: 'Uint8'
});
e.SDL_TouchFingerEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  touchID: 'int64',
  fingerID: 'int64',
  x: 'float',
  y: 'float',
  dx: 'float',
  dy: 'float',
  pressure: 'float',
  windowID: 'Uint32'
});
e.SDL_MultiGestureEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  touchID: 'int64',
  dTheta: 'float',
  dDist: 'float',
  x: 'float',
  y: 'float',
  numFingers: 'Uint16',
  padding: 'Uint16'
});
e.SDL_DollarGestureEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  touchID: 'int64',
  gestureId: 'int64',
  numFingers: 'Uint32',
  error: 'float',
  x: 'float',
  y: 'float'
});
e.SDL_DropEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  file: 'string',
  windowID: 'Uint32'
});
e.SDL_SensorEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  which: 'int32',
  data: 'float*'
});
e.SDL_QuitEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32'
});
e.SDL_OSEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32'
});
e.SDL_UserEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  windowID: 'Uint32',
  code: 'int32',
  data1: 'void*',
  data2: 'void*'
});
e.SDL_SysWMEvent = Struct({
  type: 'Uint32',
  timestamp: 'Uint32',
  msg: 'void*'
});
e.SDL_Event = Union({
  type: 'Uint32',
  common: e.SDL_CommonEvent,
  display: e.SDL_DisplayEvent,
  window: e.SDL_WindowEvent,
  key: e.SDL_KeyboardEvent,
  edit: e.SDL_TextEditingEvent,
  editExt: e.SDL_TextEditingExtEvent,
  text: e.SDL_TextInputEvent,
  motion: e.SDL_MouseMotionEvent,
  button: e.SDL_MouseButtonEvent,
  wheel: e.SDL_MouseWheelEvent,
  jaxis: e.SDL_JoyAxisEvent,
  jball: e.SDL_JoyBallEvent,
  jhat: e.SDL_JoyHatEvent,
  jbutton: e.SDL_JoyButtonEvent,
  jdevice: e.SDL_JoyDeviceEvent,
  jbattery: e.SDL_JoyBatteryEvent,
  caxis: e.SDL_ControllerAxisEvent,
  cbutton: e.SDL_ControllerButtonEvent,
  cdevice: e.SDL_ControllerDeviceEvent,
  ctouchpad: e.SDL_ControllerTouchpadEvent,
  csensor: e.SDL_ControllerSensorEvent,
  adevice: e.SDL_AudioDeviceEvent,
  sensor: e.SDL_SensorEvent,
  quit: e.SDL_QuitEvent,
  user: e.SDL_UserEvent,
  syswm: e.SDL_SysWMEvent,
  tfinger: e.SDL_TouchFingerEvent,
  mgesture: e.SDL_MultiGestureEvent,
  dgesture: e.SDL_DollarGestureEvent,
  drop: e.SDL_DropEvent,
  padding: ArrayType('Uint8', ref.sizeof.pointer <= 8 ? 56 : ref.sizeof.pointer == 16 ? 64 : 3 * ref.sizeof.pointer)
});

push_functions({
  'SDL_GetEventState': function(type) {
    return l.SDL_EventState(type, e.SDL_QUERY);
  }
});

push_export({
  'SDL_PumpEvents': ['void', []],
  'SDL_PeepEvents': ['int', ['void', 'int', 'int', 'Uint32', 'Uint32']],
  'SDL_HasEvent': ['int', ['Uint32']],
  'SDL_HasEvents': ['int', ['Uint32', 'Uint32']],
  'SDL_FlushEvent': ['void', ['Uint32']],
  'SDL_FlushEvents': ['void', ['Uint32', 'Uint32']],
  'SDL_PollEvent': ['int', ['void*']],
  'SDL_WaitEvent': ['int', ['void*']],
  'SDL_WaitEventTimeout': ['int', ['void*', 'int']],
  'SDL_PushEvent': ['int', ['void*']],
  'SDL_SetEventFilter': ['void', ['void*', 'void*']],
  'SDL_GetEventFilter': ['int', ['void**', 'void**']],
  'SDL_AddEventWatch': ['void', ['void*', 'void*']],
  'SDL_DelEventWatch': ['void', ['void*', 'void*']],
  'SDL_EventState': ['Uint8', ['Uint32', 'int']],
  'SDL_RegisterEvents': ['Uint32', ['int']]
});
