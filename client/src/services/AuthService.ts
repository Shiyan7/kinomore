import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {AUTH_API_URL} from "@/constants/api";
import {RootState} from "@/store/store";
import {IUser} from "@/types/IUser";

interface UserResponse {
    user: IUser
    token: string
}

interface LoginRequest {
    email: string
    password: string
}

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: AUTH_API_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).authReducer.token

            if (token) {
              headers.set('authorization', `Bearer ${token}`)
            }
            
            return headers
        },
    }),
    endpoints: build => ({
        login: build.mutation<UserResponse, LoginRequest>({
            query: credentials => {
                return {
                    url: '/login',
                    method: 'POST',
                    body: credentials,
                }
            }
        }),
        register: build.mutation<UserResponse, IUser>({
            query: credentials => {
                return {
                    url: '/register',
                    method: 'POST',
                    body: credentials
                }
            }
        })
    })
})
export const {useLoginMutation, useRegisterMutation} = authAPI