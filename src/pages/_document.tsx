import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="ru">
			<Head>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<link rel="manifest" href="/manifest.json" />
				<link href="/icons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
				<link href="/icons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
				<link rel="apple-touch-icon" href="/apple-icon.png"></link>
				<meta name="theme-color" content="#141414" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
