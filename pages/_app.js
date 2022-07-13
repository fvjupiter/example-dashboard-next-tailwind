import '../styles/globals.css'
import Layout from '../components/Layout'
import { useState } from 'react'
import { NewsContext } from '../lib/context'

function MyApp({ Component, pageProps }) {
  const [isDark, setisDark] = useState(true)
  const toggleMode = () => setisDark(!isDark)
  const [news, setnews] = useState({})

  return (
    <NewsContext.Provider value={{ news: news, setnews: setnews }}>
      <Layout isDark={isDark} toggleMode={toggleMode} >
        <Component isDark={isDark} {...pageProps} />
      </Layout>
    </NewsContext.Provider>
  )
}

export default MyApp
