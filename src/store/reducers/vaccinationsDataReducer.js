import { createSlice } from "@reduxjs/toolkit";

export const vaccinationsDataSlice = createSlice({
    name: 'vaccinationsData',
    initialState: {
        data: {}
    },
    reducers: {
        updateVaccinationsData: (state, action) => {
            state.data = action.payload
        },
        resetVaccinationsData: (state) => {
            state.data = {}
        }
    }
})

export const { updateVaccinationsData, resetVaccinationsData } = vaccinationsDataSlice.actions
export default vaccinationsDataSlice.reducer