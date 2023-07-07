import { configureStore } from '@reduxjs/toolkit'
import hazardsReducer from './features/hazards/hazardsSlice'

export default configureStore({
    reducer: {
        hazards: hazardsReducer
    }
})