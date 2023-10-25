import { createSlice } from "@reduxjs/toolkit";

export const vaccinationsDataSlice = createSlice({
    name: 'vaccinationsData',
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

export const { updateData, resetData } = vaccinationsDataSlice.actions
export default vaccinationsDataSlice.reducer