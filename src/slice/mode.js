import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: true
}
export const modeJs = createSlice({
    name: "mode",
    initialState,
    reducers: {
        lightMode: state => {
            state.darkMode = true
        },
        darkModes: state => {
            state.darkMode = false
        }
    }
})

export const { lightMode, darkModes } = modeJs.actions
export default modeJs.reducer