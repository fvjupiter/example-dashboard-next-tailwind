import { useContext, useEffect, useRef, useState } from 'react'
import { NewsContext } from '../lib/context'
import Loader from './Loader'
import NewsCard from './NewsCard'
import Wrapper from './Wrapper'

export default function EndlessNews({ isDark }) {

    const bottomRef = useRef(null)
    const { news, setnews } = useContext(NewsContext)
    const [isEnd, setisEnd] = useState(false)
    const [isIntersecting, setIsIntersecting] = useState(false)

    let observer
    useEffect(() => {
      observer = new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      )
      observer.observe(bottomRef.current)
      return () => observer.disconnect()
    }, [bottomRef, observer])
  
    useEffect(() => {
      let offset = 43
      if (news && isIntersecting) {
        Object.keys(news).forEach( key => offset += news[key].length )
        fetchNews(offset, 2)
      }
    }, [isIntersecting, news])
  
    const fetchNews = async (offset, limit) => {
      try {
        const options = {
            method: 'GET',
            headers: {
                'X-Heise-Token': 'zcJulkgE',
                'Content-Type': 'application/json'
            }
        }
        const res = await fetch(
          `https://www.heise.de/extras/frontend/news/?offset=${offset}&limit=${limit}`, 
          options
        )
        const fetchedNews = await res.json()
  
        if(fetchedNews.length) {
  
          const objArr = {}
          fetchedNews.forEach((item, index) => {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
            const dateString = new Date(item.meta.pubDate).toLocaleDateString('de-DE', options)
            objArr[dateString] = objArr[dateString] ? [...objArr[dateString], item] : [item]
          })
  
          // sort by date {'2022-01-01': [{}, {}], '2022-01-02': [{}, {}]}
          // parent container is relative, DateHeader sticky so it will leave the viewport with parent container
          const newnews = {...news}
          Object.keys(objArr).forEach(key => {
            newnews[key] = news[key] ? [...news[key], ...objArr[key]] : objArr[key]
          })
          setnews(newnews)
  
        } else setisEnd(true)
  
      } catch (error) { console.log('error:', error) }
    }

    return <>
        <div className='mb-2'>
            {Object.keys(news).length > 0 && Object.keys(news).map((key, index) => (
                <div key={index} className='relative'>
                    <DateHeader date={key} />
                    <Wrapper>
                        {news[key].map((item, index) => (
                          <NewsCard key={index} index={index} {...item} isDark={isDark} />
                        ))}
                    </Wrapper>
                </div>
            ))}
        </div>

        <div className='center' ref={bottomRef}>
            {!isEnd 
            ? <div className='text-center'>
                <Loader />
                {news && Object.keys(news).length == 0 && 
                  <div className={`
                    cursor-pointer px-8
                    dark:bg-white/30 dark:hover:bg-white/20 
                    bg-indigo-400/20 hover:bg-indigo-400/10 dark:text-indigo-700 text-indigo-700 
                    ring ring-indigo-700 dark:ring-white/50 
                    rounded-3xl`}
                    onClick={() => { fetchNews(43, 2)}}
                  >
                    reload
                  </div>
                } 
              </div>
            : <h1 className={`dark:text-white text-indigo-900 ${isDark && 'textShadowLight'} text-xl font-bold text-center`}>
                Keine weiteren News...
              </h1>
            }
        </div>
    </>
}

const DateHeader = ({ date }) => (
  <div className='sticky -top-[1px] z-30 md:px-8 w-screen md:max-w-5xl mx-auto mb-12'>
    <div className={`
        px-8 py-2
        ring-1 ring-indigo-400/20 border-b border-t sm:border border-indigo-500
        dark:border-white/30 dark:ring-white/30 
        backdrop bg-gradient-to-l from-indigo-100/70 dark:from-black/70
        bg-white/70 dark:bg-black/60 text-indigo-900 dark:text-white font-bold 
        shadow-md dark:shadow-black shadow-indigo-400/20
        duration md:rounded-md
    `}>
        {date}
    </div>
  </div>
)

