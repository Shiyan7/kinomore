import 'normalize.css'
import '../scss/main.scss'
import type { AppProps } from 'next/app'
import { Layout } from '@/components/Layout/Layout'
import { useStore } from '@/store/store'
import { Provider } from 'react-redux'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useVH from "react-vh";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';

export default function MyApp({ Component, pageProps }: AppProps) {

  const store = useStore(pageProps.initialReduxState)
  
  const router = useRouter()

  useVH()

  NProgress.configure({
    showSpinner: false,
  })

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);

    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}