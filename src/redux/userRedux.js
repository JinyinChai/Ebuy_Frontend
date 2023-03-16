import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {publicRequest} from "../requestMethods";

const userRedux = createSlice({
    name: "cart",
    initialState:{
        currentUser: null,
        isFetching: false,
        error: false,
        isLoggedIn: false,
    },
    reducers:{
        loginStart:(state) => {
            state.isFetching = true;
            state.isLoggedIn = false;
        },
        loginSuccess:(state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.isLoggedIn = true;
        },
        loginFail:(state) => {
            state.isFetching = false;
            state.error = true;
            state.isLoggedIn = false;
        },
    },
});

export const deleteUserThunk = createAsyncThunk(
    'users/deleteUser',
    async (userId) => {
        const response = await publicRequest.delete("/users/delete/" + userId);
        return response.data;
    })

export const {loginStart, loginSuccess, loginFail} = userRedux.actions;
export default userRedux.reducer;