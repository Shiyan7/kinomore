import {FormHTMLAttributes, PropsWithChildren} from 'react'
import {Title} from '@/components/Title/Title';
import {Button as AuthButton, ButtonProps} from '@/components/Button/Button';
import {TextField as AuthTextField, TextFieldProps} from '../TextField/TextField';
import styles from './Auth.module.scss'

function Auth({children, ...props}: PropsWithChildren<FormHTMLAttributes<HTMLFormElement>>) {
    return <form action="#" className={styles.form} {...props}>{children}</form>
}

namespace Auth {

    export const Heading = ({children}: PropsWithChildren<{}>) => {
        return <Title className={styles.title}>{children}</Title>
    }

    export const Inputs = ({children}: PropsWithChildren<{}>) => {
        return <div className={styles.inputs}>{children}</div>
    }

    export const TextField = ({...props}: TextFieldProps) => {
        return <AuthTextField className={styles.input} {...props} />
    }

    export const Button = ({children}: ButtonProps) => {
        return <AuthButton className={styles.btn}>{children}</AuthButton>
    }

    export const Link = ({children}: PropsWithChildren<{}>) => {
        return <span className={styles.link}>{children}</span>
    }
}

export {Auth}