import { combineReducers } from 'redux';
import { activeBreedsInfoReducer } from './activeBreedsInfoReducer.js'
import { activeLoginReducer } from './activeLoginReducer.js'
import { activeFormLoginReducer } from './activeFormLogin.js'
import { activeCatDetailsReducer } from './activeCatDetailsReducer.js'
import { activeCatteryDetailsReducer } from './activeCatteryDetailsReducer.js'
import { activeGalleryPopupReducer } from './activeGalleryPopupReducer.js'
import { activeMapReducer } from './activeMapReducer.js'
import {activeChatsReducer} from './activeChatsReducer.js'
import { loginUserReducer } from './loginUserReducer.js'
// import { trigeredScrollReducer } from './triggeredScroll.js'

const rootReducer = combineReducers({
    active_breeds: activeBreedsInfoReducer,
    active_login: activeLoginReducer,
    active_form_login: activeFormLoginReducer,
    active_cat_details: activeCatDetailsReducer,
    active_cattery_details: activeCatteryDetailsReducer,
    active_gallery_popup: activeGalleryPopupReducer,
    active_map: activeMapReducer,
    active_chats: activeChatsReducer,
    login_user: loginUserReducer,
    // triggered_scroll: trigeredScrollReducer,
})

export default rootReducer;