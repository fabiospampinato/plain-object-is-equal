
/* IMPORT */

import {describe} from 'fava';
import isEqual from '../dist/index.js';
import Tests from './tests.js';

/* MAIN */

describe ( 'isEqual', it => {

  Tests.forEach ( ({ title, x, y, result }) => {

    it ( title, t => {

      t.is ( isEqual ( x, y ), result );

    });

  });

});
