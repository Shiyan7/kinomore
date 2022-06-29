import {ButtonHTMLAttributes, memo, PropsWithChildren} from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import styles from './Button.module.scss'
import { ButtonBase } from '../ButtonBase/ButtonBase';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    variant?: 'stroke' | 'regular';
    className?: string;
    href?: string;
}

export const Button = memo<PropsWithChildren<ButtonProps>>(({children, variant, className, href, ...props}) => {

    return (
        <>
            {href ?
            <Link href={href}>
                <a
                    className={classNames(
                        styles.btn,
                        variant === 'stroke' && styles.stroke,
                        variant === 'regular' && styles.regular,
                        className,
                    )}
                    {...props}
                >
                    {children}
                </a>
            </Link>
            :
            <ButtonBase
                ripple={true}
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
            }
        </>
    )
})

Button.displayName = 'Button'