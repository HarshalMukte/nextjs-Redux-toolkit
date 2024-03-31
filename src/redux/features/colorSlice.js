const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    color: "light"
}

const colorSlice = createSlice({
    name: "changeColor",
    initialState,
    reducers:{ 
        lightTheme: (state) => {
            state.color = "light"
        },
        darkTheme: (state) => {
            state.color = "dark"
        },
        changeToColor(state, action){
            state.color = action.payload
        }

    }

})

export const {lightTheme, darkTheme, changeToColor } = colorSlice.actions

export default colorSlice.reducer

