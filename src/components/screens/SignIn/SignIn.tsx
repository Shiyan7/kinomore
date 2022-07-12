import {RoutesEnum} from '@/constants/routes'
import {Auth} from '@/components/Auth/Auth'
import {Controller, useForm, } from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup";
import NextLink from 'next/link'
import * as yup from "yup";

export const SignIn = () => {
	
	const {Heading, TextField, Button, Link} = Auth
	const messageRequired = 'Поле обязательно для заполнения';

	const schema = yup.object().shape({
		email: yup.string().required('Введите email'),
		password: yup.string().required('Введите пароль')	
	});

	const {handleSubmit, control, formState: {errors}, reset} = useForm({
        defaultValues: {
			email: '',
			password: ''
		},
		resolver: yupResolver(schema),
    })

	const handleLogin = handleSubmit(data => {
		console.log('Успешная авторизация', data);
		reset()
	})
	

    return (
		<Auth onSubmit={handleLogin}>
			<Heading>Вход</Heading>
			<Controller
				name='email'
				control={control}
				render={({ field: { value, onChange } }) => {
					return (
						<TextField
							type='email'
							label='Email'
							placeholder='Введите email'
							value={value}
							onChange={onChange}
							errorMessage={errors.email?.message}
							error={errors.hasOwnProperty('email')}
						/>
					);
				}}
			/>
			
			<Controller
				name='password'
				control={control}
				render={({ field: { value, onChange } }) => {
					return (
						<TextField
							type='password'
							label='Пароль'
							placeholder='Введите пароль'
							value={value}
							onChange={onChange}
							errorMessage={errors.password?.message}
							error={errors.hasOwnProperty('password')}
						/>
					);
				}}
			/>
			<Button onClick={handleLogin}>Войти</Button>
			<Link>Нет аккаунта?&nbsp;<NextLink href={RoutesEnum.Register}><a>Зарегистрироваться</a></NextLink></Link>
		</Auth>
    );
}