import { createSlice } from "@reduxjs/toolkit";

// Action Creator
export const setX = (obj) => (dispatch) => {
  try {
    return dispatch(setXAction(obj));
  } catch (e) {
    return console.error(e.message);
  }
};

// Action Creator
export const initX = () => async (dispatch) => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(initXAction());
  } catch (e) {
    return console.error(e.message);
  }
};

// Slice
const xDuck = createSlice({
  name: "xDuck",
  initialState: 0,
  reducers: {
    setX: (state, action) => {
      state.x = action.payload;
      state.name = action.payload;
    },
    initX: (state, action) => {
      state.x = action.payload;
    },
  },
});

export default xDuck.reducer;

// Actions
const { setXAction, initXAction } = xDuck.actions;
