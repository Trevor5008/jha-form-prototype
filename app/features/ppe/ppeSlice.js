import { createSlice } from '@reduxjs/toolkit'

const initialState = []
export const ppeSlice = createSlice({
    name: 'ppe',
    initialState: initialState,
    reducers: {
        addPpe: (state, action) => {
            state.push(action.payload)
        },
        removePpe: (state, action) => {
            const removeIdx = state.indexOf(action.payload)
            state.splice(removeIdx, 1)
        }
    }
})

export const selectPpe = (state) => state.ppe
export const { addPpe, removePpe } = ppeSlice.actions
export default ppeSlice.reducer