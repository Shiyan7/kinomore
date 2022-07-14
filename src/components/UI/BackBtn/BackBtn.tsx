import Link from 'next/link';
import { ButtonHTMLAttributes, memo } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { ButtonBase } from '@/UI/ButtonBase/ButtonBase';
import styles from './BackBtn.module.scss';
import classNames from 'classnames';

interface BackBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'icon';
  href: string;
}

export const BackBtn = memo<BackBtnProps>(
  ({ className, variant, href, ...props }) => {
    return (
      <Link href={href}>
        <a>
          <ButtonBase
            className={classNames(
              styles.back,
              variant === 'icon' && styles.icon,
              className
            )}
            startIcon={variant === 'icon' ? null : <FiChevronLeft />}
            {...props}
          >
            {variant === 'icon' ? <FiChevronLeft /> : 'Назад'}
          </ButtonBase>
        </a>
      </Link>
    );
  }
);

BackBtn.displayName = 'BackBtn';
