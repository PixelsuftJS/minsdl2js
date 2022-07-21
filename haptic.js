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

e.SDL_HAPTIC_CONSTANT = 1 << 0;
e.SDL_HAPTIC_SINE = 1 << 1;
e.SDL_HAPTIC_LEFTRIGHT = 1 << 2;
e.SDL_HAPTIC_TRIANGLE = 1 << 3;
e.SDL_HAPTIC_SAWTOOTHUP = 1 << 4;
e.SDL_HAPTIC_SAWTOOTHDOWN = 1 << 5;
e.SDL_HAPTIC_RAMP = 1 << 6;
e.SDL_HAPTIC_SPRING = 1 << 7;
e.SDL_HAPTIC_DAMPER = 1 << 8;
e.SDL_HAPTIC_INERTIA = 1 << 9;
e.SDL_HAPTIC_FRICTION = 1 << 10;
e.SDL_HAPTIC_CUSTOM = 1 << 11;
e.SDL_HAPTIC_GAIN = 1 << 12;
e.SDL_HAPTIC_AUTOCENTER = 1 << 13;
e.SDL_HAPTIC_STATUS = 1 << 14;
e.SDL_HAPTIC_PAUSE = 1 << 15;
e.SDL_HAPTIC_POLAR = 0;
e.SDL_HAPTIC_CARTESIAN = 1;
e.SDL_HAPTIC_SPHERICAL = 2;
e.SDL_HAPTIC_STEERING_AXIS = 3;
e.SDL_HAPTIC_INFINITY = 4294967295;

e.SDL_HapticDirection = Struct({
  type: 'Uint8',
  dir: 'int32*'
});
e.SDL_HapticConstant = Struct({
  type: 'Uint16',
  direction: e.SDL_HapticDirection,
  length: 'Uint32',
  delay: 'Uint16',
  button: 'Uint16',
  interval: 'Uint16',
  level: 'int16',
  attack_length: 'Uint16',
  attack_level: 'Uint16',
  fade_length: 'Uint16',
  fade_level: 'Uint16'
});
e.SDL_HapticPeriodic = Struct({
  type: 'Uint16',
  direction: e.SDL_HapticDirection,
  length: 'Uint32',
  delay: 'Uint16',
  button: 'Uint16',
  interval: 'Uint16',
  period: 'Uint16',
  magnitude: 'int16',
  offset: 'int16',
  phase: 'Uint16',
  attack_length: 'Uint16',
  attack_level: 'Uint16',
  fade_length: 'Uint16',
  fade_level: 'Uint16'
});
e.SDL_HapticCondition = Struct({
  type: 'Uint16',
  direction: e.SDL_HapticDirection,
  length: 'Uint32',
  delay: 'Uint16',
  button: 'Uint16',
  interval: 'Uint16',
  right_sat: 'Uint16*',
  left_sat: 'Uint16*',
  right_coeff: 'int16*',
  left_coeff: 'int16*',
  deadband: 'Uint16*',
  center: 'int16*'
});
e.SDL_HapticRamp = Struct({
  type: 'Uint16',
  direction: e.SDL_HapticDirection,
  length: 'Uint32',
  delay: 'Uint16',
  button: 'Uint16',
  interval: 'Uint16',
  start: 'int16',
  end: 'int16',
  attack_length: 'Uint16',
  attack_level: 'Uint16',
  fade_length: 'Uint16',
  fade_level: 'Uint16'
});
e.SDL_HapticLeftRight = Struct({
  type: 'Uint16',
  length: 'Uint32',
  delay: 'Uint16',
  large_magnitude: 'Uint16',
  small_magnitude: 'Uint16'
});
e.SDL_HapticCustom = Struct({
  type: 'Uint16',
  direction: e.SDL_HapticDirection,
  length: 'Uint32',
  delay: 'Uint16',
  button: 'Uint16',
  interval: 'Uint16',
  channels: 'Uint8',
  period: 'Uint16',
  samples: 'Uint16',
  data: 'Uint16*',
  attack_length: 'Uint16',
  attack_level: 'Uint16',
  fade_length: 'Uint16',
  fade_level: 'Uint16'
});
e.SDL_HapticEffect = Struct({
  type: 'Uint16',
  constant: e.SDL_HapticConstant,
  periodic: e.SDL_HapticPeriodic,
  condition: e.SDL_HapticCondition,
  ramp: e.SDL_HapticRamp,
  leftright: e.SDL_HapticLeftRight,
  custom: e.SDL_HapticCustom
});

push_export({
  // TODO: blah blah blah
});
