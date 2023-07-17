import { configureStore } from '@reduxjs/toolkit'
import hazardsReducer from './features/hazards/hazardsSlice'
import situationsReducer from './features/situations/situationsSlice'
import hazardControlsReducer from './features/hazard-controls/hazardControlsSlice'
import ppeReducer from './features/ppe/ppeSlice'

export default configureStore({
    reducer: {
        situations: situationsReducer,
        hazards: hazardsReducer,
        controls: hazardControlsReducer,
        ppe: ppeReducer
    }
})