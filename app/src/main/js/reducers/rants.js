import { FETCH_RANTS, RESET_PAGE } from '../consts/rants';
import { STATE } from '../consts/state';
import { FEED } from '../consts/feed';

const DEFAULT_STATE = {
  currentRants: [],
  state: STATE.SUCCESS,
  feedType: FEED.RANTS.ALGO,
  page: 1,
};

export function rants(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_RANTS:
      switch (action.state) {
        case STATE.LOADING:
          return {
            ...state,
            state: action.state,
            feedType: action.feedType,
          };
        case STATE.SUCCESS:
          const newPage = state.page + 1;
          console.log(newPage);
          return {
            ...state,
            currentRants: [...state.currentRants, ...action.payload],
            state: action.state,
            feedType: action.feedType,
            page: newPage,
          };
        case STATE.FAILED:
          return { ...state, state: action.state, feedType: action.feedType };
      }
      break;
    case RESET_PAGE:
      return { ...state, currentRants: [], page: 1 };
  }
  return state;
}
