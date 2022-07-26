import { RootState } from "@/store/store";
import { IUser } from "@/types/IUser";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

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
        baseUrl: 'http://localhost:5000/api',
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
        })
    })
})
export const {useLoginMutation} = authAPI