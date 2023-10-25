import { createSlice } from "@reduxjs/toolkit";

export const petDataSlice = createSlice({
    name: 'petData',
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

export const { updateData, resetData } = petDataSlice.actions
export default petDataSlice.reducer