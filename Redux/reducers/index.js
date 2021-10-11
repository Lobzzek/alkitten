import { combineReducers } from 'redux';
import { activeBreedsInfoReducer } from './activeBreedsInfoReducer.js'
import { activeLoginReducer } from './activeLoginReducer.js'
import { activeFormLoginReducer } from './activeFormLogin.js'
// import { trigeredScrollReducer } from './triggeredScroll.js'

const rootReducer = combineReducers({
    active_breeds: activeBreedsInfoReducer,
    active_login: activeLoginReducer,
    active_form_login: activeFormLoginReducer,
    // triggered_scroll: trigeredScrollReducer,
})

export default rootReducer;