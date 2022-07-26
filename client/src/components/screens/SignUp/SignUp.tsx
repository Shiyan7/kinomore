import {RoutesEnum} from '@/constants/routes'
import {Auth} from '@/components/Auth/Auth'
import {Controller, useForm,} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup";
import NextLink from 'next/link'
import * as Yup from "yup";
import {useRouter} from 'next/router';

export const SignUp = () => {
	
	const {push} = useRouter()
	const {Heading, Inputs, TextField, Button, Link} = Auth
	const messageRequired = 'Поле обязательно для заполнения';

	const schema = Yup.object().shape({
		name: Yup.string().required('Введите имя'),
		surname: Yup.string().required('Введите фамилию'),
		email: Yup.string().email('Введите корректный email').required(messageRequired),
		password: Yup.string().min(8, 'Пароль должен содержать не менее 8 символов').required(messageRequired)	
	});

	const {handleSubmit, control, formState: {errors}, reset} = useForm({
        defaultValues: {
			name: '',
			surname: '',
			email: '',
			password: ''
		},
		resolver: yupResolver(schema),
    })

	const handleRegister = handleSubmit(data => {
		console.log('Успешная регистрация', data);
		push(RoutesEnum.Home)
		reset()
	})
	

    return (
		<Auth onSubmit={handleRegister}>
			<Heading>Регистрация</Heading>
			<Inputs>
				<Controller
					name='name'
					control={control}
					render={({ field: { value, onChange } }) => {
						return (
							<TextField
								label='Имя'
								placeholder='Имя'
								value={value}
								onChange={onChange}
								errorMessage={errors.name?.message}
								error={errors.hasOwnProperty('name')}
							/>
						);
					}}
				/>
				<Controller
					name='surname'
					control={control}
					render={({ field: { value, onChange } }) => {
						return (
							<TextField
								label='Фамилия'
								placeholder='Фамилия'
								value={value}
								onChange={onChange}
								errorMessage={errors.surname?.message}
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
			<Button onClick={handleRegister}>Зарегистрироваться</Button>
			<Link>Есть аккаунт?&nbsp;<NextLink href={RoutesEnum.Login}><a>Войти</a></NextLink></Link>
		</Auth>
    );
}