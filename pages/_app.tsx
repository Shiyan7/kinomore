import 'normalize.css'
import '../scss/main.scss'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout/Layout'
import { useStore, wrapper } from '../store/store'
import NextNProgress from "nextjs-progressbar";
import { Provider } from 'react-redux'

export default function MyApp({ Component, pageProps }: AppProps) {

  const store = useStore(pageProps.initialReduxState)
  
  return (
    <Provider store={store}>
      <Layout>
        <NextNProgress
          color='#175a77'
          options={{ showSpinner: false }}
        />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}