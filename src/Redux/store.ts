import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./reducers/authReducer";
import { initialStates } from "./reducers/initialStates";
import thunkMiddleware from 'redux-thunk'
import Cookies from "js-cookie";

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

const reducers = combineReducers({
    initialStatess: initialStates,
    auth: authReducer,
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.cookie = Cookies.get('authUser')