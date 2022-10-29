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

e.GPU_FEATURE_NON_POWER_OF_TWO = 0x1;
e.GPU_FEATURE_RENDER_TARGETS = 0x2;
e.GPU_FEATURE_BLEND_EQUATIONS = 0x4;
e.GPU_FEATURE_BLEND_FUNC_SEPARATE = 0x8;
e.GPU_FEATURE_BLEND_EQUATIONS_SEPARATE = 0x10;
e.GPU_FEATURE_GL_BGR = 0x20;
e.GPU_FEATURE_GL_BGRA = 0x40;
e.GPU_FEATURE_GL_ABGR = 0x80;
e.GPU_FEATURE_VERTEX_SHADER = 0x100;
e.GPU_FEATURE_FRAGMENT_SHADER = 0x200;
e.GPU_FEATURE_PIXEL_SHADER = 0x200;
e.GPU_FEATURE_GEOMETRY_SHADER = 0x400;
e.GPU_FEATURE_WRAP_REPEAT_MIRRORED = 0x800;
e.GPU_FEATURE_CORE_FRAMEBUFFER_OBJECTS = 0x1000;
e.GPU_FEATURE_ALL_BASE = e.GPU_FEATURE_RENDER_TARGETS;
e.GPU_FEATURE_ALL_BLEND_PRESETS = e.GPU_FEATURE_BLEND_EQUATIONS | e.GPU_FEATURE_BLEND_FUNC_SEPARATE;
e.GPU_FEATURE_ALL_GL_FORMATS = e.GPU_FEATURE_GL_BGR | e.GPU_FEATURE_GL_BGRA | e.GPU_FEATURE_GL_ABGR;
e.GPU_FEATURE_BASIC_SHADERS = e.GPU_FEATURE_FRAGMENT_SHADER | e.GPU_FEATURE_VERTEX_SHADER;
e.GPU_FEATURE_ALL_SHADERS = e.GPU_FEATURE_FRAGMENT_SHADER | e.GPU_FEATURE_VERTEX_SHADER | e.GPU_FEATURE_GEOMETRY_SHADER;

e.GPU_INIT_ENABLE_VSYNC = 0x1;
e.GPU_INIT_DISABLE_VSYNC = 0x2;
e.GPU_INIT_DISABLE_DOUBLE_BUFFER = 0x4;
e.GPU_INIT_DISABLE_AUTO_VIRTUAL_RESOLUTION = 0x8;
e.GPU_INIT_REQUEST_COMPATIBILITY_PROFILE = 0x10;
e.GPU_INIT_USE_ROW_BY_ROW_TEXTURE_UPLOAD_FALLBACK = 0x20;
e.GPU_INIT_USE_COPY_TEXTURE_UPLOAD_FALLBACK = 0x40;
e.GPU_DEFAULT_INIT_FLAGS = 0;
e.GPU_NONE = 0x0;

e.GPU_POINTS = 0x0;
e.GPU_LINES = 0x1;
e.GPU_LINE_LOOP = 0x2;
e.GPU_LINE_STRIP = 0x3;
e.GPU_TRIANGLES = 0x4;
e.GPU_TRIANGLE_STRIP = 0x5;
e.GPU_TRIANGLE_FAN = 0x6;

e.GPU_BATCH_XY = 0x1;
e.GPU_BATCH_XYZ = 0x2;
e.GPU_BATCH_ST = 0x4;
e.GPU_BATCH_RGB = 0x8;
e.GPU_BATCH_RGBA = 0x10;
e.GPU_BATCH_RGB8 = 0x20;
e.GPU_BATCH_RGBA8 = 0x40;
e.GPU_BATCH_XY_ST = e.GPU_BATCH_XY | e.GPU_BATCH_ST;
e.GPU_BATCH_XYZ_ST = e.GPU_BATCH_XYZ | e.GPU_BATCH_ST;
e.GPU_BATCH_XY_RGB = e.GPU_BATCH_XY | e.GPU_BATCH_RGB;
e.GPU_BATCH_XYZ_RGB = e.GPU_BATCH_XYZ | e.GPU_BATCH_RGB;
e.GPU_BATCH_XY_RGBA = e.GPU_BATCH_XY | e.GPU_BATCH_RGBA;
e.GPU_BATCH_XYZ_RGBA = e.GPU_BATCH_XYZ | e.GPU_BATCH_RGBA;
e.GPU_BATCH_XY_ST_RGBA = e.GPU_BATCH_XY | e.GPU_BATCH_ST | e.GPU_BATCH_RGBA;
e.GPU_BATCH_XYZ_ST_RGBA = e.GPU_BATCH_XYZ | e.GPU_BATCH_ST | e.GPU_BATCH_RGBA;
e.GPU_BATCH_XY_RGB8 = e.GPU_BATCH_XY | e.GPU_BATCH_RGB8;
e.GPU_BATCH_XYZ_RGB8 = e.GPU_BATCH_XYZ | e.GPU_BATCH_RGB8;
e.GPU_BATCH_XY_RGBA8 = e.GPU_BATCH_XY | e.GPU_BATCH_RGBA8;
e.GPU_BATCH_XYZ_RGBA8 = e.GPU_BATCH_XYZ | e.GPU_BATCH_RGBA8;
e.GPU_BATCH_XY_ST_RGBA8 = e.GPU_BATCH_XY | e.GPU_BATCH_ST | e.GPU_BATCH_RGBA8;
e.GPU_BATCH_XYZ_ST_RGBA8 = e.GPU_BATCH_XYZ | e.GPU_BATCH_ST | e.GPU_BATCH_RGBA8;

e.GPU_FLIP_NONE = 0x0;
e.GPU_FLIP_HORIZONTAL = 0x1;
e.GPU_FLIP_VERTICAL = 0x2;

e.GPU_TYPE_BYTE = 0x1400;
e.GPU_TYPE_UNSIGNED_BYTE = 0x1401;
e.GPU_TYPE_SHORT = 0x1402;
e.GPU_TYPE_UNSIGNED_SHORT = 0x1403;
e.GPU_TYPE_INT = 0x1404;
e.GPU_TYPE_UNSIGNED_INT = 0x1405;
e.GPU_TYPE_FLOAT = 0x1406;
e.GPU_TYPE_DOUBLE = 0x140A;

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

e.GPU_VERTEX_SHADER = en(0);
e.GPU_FRAGMENT_SHADER = en(1); // why the same? maybe bug?
e.GPU_PIXEL_SHADER = en(1);
e.GPU_GEOMETRY_SHADER = en(2);

e.GPU_LANGUAGE_NONE = en(0);
e.GPU_LANGUAGE_ARB_ASSEMBLY = en(1);
e.GPU_LANGUAGE_GLSL = en(2);
e.GPU_LANGUAGE_GLSLES = en(3);
e.GPU_LANGUAGE_HLSL = en(4);
e.GPU_LANGUAGE_CG = en(5);

e.GPU_ERROR_NONE = en(0);
e.GPU_ERROR_BACKEND_ERROR = en(1);
e.GPU_ERROR_DATA_ERROR = en(2);
e.GPU_ERROR_USER_ERROR = en(3);
e.GPU_ERROR_UNSUPPORTED_FUNCTION = en(4);
e.GPU_ERROR_NULL_ARGUMENT = en(5);
e.GPU_ERROR_FILE_NOT_FOUND = en(6);

e.GPU_DEBUG_LEVEL_0 = en(0);
e.GPU_DEBUG_LEVEL_1 = en(1);
e.GPU_DEBUG_LEVEL_2 = en(2);
e.GPU_DEBUG_LEVEL_3 = en(3);
e.GPU_DEBUG_LEVEL_MAX = en(3);

e.GPU_LOG_INFO = en(0);
e.GPU_LOG_WARNING = en();
e.GPU_LOG_ERROR = en();

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
e.GPU_AttributeFormat = Struct({
  num_elems_per_value: 'int',
  type: 'Uint32',
  stride_bytes: 'int',
  offset_bytes: 'int',
  is_per_sprite: e.GPU_bool,
  normalize: e.GPU_bool,
  padding: ArrayType('char', 2)
});
if (true) {
  var _tmp = {
    values: 'void*',
    format: e.GPU_AttributeFormat,
    location: 'int'
  };
  if (e.SDL_GPU_BITNESS) {
    _tmp.padding = ArrayType('char', 4);
  }
  e.GPU_Attribute = Struct(_tmp);
}
e.GPU_AttributeSource = Struct({
  next_value: 'void*',
  per_vertex_storage: 'void*',
  num_values: 'int',
  per_vertex_storage_stride_bytes: 'int',
  per_vertex_storage_offset_bytes: 'int',
  per_vertex_storage_size: 'int',
  attribute: e.GPU_Attribute,
  enabled: e.GPU_bool,
  padding: ArrayType('char', e.SDL_GPU_BITNESS == 64 ? 7 : 3)
});
e.GPU_ErrorObject = Struct({
  function: 'string',
  details: 'string',
  error: 'int'
});
e.GPU_RendererImpl = Struct({
  Init: Func(ref.refType(e.GPU_Target), ['void*', e.GPU_RendererID, 'Uint16', 'Uint16', 'Uint32']),
  CreateTargetFromWindow: Func(ref.refType(e.GPU_Target), ['void*', 'Uint32', 'void*']),
  SetActiveTarget: Func(e.GPU_bool, ['void*', 'void*']),
  CreateAliasTarget: Func(ref.refType(e.GPU_Target), ['void*', 'void*']),
  MakeCurrent: Func('void', ['void*', 'void*', 'Uint32']),
  SetAsCurrent: Func('void', ['void*']),
  ResetRendererState: Func('void', ['void*']),
  AddDepthBuffer: Func(e.GPU_bool, ['void*', 'void*']),
  SetWindowResolution: Func(e.GPU_bool, ['void*', 'Uint16', 'Uint16']),
  SetVirtualResolution: Func('void', ['void*', 'void*', 'Uint16', 'Uint16']),
  UnsetVirtualResolution: Func('void', ['void*', 'void*']),
  Quit: Func('void', ['void*']),
  SetFullscreen: Func(e.GPU_bool, ['void*', e.GPU_bool, e.GPU_bool]),
  SetCamera: Func(e.GPU_Camera, ['void*', 'void*', 'void*']),
  CreateImage: Func(ref.refType(e.GPU_Image), ['void*', 'Uint16', 'Uint16', 'int']),
  CreateImageUsingTexture: Func(ref.refType(e.GPU_Image), ['void*', 'Uint*', e.GPU_bool]),
  CreateAliasImage: Func(ref.refType(e.GPU_Image), ['void*', 'void*']),
  SaveImage: Func(e.GPU_bool, ['void*', 'void*']),
  CopyImage: Func(ref.refType(e.GPU_Image), ['void*', 'void*']),
  UpdateImage: Func('void', ['void*', 'void*', 'void*', 'void*', 'void*']),
  UpdateImageBytes: Func('void', ['void*', 'void*', 'void*', 'uchar*', 'int']),
  ReplaceImage: Func(e.GPU_bool, ['void*', 'void*', 'void*', 'void*']),
  CopyImageFromSurface: Func(ref.refType(e.GPU_Image), ['void*', 'void*', 'void*']),
  CopyImageFromTarget: Func(ref.refType(e.GPU_Image), ['void*', 'void*']),
  CopySurfaceFromTarget: Func(ref.refType(e.SDL_Surface), ['void*', 'void*']),
  CopySurfaceFromImage: Func(ref.refType(e.SDL_Surface), ['void*', 'void*']),
  FreeImage: Func('void', ['void*', 'void*']),
  GetTarget: Func(ref.refType(e.GPU_Target), ['void*', 'void*']),
  FreeTarget: Func('void', ['void*', 'void*']),
  Blit: Func('void', ['void*', 'void*', 'void*', 'void*', 'float', 'float']),
  BlitRotate: Func('void', ['void*', 'void*', 'void*', 'void*', 'float', 'float', 'float']),
  BlitScale: Func('void', ['void*', 'void*', 'void*', 'void*', 'float', 'float', 'float', 'float']),
  BlitTransform: Func('void', ['void*', 'void*', 'void*', 'void*', 'float', 'float', 'float', 'float', 'float']),
  BlitTransformX: Func('void', ['void*', 'void*', 'void*', 'void*', 'float', 'float', 'float', 'float', 'float', 'float', 'float']),
  PrimitiveBatchV: Func('void', ['void*', 'void*', 'void*', 'Uint32', 'Ushort', 'void*', 'Uint', 'Ushort*', 'Uint32']),
  GenerateMipmaps: Func('void', ['void*', 'void*']),
  SetClip: Func(e.GPU_Rect, ['void*', 'void*', 'int16', 'int16', 'Uint16', 'Uint16']),
  UnsetClip: Func('void', ['void*', 'void*']),
  GetPixel: Func(e.SDL_Color, ['void*', 'void*', 'int16', 'int16']),
  SetImageFilter: Func('void', ['void*', 'void*', 'int']),
  SetWrapMode: Func('void', ['void*', 'void*', 'int', 'int']),
  GetTextureHandle: Func('Uint*', ['void*', 'void*']),
  ClearRGBA: Func('void', ['void*', 'void*', 'Uint8', 'Uint8', 'Uint8', 'Uint8']),
  FlushBlitBuffer: Func('void', ['void*']),
  Flip: Func('void', ['void*', 'void*']),
  CreateShaderProgram: Func('Uint32', ['void*']),
  FreeShaderProgram: Func('void', ['void*', 'void*', 'Uint32']),
  CompileShader_RW: Func('Uint32', ['void*', 'int', 'void*', e.GPU_bool]),
  CompileShader: Func('Uint32', ['void*', 'int', 'string']),
  FreeShader: Func('void', ['void*', 'Uint32']),
  AttachShader: Func('void', ['void*', 'Uint32', 'Uint32']),
  DetachShader: Func('void', ['void*', 'Uint32', 'Uint32']),
  LinkShaderProgram: Func(e.GPU_bool, ['void*', 'Uint32']),
  ActivateShaderProgram: Func('void', ['void*', 'Uint32', 'Uint32']),
  DeactivateShaderProgram: Func('void', ['void*']),
  GetShaderMessage: Func('string', ['void*']),
  GetAttributeLocation: Func('int', ['void*', 'Uint32', 'string']),
  GetUniformLocation: Func('int', ['void*', 'Uint32', 'string']),
  LoadShaderBlock: Func(e.GPU_ShaderBlock, ['void*', 'Uint32', 'string', 'string', 'string', 'string']),
  SetShaderBlock: Func('void', ['void*', e.GPU_ShaderBlock]),
  SetShaderImage: Func('void', ['void*', 'void*', 'int', 'int']),
  GetUniformiv: Func('void', ['void*', 'Uint32', 'int', 'int*']),
  SetUniformi: Func('void', ['void*', 'int', 'int']),
  SetUniformiv: Func('void', ['void*', 'int', 'int', 'int', 'int*']),
  GetUniformiv: Func('void', ['void*', 'Uint32', 'int', 'Uint*']),
  SetUniformui: Func('void', ['void*', 'int', 'Uint']),
  SetUniformuiv: Func('void', ['void*', 'int', 'int', 'int', 'Uint*']),
  GetUniformfv: Func('void', ['void*', 'Uint32', 'int', 'float*']),
  SetUniformf: Func('void', ['void*', 'int', 'float']),
  SetUniformfv: Func('void', ['void*', 'int', 'int', 'int', 'float*']),
  SetUniformMatrixfv: Func('void', ['void*', 'int', 'int', 'int', 'int', e.GPU_bool, 'float*']),
  SetAttributef: Func('void', ['void*', 'int', 'float']),
  SetAttributei: Func('void', ['void*', 'int', 'int']),
  SetAttributeui: Func('void', ['void*', 'int', 'Uint']),
  SetAttributefv: Func('void', ['void*', 'int', 'int', 'float*']),
  SetAttributeiv: Func('void', ['void*', 'int', 'int', 'int*']),
  SetAttributeuiv: Func('void', ['void*', 'int', 'int', 'Uint*']),
  SetAttributeSource: Func('void', ['void*', 'int', e.GPU_Attribute]),
  SetLineThickness: Func('float', ['void*', 'float']),
  GetLineThickness: Func('float', ['void*']),
  Pixel: Func('void', ['void*', 'void*', 'float', 'float', e.SDL_Color]),
  Line: Func('void', ['void*', 'void*', 'float', 'float', 'float', 'float', e.SDL_Color]),
  Arc: Func('void', ['void*', 'void*', 'float', 'float', 'float', 'float', 'float', e.SDL_Color]),
  ArcFilled: Func('void', ['void*', 'void*', 'float', 'float', 'float', 'float', 'float', e.SDL_Color]),
  Circle: Func('void', ['void*', 'void*', 'float', 'float', 'float', e.SDL_Color]),
  CircleFilled: Func('void', ['void*', 'void*', 'float', 'float', 'float', e.SDL_Color]),
  Ellipse: Func('void', ['void*', 'void*', 'float', 'float', 'float', 'float', 'float', e.SDL_Color]),
  EllipseFilled: Func('void', ['void*', 'void*', 'float', 'float', 'float', 'float', 'float', e.SDL_Color]),
  SectorFilled: Func('void', ['void*', 'void*', 'float', 'float', 'float', 'float', 'float', 'float', e.SDL_Color]),
  Tri: Func('void', ['void*', 'void*', 'float', 'float', 'float', 'float', 'float', 'float', e.SDL_Color]),
  TriFilled: Func('void', ['void*', 'void*', 'float', 'float', 'float', 'float', 'float', 'float', e.SDL_Color]),
  Rectangle: Func('void', ['void*', 'void*', 'float', 'float', 'float', 'float', e.SDL_Color]),
  RectangleFilled: Func('void', ['void*', 'void*', 'float', 'float', 'float', 'float', e.SDL_Color]),
  RectangleRound: Func('void', ['void*', 'void*', 'float', 'float', 'float', 'float', 'float', e.SDL_Color]),
  RectangleRoundFilled: Func('void', ['void*', 'void*', 'float', 'float', 'float', 'float', 'float', e.SDL_Color]),
  Polygon: Func('void', ['void*', 'void*', 'Uint', 'float*', e.SDL_Color]),
  Polyline: Func('void', ['void*', 'void*', 'Uint', 'float*', e.SDL_Color, e.GPU_bool]),
  PolygonFilled: Func('void', ['void*', 'void*', 'Uint', 'float*', e.SDL_Color]),
});
e.GPU_Renderer = Struct({
  id: e.GPU_RendererID,
  requested_id: e.GPU_RendererID,
  SDL_init_flags: 'Uint32',
  GPU_init_flags: 'Uint32',
  shader_language: 'int',
  min_shader_version: 'int',
  max_shader_version: 'int',
  enabled_features: 'Uint32',
  current_context_target: ref.refType(e.GPU_Target),
  default_image_anchor_x: 'float',
  default_image_anchor_y: 'float',
  impl: ref.refType(e.GPU_RendererImpl),
  coordinate_mode: e.GPU_bool,
  padding: ArrayType('char', e.SDL_GPU_BITNESS == 64 ? 7 : 3)
});

e.GPU_GetCompiledVersion = function() {
  return new e.SDL_Version({
    major: e.SDL_GPU_VERSION_MAJOR,
    minor: e.SDL_GPU_VERSION_MINOR,
    patch: e.SDL_GPU_VERSION_PATCH
  });
}

exports.library_exports = {
  'GPU_AddWindowMapping': ['void', ['void*']],
  'GPU_RemoveWindowMapping': ['void', ['Uint32']],
  'GPU_RemoveWindowMappingByTarget': ['void', ['void*']],
  'GPU_GetLinkedVersion': [e.SDL_version, []],
  'GPU_SetInitWindow': ['void', ['Uint32']],
  'GPU_GetInitWindow': ['Uint32', []],
  'GPU_SetPreInitFlags': ['void', ['Uint32']],
  'GPU_GetPreInitFlags': ['Uint32', []],
  'GPU_SetRequiredFeatures': ['void', ['Uint32']],
  'GPU_GetRequiredFeatures': ['Uint32', []],
  'GPU_GetDefaultRendererOrder': ['void', ['int*', 'int*']],
  'GPU_GetRendererOrder': ['void', ['int*', 'int*']],
  'GPU_SetRendererOrder': ['void', ['int', 'int*']],
  'GPU_Init': [ref.refType(e.GPU_Target), ['Uint16', 'Uint16', 'Uint32']],
  'GPU_InitRenderer': [ref.refType(e.GPU_Target), ['Uint32', 'Uint16', 'Uint16', 'Uint32']],
  'GPU_InitRendererByID': [ref.refType(e.GPU_Target), ['int', 'Uint16', 'Uint16', 'Uint32']],
  'GPU_IsFeatureEnabled': [e.GPU_bool, ['Uint32']],
  'GPU_CloseCurrentRenderer': ['void', []],
  'GPU_Quit': ['void', []]
};
