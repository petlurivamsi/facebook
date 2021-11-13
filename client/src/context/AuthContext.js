import { useReducer } from "react";
import { createContext } from "react";
import AuthReducer from "./AuthReducer";


const INITIAL_STATE = {
    user:{
        "_id":"609fc6cd2e9405776c84b842",
        "profilePicture":"",
        "coverPicture":"",
        "followers":["609fbaf952cf8a874451908b"],
        "following":["609fbaf952cf8a874451908b"],
        "isAdmin":false,
        "username":"Madhavi",
        "email":"Madhavi.Petluri@gmail.com",

    },
    isFetching:false,
    error:false
};



export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return(
            <AuthContext.Provider value={{
                user:state.user,
                isFetching:state.isFetching,
                error:state.error,
                dispatch

            }}>
                {children}
            </AuthContext.Provider>
    )
}

