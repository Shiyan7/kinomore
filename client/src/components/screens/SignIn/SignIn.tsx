import {RoutesEnum} from '@/constants/routes'
import {Auth} from '@/components/Auth/Auth'
import {Controller, useForm,} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup";
import {useRouter} from 'next/router';
import {useActions} from '@/hooks/useActions';
import {useLoginMutation} from '@/services/AuthService';
import {useState} from 'react';
import NextLink from 'next/link'
import * as Yup from "yup";

export const SignIn = () => {
	
	const {push} = useRouter()
	const {setUser} = useActions()
	const {Heading, TextField, Button, Error, Link} = Auth
	const [formError, setFormError] = useState('')
	const [login] = useLoginMutation()

	const schema = Yup.object().shape({
		email: Yup.string().required('Введите email'),
		password: Yup.string().required('Введите пароль')	
	});

	const {handleSubmit, control, formState: {errors}, reset} = useForm({
        defaultValues: {
			email: '',
			password: ''
		},
		resolver: yupResolver(schema),
    })

	const handleLogin = handleSubmit(async data => {
		try {
			const user = await login(data).unwrap()
			setUser(user)
			push(RoutesEnum.Home)
		} catch (err: any) {
			const {message} = err.data;
			setFormError(message)
		}
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
			{formError?.length > 0 && <Error>{formError}</Error>}
			<Button onClick={handleLogin}>Войти</Button>
			<Link>Нет аккаунта?&nbsp;<NextLink href={RoutesEnum.Register}><a>Зарегистрироваться</a></NextLink></Link>
		</Auth>
    );
}