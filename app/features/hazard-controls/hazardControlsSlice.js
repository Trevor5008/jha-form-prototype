import { createSlice } from '@reduxjs/toolkit'

const initialState = []
export const hazardControlsSlice = createSlice({
    name: 'controls',
    initialState: initialState,
    reducers: {
        addControl: (state, action) => {
            state.push(action.payload)
        },
        removeControl: (state, action) => {
            const removeIdx = state.indexOf(action.payload)
            state.splice(removeIdx, 1)
        }
    }
})

export const selectControls = (state) => state.controls
export const { addControl, removeControl } = hazardControlsSlice.actions
export default hazardControlsSlice.reducer