import { combineReducers, createStore } from "redux";
import { initialStates } from "./reducers/initialStates";

const reducers = combineReducers({
    initialStatess: initialStates
})

export let store = createStore(reducers); 