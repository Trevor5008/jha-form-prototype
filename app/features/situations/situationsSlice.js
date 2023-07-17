import { createSlice } from '@reduxjs/toolkit'

const initialState = []
export const situationsSlice = createSlice({
    name: 'situations',
    initialState: initialState,
    reducers: {
        addSituation: (state, action) => {
            state.push(action.payload)
        },
        removeSituation: (state, action) => {
            const removeIdx = state.indexOf(action.payload)
            state.splice(removeIdx, 1)
        }
    }
})

export const selectSituation = (state) => state.situations
export const { addSituation, removeSituation } = situationsSlice.actions
export default situationsSlice.reducer