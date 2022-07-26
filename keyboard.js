const {
  e,
  Struct,
  push_export
} = require('./api');

e.SDLK_SCANCODE_MASK = 1 << 30;

e.SDL_SCANCODE_UNKNOWN = 0;
e.SDL_SCANCODE_A = 4;
e.SDL_SCANCODE_B = 5;
e.SDL_SCANCODE_C = 6;
e.SDL_SCANCODE_D = 7;
e.SDL_SCANCODE_E = 8;
e.SDL_SCANCODE_F = 9;
e.SDL_SCANCODE_G = 10;
e.SDL_SCANCODE_H = 11;
e.SDL_SCANCODE_I = 12;
e.SDL_SCANCODE_J = 13;
e.SDL_SCANCODE_K = 14;
e.SDL_SCANCODE_L = 15;
e.SDL_SCANCODE_M = 16;
e.SDL_SCANCODE_N = 17;
e.SDL_SCANCODE_O = 18;
e.SDL_SCANCODE_P = 19;
e.SDL_SCANCODE_Q = 20;
e.SDL_SCANCODE_R = 21;
e.SDL_SCANCODE_S = 22;
e.SDL_SCANCODE_T = 23;
e.SDL_SCANCODE_U = 24;
e.SDL_SCANCODE_V = 25;
e.SDL_SCANCODE_W = 26;
e.SDL_SCANCODE_X = 27;
e.SDL_SCANCODE_Y = 28;
e.SDL_SCANCODE_Z = 29;
e.SDL_SCANCODE_1 = 30;
e.SDL_SCANCODE_2 = 31;
e.SDL_SCANCODE_3 = 32;
e.SDL_SCANCODE_4 = 33;
e.SDL_SCANCODE_5 = 34;
e.SDL_SCANCODE_6 = 35;
e.SDL_SCANCODE_7 = 36;
e.SDL_SCANCODE_8 = 37;
e.SDL_SCANCODE_9 = 38;
e.SDL_SCANCODE_0 = 39;
e.SDL_SCANCODE_RETURN = 40;
e.SDL_SCANCODE_ESCAPE = 41;
e.SDL_SCANCODE_BACKSPACE = 42;
e.SDL_SCANCODE_TAB = 43;
e.SDL_SCANCODE_SPACE = 44;
e.SDL_SCANCODE_MINUS = 45;
e.SDL_SCANCODE_EQUALS = 46;
e.SDL_SCANCODE_LEFTBRACKET = 47;
e.SDL_SCANCODE_RIGHTBRACKET = 48;
e.SDL_SCANCODE_BACKSLASH = 49;
e.SDL_SCANCODE_NONUSHASH = 50;
e.SDL_SCANCODE_SEMICOLON = 51;
e.SDL_SCANCODE_APOSTROPHE = 52;
e.SDL_SCANCODE_GRAVE = 53;
e.SDL_SCANCODE_COMMA = 54;
e.SDL_SCANCODE_PERIOD = 55;
e.SDL_SCANCODE_SLASH = 56;
e.SDL_SCANCODE_CAPSLOCK = 57;
e.SDL_SCANCODE_F1 = 58;
e.SDL_SCANCODE_F2 = 59;
e.SDL_SCANCODE_F3 = 60;
e.SDL_SCANCODE_F4 = 61;
e.SDL_SCANCODE_F5 = 62;
e.SDL_SCANCODE_F6 = 63;
e.SDL_SCANCODE_F7 = 64;
e.SDL_SCANCODE_F8 = 65;
e.SDL_SCANCODE_F9 = 66;
e.SDL_SCANCODE_F10 = 67;
e.SDL_SCANCODE_F11 = 68;
e.SDL_SCANCODE_F12 = 69;
e.SDL_SCANCODE_PRINTSCREEN = 70;
e.SDL_SCANCODE_SCROLLLOCK = 71;
e.SDL_SCANCODE_PAUSE = 72;
e.SDL_SCANCODE_INSERT = 73;
e.SDL_SCANCODE_HOME = 74;
e.SDL_SCANCODE_PAGEUP = 75;
e.SDL_SCANCODE_DELETE = 76;
e.SDL_SCANCODE_END = 77;
e.SDL_SCANCODE_PAGEDOWN = 78;
e.SDL_SCANCODE_RIGHT = 79;
e.SDL_SCANCODE_LEFT = 80;
e.SDL_SCANCODE_DOWN = 81;
e.SDL_SCANCODE_UP = 82;
e.SDL_SCANCODE_NUMLOCKCLEAR = 83;
e.SDL_SCANCODE_KP_DIVIDE = 84;
e.SDL_SCANCODE_KP_MULTIPLY = 85;
e.SDL_SCANCODE_KP_MINUS = 86;
e.SDL_SCANCODE_KP_PLUS = 87;
e.SDL_SCANCODE_KP_ENTER = 88;
e.SDL_SCANCODE_KP_1 = 89;
e.SDL_SCANCODE_KP_2 = 90;
e.SDL_SCANCODE_KP_3 = 91;
e.SDL_SCANCODE_KP_4 = 92;
e.SDL_SCANCODE_KP_5 = 93;
e.SDL_SCANCODE_KP_6 = 94;
e.SDL_SCANCODE_KP_7 = 95;
e.SDL_SCANCODE_KP_8 = 96;
e.SDL_SCANCODE_KP_9 = 97;
e.SDL_SCANCODE_KP_0 = 98;
e.SDL_SCANCODE_KP_PERIOD = 99;
e.SDL_SCANCODE_NONUSBACKSLASH = 100;
e.SDL_SCANCODE_APPLICATION = 101;
e.SDL_SCANCODE_POWER = 102;
e.SDL_SCANCODE_KP_EQUALS = 103;
e.SDL_SCANCODE_F13 = 104;
e.SDL_SCANCODE_F14 = 105;
e.SDL_SCANCODE_F15 = 106;
e.SDL_SCANCODE_F16 = 107;
e.SDL_SCANCODE_F17 = 108;
e.SDL_SCANCODE_F18 = 109;
e.SDL_SCANCODE_F19 = 110;
e.SDL_SCANCODE_F20 = 111;
e.SDL_SCANCODE_F21 = 112;
e.SDL_SCANCODE_F22 = 113;
e.SDL_SCANCODE_F23 = 114;
e.SDL_SCANCODE_F24 = 115;
e.SDL_SCANCODE_EXECUTE = 116;
e.SDL_SCANCODE_HELP = 117;
e.SDL_SCANCODE_MENU = 118;
e.SDL_SCANCODE_SELECT = 119;
e.SDL_SCANCODE_STOP = 120;
e.SDL_SCANCODE_AGAIN = 121;
e.SDL_SCANCODE_UNDO = 122;
e.SDL_SCANCODE_CUT = 123;
e.SDL_SCANCODE_COPY = 124;
e.SDL_SCANCODE_PASTE = 125;
e.SDL_SCANCODE_FIND = 126;
e.SDL_SCANCODE_MUTE = 127;
e.SDL_SCANCODE_VOLUMEUP = 128;
e.SDL_SCANCODE_VOLUMEDOWN = 129;
e.SDL_SCANCODE_KP_COMMA = 133;
e.SDL_SCANCODE_KP_EQUALSAS400 = 134;
e.SDL_SCANCODE_INTERNATIONAL1 = 135;
e.SDL_SCANCODE_INTERNATIONAL2 = 136;
e.SDL_SCANCODE_INTERNATIONAL3 = 137;
e.SDL_SCANCODE_INTERNATIONAL4 = 138;
e.SDL_SCANCODE_INTERNATIONAL5 = 139;
e.SDL_SCANCODE_INTERNATIONAL6 = 140;
e.SDL_SCANCODE_INTERNATIONAL7 = 141;
e.SDL_SCANCODE_INTERNATIONAL8 = 142;
e.SDL_SCANCODE_INTERNATIONAL9 = 143;
e.SDL_SCANCODE_LANG1 = 144;
e.SDL_SCANCODE_LANG2 = 145;
e.SDL_SCANCODE_LANG3 = 146;
e.SDL_SCANCODE_LANG4 = 147;
e.SDL_SCANCODE_LANG5 = 148;
e.SDL_SCANCODE_LANG6 = 149;
e.SDL_SCANCODE_LANG7 = 150;
e.SDL_SCANCODE_LANG8 = 151;
e.SDL_SCANCODE_LANG9 = 152;
e.SDL_SCANCODE_ALTERASE = 153;
e.SDL_SCANCODE_SYSREQ = 154;
e.SDL_SCANCODE_CANCEL = 155;
e.SDL_SCANCODE_CLEAR = 156;
e.SDL_SCANCODE_PRIOR = 157;
e.SDL_SCANCODE_RETURN2 = 158;
e.SDL_SCANCODE_SEPARATOR = 159;
e.SDL_SCANCODE_OUT = 160;
e.SDL_SCANCODE_OPER = 161;
e.SDL_SCANCODE_CLEARAGAIN = 162;
e.SDL_SCANCODE_CRSEL = 163;
e.SDL_SCANCODE_EXSEL = 164;
e.SDL_SCANCODE_KP_00 = 176;
e.SDL_SCANCODE_KP_000 = 177;
e.SDL_SCANCODE_THOUSANDSSEPARATOR = 178;
e.SDL_SCANCODE_DECIMALSEPARATOR = 179;
e.SDL_SCANCODE_CURRENCYUNIT = 180;
e.SDL_SCANCODE_CURRENCYSUBUNIT = 181;
e.SDL_SCANCODE_KP_LEFTPAREN = 182;
e.SDL_SCANCODE_KP_RIGHTPAREN = 183;
e.SDL_SCANCODE_KP_LEFTBRACE = 184;
e.SDL_SCANCODE_KP_RIGHTBRACE = 185;
e.SDL_SCANCODE_KP_TAB = 186;
e.SDL_SCANCODE_KP_BACKSPACE = 187;
e.SDL_SCANCODE_KP_A = 188;
e.SDL_SCANCODE_KP_B = 189;
e.SDL_SCANCODE_KP_C = 190;
e.SDL_SCANCODE_KP_D = 191;
e.SDL_SCANCODE_KP_E = 192;
e.SDL_SCANCODE_KP_F = 193;
e.SDL_SCANCODE_KP_XOR = 194;
e.SDL_SCANCODE_KP_POWER = 195;
e.SDL_SCANCODE_KP_PERCENT = 196;
e.SDL_SCANCODE_KP_LESS = 197;
e.SDL_SCANCODE_KP_GREATER = 198;
e.SDL_SCANCODE_KP_AMPERSAND = 199;
e.SDL_SCANCODE_KP_DBLAMPERSAND = 200;
e.SDL_SCANCODE_KP_VERTICALBAR = 201;
e.SDL_SCANCODE_KP_DBLVERTICALBAR = 202;
e.SDL_SCANCODE_KP_COLON = 203;
e.SDL_SCANCODE_KP_HASH = 204;
e.SDL_SCANCODE_KP_SPACE = 205;
e.SDL_SCANCODE_KP_AT = 206;
e.SDL_SCANCODE_KP_EXCLAM = 207;
e.SDL_SCANCODE_KP_MEMSTORE = 208;
e.SDL_SCANCODE_KP_MEMRECALL = 209;
e.SDL_SCANCODE_KP_MEMCLEAR = 210;
e.SDL_SCANCODE_KP_MEMADD = 211;
e.SDL_SCANCODE_KP_MEMSUBTRACT = 212;
e.SDL_SCANCODE_KP_MEMMULTIPLY = 213;
e.SDL_SCANCODE_KP_MEMDIVIDE = 214;
e.SDL_SCANCODE_KP_PLUSMINUS = 215;
e.SDL_SCANCODE_KP_CLEAR = 216;
e.SDL_SCANCODE_KP_CLEARENTRY = 217;
e.SDL_SCANCODE_KP_BINARY = 218;
e.SDL_SCANCODE_KP_OCTAL = 219;
e.SDL_SCANCODE_KP_DECIMAL = 220;
e.SDL_SCANCODE_KP_HEXADECIMAL = 221;
e.SDL_SCANCODE_LCTRL = 224;
e.SDL_SCANCODE_LSHIFT = 225;
e.SDL_SCANCODE_LALT = 226;
e.SDL_SCANCODE_LGUI = 227;
e.SDL_SCANCODE_RCTRL = 228;
e.SDL_SCANCODE_RSHIFT = 229;
e.SDL_SCANCODE_RALT = 230;
e.SDL_SCANCODE_RGUI = 231;
e.SDL_SCANCODE_MODE = 257;
e.SDL_SCANCODE_AUDIONEXT = 258;
e.SDL_SCANCODE_AUDIOPREV = 259;
e.SDL_SCANCODE_AUDIOSTOP = 260;
e.SDL_SCANCODE_AUDIOPLAY = 261;
e.SDL_SCANCODE_AUDIOMUTE = 262;
e.SDL_SCANCODE_MEDIASELECT = 263;
e.SDL_SCANCODE_WWW = 264;
e.SDL_SCANCODE_MAIL = 265;
e.SDL_SCANCODE_CALCULATOR = 266;
e.SDL_SCANCODE_COMPUTER = 267;
e.SDL_SCANCODE_AC_SEARCH = 268;
e.SDL_SCANCODE_AC_HOME = 269;
e.SDL_SCANCODE_AC_BACK = 270;
e.SDL_SCANCODE_AC_FORWARD = 271;
e.SDL_SCANCODE_AC_STOP = 272;
e.SDL_SCANCODE_AC_REFRESH = 273;
e.SDL_SCANCODE_AC_BOOKMARKS = 274;
e.SDL_SCANCODE_BRIGHTNESSDOWN = 275;
e.SDL_SCANCODE_BRIGHTNESSUP = 276;
e.SDL_SCANCODE_DISPLAYSWITCH = 277;
e.SDL_SCANCODE_KBDILLUMTOGGLE = 278;
e.SDL_SCANCODE_KBDILLUMDOWN = 279;
e.SDL_SCANCODE_KBDILLUMUP = 280;
e.SDL_SCANCODE_EJECT = 281;
e.SDL_SCANCODE_SLEEP = 282;
e.SDL_SCANCODE_APP1 = 283;
e.SDL_SCANCODE_APP2 = 284;
e.SDL_SCANCODE_AUDIOREWIND = 285;
e.SDL_SCANCODE_AUDIOFASTFORWARD = 286;
e.SDL_SCANCODE_SOFTLEFT = 287;
e.SDL_SCANCODE_SOFTRIGHT = 288;
e.SDL_SCANCODE_CALL = 289;
e.SDL_SCANCODE_ENDCALL = 290;
e.SDL_NUM_SCANCODES = 512;

e.SDL_SCANCODE_TO_KEYCODE = function(X) {
  return X | e.SDLK_SCANCODE_MASK;
}

e.SDLK_UNKNOWN = 0;
e.SDLK_RETURN = 13;
e.SDLK_ESCAPE = 27;
e.SDLK_BACKSPACE = 8;
e.SDLK_TAB = 9;
e.SDLK_SPACE = 32;
e.SDLK_EXCLAIM = 33;
e.SDLK_QUOTEDBL = 34;
e.SDLK_HASH = 35;
e.SDLK_PERCENT = 37;
e.SDLK_DOLLAR = 36;
e.SDLK_AMPERSAND = 38;
e.SDLK_QUOTE = 39;
e.SDLK_LEFTPAREN = 40;
e.SDLK_RIGHTPAREN = 41;
e.SDLK_ASTERISK = 42;
e.SDLK_PLUS = 43;
e.SDLK_COMMA = 59;
e.SDLK_MINUS = 45;
e.SDLK_PERIOD = 46;
e.SDLK_SLASH = 47;
e.SDLK_0 = 48;
e.SDLK_1 = 49;
e.SDLK_2 = 50;
e.SDLK_3 = 51;
e.SDLK_4 = 52;
e.SDLK_5 = 53;
e.SDLK_6 = 54;
e.SDLK_7 = 55;
e.SDLK_8 = 56;
e.SDLK_9 = 57;
e.SDLK_COLON = 58;
e.SDLK_SEMICOLON = 59;
e.SDLK_LESS = 60;
e.SDLK_EQUALS = 61;
e.SDLK_GREATER = 62;
e.SDLK_QUESTION = 63;
e.SDLK_AT = 64;
e.SDLK_LEFTBRACKET = 91;
e.SDLK_BACKSLASH = 92;
e.SDLK_RIGHTBRACKET = 93;
e.SDLK_CARET = 94;
e.SDLK_UNDERSCORE = 95;
e.SDLK_a = 97;
e.SDLK_b = 98;
e.SDLK_c = 99;
e.SDLK_d = 100;
e.SDLK_e = 101;
e.SDLK_f = 102;
e.SDLK_g = 103;
e.SDLK_h = 104;
e.SDLK_i = 105;
e.SDLK_j = 106;
e.SDLK_k = 107;
e.SDLK_l = 108;
e.SDLK_m = 109;
e.SDLK_n = 110;
e.SDLK_o = 111;
e.SDLK_p = 112;
e.SDLK_q = 113;
e.SDLK_r = 114;
e.SDLK_s = 115;
e.SDLK_t = 116;
e.SDLK_u = 117;
e.SDLK_v = 118;
e.SDLK_w = 119;
e.SDLK_x = 120;
e.SDLK_y = 121;
e.SDLK_z = 122;

e.SDLK_CAPSLOCK = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_CAPSLOCK);
e.SDLK_F1 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_F1);
e.SDLK_F2 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_F2);
e.SDLK_F3 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_F3);
e.SDLK_F4 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_F4);
e.SDLK_F5 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_F5);
e.SDLK_F6 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_F6);
e.SDLK_F7 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_F7);
e.SDLK_F8 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_F8);
e.SDLK_F9 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_F9);
e.SDLK_F10 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_F10);
e.SDLK_F11 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_F11);
e.SDLK_F12 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_F12);
e.SDLK_PRINTSCREEN = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_PRINTSCREEN);
e.SDLK_SCROLLLOCK = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_SCROLLLOCK);
e.SDLK_PAUSE = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_PAUSE);
e.SDLK_INSERT = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_INSERT);
e.SDLK_HOME = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_HOME);
e.SDLK_PAGEUP = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_PAGEUP);
e.SDLK_DELETE = '\x7F';
e.SDLK_END = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_END);
e.SDLK_PAGEDOWN = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_PAGEDOWN);
e.SDLK_RIGHT = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_RIGHT);
e.SDLK_LEFT = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_LEFT);
e.SDLK_DOWN = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_DOWN);
e.SDLK_UP = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_UP);
e.SDLK_NUMLOCKCLEAR = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_NUMLOCKCLEAR);
e.SDLK_KP_DIVIDE = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_DIVIDE);
e.SDLK_KP_MULTIPLY = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_MULTIPLY);
e.SDLK_KP_MINUS = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_MINUS);
e.SDLK_KP_PLUS = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_PLUS);
e.SDLK_KP_ENTER = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_ENTER);
e.SDLK_KP_1 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_1);
e.SDLK_KP_2 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_2);
e.SDLK_KP_3 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_3);
e.SDLK_KP_4 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_4);
e.SDLK_KP_5 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_5);
e.SDLK_KP_6 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_6);
e.SDLK_KP_7 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_7);
e.SDLK_KP_8 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_8);
e.SDLK_KP_9 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_9);
e.SDLK_KP_0 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_0);
e.SDLK_KP_PERIOD = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_PERIOD);
e.SDLK_APPLICATION = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_APPLICATION);
e.SDLK_POWER = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_POWER);
e.SDLK_KP_EQUALS = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_EQUALS);
e.SDLK_F13 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_F13);
e.SDLK_F14 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_F14);
e.SDLK_F15 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_F15);
e.SDLK_F16 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_F16);
e.SDLK_F17 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_F17);
e.SDLK_F18 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_F18);
e.SDLK_F19 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_F19);
e.SDLK_F20 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_F20);
e.SDLK_F21 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_F21);
e.SDLK_F22 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_F22);
e.SDLK_F23 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_F23);
e.SDLK_F24 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_F24);
e.SDLK_EXECUTE = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_EXECUTE);
e.SDLK_HELP = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_HELP);
e.SDLK_MENU = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_MENU);
e.SDLK_SELECT = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_SELECT);
e.SDLK_STOP = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_STOP);
e.SDLK_AGAIN = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_AGAIN);
e.SDLK_UNDO = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_UNDO);
e.SDLK_CUT = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_CUT);
e.SDLK_COPY = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_COPY);
e.SDLK_PASTE = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_PASTE);
e.SDLK_FIND = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_FIND);
e.SDLK_MUTE = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_MUTE);
e.SDLK_VOLUMEUP = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_VOLUMEUP);
e.SDLK_VOLUMEDOWN = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_VOLUMEDOWN);
e.SDLK_KP_COMMA = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_COMMA);
e.SDLK_KP_EQUALSAS400 =
  e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_EQUALSAS400);
e.SDLK_ALTERASE = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_ALTERASE);
e.SDLK_SYSREQ = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_SYSREQ);
e.SDLK_CANCEL = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_CANCEL);
e.SDLK_CLEAR = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_CLEAR);
e.SDLK_PRIOR = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_PRIOR);
e.SDLK_RETURN2 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_RETURN2);
e.SDLK_SEPARATOR = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_SEPARATOR);
e.SDLK_OUT = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_OUT);
e.SDLK_OPER = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_OPER);
e.SDLK_CLEARAGAIN = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_CLEARAGAIN);
e.SDLK_CRSEL = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_CRSEL);
e.SDLK_EXSEL = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_EXSEL);
e.SDLK_KP_00 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_00);
e.SDLK_KP_000 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_000);
e.SDLK_THOUSANDSSEPARATOR =
  e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_THOUSANDSSEPARATOR);
e.SDLK_DECIMALSEPARATOR =
  e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_DECIMALSEPARATOR);
e.SDLK_CURRENCYUNIT = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_CURRENCYUNIT);
e.SDLK_CURRENCYSUBUNIT =
  e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_CURRENCYSUBUNIT);
e.SDLK_KP_LEFTPAREN = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_LEFTPAREN);
e.SDLK_KP_RIGHTPAREN = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_RIGHTPAREN);
e.SDLK_KP_LEFTBRACE = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_LEFTBRACE);
e.SDLK_KP_RIGHTBRACE = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_RIGHTBRACE);
e.SDLK_KP_TAB = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_TAB);
e.SDLK_KP_BACKSPACE = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_BACKSPACE);
e.SDLK_KP_A = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_A);
e.SDLK_KP_B = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_B);
e.SDLK_KP_C = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_C);
e.SDLK_KP_D = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_D);
e.SDLK_KP_E = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_E);
e.SDLK_KP_F = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_F);
e.SDLK_KP_XOR = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_XOR);
e.SDLK_KP_POWER = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_POWER);
e.SDLK_KP_PERCENT = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_PERCENT);
e.SDLK_KP_LESS = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_LESS);
e.SDLK_KP_GREATER = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_GREATER);
e.SDLK_KP_AMPERSAND = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_AMPERSAND);
e.SDLK_KP_DBLAMPERSAND =
  e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_DBLAMPERSAND);
e.SDLK_KP_VERTICALBAR =
  e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_VERTICALBAR);
e.SDLK_KP_DBLVERTICALBAR =
  e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_DBLVERTICALBAR);
e.SDLK_KP_COLON = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_COLON);
e.SDLK_KP_HASH = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_HASH);
e.SDLK_KP_SPACE = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_SPACE);
e.SDLK_KP_AT = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_AT);
e.SDLK_KP_EXCLAM = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_EXCLAM);
e.SDLK_KP_MEMSTORE = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_MEMSTORE);
e.SDLK_KP_MEMRECALL = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_MEMRECALL);
e.SDLK_KP_MEMCLEAR = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_MEMCLEAR);
e.SDLK_KP_MEMADD = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_MEMADD);
e.SDLK_KP_MEMSUBTRACT =
  e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_MEMSUBTRACT);
e.SDLK_KP_MEMMULTIPLY =
  e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_MEMMULTIPLY);
e.SDLK_KP_MEMDIVIDE = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_MEMDIVIDE);
e.SDLK_KP_PLUSMINUS = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_PLUSMINUS);
e.SDLK_KP_CLEAR = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_CLEAR);
e.SDLK_KP_CLEARENTRY = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_CLEARENTRY);
e.SDLK_KP_BINARY = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_BINARY);
e.SDLK_KP_OCTAL = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_OCTAL);
e.SDLK_KP_DECIMAL = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_DECIMAL);
e.SDLK_KP_HEXADECIMAL =
  e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KP_HEXADECIMAL);
e.SDLK_LCTRL = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_LCTRL);
e.SDLK_LSHIFT = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_LSHIFT);
e.SDLK_LALT = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_LALT);
e.SDLK_LGUI = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_LGUI);
e.SDLK_RCTRL = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_RCTRL);
e.SDLK_RSHIFT = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_RSHIFT);
e.SDLK_RALT = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_RALT);
e.SDLK_RGUI = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_RGUI);
e.SDLK_MODE = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_MODE);
e.SDLK_AUDIONEXT = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_AUDIONEXT);
e.SDLK_AUDIOPREV = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_AUDIOPREV);
e.SDLK_AUDIOSTOP = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_AUDIOSTOP);
e.SDLK_AUDIOPLAY = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_AUDIOPLAY);
e.SDLK_AUDIOMUTE = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_AUDIOMUTE);
e.SDLK_MEDIASELECT = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_MEDIASELECT);
e.SDLK_WWW = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_WWW);
e.SDLK_MAIL = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_MAIL);
e.SDLK_CALCULATOR = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_CALCULATOR);
e.SDLK_COMPUTER = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_COMPUTER);
e.SDLK_AC_SEARCH = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_AC_SEARCH);
e.SDLK_AC_HOME = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_AC_HOME);
e.SDLK_AC_BACK = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_AC_BACK);
e.SDLK_AC_FORWARD = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_AC_FORWARD);
e.SDLK_AC_STOP = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_AC_STOP);
e.SDLK_AC_REFRESH = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_AC_REFRESH);
e.SDLK_AC_BOOKMARKS = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_AC_BOOKMARKS);
e.SDLK_BRIGHTNESSDOWN =
  e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_BRIGHTNESSDOWN);
e.SDLK_BRIGHTNESSUP = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_BRIGHTNESSUP);
e.SDLK_DISPLAYSWITCH = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_DISPLAYSWITCH);
e.SDLK_KBDILLUMTOGGLE =
  e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KBDILLUMTOGGLE);
e.SDLK_KBDILLUMDOWN = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KBDILLUMDOWN);
e.SDLK_KBDILLUMUP = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_KBDILLUMUP);
e.SDLK_EJECT = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_EJECT);
e.SDLK_SLEEP = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_SLEEP);
e.SDLK_APP1 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_APP1);
e.SDLK_APP2 = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_APP2);
e.SDLK_AUDIOREWIND = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_AUDIOREWIND);
e.SDLK_AUDIOFASTFORWARD = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_AUDIOFASTFORWARD);
e.SDLK_SOFTLEFT = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_SOFTLEFT);
e.SDLK_SOFTRIGHT = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_SOFTRIGHT);
e.SDLK_CALL = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_CALL);
e.SDLK_ENDCALL = e.SDL_SCANCODE_TO_KEYCODE(e.SDL_SCANCODE_ENDCALL);

e.KMOD_NONE = 0x0000;
e.KMOD_LSHIFT = 0x0001;
e.KMOD_RSHIFT = 0x0002;
e.KMOD_LCTRL = 0x0040;
e.KMOD_RCTRL = 0x0080;
e.KMOD_LALT = 0x0100;
e.KMOD_RALT = 0x0200;
e.KMOD_LGUI = 0x0400;
e.KMOD_RGUI = 0x0800;
e.KMOD_NUM = 0x1000;
e.KMOD_CAPS = 0x2000;
e.KMOD_MODE = 0x4000;
e.KMOD_SCROLL = 0x8000;
e.KMOD_CTRL = e.KMOD_LCTRL | e.KMOD_RCTRL;
e.KMOD_SHIFT = e.KMOD_LSHIFT | e.KMOD_RSHIFT;
e.KMOD_ALT = e.KMOD_LALT | e.KMOD_RALT;
e.KMOD_GUI = e.KMOD_LGUI | e.KMOD_RGUI;
e.KMOD_RESERVED = e.KMOD_SCROLL;

e.SDL_Keysym = Struct({
  scancode: 'int',
  sym: 'int32',
  mod: 'Uint16',
  unused: 'Uint32',
});

push_export({
  'SDL_GetKeyboardFocus': ['void*', []],
  'SDL_GetKeyboardState': ['Uint8*', ['int*']],
  'SDL_ResetKeyboard': ['void', []],
  'SDL_GetModState': ['int', []],
  'SDL_SetModState': ['void', ['int']],
  'SDL_GetKeyFromScancode': ['int32', ['int']],
  'SDL_GetScancodeFromKey': ['int', ['int32']],
  'SDL_GetScancodeName': ['string', ['int']],
  'SDL_GetScancodeFromName': ['int', ['string']],
  'SDL_GetKeyName': ['string', ['int32']],
  'SDL_GetKeyFromName': ['int32', ['string']],
  'SDL_StartTextInput': ['void', []],
  'SDL_IsTextInputActive': ['int', []],
  'SDL_StopTextInput': ['void', []],
  'SDL_ClearComposition': ['void', []],
  'SDL_IsTextInputShown': ['int', []],
  'SDL_SetTextInputRect': ['void', ['void*']],
  'SDL_HasScreenKeyboardSupport': ['int', []],
  'SDL_IsScreenKeyboardShown': ['int', ['void*']],
});
