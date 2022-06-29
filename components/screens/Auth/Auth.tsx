import React from 'react'
import { SignIn } from './components/SignIn/SignIn'
import { SignUp } from './components/SignUp/SignUp'

export const Auth = () => {

    const isReg = false

    return (
        <>
            {isReg ? <SignIn /> : <SignUp />}
        </>
    )
}