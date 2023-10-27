import { createSlice } from "@reduxjs/toolkit";

export const petDataSlice = createSlice({
    name: 'petData',
    initialState: {
        data: {}
    },
    reducers: {
        updatePetData: (state, action) => {
            state.data = action.payload
        },
        resetPetData: (state) => {
            state.data = {}
        }
    }
})

export const { updatePetData, resetPetData } = petDataSlice.actions
export default petDataSlice.reducer