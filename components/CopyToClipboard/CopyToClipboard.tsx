import {ButtonHTMLAttributes, FC} from 'react';
import {useCopyToClipboard} from 'usehooks-ts'
import {useRouter} from 'next/router';
import {Button} from '../Button/Button';

interface CopyToClipboardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
}

export const CopyToClipboard: FC<CopyToClipboardProps> = ({className, ...props}) => {
	
	const {asPath} = useRouter();
	const [_, copy] = useCopyToClipboard()

	const handleCopyToClipboard = () => {
		const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
		const URL = `${origin}${asPath}`;
		copy(URL)
	}
	  
    return (
		<Button
			variant='sm'
			onClick={handleCopyToClipboard}
			{...props}
		>
			Скопировать ссылку
		</Button>
    );
}
