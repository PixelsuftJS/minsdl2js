const {
  e,
  l,
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
e.GPU_Log = function(...args) {
  return l.GPU_LogInfo(...args);
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
  'GPU_GetDefaultRendererOrder': ['void', ['int*', 'void*']],
  'GPU_GetRendererOrder': ['void', ['int*', 'void*']],
  'GPU_SetRendererOrder': ['void', ['int', 'void*']],
  'GPU_Init': [ref.refType(e.GPU_Target), ['Uint16', 'Uint16', 'Uint32']],
  'GPU_InitRenderer': [ref.refType(e.GPU_Target), ['Uint32', 'Uint16', 'Uint16', 'Uint32']],
  'GPU_InitRendererByID': [ref.refType(e.GPU_Target), [e.GPU_RendererID, 'Uint16', 'Uint16', 'Uint32']],
  'GPU_IsFeatureEnabled': [e.GPU_bool, ['Uint32']],
  'GPU_CloseCurrentRenderer': ['void', []],
  'GPU_Quit': ['void', []],
  'GPU_SetDebugLevel': ['void', ['int']],
  'GPU_GetDebugLevel': ['int', []],
  'GPU_LogInfo': ['void', ['string']],
  'GPU_LogWarning': ['void', ['string']],
  'GPU_LogError': ['void', ['string']],
  'GPU_SetLogCallback': ['void', [Func('int', ['int', 'string', 'void*'])]],
  'GPU_PushErrorCode': ['void', ['string', 'int', 'string']],
  'GPU_PopErrorCode': [e.GPU_ErrorObject, []],
  'GPU_GetErrorString': ['string', ['int']],
  'GPU_SetErrorQueueMax': ['void', ['Uint']],
  'GPU_MakeRendererID': [e.GPU_RendererID, ['string', 'Uint32', 'int', 'int']],
  'GPU_GetRendererID': [e.GPU_RendererID, ['Uint32']],
  'GPU_GetNumRegisteredRenderers': ['int', []],
  'GPU_GetRegisteredRendererList': ['void', ['void*']],
  'GPU_RegisterRenderer': ['void', [e.GPU_RendererID, Func(ref.refType(e.GPU_Renderer), [e.GPU_RendererID]), Func('void', ['void*'])]],
  'GPU_ReserveNextRendererEnum': ['Uint32', []],
  'GPU_GetNumActiveRenderers': ['int', []],
  'GPU_GetActiveRendererList': ['void', ['void*']],
  'GPU_GetCurrentRenderer': [ref.refType(e.GPU_Renderer), []],
  'GPU_SetCurrentRenderer': ['void', [e.GPU_RendererID]],
  'GPU_GetRenderer': [ref.refType(e.GPU_Renderer), [e.GPU_RendererID]],
  'GPU_FreeRenderer': ['void', ['void*']],
  'GPU_ResetRendererState': ['void', []],
  'GPU_SetCoordinateMode': ['void', [e.GPU_bool]],
  'GPU_GetCoordinateMode': [e.GPU_bool, []],
  'GPU_SetDefaultAnchor': ['void', ['float', 'float']],
  'GPU_GetDefaultAnchor': ['void', ['float*', 'float*']],
  'GPU_GetContextTarget': [ref.refType(e.GPU_Target), []],
  'GPU_GetWindowTarget': [ref.refType(e.GPU_Target), ['Uint32']],
  'GPU_CreateTargetFromWindow': [ref.refType(e.GPU_Target), ['Uint32']],
  'GPU_MakeCurrent': ['void', ['void*', 'Uint32']],
  'GPU_SetWindowResolution': [e.GPU_bool, ['Uint16', 'Uint16']],
  'GPU_SetFullscreen': [e.GPU_bool, [e.GPU_bool, e.GPU_bool]],
  'GPU_GetFullscreen': [e.GPU_bool, []],
  'GPU_GetActiveTarget': [ref.refType(e.GPU_Target), []],
  'GPU_SetActiveTarget': [e.GPU_bool, ['void*']],
  'GPU_SetShapeBlending': ['void', [e.GPU_bool]],
  'GPU_GetBlendModeFromPreset': [e.GPU_BlendMode, ['int']],
  'GPU_SetShapeBlendFunction': ['void', ['int', 'int', 'int', 'int']],
  'GPU_SetShapeBlendEquation': ['void', ['int', 'int', 'int', 'int']],
  'GPU_SetShapeBlendMode': ['void', ['int']],
  'GPU_SetLineThickness': ['float', ['float']],
  'GPU_GetLineThickness': ['float', []],
  'GPU_CreateAliasTarget': [ref.refType(e.GPU_Target), ['void*']],
  'GPU_LoadTarget': [ref.refType(e.GPU_Target), ['void*']],
  'GPU_GetTarget': [ref.refType(e.GPU_Target), ['void*']],
  'GPU_FreeTarget': ['void', ['void*']],
  'GPU_SetVirtualResolution': ['void', ['void*', 'Uint16', 'Uint16']],
  'GPU_GetVirtualResolution': ['void', ['void*', 'Uint16*', 'Uint16*']],
  'GPU_GetVirtualCoords': ['void', ['void*', 'float*', 'float*', 'float', 'float']],
  'GPU_UnsetVirtualResolution': ['void', ['void*']],
  'GPU_MakeRect': [e.GPU_Rect, ['float', 'float', 'float', 'float']],
  'GPU_MakeColor': [e.SDL_Color, ['int', 'int', 'int', 'int']],
  'GPU_SetViewport': ['void', ['void*', e.GPU_Rect]],
  'GPU_UnsetViewport': ['void', ['void*']],
  'GPU_GetDefaultCamera': [e.GPU_Camera, []],
  'GPU_GetCamera': [e.GPU_Camera, ['void*']],
  'GPU_SetCamera': [e.GPU_Camera, ['void*', 'void*']],
  'GPU_EnableCamera': ['void', ['void*', e.GPU_bool]],
  'GPU_IsCameraEnabled': [e.GPU_bool, ['void*']],
  'GPU_AddDepthBuffer': [e.GPU_bool, ['void*']],
  'GPU_SetDepthTest': ['void', ['void*', e.GPU_bool]],
  'GPU_SetDepthWrite': ['void', ['void*', e.GPU_bool]],
  'GPU_SetDepthFunction': ['void', ['void*', 'int']],
  'GPU_GetPixel': [e.SDL_Color, ['void*', 'int16', 'int16']],
  'GPU_SetClipRect': [e.GPU_Rect, ['void*', e.GPU_Rect]],
  'GPU_SetClip': [e.GPU_Rect, ['void*', 'int16', 'int16', 'Uint16', 'Uint16']],
  'GPU_UnsetClip': ['void', ['void*']],
  'GPU_IntersectRect': [e.GPU_bool, [e.GPU_Rect, e.GPU_Rect, 'void*']],
  'GPU_IntersectClipRect': [e.GPU_bool, ['void*', e.GPU_Rect, 'void*']],
  'GPU_SetTargetColor': ['void', ['void*', e.SDL_Color]],
  'GPU_SetTargetRGB': ['void', ['void*', 'Uint8', 'Uint8', 'Uint8']],
  'GPU_SetTargetRGBA': ['void', ['void*', 'Uint8', 'Uint8', 'Uint8', 'Uint8']],
  'GPU_UnsetTargetColor': ['void', ['void*']],
  'GPU_LoadSurface': [ref.refType(e.SDL_Surface), ['string']],
  'GPU_LoadSurface_RW': [ref.refType(e.SDL_Surface), ['void*', e.GPU_bool]],
  'GPU_SaveSurface': [e.GPU_bool, ['void*', 'string', 'int']],
  'GPU_SaveSurface_RW': [e.GPU_bool, ['void*', 'void*', e.GPU_bool, 'int']],
  'GPU_CreateImage': [ref.refType(e.GPU_Image), ['Uint16', 'Uint16', 'int']],
  'GPU_CreateImageUsingTexture': [ref.refType(e.GPU_Image), ['Uint*', e.GPU_bool]],
  'GPU_LoadImage': [ref.refType(e.GPU_Image), ['string']],
  'GPU_LoadImage_RW': [ref.refType(e.GPU_Image), ['void*', e.GPU_bool]],
  'GPU_CreateAliasImage': [ref.refType(e.GPU_Image), ['void*']],
  'GPU_CopyImage': [ref.refType(e.GPU_Image), ['void*']],
  'GPU_FreeImage': ['void', ['void*']],
  'GPU_SetImageVirtualResolution': ['void', ['void*', 'Uint16', 'Uint16']],
  'GPU_UnsetImageVirtualResolution': ['void', ['void*']],
  'GPU_UpdateImage': ['void', ['void*', 'void*', 'void*', 'void*']],
  'GPU_UpdateImageBytes': ['void', ['void*', 'void*', 'Uchar*', 'int']],
  'GPU_ReplaceImage': [e.GPU_bool, ['void*', 'void*', 'void*']],
  'GPU_SaveImage': [e.GPU_bool, ['void*', 'string', 'int']],
  'GPU_SaveImage_RW': [e.GPU_bool, ['void*', 'void*', e.GPU_bool, 'int']],
  'GPU_GenerateMipmaps': ['void', ['void*']],
  'GPU_SetColor': ['void', ['void*', e.SDL_Color]],
  'GPU_SetRGB': ['void', ['void*', 'Uint8', 'Uint8', 'Uint8']],
  'GPU_SetRGBA': ['void', ['void*', 'Uint8', 'Uint8', 'Uint8', 'Uint8']],
  'GPU_UnsetColor': ['void', ['void*']],
  'GPU_GetBlending': [e.GPU_bool, ['void*']],
  'GPU_SetBlending': ['void', ['void*', e.GPU_bool]],
  'GPU_SetBlendFunction': ['void', ['void*', 'int', 'int', 'int', 'int']],
  'GPU_SetBlendEquation': ['void', ['void*', 'int', 'int']],
  'GPU_SetBlendMode': ['void', ['void*', 'int']],
  'GPU_SetImageFilter': ['void', ['void*', 'int']],
  'GPU_SetAnchor': ['void', ['void*', 'float', 'float']],
  'GPU_GetAnchor': ['void', ['void*', 'float*', 'float*']],
  'GPU_GetSnapMode': ['int', ['void*']],
  'GPU_SetSnapMode': ['void', ['void*', 'int']],
  'GPU_SetWrapMode': ['void', ['void*', 'int', 'int']],
  'GPU_GetTextureHandle': ['Uint*', ['void*']],
  'GPU_CopyImageFromSurface': [ref.refType(e.GPU_Image), ['void*']],
  'GPU_CopyImageFromSurfaceRect': [ref.refType(e.GPU_Image), ['void*', 'void*']],
  'GPU_CopyImageFromTarget': [ref.refType(e.GPU_Image), ['void*']],
  'GPU_CopySurfaceFromTarget': [ref.refType(e.SDL_Surface), ['void*']],
  'GPU_CopySurfaceFromImage': [ref.refType(e.SDL_Surface), ['void*']],
  'GPU_VectorLength': ['float', ['float*']],
  'GPU_VectorNormalize': ['void', ['float*']],
  'GPU_VectorDot': ['float', ['float*', 'float*']],
  'GPU_VectorCross': ['void', ['float*', 'float*', 'float*']],
  'GPU_VectorCopy': ['void', ['float*', 'float*']],
  'GPU_VectorApplyMatrix': ['void', ['float*', 'float*']],
  'GPU_Vector4ApplyMatrix': ['void', ['float*', 'float*']],
  'GPU_MatrixCopy': ['void', ['float*', 'float*']],
  'GPU_MatrixIdentity': ['void', ['float*']],
  'GPU_MatrixOrtho': ['void', ['float*', 'float', 'float', 'float', 'float', 'float', 'float']],
  'GPU_MatrixFrustum': ['void', ['float*', 'float', 'float', 'float', 'float', 'float', 'float']],
  'GPU_MatrixPerspective': ['void', ['float*', 'float', 'float', 'float', 'float']],
  'GPU_MatrixLookAt': ['void', ['float*', 'float', 'float', 'float', 'float', 'float', 'float', 'float', 'float', 'float']],
  'GPU_MatrixTranslate': ['void', ['float*', 'float', 'float', 'float']],
  'GPU_MatrixScale': ['void', ['float*', 'float', 'float', 'float']],
  'GPU_MatrixRotate': ['void', ['float*', 'float', 'float', 'float', 'float']],
  'GPU_MatrixMultiply': ['void', ['float*', 'float*', 'float*']],
  'GPU_MultiplyAndAssign': ['void', ['float*', 'float*']],
  'GPU_GetMatrixString': ['string', ['float*']],
  'GPU_GetCurrentMatrix': ['float*', []],
  'GPU_GetTopMatrix': ['float*', ['void*']],
  'GPU_GetModel': ['float*', []],
  'GPU_GetView': ['float*', []],
  'GPU_GetProjection': ['float*', []],
  'GPU_GetModelViewProjection': ['void', ['float']],
  'GPU_CreateMatrixStack': [ref.refType(e.GPU_MatrixStack), []],
  'GPU_FreeMatrixStack': ['void', ['void*']],
  'GPU_InitMatrixStack': ['void', ['void*']],
  'GPU_CopyMatrixStack': ['void', ['void*', 'void*']],
  'GPU_ClearMatrixStack': ['void', ['void*']],
  'GPU_ResetProjection': ['void', ['void*']],
  'GPU_MatrixMode': ['void', ['void*', 'int']],
  'GPU_SetProjection': ['void', ['float*']],
  'GPU_SetView': ['void', ['float*']],
  'GPU_SetModel': ['void', ['float*']],
  'GPU_SetProjectionFromStack': ['void', ['void*']],
  'GPU_SetViewFromStack': ['void', ['void*']],
  'GPU_SetModelFromStack': ['void', ['void*']],
  'GPU_PushMatrix': ['void', []],
  'GPU_PopMatrix': ['void', []],
  'GPU_LoadIdentity': ['void', []],
  'GPU_LoadMatrix': ['void', ['float*']],
  'GPU_Ortho': ['void', ['float', 'float', 'float', 'float', 'float', 'float']],
  'GPU_Frustum': ['void', ['float', 'float', 'float', 'float', 'float', 'float']],
  'GPU_Perspective': ['void', ['float', 'float', 'float', 'float']],
  'GPU_LookAt': ['void', ['float', 'float', 'float', 'float', 'float', 'float', 'float', 'float', 'float']],
  'GPU_Translate': ['void', ['float', 'float', 'float']],
  'GPU_Scale': ['void', ['float', 'float', 'float']],
  'GPU_Rotate': ['void', ['float', 'float', 'float', 'float']],
  'GPU_MultMatrix': ['void', ['float*']],
  'GPU_Clear': ['void', ['void*']],
  'GPU_ClearColor': ['void', ['void*', e.SDL_Color]],
  'GPU_ClearRGB': ['void', ['void*', 'Uint8', 'Uint8', 'Uint8']],
  'GPU_ClearRGBA': ['void', ['void*', 'Uint8', 'Uint8', 'Uint8', 'Uint8']],
  'GPU_Blit': ['void', ['void*', 'void*', 'void*', 'float', 'float']],
  'GPU_BlitRotate': ['void', ['void*', 'void*', 'void*', 'float', 'float', 'float']],
  'GPU_BlitScale': ['void', ['void*', 'void*', 'void*', 'float', 'float', 'float', 'float']],
  'GPU_BlitTransform': ['void', ['void*', 'void*', 'void*', 'float', 'float', 'float', 'float', 'float']],
  'GPU_BlitTransformX': ['void', ['void*', 'void*', 'void*', 'float', 'float', 'float', 'float', 'float', 'float', 'float']],
  'GPU_BlitRect': ['void', ['void*', 'void*', 'void*', 'void*']],
  'GPU_BlitRectX': ['void', ['void*', 'void*', 'void*', 'void*', 'float', 'float', 'float', 'Uint32']],
  'GPU_TriangleBatch': ['void', ['void*', 'void*', 'Ushort', 'float*', 'Uint', 'Ushort*', 'Uint32']],
  'GPU_TriangleBatchX': ['void', ['void*', 'void*', 'Ushort', 'void*', 'Uint', 'Ushort*', 'Uint32']],
  'GPU_PrimitiveBatch': ['void', ['void*', 'void*', 'Uint32', 'Ushort', 'float*', 'Uint', 'Ushort*', 'Uint32']],
  'GPU_PrimitiveBatchV': ['void', ['void*', 'void*', 'Uint32', 'Ushort', 'void*', 'Uint', 'Ushort*', 'Uint32']],
  'GPU_FlushBlitBuffer': ['void', []],
  'GPU_Flip': ['void', ['void*']],
  'GPU_Pixel': ['void', ['void*', 'float', 'float', e.SDL_Color]],
  'GPU_Line': ['void', ['void*', 'float', 'float', 'float', 'float', e.SDL_Color]],
  'GPU_Arc': ['void', ['void*', 'float', 'float', 'float', 'float', 'float', e.SDL_Color]],
  'GPU_ArcFilled': ['void', ['void*', 'float', 'float', 'float', 'float', 'float', e.SDL_Color]],
  'GPU_Circle': ['void', ['void*', 'float', 'float', 'float', e.SDL_Color]],
  'GPU_CircleFilled': ['void', ['void*', 'float', 'float', 'float', e.SDL_Color]],
  'GPU_Ellipse': ['void', ['void*', 'float', 'float', 'float', 'float', 'float', e.SDL_Color]],
  'GPU_EllipseFilled': ['void', ['void*', 'float', 'float', 'float', 'float', 'float', e.SDL_Color]],
  'GPU_Sector': ['void', ['void*', 'float', 'float', 'float', 'float', 'float', 'float', e.SDL_Color]],
  'GPU_SectorFilled': ['void', ['void*', 'float', 'float', 'float', 'float', 'float', 'float', e.SDL_Color]],
  'GPU_Tri': ['void', ['void*', 'float', 'float', 'float', 'float', 'float', 'float', e.SDL_Color]],
  'GPU_TriFilled': ['void', ['void*', 'float', 'float', 'float', 'float', 'float', 'float', e.SDL_Color]],
  'GPU_Rectangle': ['void', ['void*', 'float', 'float', 'float', 'float', e.SDL_Color]],
  'GPU_Rectangle2': ['void', ['void*', e.GPU_Rect, e.SDL_Color]],
  'GPU_RectangleFilled': ['void', ['void*', 'float', 'float', 'float', 'float', e.SDL_Color]],
  'GPU_RectangleFilled2': ['void', ['void*', e.GPU_Rect, e.SDL_Color]],
  'GPU_RectangleRound': ['void', ['void*', 'float', 'float', 'float', 'float', 'float', e.SDL_Color]],
  'GPU_RectangleRound2': ['void', ['void*', e.GPU_Rect, 'float', e.SDL_Color]],
  'GPU_RectangleRoundFilled': ['void', ['void*', 'float', 'float', 'float', 'float', 'float', e.SDL_Color]],
  'GPU_RectangleRoundFilled2': ['void', ['void*', e.GPU_Rect, 'float', e.SDL_Color]],
  'GPU_Polygon': ['void', ['void*', 'Uint', 'float*', e.SDL_Color]],
  'GPU_Polyline': ['void', ['void*', 'Uint', 'float*', e.SDL_Color, e.GPU_bool]],
  'GPU_PolygonFilled': ['void', ['void*', 'Uint', 'float*', e.SDL_Color]],
  'GPU_CreateShaderProgram': ['Uint32', []],
  'GPU_FreeShaderProgram': ['void', ['Uint32']],
  'GPU_CompileShader_RW': ['Uint32', ['int', 'void*', e.GPU_bool]],
  'GPU_CompileShader': ['Uint32', ['int', 'string']],
  'GPU_LoadShader': ['Uint32', ['int', 'string']],
  'GPU_LinkShaders': ['Uint32', ['Uint32', 'Uint32']],
  'GPU_LinkManyShaders': ['Uint32', ['Uint32*', 'int']],
  'GPU_FreeShader': ['void', ['Uint32']],
  'GPU_AttachShader': ['void', ['Uint32', 'Uint32']],
  'GPU_DetachShader': ['void', ['Uint32', 'Uint32']],
  'GPU_LinkShaderProgram': [e.GPU_bool, ['Uint32']],
  'GPU_GetCurrentShaderProgram': ['Uint32', []],
  'GPU_IsDefaultShaderProgram': [e.GPU_bool, ['Uint32']],
  'GPU_ActivateShaderProgram': ['void', ['Uint32', 'void*']],
  'GPU_DeactivateShaderProgram': ['void', []],
  'GPU_GetShaderMessage': ['string', []],
  'GPU_GetAttributeLocation': ['int', ['Uint32', 'string']],
  'GPU_MakeAttributeFormat': [e.GPU_AttributeFormat, ['int', 'Uint32', e.GPU_bool, 'int', 'int']],
  'GPU_MakeAttribute': [e.GPU_Attribute, ['int', 'void*', e.GPU_AttributeFormat]],
  'GPU_GetUniformLocation': ['int', ['Uint32', 'string', 'string', 'string', 'string']],
  'GPU_SetShaderBlock': ['void', [e.GPU_ShaderBlock]],
  'GPU_GetShaderBlock': [e.GPU_ShaderBlock, []]
};
