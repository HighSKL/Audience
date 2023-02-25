import { authUser, userApi } from "../../Api/usersApi"
import { UserDataType } from "../../Types/types"

const SET_PROFILE_DATA: string = "SET-PROFILE-DATA"

type IinitialStateType = typeof initialState
type SetUser = {
    type: typeof SET_PROFILE_DATA,
    data: UserDataType
}


const initialState = {
    authUser: {
        id: null,
        login: null,
        password: null
    } as UserDataType
}



let authReducer = (state = initialState, action: any): IinitialStateType => {
    switch(action.type){
        case SET_PROFILE_DATA: {
            return {...state, authUser: {id: action.data.id, login: action.data.login, password: action.data.password}}
        }
        default: return state;
    }
}

export let setUser = (data: UserDataType): SetUser => ({type: SET_PROFILE_DATA, data})

export let authUserThunk = (login: string, password: string) => (dispath: any) => {
    authUser(login, password);
    dispath(setUser)
}

export default authReducer;