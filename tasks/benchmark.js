
/* IMPORT */

const {default: isEqual} = require ( '../dist' ),
      Tests = require ( '../test/tests' ),
      TestLast = Tests[Tests.length -1],
      benchmark = require ( 'benchloop' );

/* BENCHMARK */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 100000,
  log: 'compact'
});

benchmark ({
  name: 'isequal:samples',
  fn: () => {
    isEqual ( true, true );
    isEqual ( 'foo', 'bar' );
    isEqual ( 'foo', { foo: 1 } );
    isEqual ( { foo: { bar: 1 } }, { foo: {} } );
    isEqual ( { foo: { bar: { baz: [1, 2, 3] } } }, { foo: { bar: { baz: [1, 2, 3] } } } );
  }
});

benchmark ({
  name: 'isequal:big',
  fn: () => {
    isEqual ( TestLast.x, TestLast.y );
  }
});

benchmark ({
  name: 'isequal:suite',
  fn: () => {
    Tests.forEach ( ({ x, y }) => {
      isEqual ( x, y );
    });
  }
});
