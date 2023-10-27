import { createSlice } from "@reduxjs/toolkit";

export const appointmentDataSlice = createSlice({
    name: 'appointmentData',
    initialState: {
        data: {}
    },
    reducers: {
        updateAppointmentData: (state, action) => {
            state.data = action.payload
        },
        resetAppointmentData: (state) => {
            state.data = {}
        }
    }
})

export const { updateAppointmentData, resetAppointmentData } = appointmentDataSlice.actions
export default appointmentDataSlice.reducer