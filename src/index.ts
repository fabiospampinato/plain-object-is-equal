
/* IS EQUAL */

const getKeys = Object.keys;
const hasOwnProperty = Object.prototype.hasOwnProperty;
const isArray = Array.isArray;

function isEqual ( x, y ): boolean {

  if ( x === y ) return true;

  if ( typeof x === 'object' && typeof y === 'object' && x !== null && y !== null ) {

    if ( isArray ( x ) ) {

      if ( isArray ( y ) ) {

        let xLength = x.length,
            yLength = y.length;

        if ( xLength !== yLength ) return false;

        while ( xLength-- ) {

          if ( !isEqual ( x[xLength], y[xLength] ) ) return false;

        }

        return true;

      }

      return false;

    } else if ( isArray ( y ) ) {

      return false;

    } else {

      let xKeys = getKeys ( x ),
          xLength = xKeys.length,
          yKeys = getKeys ( y ),
          yLength = yKeys.length;

      if ( xLength !== yLength ) return false;

      while ( xLength-- ) {

        const key = xKeys[xLength],
              xValue = x[key],
              yValue = y[key];

        if ( !isEqual ( xValue, yValue ) ) return false;

        if ( yValue === undefined && !hasOwnProperty.call ( y, key ) ) return false;

      }

    }

    return true;

  }

  return x !== x && y !== y;

}

/* EXPORT */

export default isEqual;
