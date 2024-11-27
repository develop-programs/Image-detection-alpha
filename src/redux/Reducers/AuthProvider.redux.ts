import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from "@/redux/store";
import axios from 'axios'; // Adjust the import path as needed
interface User {
    id: string;
    email: string;
    name?: string;
    password: string;
    image?: string;
    isEmailVerified: boolean;
    createdAt: string;
    updatedAt: string;
}

interface Subscription {
    id: string;
    userId: string;
    plan: string;
    credit: number;
    createdAt: string;
    updatedAt: string;
}


export const fetchUser = createAsyncThunk('user/fetchUser', async (email: string) => {
    const response = await axios.get(`${window.location.origin}/api/auth?email=${email}&subscription=true`);
    return response.data;
});

interface AuthState {
    user: User;
    subscription: Subscription;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: {
        id: '',
        email: '',
        password: '',
        isEmailVerified: false,
        createdAt: "",
        updatedAt: ""
    },
    subscription: {
        id: '',
        userId: '',
        plan: '',
        credit: 0,
        createdAt: "",
        updatedAt: ""
    },
    loading: false,
    error: null
};

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetData: (state) => {
            state.user = {
                id: '',
                email: '',
                password: '',
                isEmailVerified: false,
                createdAt: "",
                updatedAt: ""
            };
            state.subscription = {
                id: '',
                userId: '',
                plan: '',
                credit: 0,
                createdAt: "",
                updatedAt: ""
            };
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.data;
                state.subscription = action.payload.subscription
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch user';
            });
    }
});

export const { resetData } = AuthSlice.actions;
export const Auth = (state: RootState) => state.Auth;

export default AuthSlice.reducer;