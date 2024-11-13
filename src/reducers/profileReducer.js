import { actions } from "../actions/actions";
export const initialState = {
  user: null,
  posts: [],
  loading: true,
  error: null,
};

export const profileReducer = (state, action) => {
  switch (action.type) {
    case actions.profile.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.profile.DATA_FETCHED: {
      return {
        ...state,
        user: action.data.user,
        posts: action.data.posts,
        loading: false,
      };
    }

    case actions.profile.DATA_FETCH_ERROR: {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }
    case actions.profile.USER_DATA_EDITED: {
      return {
        ...state,
        loading: false,
        user: action.data,
      };
    }
    case actions.profile.IMAGE_UPDATE: {
      return {
        ...state,
        loading: false,
        user: {
          ...state.user,
          avatar: action.data.avatar,
        },
      };
    }

    default:
      return state;
  }
};
