import {ButtonHTMLAttributes, memo, PropsWithChildren} from 'react';
import {ButtonBase} from '../ButtonBase/ButtonBase';
import classNames from 'classnames';
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    variant?: 'stroke' | 'regular';
    className?: string;
    animationDuration?: number;
}

export const Button = memo<PropsWithChildren<ButtonProps>>(({children, variant, className, animationDuration, ...props}) => {

    return (
        <ButtonBase
            ripple={true}
            animationDuration={animationDuration}
            className={classNames(
                styles.btn,
                variant === 'stroke' && styles.stroke,
                variant === 'regular' && styles.regular,
                className
            )}
            {...props}
        >
            {children}
        </ButtonBase>
    )
})

Button.displayName = 'Button'