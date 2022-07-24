import { LayoutHome } from 'Layouts/LayoutHome/index'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Logoipsum</title>
          <link rel="shortcut icon" href="/img/logo.svg" />
          <link rel="apple-touch-icon icon" href="/img/logo.svg" />
          <meta name="description" content="Project to logoipsum" />
        </Head>
        <GlobalStyles />
        <LayoutHome>
          <Component {...pageProps} />
        </LayoutHome>
      </ThemeProvider>
    </>
  )
}

export default App