const {
  e,
  ref,
  Struct,
  Func,
  ArrayType,
  defines,
  en,
  push_export
} = require('./api');

e.SDL_GPU_VERSION_MAJOR = 0;
e.SDL_GPU_VERSION_MINOR = 12;
e.SDL_GPU_VERSION_PATCH = 0;

e.GPU_bool = defines['GPU_USE_INT_BOOL'] ? 'int' : 'bool';

e.SDL_GPU_BITNESS = defines['SDL_GPU_BITNESS'] || process.arch.endsWith('64') ? 64 : 32;
e.GPU_FALSE = 0;
e.GPU_TRUE = 1;

e.GPU_RENDERER_ORDER_MAX = 10;
e.GPU_RENDERER_UNKNOWN = 0;
e.GPU_RENDERER_OPENGL_1_BASE = 1;
e.GPU_RENDERER_OPENGL_1 = 2;
e.GPU_RENDERER_OPENGL_2 = 3;
e.GPU_RENDERER_OPENGL_3 = 4;
e.GPU_RENDERER_OPENGL_4 = 5;
e.GPU_RENDERER_GLES_1 = 11;
e.GPU_RENDERER_GLES_2 = 12;
e.GPU_RENDERER_GLES_3 = 13;
e.GPU_RENDERER_D3D9 = 21;
e.GPU_RENDERER_D3D10 = 22;
e.GPU_RENDERER_D3D11 = 23;
e.GPU_RENDERER_CUSTOM_0 = 1000;

e.GPU_MODEL = 0;
e.GPU_VIEW = 1;
e.GPU_PROJECTION = 2;

e.GPU_NEVER = en(0x0200);
e.GPU_LESS = en(0x0201);
e.GPU_EQUAL = en(0x0202);
e.GPU_LEQUAL = en(0x0203);
e.GPU_GREATER = en(0x0204);
e.GPU_NOTEQUAL = en(0x0205);
e.GPU_GEQUAL = en(0x0206);
e.GPU_ALWAYS = en(0x0207);

e.GPU_FUNC_ZERO = en(0);
e.GPU_FUNC_ONE = en(1);
e.GPU_FUNC_SRC_COLOR = en(0x0300);
e.GPU_FUNC_DST_COLOR = en(0x0306);
e.GPU_FUNC_ONE_MINUS_SRC = en(0x0301);
e.GPU_FUNC_ONE_MINUS_DST = en(0x0307);
e.GPU_FUNC_SRC_ALPHA = en(0x0302);
e.GPU_FUNC_DST_ALPHA = en(0x0304);
e.GPU_FUNC_ONE_MINUS_SRC_ALPHA = en(0x0303);
e.GPU_FUNC_ONE_MINUS_DST_ALPHA = en(0x0305);

e.GPU_EQ_ADD = en(0x8006);
e.GPU_EQ_SUBTRACT = en(0x800A);
e.GPU_EQ_REVERSE_SUBTRACT = en(0x800B);

e.GPU_BLEND_NORMAL = en(0);
e.GPU_BLEND_PREMULTIPLIED_ALPHA = en(1);
e.GPU_BLEND_MULTIPLY = en(2);
e.GPU_BLEND_ADD = en(3);
e.GPU_BLEND_SUBTRACT = en(4);
e.GPU_BLEND_MOD_ALPHA = en(5);
e.GPU_BLEND_SET_ALPHA = en(6);
e.GPU_BLEND_SET = en(7);
e.GPU_BLEND_NORMAL_KEEP_ALPHA = en(8);
e.GPU_BLEND_NORMAL_ADD_ALPHA = en(9);
e.GPU_BLEND_NORMAL_FACTOR_ALPHA = en(10);

e.GPU_FILTER_NEAREST = en(0);
e.GPU_FILTER_LINEAR = en(1);
e.GPU_FILTER_LINEAR_MIPMAP = en(2);

e.GPU_SNAP_NONE = en(0);
e.GPU_SNAP_POSITION = en(1);
e.GPU_SNAP_DIMENSIONS = en(2);
e.GPU_SNAP_POSITION_AND_DIMENSIONS = en(3);

e.GPU_WRAP_NONE = en(0);
e.GPU_WRAP_REPEAT = en(1);
e.GPU_WRAP_MIRRORED = en(2);

e.GPU_FORMAT_LUMINANCE = en(1);
e.GPU_FORMAT_LUMINANCE_ALPHA = en(2);
e.GPU_FORMAT_RGB = en(3);
e.GPU_FORMAT_RGBA = en(4);
e.GPU_FORMAT_ALPHA = en(5);
e.GPU_FORMAT_RG = en(6);
e.GPU_FORMAT_YCbCr422 = en(7);
e.GPU_FORMAT_YCbCr420P = en(8);
e.GPU_FORMAT_BGR = en(9);
e.GPU_FORMAT_BGRA = en(10);
e.GPU_FORMAT_ABGR = en(11);

e.GPU_FILE_AUTO = en(0);
e.GPU_FILE_PNG = en();
e.GPU_FILE_BMP = en();
e.GPU_FILE_TGA = en();

e.GPU_BlendMode = Struct({
  source_color: 'int',
  dest_color: 'int',
  source_alpha: 'int',
  dest_alpha: 'int',
  color_equation: 'int',
  alpha_equation: 'int'
});
e.GPU_Rect = Struct({
  x: 'float',
  y: 'float',
  w: 'float',
  h: 'float'
});
if (true) {
  var _tmp = {
    name: 'string',
    renderer: 'Uint32',
    major_version: 'int',
    minor_version: 'int'
  };
  if (e.SDL_GPU_BITNESS == 64) {
    _tmp.padding = ArrayType('char', 4);
  }
  e.GPU_RendererID = Struct(_tmp);
}
e.GPU_Image = Struct({
  renderer: 'void*',
  context_target: 'void*',
  target: 'void*',
  data: 'void*',
  w: 'int',
  h: 'int',
  format: 'int',
  num_layers: 'int',
  bytes_per_pixel: 'int',
  base_w: 'Uint16',
  base_h: 'Uint16',
  texture_w: 'Uint16',
  texture_h: 'Uint16',
  anchor_x: 'float',
  anchor_y: 'float',
  color: e.SDL_Color,
  blend_mode: e.GPU_BlendMode,
  filter_mode: 'int',
  snap_mode: 'int',
  wrap_mode_x: 'int',
  wrap_mode_y: 'int',
  refcount: 'int',
  using_virtual_resolution: e.GPU_bool,
  has_mipmaps: e.GPU_bool,
  use_blending: e.GPU_bool,
  is_alias: e.GPU_bool
});
e.GPU_Camera = Struct({
  x: 'float',
  y: 'float',
  z: 'float',
  angle: 'float',
  zoom_x: 'float',
  zoom_y: 'float',
  z_near: 'float',
  z_far: 'float',
  use_centered_origin: e.GPU_bool,
  padding: ArrayType('char', e.SDL_GPU_BITNESS == 64 ? 7 : 3)
});
e.GPU_ShaderBlock = Struct({
  position_loc: 'int',
  texcoord_loc: 'int',
  color_loc: 'int',
  modelViewProjection_loc: 'int'
});
e.GPU_MatrixStack = Struct({
  storage_size: 'Uint',
  size: 'Uint',
  matrix: 'float**'
});
e.GPU_Context = Struct({
  context: 'void*',
  active_target: 'void*',
  current_shader_block: e.GPU_ShaderBlock,
  default_textured_shader_block: e.GPU_ShaderBlock,
  default_untextured_shader_block: e.GPU_ShaderBlock,
  windowID: 'Uint32',
  window_w: 'int',
  window_h: 'int',
  drawable_w: 'int',
  drawable_h: 'int',
  stored_window_w: 'int',
  stored_window_h: 'int',
  default_textured_vertex_shader_id: 'Uint32',
  default_textured_fragment_shader_id: 'Uint32',
  default_untextured_vertex_shader_id: 'Uint32',
  default_untextured_fragment_shader_id: 'Uint32',
  current_shader_program: 'Uint32',
  default_textured_shader_program: 'Uint32',
  default_untextured_shader_program: 'Uint32',
  shapes_blend_mode: e.GPU_BlendMode,
  line_thickness: 'float',
  refcount: 'int',
  data: 'void*',
  failed: e.GPU_bool,
  use_texturing: e.GPU_bool,
  shapes_use_blending: e.GPU_bool,
  padding: ArrayType('char', e.SDL_GPU_BITNESS == 64 ? 5 : 1)
});
e.GPU_Target = Struct({
  renderer: 'void*',
  context_target: 'void*',
  image: ref.refType(e.GPU_Image),
  data: 'void*',
  w: 'Uint16',
  h: 'Uint16',
  base_w: 'Uint16',
  base_h: 'Uint16',
  clip_rect: e.GPU_Rect,
  color: e.SDL_Color,
  viewport: e.GPU_Rect,
  matrix_mode: 'int',
  projection_matrix: e.GPU_MatrixStack,
  view_matrix: e.GPU_MatrixStack,
  model_matrix: e.GPU_MatrixStack,
  camera: e.GPU_Camera,
  using_virtual_resolution: e.GPU_bool,
  use_clip_rect: e.GPU_bool,
  use_color: e.GPU_bool,
  use_camera: e.GPU_bool,
  depth_function: 'int',
  context: ref.refType(e.GPU_Context),
  refcount: 'int',
  use_depth_test: e.GPU_bool,
  use_depth_write: e.GPU_bool,
  is_alias: e.GPU_bool,
  padding: ArrayType('char', 1)
});

exports.library_exports = {

};