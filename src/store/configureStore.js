// Store/configureStore.js

import { createStore,combineReducers  } from 'redux';
import LangueReducer from './Reducers/LangueReducer'
import ConnexionReducer from './Reducers/ConnexionReducer'
import DarkReducer from './Reducers/DarkReducer'

const rootReducer = combineReducers({
    connexion:ConnexionReducer,
    langue:LangueReducer,
    dark:DarkReducer
})
export default createStore(rootReducer) 