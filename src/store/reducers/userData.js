import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        data: {}
    },
    reducers: {
        updateData: (state, action) => {
            state.data = action.payload
        },
        resetData: (state) => {
            state.data = {}
        }
    }
})

export const { updateData, resetData } = userDataSlice.actions
export default userDataSlice.reducer