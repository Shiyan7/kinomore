import { ButtonHTMLAttributes, FC } from 'react';
import { useCopyToClipboard } from 'usehooks-ts';
import { Button } from '@/UI/Button/Button';
import { useRouter } from 'next/router';

export const CopyToClipboard: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
	className,
	...props
}) => {
	const { asPath } = useRouter();
	const [_, copy] = useCopyToClipboard();

	const handleCopyToClipboard = () => {
		const origin =
			typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
		const URL = `${origin}${asPath}`;
		copy(URL);
	};

	return (
		<Button variant="sm" onClick={handleCopyToClipboard} {...props}>
			Скопировать ссылку
		</Button>
	);
};
