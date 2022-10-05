import 'normalize.css';
import '@/scss/main.scss';
import type { AppProps } from 'next/app';
import { useStore } from '@/store/store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
	const store = useStore(pageProps.initialReduxState);

	const router = useRouter();

	NProgress.configure({
		showSpinner: false,
	});

	useEffect(() => {
		const handleRouteStart = () => NProgress.start();
		const handleRouteDone = () => NProgress.done();

		router.events.on('routeChangeStart', handleRouteStart);
		router.events.on('routeChangeComplete', handleRouteDone);
		router.events.on('routeChangeError', handleRouteDone);

		return () => {
			router.events.off('routeChangeStart', handleRouteStart);
			router.events.off('routeChangeComplete', handleRouteDone);
			router.events.off('routeChangeError', handleRouteDone);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Provider store={store}>
			<Head>
				<title>
					Онлайн-кинотеатр Kinomore - фильмы, сериалы и мультфильмы смотреть онлайн бесплатно в
					хорошем качестве
				</title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
				/>
				<meta property="og:description" content="Kinomore - фильмы и сериалы" />
				<meta property="og:title" content="Kinomore - фильмы и сериалы" />
				<meta
					name="description"
					content="Устройте кинотеатр у себя дома! Смотрите онлайн фильмы хорошего качества в приятной домашней обстановке и в удобное для вас время. Для вас всегда доступны на любой вкус: сериалы, фильмы, мультфильмы и многое другое."
				/>
				<meta
					name="keywords"
					content="фильмы онлайн в хорошем отличном качестве без смс кино видео смотреть новинки кинофильмы онлайн кинотеатр 2012 2013 просмотр видеоролики"
				/>
				<meta name="apple-mobile-web-app-capable" content="yes" />
			</Head>
			<Component {...pageProps} />
		</Provider>
	);
}
