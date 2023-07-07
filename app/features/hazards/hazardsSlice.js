import { createSlice } from '@reduxjs/toolkit'

const initialState = []
export const hazardsSlice = createSlice({
    name: 'hazards',
    initialState: initialState,
    reducers: {
        addHazard: (state, action) => {
            state.push(action.payload)
        },
        removeHazard: (state, action) => {
            const removeIdx = state.indexOf(action.payload)
            state.splice(removeIdx, 1)
        }
    }
})

export const selectHazards = (state) => state.hazards
export const { addHazard, removeHazard } = hazardsSlice.actions
export default hazardsSlice.reducer