import { createSlice } from '@reduxjs/toolkit'
import { emergencyResponse } from '@/lib/options'

const initialState = {}
for (let el of emergencyResponse) {
    initialState[el] = ''
}
export const emergencyResponseSlice = createSlice({
    name: 'responses',
    initialState,
    reducers: {
        addResponse: (state, action) => {
            const { key, value } = action.payload
            state[key] = value
        }
    }
})

export const selectResponses = (state) => state.responses
export const { addResponse } = emergencyResponseSlice.actions
export default emergencyResponseSlice.reducer