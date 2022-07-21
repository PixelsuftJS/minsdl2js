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

e.SDL_hid_device_info = Struct({
  path: 'string',
  vendor_id: 'Ushort',
  product_id: 'Ushort',
  serial_number: 'Uint16',
  release_number: 'Ushort',
  manufacturer_string: 'Uint16',
  product_string: 'Uint16',
  usage_page: 'Ushort',
  usage: 'Ushort',
  interface_number: 'int',
  interface_class: 'int',
  interface_subclass: 'int',
  interface_protocol: 'int',
  next: 'void*'
});

push_export({
  'SDL_hid_init': ['int', []],
  'SDL_hid_exit': ['int', []],
  'SDL_hid_device_change_count': ['Uint32', []],
  'SDL_hid_enumerate': [ref.refType(e.SDL_hid_device_info), ['Ushort', 'Ushort']],
  'SDL_hid_free_enumeration': ['void', ['void*']],
  'SDL_hid_open': ['void*', ['Ushort', 'Ushort', 'Uint16*']],
  'SDL_hid_open_path': ['void*', ['string', 'int']],
  'SDL_hid_write': ['int', ['void*', 'string', 'size_t']],
  'SDL_hid_read_timeout': ['int', ['void*', 'string', 'size_t', 'int']],
  'SDL_hid_read': ['int', ['void*', 'string', 'size_t']],
  'SDL_hid_set_nonblocking': ['int', ['void*', 'int']],
  'SDL_hid_send_feature_report': ['int', ['void*', 'string', 'size_t']],
  'SDL_hid_get_feature_report': ['int', ['void*', 'string', 'size_t']],
  'SDL_hid_close': ['void', ['void*']],
  'SDL_hid_get_manufacturer_string': ['int', ['void*', 'Uint16*', 'size_t']],
  'SDL_hid_get_product_string': ['int', ['void*', 'Uint16*', 'size_t']],
  'SDL_hid_get_serial_number_string': ['int', ['void*', 'Uint16*', 'size_t']],
  'SDL_hid_get_indexed_string': ['int', ['void*', 'int', 'Uint16*', 'size_t']],
  'SDL_hid_ble_scan': ['void', ['int']]
});
