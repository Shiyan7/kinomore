import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IUser } from '@/types/IUser'

type AuthState = {
	user: IUser | null
	token: string | null
}

const authSlice = createSlice({
	name: 'auth',
	initialState: { user: null, token: null } as AuthState,
	reducers: {
		setUser: (state, action: PayloadAction<AuthState>) => {
			localStorage.setItem("user", JSON.stringify({
				user: action.payload.user,
				token: action.payload.token
			})),
			state.user = action.payload.user;
			state.token = action.payload.token;
		}
	},
})

export const { setUser } = authSlice.actions

export const authReducer = authSlice.reducer;