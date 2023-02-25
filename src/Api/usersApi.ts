import axios from "axios"
import Cookie from "js-cookie"
import { UserDataType } from "../Types/types"

let instance = axios.create({
    baseURL: "http://localhost:3000/"
})

export const userApi = {
    findUser: (login: string, password: string) => {
        return instance.get(`users?login=${login}&password=${password}`).then(data=>data.data)
    }
}

export const authUser = (login: string, password: string) => {
    userApi.findUser(login, password).then(data=>{
        if(data.length == 1){
            console.log(Cookie.get('authUser') == undefined)
            if(Cookie.get('authUser') == undefined){
                let user: UserDataType = {...data[0]}
                Cookie.set('authUser', JSON.stringify(user))
            }
        }
    })
}

console.log(Cookie.get('authUser'))