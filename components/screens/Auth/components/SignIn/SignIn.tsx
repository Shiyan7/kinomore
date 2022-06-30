import {Button} from "@/components/Button/Button"
import {TextField} from "@/components/TextField/TextField"
import {Title} from "@/components/Title/Title"
import {RoutesEnum} from "@/constants/routes"
import {FC, FormEvent} from "react"
import Link from "next/link"
import styles from '../../Auth.module.scss'

export const SignIn = () => {

	const handleLogin = (e: FormEvent<HTMLButtonElement | HTMLFormElement>) => {
		e.preventDefault()
		console.log('login');
	}

    return (
		<form action="#" onSubmit={handleLogin} className={styles.form}>
			<Title className={styles.title}>Вход</Title>
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
			<Button className={styles.btn} onClick={handleLogin}>Войти</Button>
			<span className={styles.link}>Нет аккаунта?&nbsp;<Link href={RoutesEnum.Register}><a>Зарегистрироваться</a></Link></span>
		</form>
    );
}