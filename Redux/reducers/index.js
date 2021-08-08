import { combineReducers } from 'redux';
import { activeBreedsInfoReducer } from './activeBreedsInfoReducer.js'
// import { trigeredScrollReducer } from './triggeredScroll.js'

const rootReducer = combineReducers({
    active_breeds: activeBreedsInfoReducer,
    // triggered_scroll: trigeredScrollReducer,
})

export default rootReducer;