
/* IMPORT */

import {describe} from 'fava';
import isEqual from '../dist/index.js';
import Fixtures from './fixtures.js';

/* MAIN */

describe ( 'isEqual', it => {

  Fixtures.forEach ( ({ title, x, y, result }) => {

    it ( title, t => {

      t.is ( isEqual ( x, y ), result );

    });

  });

});
