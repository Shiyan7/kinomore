import 'normalize.css'
import '../scss/main.scss'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout/Layout'
import { wrapper } from '../store/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp)