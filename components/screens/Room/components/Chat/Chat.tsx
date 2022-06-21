import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FiRefreshCw, FiSend } from 'react-icons/fi';
import { Button } from '@/components/Button/Button';
import { Input } from '@/components/Input/Input';
import styles from './Chat.module.scss';

export const Chat = () => {

  const router = useRouter()
  const [value, setValue] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setValue('')
  }

  return (
    <div className={styles.container}>
        <div className={styles.top}>
          <Button className={styles.copyLink}>Скопировать ссылку</Button>
          <Button className={styles.refresh}>
            <FiRefreshCw />
          </Button>
        </div>
        <div className="content">
          <span className={styles.noMessages}>Нет сообщений</span>
        </div>
        <form onSubmit={sendMessage} className={styles.form} action="#">
          <Input
            variant='dark'
            className={styles.input}
            placeholder='Введите сообщение'
            value={value}
            onChange={handleChange}
          />
        </form>
    </div>
  )
}
