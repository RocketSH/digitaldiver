import '../styles/globals.css'
import 'highlight.js/scss/base16/chalk.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
