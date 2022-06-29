import {ButtonHTMLAttributes, useRef} from 'react'
import {forwardRef} from 'react';
import {useRipple} from 'react-use-ripple';
import classNames from 'classnames';
import styles from './ButtonBase.module.scss'

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    ripple?: boolean;
    animationDuration?: number;
}

export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(({className, ripple = false, animationDuration = 500,  children, ...props},  ref) => {

    const buttonRef = useRef<HTMLButtonElement>(null);
    const commonRef = ref || buttonRef
    /* @ts-ignore */
    useRipple(commonRef, {disabled: !ripple, animationLength: animationDuration});
    
    return (
        <button
            className={classNames(styles.btn, className)}
            ref={commonRef}
            {...props}
        >
            {children}
        </button>
    )
})

ButtonBase.displayName = 'ButtonBase'