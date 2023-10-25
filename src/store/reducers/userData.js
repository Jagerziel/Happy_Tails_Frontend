import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        data: {}
    },
    reducers: {
        currentData: (state) => state,
        updateData: (state, action) => {
            state.data = action.payload
        },
        resetData: (state) => {
            state.data = {}
        }
    }
})

export const { currentData, updateData, resetData } = userDataSlice.actions
export default userDataSlice.reducer