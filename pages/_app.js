import 'bootstrap/dist/css/bootstrap.min.css';
import Appbar from '@/components/Appbar'
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Appbar />
      <Component {...pageProps} />
      <Toaster />
    </>
  )
}
