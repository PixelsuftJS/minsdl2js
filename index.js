const api = require('./api');
require('./sdl2');
require('./stdinc');
require('./version');
require('./atomic');
require('./audio');
require('./assert');
require('./blendmode');
require('./error');
require('./keyboard');
require('./events');
require('./joystick');
require('./gamecontroller');
require('./haptic');
require('./hidapi');
require('./hints');
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
exports.load_sdl2_library = function(library_path, ...ignore_list) {
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

exports.load_sdl2_image_library = function(library_path, ...ignore_list) {
  api.image_library = api.ffi.Library(library_path, api.clear_ignore(require('./image').library_exports, ignore_list));
  return api.image_library;
}
exports.export_sdl2_image_library = function(export_obj) {
  Object.entries(require('./image').library_exports).forEach(([key, value]) => {
    eval('export_obj.' + key + ' = api.image_library.' + key);
  });
  return export_obj;
}

exports.load_sdl2_ttf_library = function(library_path, ...ignore_list) {
  api.ttf_library = api.ffi.Library(library_path, api.clear_ignore(require('./ttf').library_exports, ignore_list));
  return api.ttf_library;
}
exports.export_sdl2_ttf_library = function(export_obj) {
  Object.entries(require('./ttf').library_exports).forEach(([key, value]) => {
    eval('export_obj.' + key + ' = api.ttf_library.' + key);
  });
  return export_obj;
}

exports.load_sdl2_mixer_library = function(library_path, ...ignore_list) {
  api.mixer_library = api.ffi.Library(library_path, api.clear_ignore(require('./mixer').library_exports, ignore_list));
  return api.mixer_library;
}
exports.export_sdl2_mixer_library = function(export_obj) {
  Object.entries(require('./mixer').library_exports).forEach(([key, value]) => {
    eval('export_obj.' + key + ' = api.mixer_library.' + key);
  });
  return export_obj;
}

exports.load_sdl2_net_library = function(library_path, ...ignore_list) {
  api.net_library = api.ffi.Library(library_path, api.clear_ignore(require('./net').library_exports, ignore_list));
  Object.entries(require('./net').library_functions).forEach(([key, value]) => {
    eval('api.net_library.' + key + ' = value');
  });
  return api.net_library;
}
exports.export_sdl2_net_library = function(export_obj) {
  Object.entries(require('./net').library_exports).forEach(([key, value]) => {
    eval('export_obj.' + key + ' = api.net_library.' + key);
  });
  Object.entries(require('./net').library_functions).forEach(([key, value]) => {
    eval('export_obj.' + key + ' = value');
  });
  return export_obj;
}

exports.load_sdl2_gfx_library = function(library_path, ...ignore_list) {
  api.gfx_library = api.ffi.Library(library_path, api.clear_ignore(require('./gfx').library_exports, ignore_list));
  return api.gfx_library;
}
exports.export_sdl2_gfx_library = function(export_obj) {
  Object.entries(require('./gfx').library_exports).forEach(([key, value]) => {
    eval('export_obj.' + key + ' = api.gfx_library.' + key);
  });
  return export_obj;
}

exports.load_sdl2_sound_library = function(library_path, ...ignore_list) {
  api.sound_library = api.ffi.Library(library_path, api.clear_ignore(require('./sound').library_exports, ignore_list));
  return api.sound_library;
}
exports.export_sdl2_sound_library = function(export_obj) {
  Object.entries(require('./sound').library_exports).forEach(([key, value]) => {
    eval('export_obj.' + key + ' = api.sound_library.' + key);
  });
  return export_obj;
}

exports.sdl2 = api;
