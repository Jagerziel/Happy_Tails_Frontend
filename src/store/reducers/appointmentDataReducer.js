import { createSlice } from "@reduxjs/toolkit";

export const appointmentDataSlice = createSlice({
    name: 'appointmentData',
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

export const { updateData, resetData } = appointmentDataSlice.actions
export default appointmentDataSlice.reducer