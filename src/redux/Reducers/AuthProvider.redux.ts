import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "@/redux/store"

// Define a type for the slice state
interface UserData {
    id: string;
    name: string;
    email: string;
    image: string;
    isEmailVerified: boolean;
    createdAt: string;
    updatedAt: string;
}

// Define the initial state using that type
const initialState: UserData = {
    id: "",
    name: "",
    email: "",
    isEmailVerified: false,
    image: "",
    createdAt: "",
    updatedAt: ""
}

export const AuthSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        insertData: (state, action: PayloadAction<UserData>) => {
            state.id = action.payload.id
            state.name = action.payload.name
            state.email = action.payload.email
            state.isEmailVerified = action.payload.isEmailVerified
            state.image = action.payload.image
            state.createdAt = action.payload.createdAt
            state.updatedAt = action.payload.updatedAt
        },
        removeData: (state) => {
            state.id = ""
            state.name = ""
            state.email = ""
            state.isEmailVerified = false
            state.image = ""
            state.createdAt = ""
            state.updatedAt = ""
        },
    },
})

export const { insertData, removeData } = AuthSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const Auth = (state: RootState) => state.Auth

export default AuthSlice.reducer