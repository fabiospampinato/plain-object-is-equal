
/* IMPORT */

import {describe} from 'ava-spec';
import {default as isEqual} from '../dist';
import Tests from './tests';

/* IS EQUAL */

describe ( 'isEqual', it => {

  Tests.forEach ( ({ title, x, y, result }) => {

    it ( title, t => {

      t.is ( isEqual ( x, y ), result )

    });

  });

});
