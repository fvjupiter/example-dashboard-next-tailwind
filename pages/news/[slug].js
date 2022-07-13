import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Wrapper from '../../components/Wrapper'
import Loader from '../../components/Loader'
import NewsContent from '../../components/NewsContent'

export default function Slug({ isDark }) {
  const router = useRouter()
  const { slug } = router.query

  const [data, setdata] = useState(null)

  const fetchNewsBySlug = async () => {
      try {
          const options = {
              method: 'GET',
              headers: {
                  'X-Heise-Token': 'zcJulkgE',
                  'Content-Type': 'application/json'
              }
          }
          const res = await fetch(
            `https://www.heise.de/extras/frontend/news/${slug}`,
            options
          )
          const fetchedData = await res.json()
          // console.log(fetchedData)
          setdata(fetchedData)

      } catch (error) { console.log('error:', error) }
  }

  useEffect(() => {
    if(slug) fetchNewsBySlug()
  }, [slug])

  return (
    <Wrapper>
      {data ?
        <NewsContent isDark={isDark} {...data} />
      : <>
          <div className='center'><Loader /></div>
            <div className={`
              cursor-pointer text-center w-fit px-8 mx-auto
              dark:bg-white/30 dark:hover:bg-white/20 
              bg-indigo-400/20 hover:bg-indigo-400/10 dark:text-indigo-700 text-indigo-700 
              ring ring-indigo-700 dark:ring-white/50 
              rounded-3xl`}
              onClick={fetchNewsBySlug}
            >
              reload
            </div>
        </>
      }
    </Wrapper>
  )
}
