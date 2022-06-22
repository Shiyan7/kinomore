import {ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import {FiRefreshCw} from 'react-icons/fi';
import {Button} from '@/components/Button/Button';
import {Input} from '@/components/Input/Input';
import {IMessage} from '@/types/IMessage';
import {Message} from '@/components/Message/Message';
import styles from './Chat.module.scss';
import { useCopyToClipboard } from 'usehooks-ts';
import { useRouter } from 'next/router';

export const Chat = () => {
  const {asPath} = useRouter();
  const [value, copy] = useCopyToClipboard()
  const [message, setMessage] = useState<string>('')
  const [messages, setMessages] = useState<IMessage[]>([])
  const ref = useRef<HTMLDivElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const handleCopyToClipboard = () => {
    const origin =
        typeof window !== 'undefined' && window.location.origin
            ? window.location.origin
            : '';
    const URL = `${origin}${asPath}`;
    copy(URL)
  }

  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newMessage: IMessage = {
      name: 'Your Name',
      text: message,
      timestamp: Date.now()
    }
    
    if(message.trim()) {
      setMessages([...messages, newMessage])
      setMessage('')
    }
  }

  useEffect(() => {
    ref.current?.scrollTo(0, ref.current.scrollHeight)
  }, [messages])

  return (
    <div className={styles.container}>
        <div className={styles.top}>
          <Button onClick={handleCopyToClipboard} className={styles.copyLink}>Скопировать ссылку</Button>
          <Button className={styles.refresh}>
            <FiRefreshCw />
          </Button>
        </div>
        <div ref={ref} className={styles.content}>
          {messages.length ? (
            messages.map((item) => <Message key={item.timestamp} item={item} />)
          ) : (
            <span className={styles.noMessages}>
              Нет сообщений
            </span>
          )}
        </div>
        <form onSubmit={sendMessage} className={styles.form} action="#">
          <Input
            type='text'
            variant='dark'
            className={styles.input}
            placeholder='Введите сообщение'
            value={message}
            onChange={handleChange}
          />
        </form>
    </div>
  )
}
