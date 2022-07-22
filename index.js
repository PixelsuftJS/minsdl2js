const api = require('./api');
require('./sdl2');
require('./stdinc');
require('./version');
require('./atomic');
require('./audio');
require('./assert');
require('./blendmode');
// require('./egl');
require('./error');
require('./keyboard');
require('./events');
require('./gamecontroller');
require('./haptic');
require('./hidapi');
require('./hints');
require('./joystick');
require('./log');
require('./messagebox');
require('./mouse');
require('./mutex');
require('./pixels');
require('./rect');
require('./rwops');
require('./sensor');
require('./shape');
require('./surface');
require('./syswm');
require('./thread');
require('./touch');
require('./video');
require('./render');

// TODO: Fix shitcode (I'm noob in JS)
exports.load_sdl2_library = function(library_path, ignore_list = []) {
  api.ignore_list = ignore_list;
  api.library = api.ffi.Library(library_path, api.join_exports());
  Object.entries(api.join_functions()).forEach(([key, value]) => {
    eval('api.library.' + key + ' = value');
  });
  exports.export_sdl2_library(api.l);
  return api.library;
}
exports.export_sdl2_library = function(export_obj) {
  Object.entries(api.join_exports()).forEach(([key, value]) => {
    eval('export_obj.' + key + ' = api.library.' + key);
  });
  Object.entries(api.join_functions()).forEach(([key, value]) => {
    eval('export_obj.' + key + ' = value');
  });
  return export_obj;
}
exports.sdl2 = api;
