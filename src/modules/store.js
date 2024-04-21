import { combineReducers, createStore } from "redux";
import counterReducer from './counter/reducers'
const rootReducer = combineReducers({
    counter: counterReducer
});
const store = createStore(rootReducer)
export default store
