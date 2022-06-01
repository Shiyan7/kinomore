import 'normalize.css'
import '../scss/main.scss'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout/Layout'
import { useStore } from '../store/store'
import { Provider } from 'react-redux'

export default function MyApp({ Component, pageProps }: AppProps) {

  const store = useStore(pageProps.initialReduxState)
  
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}