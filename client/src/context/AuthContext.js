import {createContext, useReducer} from "react"
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
    user: {
        "_id": {
          "$oid": "62dd69c4e6afbd4df2576b0b"
        },
        "username": "test",
        "email": "test@gmail.com",
        "password": "$2b$10$AG.ZwqKhLAXX.O9ZaQpnGe4AFpavx7cz0j7DY7lX7vSFhMtsNi.gq",
        "profilePicture": "person/8.jpeg",
        "coverPicture": "",
        "followers": [],
        "following": [
          "62d45cc938305829528a90b1"
        ],
        "isAdmin": false,
        "createdAt": {
          "$date": {
            "$numberLong": "1658677700554"
          }
        },
        "updatedAt": {
          "$date": {
            "$numberLong": "1658677700554"
          }
        },
        "__v": 0
      },
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children})  => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
            }}
        >
                {children}
        </AuthContext.Provider>
    )
} 