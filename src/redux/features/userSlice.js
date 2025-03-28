import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: localStorage.getItem("token") ? true : false,
};

const userSlice = createSlice({
    initialState,
    name: "userSlice",
    reducers: {
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        setToken: (state, action) => {
            localStorage.setItem("token", action.payload);
        },
    },
});

export const { setIsAuthenticated, setToken } = userSlice.actions;
export default userSlice.reducer;
