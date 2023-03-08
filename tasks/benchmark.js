
/* IMPORT */

import benchmark from 'benchloop';
import isEqual from '../dist/index.js';
import Fixtures from '../test/fixtures.js';

/* HELPERS */

const Test = Fixtures[Fixtures.length -1];

/* MAIN */

benchmark.config ({
  iterations: 100_000
});

benchmark ({
  name: 'samples',
  fn: () => {
    isEqual ( true, true );
    isEqual ( 'foo', 'bar' );
    isEqual ( 'foo', { foo: 1 } );
    isEqual ( { foo: { bar: 1 } }, { foo: {} } );
    isEqual ( { foo: { bar: { baz: [1, 2, 3] } } }, { foo: { bar: { baz: [1, 2, 3] } } } );
  }
});

benchmark ({
  name: 'big',
  fn: () => {
    isEqual ( Test.x, Test.y );
  }
});

benchmark ({
  name: 'suite',
  fn: () => {
    Fixtures.forEach ( ({ x, y }) => {
      isEqual ( x, y );
    });
  }
});

benchmark.summary ();
