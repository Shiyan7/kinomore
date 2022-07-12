import {FormHTMLAttributes, PropsWithChildren} from 'react'
import {Title} from '@/UI/Title/Title';
import {Button as AuthButton, ButtonProps} from '@/UI/Button/Button';
import {TextField as Field, TextFieldProps} from '@/UI/TextField/TextField';
import styles from './Auth.module.scss'

function Auth({children, ...props}: PropsWithChildren<FormHTMLAttributes<HTMLFormElement>>) {
    return <form action="#" className={styles.form} {...props}>{children}</form>
}

module Auth {

    export const Heading = ({children}: PropsWithChildren<{}>) => {
        return <Title className={styles.title}>{children}</Title>
    }

    export const Inputs = ({children}: PropsWithChildren<{}>) => {
        return <div className={styles.inputs}>{children}</div>
    }

    export const TextField = ({...props}: TextFieldProps) => {
        return <Field className={styles.input} {...props} />
    }

    export const Button = ({children}: ButtonProps) => {
        return <AuthButton className={styles.btn}>{children}</AuthButton>
    }

    export const Link = ({children}: PropsWithChildren<{}>) => {
        return <span className={styles.link}>{children}</span>
    }
}

export {Auth}