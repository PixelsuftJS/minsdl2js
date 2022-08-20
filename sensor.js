const {
  e,
  en,
  push_export
} = require('./api');

e.SDL_SENSOR_INVALID = en(-1);
e.SDL_SENSOR_UNKNOWN = en();
e.SDL_SENSOR_ACCEL = en();
e.SDL_SENSOR_GYRO = en();

e.SDL_STANDARD_GRAVITY = 9.80665;

push_export({
  'SDL_LockSensors': ['void', []],
  'SDL_UnlockSensors': ['void', []],
  'SDL_NumSensors': ['int', []],
  'SDL_SensorGetDeviceName': ['string', ['int']],
  'SDL_SensorGetDeviceType': ['int', ['int']],
  'SDL_SensorGetDeviceNonPortableType': ['int', ['int']],
  'SDL_SensorGetDeviceInstanceID': ['int32', ['int']],
  'SDL_SensorOpen': ['void*', ['int']],
  'SDL_SensorFromInstanceID': ['void*', ['int32']],
  'SDL_SensorGetName': ['string', ['void*']],
  'SDL_SensorGetType': ['int', ['void*']],
  'SDL_SensorGetNonPortableType': ['int', ['void*']],
  'SDL_SensorGetInstanceID': ['int32', ['void*']],
  'SDL_SensorGetData': ['int', ['void*', 'float*', 'int']],
  'SDL_SensorClose': ['void', ['void*']],
  'SDL_SensorUpdate': ['void', []]
});
