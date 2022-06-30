import {ButtonHTMLAttributes, FC} from 'react';
import {useCopyToClipboard} from 'usehooks-ts'
import {useRouter} from 'next/router';
import { Button } from '../Button/Button';
import { ButtonBase } from '../ButtonBase/ButtonBase';
import {FiCopy} from 'react-icons/fi'
import styles from './CopyToClipboard.module.scss'

interface CopyToClipboardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'btn';
	className?: string;
}

export const CopyToClipboard: FC<CopyToClipboardProps> = ({className, variant, ...props}) => {

	
	const {asPath} = useRouter();
	const [_, copy] = useCopyToClipboard()

	const handleCopyToClipboard = () => {
		const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
		const URL = `${origin}${asPath}`;
		copy(URL)
	}
	  
    return (
      <>
        {variant === "btn" ? (
			<Button
				variant='sm'
				onClick={handleCopyToClipboard}
				>
				Скопировать ссылку
			</Button>
        ) : (
			<ButtonBase
				className={styles.share}
				onClick={handleCopyToClipboard}
				{...props}
			>
				<FiCopy />
				Скопировать ссылку
			</ButtonBase>
        )}
      </>
    );
}
