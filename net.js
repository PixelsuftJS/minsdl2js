const {
  e,
  ffi,
  ref,
  Struct,
  Union,
  from_hex,
  en,
  push_export
} = require('./api');

e.SDL_NET_MAJOR_VERSION = 2;
e.SDL_NET_MINOR_VERSION = 1;
e.SDL_NET_PATCHLEVEL = 0;

e.SDL_NET_VERSION = function(X) {
  X.major = e.SDL_NET_MAJOR_VERSION;
  X.minor = e.SDL_NET_MINOR_VERSION;
  X.patch = e.SDL_NET_PATCHLEVEL;
  return X;
}

if (e.SDL_NET_MAJOR_VERSION < 3 && e.SDL_MAJOR_VERSION) {
  e.SDL_NET_COMPILEDVERSION = e.SDL_VERSIONNUM(e.SDL_NET_MAJOR_VERSION, e.SDL_NET_MINOR_VERSION, e.SDL_NET_PATCHLEVEL);
}

e.SDL_NET_VERSION_ATLEAST = function(X, Y, Z) {
  return ((e.SDL_NET_MAJOR_VERSION >= X) &&
    (e.SDL_NET_MAJOR_VERSION > X || e.SDL_NET_MINOR_VERSION >= Y) &&
    (e.SDL_NET_MAJOR_VERSION > X || e.SDL_NET_MINOR_VERSION > Y || e.SDL_NET_PATCHLEVEL >= Z));
}

e.IPaddress = Struct({
  host: 'Uint32',
  port: 'Uint16'
});

e.INADDR_ANY = 0x00000000;
e.INADDR_NONE = 0xFFFFFFFF;
e.INADDR_LOOPBACK = 0x7f000001;
e.INADDR_BROADCAST = 0xFFFFFFFF;

e.UDPpacket = Struct({
  channel: 'int',
  data: 'Uint8*',
  len: 'int',
  maxlen: 'int',
  status: 'int',
  address: e.IPaddress
});

e.SDLNET_MAX_UDPCHANNELS = 32;
e.SDLNET_MAX_UDPADDRESSES = 4;

e.SDLNet_GenericSocket = Struct({
  ready: 'int'
});

e.SDL_DATA_ALIGNED = 0;

e.SDLNet_SocketReady = function(sock) {
  return exports.library_functions._SDLNet_SocketReady(sock);
}

exports.library_functions = {
  'SDLNet_TCP_AddSocket': function(set, sock) {
    return l.SDLNet_AddSocket(set, sock);
  },
  'SDLNet_UDP_AddSocket': function(set, sock) {
    return l.SDLNet_AddSocket(set, sock);
  },
  'SDLNet_TCP_DelSocket': function(set, sock) {
    return l.SDLNet_DelSocket(set, sock);
  },
  'SDLNet_UDP_DelSocket': function(set, sock) {
    return l.SDLNet_DelSocket(set, sock);
  },
  '_SDLNet_SocketReady': function(sock) {
    return sock !== null && sock.ready;
  },
  'SDLNet_Write16': function(value, areap) {
    return l._SDLNet_Write16(value, areap);
  },
  'SDLNet_Write32': function(value, areap) {
    return l._SDLNet_Write32(value, areap);
  },
  'SDLNet_Read16': function(areap) {
    return l._SDLNet_Read16(areap);
  },
  'SDLNet_Read32': function(areap) {
    return l._SDLNet_Read32(areap);
  },
  '_SDLNet_Write16': function(value, areap) {
    return areap = l.SDL_SwapBE16(value);
  },
  '_SDLNet_Write32': function(value, areap) {
    return areap = l.SDL_SwapBE32(value);
  },
  '_SDLNet_Read16': function(areap) {
    return areap = l.SDL_SwapBE16(areap);
  },
  '_SDLNet_Read32': function(areap) {
    return areap = l.SDL_SwapBE32(areap);
  }
};

exports.library_exports = {
  'SDLNet_Linked_Version': [ref.refType(e.SDL_version), []],
  'SDLNet_Init': ['int', []],
  'SDLNet_Quit': ['void', []],
  'SDLNet_ResolveHost': ['int', ['void*', 'string', 'Uint16']],
  'SDLNet_ResolveIP': ['string', ['void*']],
  'SDLNet_GetLocalAddresses': ['string', ['void*', 'int']],
  'SDLNet_TCP_Open': ['void*', ['void*']],
  'SDLNet_TCP_Accept': ['void*', ['void*']],
  'SDLNet_TCP_GetPeerAddress': [ref.refType(e.IPaddress), ['void*']],
  'SDLNet_TCP_Send': ['int', ['void*', 'void*', 'int']],
  'SDLNet_TCP_Recv': ['int', ['void*', 'void*', 'int']],
  'SDLNet_TCP_Close': ['void', ['void*']],
  'SDLNet_AllocPacket': [ref.refType(e.UDPpacket), ['int']],
  'SDLNet_ResizePacket': ['int', ['void*', 'int']],
  'SDLNet_FreePacket': ['void', ['void*']],
  'SDLNet_AllocPacketV': [ref.refType(ref.refType(e.UDPpacket)), ['int', 'int']],
  'SDLNet_FreePacketV': ['void*', ['void**']],
  'SDLNet_UDP_Open': ['void*', ['Uint16']],
  'SDLNet_UDP_SetPacketLoss': ['void', ['void*', 'int']],
  'SDLNet_UDP_Bind': ['int', ['void*', 'int', 'void*']],
  'SDLNet_UDP_Unbind': ['int', ['void*', 'int']],
  'SDLNet_UDP_GetPeerAddress': [ref.refType(e.IPaddress), ['void*', 'int']],
  'SDLNet_UDP_SendV': ['int', ['void*', 'void**', 'int']],
  'SDLNet_UDP_Send': ['int', ['void*', 'int', 'void*']],
  'SDLNet_UDP_RecvV': ['int', ['void*', 'void**']],
  'SDLNet_UDP_Recv': ['int', ['void*', 'void*']],
  'SDLNet_UDP_Close': ['void', ['void*']],
  'SDLNet_AllocSocketSet': ['void*', ['int']],
  'SDLNet_AddSocket': ['int', ['void*', 'void*']],
  'SDLNet_DelSocket': ['int', ['void*', 'void*']],
  'SDLNet_CheckSockets': ['int', ['void*', 'Uint32']],
  'SDLNet_FreeSocketSet': ['void', ['void*']],
  'SDLNet_SetError': ['void', ['string']],
  'SDLNet_GetError': ['string', []],
};
