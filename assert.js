const {
  e,
  ref,
  Struct,
  Func,
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

e.SDL_AssertionHandler = Func('int', [ref.refType(e.SDL_AssertData), 'void*']);

push_export({
  'SDL_ReportAssertion': ['int', ['void*', 'string', 'string', 'int']],
  'SDL_GetDefaultAssertionHandler': [e.SDL_AssertionHandler, []],
  'SDL_GetAssertionHandler': [e.SDL_AssertionHandler, ['void**']],
  'SDL_SetAssertionHandler': ['void', [e.SDL_AssertionHandler, 'void*']],
  'SDL_GetAssertionReport': [ref.refType(e.SDL_AssertData), []],
  'SDL_ResetAssertionReport': ['void', []]
});
