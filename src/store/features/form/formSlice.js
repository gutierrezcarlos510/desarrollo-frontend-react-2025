import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: {
        "module": "React Mod7",
        "username": "",
        "email": "",
        "password": "mod7USIP-CARLOS"
    },
    textUserSession:"",
    isLogged: false
}

export const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        changeForm: (state, action) => {
            state.data = action.payload;
        },
        changeTextUserSession: (state, action) => {
            state.textUserSession = action.payload;
        },
        changeIsLogged: (state, action) => {
            state.isLogged = action.payload;
        },
        resetForm: (state) => {
            state.data = initialState.data;
            state.textUserSession = initialState.textUserSession;
            state.isLogged = initialState.isLogged;
        }
    }
})

export const {changeForm, changeTextUserSession, changeIsLogged, resetForm} = formSlice.actions;
export default formSlice.reducer;