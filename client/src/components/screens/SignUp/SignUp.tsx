import {RoutesEnum} from '@/constants/routes'
import {Auth} from '@/components/Auth/Auth'
import {Controller, useForm,} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup";
import NextLink from 'next/link'
import * as Yup from "yup";
import {useRouter} from 'next/router';
import { useState } from 'react';
import { useRegisterMutation } from '@/services/AuthService';
import { useActions } from '@/hooks/useActions';

export const SignUp = () => {
	
	const {push} = useRouter()
	const {setUser} = useActions()
	const {Heading, Inputs, TextField, Error, Button, Link} = Auth
	const [formError, setFormError] = useState('')
	const [register] = useRegisterMutation()
	const messageRequired = 'Поле обязательно для заполнения'

	const schema = Yup.object().shape({
		firstName: Yup.string().required('Введите имя'),
		lastName: Yup.string().required('Введите фамилию'),
		email: Yup.string().email('Введите корректный email').required(messageRequired),
		password: Yup.string().min(8, 'Пароль должен содержать не менее 8 символов').required(messageRequired)	
	});

	const {handleSubmit, control, formState: {errors}, reset} = useForm({
        defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: ''
		},
		resolver: yupResolver(schema),
    })

	const isFormError = formError?.length > 0

	const handleRegister = handleSubmit(async data => {
		try {
			const user = await register(data).unwrap()
			setUser(user)
			push(RoutesEnum.Home)
		} catch (err: any) {
			const {message} = err.data;

			setFormError(message)
			
		}
	})
	

    return (
		<Auth onSubmit={handleRegister}>
			<Heading>Регистрация</Heading>
			<Inputs>
				<Controller
					name='firstName'
					control={control}
					render={({ field: { value, onChange } }) => {
						return (
							<TextField
								label='Имя'
								placeholder='Имя'
								value={value}
								onChange={onChange}
								errorMessage={errors.firstName?.message}
								error={errors.hasOwnProperty('name')}
							/>
						);
					}}
				/>
				<Controller
					name='lastName'
					control={control}
					render={({ field: { value, onChange } }) => {
						return (
							<TextField
								label='Фамилия'
								placeholder='Фамилия'
								value={value}
								onChange={onChange}
								errorMessage={errors.lastName?.message}
								error={errors.hasOwnProperty('surname')}
							/>
						);
					}}
				/>
			</Inputs>
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
			{isFormError && <Error>{formError}</Error>}
			<Button onClick={handleRegister}>Зарегистрироваться</Button>
			<Link>Есть аккаунт?&nbsp;<NextLink href={RoutesEnum.Login}><a>Войти</a></NextLink></Link>
		</Auth>
    );
}