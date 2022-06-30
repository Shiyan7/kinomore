import {Button} from "@/components/Button/Button"
import {TextField} from "@/components/TextField/TextField"
import {Title} from "@/components/Title/Title"
import {RoutesEnum} from "@/constants/routes"
import {FormEvent} from "react"
import Link from "next/link"
import styles from '../../Auth.module.scss'

export const SignUp = () => {

	const handleRegister = (e: FormEvent<HTMLButtonElement | HTMLFormElement>) => {
		e.preventDefault()
		console.log('register');
	}

    return (
      <form action="#" onSubmit={handleRegister} className={styles.form}>
        <Title className={styles.title}>Регистрация</Title>
        <div className={styles.inputs}>
          	<TextField
				label="Имя"
				className={styles.input}
				placeholder="Имя"
			/>
			<TextField
				label="Фамилия"
				className={styles.input}
				placeholder="Фамилия"
			/>
        </div>
        <TextField
			label="Email"
			className={styles.input}
			placeholder="Введите email"
        />
        <TextField
			label="Пароль"
			className={styles.input}
			placeholder="Введите пароль"
        />
        <Button className={styles.btn} onClick={handleRegister}>Зарегистрироваться</Button>
        <span className={styles.link}>Есть аккаунт?&nbsp;<Link href={RoutesEnum.Login}><a>Войти</a></Link></span>
      </form>
    );
}