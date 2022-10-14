import { useRouter } from 'next/router';
import { ButtonHTMLAttributes, FC, memo } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { ButtonBase } from '@/UI/ButtonBase/ButtonBase';
import styles from './BackButton.module.scss';
import classNames from 'classnames';

interface BackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'icon';
}

export const BackButton: FC<BackButtonProps> = ({ className, variant, ...props }) => {
	const router = useRouter();
	const handleBack = () => router.back();

	return (
		<ButtonBase
			className={classNames(styles.back, variant === 'icon' && styles.icon, className)}
			onClick={handleBack}
			startIcon={variant === 'icon' ? null : <FiChevronLeft />}
			{...props}
		>
			{variant === 'icon' ? <FiChevronLeft /> : 'Назад'}
		</ButtonBase>
	);
};