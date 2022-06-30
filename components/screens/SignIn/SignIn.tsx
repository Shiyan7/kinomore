import {RoutesEnum} from "@/constants/routes"
import {FormEvent} from "react"
import {Auth} from "@/components/Auth/Auth"
import NextLink from "next/link"

export const SignIn = () => {

	const {Heading, TextField, Button, Link} = Auth;

	const handleLogin = (e: FormEvent<HTMLButtonElement | HTMLFormElement>) => {
		e.preventDefault()
		console.log('login');
	}

    return (
		<Auth onSubmit={handleLogin}>
			<Heading>Вход</Heading>
			<TextField label="Email" placeholder="Введите email" />
			<TextField label="Пароль" placeholder="Введите пароль" />
			<Button onClick={handleLogin}>Войти</Button>
			<Link>Нет аккаунта?&nbsp;<NextLink href={RoutesEnum.Register}><a>Зарегистрироваться</a></NextLink></Link>
		</Auth>
    );
}