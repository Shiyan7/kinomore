import { NextPage } from 'next';
import { Layout } from '@/components/Layout/Layout';
import { SignIn } from '@/screens/SignIn/SignIn';

const LoginPage: NextPage = () => {
	return (
		<Layout>
			<SignIn />
		</Layout>
	);
};

export default LoginPage;
