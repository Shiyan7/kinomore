import { ButtonHTMLAttributes, ReactNode, useRef } from 'react';
import { forwardRef } from 'react';
import { useRipple } from 'react-use-ripple';
import classNames from 'classnames';
import styles from './ButtonBase.module.scss';

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	ripple?: boolean;
	startIcon?: ReactNode;
	endIcon?: ReactNode;
	animationDuration?: number;
}

export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
	(
		{
			className,
			startIcon = null,
			endIcon = null,
			ripple = false,
			animationDuration = 500,
			children,
			...props
		},
		ref
	) => {
		const buttonRef = useRef<HTMLButtonElement>(null);
		const commonRef = ref || buttonRef;

		/* @ts-ignore */
		useRipple(commonRef, { disabled: !ripple, animationLength: animationDuration });

		return (
			<button className={classNames(styles.btn, className)} ref={commonRef} {...props}>
				{startIcon && <span className={styles.startIcon}>{startIcon}</span>}
				{children}
				{endIcon && <span className={styles.endIcon}>{endIcon}</span>}
			</button>
		);
	}
);

ButtonBase.displayName = 'ButtonBase';
