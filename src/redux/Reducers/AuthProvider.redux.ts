import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from "@/redux/store"
import axios from 'axios'

export const fetchUser = createAsyncThunk('user/fetchUser', async (email: string) => {
    const response = await axios.get(`${window.location.origin}/api/auth?email=${email}`)
    return response.data
})


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

interface Subscription {
    id: string;
    plan: string;
    credit: number;
    createdAt: string;
    updatedAt: string;
}

// Define the initial state using that type
const initialState = {
    loading: false,
    data: {
        id: '',
        name: '',
        email: '',
        image: '',
        isEmailVerified: false,
        createdAt: '',
        updatedAt: ''
    } as UserData,
    subscription: {
        id: '',
        plan: '',
        credit: 0,
        createdAt: '',
        updatedAt: ''
    } as Subscription,
    error: ""
}

export const AuthSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        resetData: (state) => {
            state.data = {
                id: '',
                name: '',
                email: '',
                image: '',
                isEmailVerified: false,
                createdAt: '',
                updatedAt: ''
            }
            state.subscription = {
                id: '',
                plan: '',
                credit: 0,
                createdAt: '',
                updatedAt: ''
            }
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true
        }).addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload.data
            state.subscription = action.payload.subscription
        }).addCase(fetchUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || "An unknown error occurred"
        })
    }
})

export const { resetData } = AuthSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const Auth = (state: RootState) => state.Auth

export default AuthSlice.reducer