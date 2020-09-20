import {UPDATE_USER} from '../actions/actionTypes';

const initialState = {
  userdata: {},
  loginStatus: -1, // -1 == loading, 0 = not logged in, 1 == logged in
};

const updateUser = (state, action) => {
  let ud = action.userdata;
  // console.log("red", ud)
  return {...state, userdata: Object.assign({}, ud), loginStatus: ud ? 1 : 0};
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return updateUser(state, action);
    default:
      return state;
  }
};

export default userReducer;
