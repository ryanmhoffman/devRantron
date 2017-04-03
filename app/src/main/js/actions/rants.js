import rantscript from 'rantscript';
<<<<<<< HEAD
import { FETCH_RANTS } from '../consts/rants';
=======
import { FETCH_RANTS, RESET_PAGE } from '../consts/rants';
>>>>>>> upstream/two_column
import { STATE } from '../consts/state';

export function fetch(type, amount, page = 0) {
  return (dispatch) => {
<<<<<<< HEAD
    console.log(page)
=======
>>>>>>> upstream/two_column
    dispatch({
      type: FETCH_RANTS,
      state: STATE.LOADING,
      feedType: type,
    });
<<<<<<< HEAD
    rantscript
      .rants(type, amount, page)
=======
    console.log(page);
    rantscript
      .rants(type, amount, amount * page)
>>>>>>> upstream/two_column
      .then((res) => {
        dispatch({
          type: FETCH_RANTS,
          state: STATE.SUCCESS,
          payload: res,
          feedType: type,
        });
      })
      .catch((err) => {
<<<<<<< HEAD
        //dispatch({ type: FETCH_RANTS, state: STATE.FAILED, payload: err, feedType: type });
      });
  };
}
=======
        dispatch({ type: FETCH_RANTS, state: STATE.FAILED, payload: err, feedType: type });
      });
  };
}

export function resetPage() {
  return (dispatch) => {
    dispatch({
      type: RESET_PAGE,
      state: STATE.SUCCESS,
    });
  };
}
>>>>>>> upstream/two_column
