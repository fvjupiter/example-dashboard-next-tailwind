import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useRef } from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Wrapper from './Wrapper'

export default function Layout({ isDark, toggleMode, children }) {

    const router = useRouter()
    const asPath = router.asPath
    const topRef = useRef(null)
    const [isPrompt, setisPrompt] = useState(true)
    const [isTopButton, setisTopButton] = useState(false)

    const showTopButton = () => {
        const offSetTop = topRef.current.getBoundingClientRect().top
        if(offSetTop < -100 && !isTopButton) {
            setisTopButton(true)
        } else if(offSetTop > -100 && isTopButton) {
            setisTopButton(false)
        }
    }

    const scrollToTop = () => topRef.current.scrollIntoView({ behavior: 'smooth' })

    return <>
        <Head>
            <title>Dashboard</title>
            <meta name="description" content="Heise Online News und Wetter" />
            <link rel="icon" href="/aiicecream.ico" />
        </Head>

        <div className={`${isDark && 'dark'}`}>
            <div onScroll={showTopButton} 
                className={`
                    h-screen pb-64
                    bg-gradient-to-r 
                    from-white to-white
                    dark:from-stone-900 dark:via-stone-400 dark:to-stone-900 
                    overflow-scroll
                `}>

                <div ref={topRef}/>

                <NavBar isDark={isDark} toggleMode={toggleMode} isPrompt={isPrompt} setisPrompt={setisPrompt} />
                {(asPath == '/' || asPath.includes('/news')) &&
                    <Wrapper>
                        <Header isDark={isDark} isPrompt={isPrompt}/>
                    </Wrapper>
                }

                {children}

                <Wrapper>
                    <GoToTopButton isTopButton={isTopButton} scrollToTop={scrollToTop} />
                </Wrapper>

            </div>
        </div>
    </>
}

const GoToTopButton = ({ isTopButton, scrollToTop }) => (
    <div className='end'>
        <div 
            onClick={isTopButton ? scrollToTop : null}
            className={`
            fixed bottom-6 xl:bottom-8 -translate-x-2 sm:translate-x-2 md:translate-x-4 lg:translate-x-8 xl:translate-x-20 z-40 h-10 w-10 sm:h-12 sm:w-12 center
            ring dark:ring-white/30 ring-indigo-500/50 border border-indigo-500 dark:border-transparent dark:hover:border-indigo-500
            ${isTopButton ? 'opacity-70 hover:opacity-100 cursor-pointer' : 'opacity-0 scale-0'}
            backdrop text-xs bg-white/60 dark:bg-black/60 dark:text-white text-indigo-900 font-bold shadow-xl dark:shadow-black shadow-indigo-900/30
            duration rounded-full
            `}
            >
            top
        </div>
    </div>
)
