const {
  e,
  ref,
  Struct,
  en,
  push_export
} = require('./api');

e.SDL_ASSERTION_RETRY = en(0);
e.SDL_ASSERTION_BREAK = en();
e.SDL_ASSERTION_ABORT = en();
e.SDL_ASSERTION_IGNORE = en();
e.SDL_ASSERTION_ALWAYS_IGNORE = en();

e.SDL_AssertData = Struct({
  always_ignore: 'int',
  trigger_count: 'Uint',
  condition: 'string',
  filename: 'string',
  linenum: 'int',
  function: 'string',
  next: 'void*'
});

push_export({
  'SDL_GetDefaultAssertionHandler': ['void*', []],
  'SDL_GetAssertionHandler': ['void*', ['void**']],
  'SDL_GetAssertionReport': [ref.refType(e.SDL_AssertData), []],
  'SDL_ResetAssertionReport': ['void', []]
});
