import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    session_id: '',
    user: {},
    isAuthenticated: false,
  },
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.session_id = localStorage.getItem('session_id');

      localStorage.setItem('userId', action.payload.id);
    },
  },
});

export const { setUserData } = authSlice.actions;

export default authSlice.reducer;
