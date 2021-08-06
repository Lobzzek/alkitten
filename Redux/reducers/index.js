import { combineReducers } from 'redux';
import { activeBreedsInfoReducer } from './activeBreedsInfoReducer.js'

const rootReducer = combineReducers({
    active_breeds: activeBreedsInfoReducer,
})

export default rootReducer;