import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { TextField } from '@/UI/TextField/TextField';
import { IMessage } from '@/types/IMessage';
import { Message } from './components/Message/Message';
import { CopyToClipboard } from './components/CopyToClipboard/CopyToClipboard';
import styles from './Chat.module.scss';

export const Chat = () => {
	const [message, setMessage] = useState<string>('');
	const [messages, setMessages] = useState<IMessage[]>([]);
	const ref = useRef<HTMLDivElement>(null);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setMessage(e.target.value);
	};

	const sendMessage = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const newMessage: IMessage = {
			name: 'Your Name',
			text: message,
			timestamp: Date.now(),
		};

		if (message.trim()) {
			setMessages([...messages, newMessage]);
			setMessage('');
		}
	};

	useEffect(() => {
		ref.current?.scrollTo(0, ref.current.scrollHeight);
	}, [messages]);

	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<CopyToClipboard />
			</div>
			<div ref={ref} className={styles.content}>
				{messages.length ? (
					messages.map((item) => <Message key={item.timestamp} item={item} />)
				) : (
					<span className={styles.noMessages}>Нет сообщений</span>
				)}
			</div>
			<form onSubmit={sendMessage} className={styles.form} action="#">
				<TextField
					type="text"
					variant="small"
					className={styles.input}
					placeholder="Введите сообщение"
					value={message}
					onChange={handleChange}
				/>
			</form>
		</div>
	);
};
