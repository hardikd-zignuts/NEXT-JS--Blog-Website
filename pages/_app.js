import 'bootstrap/dist/css/bootstrap.min.css';
import Appbar from '@/components/Appbar'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Appbar />
      <Component {...pageProps} />
    </>
  )
}
