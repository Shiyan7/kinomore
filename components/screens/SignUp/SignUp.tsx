import {RoutesEnum} from "@/constants/routes"
import {FormEvent} from "react"
import {Auth} from "@/components/Auth/Auth"
import NextLink from "next/link"

export const SignUp = () => {
	
	const {Heading, Inputs, TextField, Button, Link} = Auth

	const handleRegister = (e: FormEvent<HTMLButtonElement | HTMLFormElement>) => {
		e.preventDefault()
		console.log('register');
	}

    return (
		<Auth onSubmit={handleRegister}>
			<Heading>Регистрация</Heading>
			<Inputs>
				<TextField
					label="Имя"
					placeholder="Имя"
				/>
				<TextField
					label="Фамилия"
					placeholder="Фамилия"
				/>
			</Inputs>
			<TextField
				label="Email"
				placeholder="Введите email"
			/>
			<TextField
				label="Пароль"
				placeholder="Введите пароль"
			/>
			<Button onClick={handleRegister}>Зарегистрироваться</Button>
			<Link>Есть аккаунт?&nbsp;<NextLink href={RoutesEnum.Login}><a>Войти</a></NextLink></Link>
		</Auth>
    );
}