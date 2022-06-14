import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    children?: ReactNode;
    variant?: 'stroke';
    className?: string;
    href?: string;
}

export const Button = memo<ButtonProps>(({children, variant, className, href, ...props}) => {

    return (
        <>
            {href ?
            <Link href={href}>
                <a
                    className={classNames('g-btn',
                        variant === 'stroke' && 'g-btn--stroke',
                        className,
                    )}
                    {...props}
                >
                    {children}
                </a>
            </Link>
            :
            <button
                className={classNames('btn-reset', 'g-btn',
                    variant === 'stroke' && 'g-btn--stroke',
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