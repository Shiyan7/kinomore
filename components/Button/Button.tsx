import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    children?: ReactNode;
    variant?: 'stroke' | 'regular';
    className?: string;
    href?: string;
}

export const Button = memo<ButtonProps>(({children, variant, className, href, ...props}) => {

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
            <button
                className={classNames('btn-reset',
                    styles.btn,
                    variant === 'stroke' && styles.stroke,
                    variant === 'regular' && styles.regular,
                    className
                )}
                {...props}
            >
                {children}
            </button>
            }
        </>
    )
})

Button.displayName = 'Button'