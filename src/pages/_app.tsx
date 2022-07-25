import { LayoutHome } from 'Layouts/LayoutHome/index'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import 'antd/dist/antd.css'
import { ConfigProvider } from 'antd'
import pt_BR from 'antd/lib/locale-provider/pt_BR'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ConfigProvider locale={pt_BR}>
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
      </ConfigProvider>
    </>
  )
}

export default App
