import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        data: {}
    },
    reducers: {
        updateUserData: (state, action) => {
            state.data = action.payload
        },
        resetUserData: (state) => {
            state.data = {}
        }
    }
})

export const { updateUserData, resetUserData } = userDataSlice.actions
export default userDataSlice.reducer