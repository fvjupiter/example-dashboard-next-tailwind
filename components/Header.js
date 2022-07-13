import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Weather from './Weather'

export default function Header({ isDark, isPrompt }) {
  const router = useRouter()
  const isHome = router.asPath == '/'
  const classNames = `dark:text-white text-indigo-900 ${isDark && 'textShadowLight'} text-3xl w-fit font-extralight`
  
  return (
    <div className={`${isHome ? 'pb-6' : 'pb-4 sm:pb-6'}`}>
      <div className='sm:flex justify-between'>
        <div className={`${classNames} pl-2 sm:pb-0 pb-6`}>
            <h1>Dashboard</h1>
            <h2 className='pt-3 hidden sm:block'>News</h2>
        </div>
        <Weather isPrompt={isPrompt} />
        <h2 className={`${classNames} pt-6 sm:hidden pl-2`}>
            News
        </h2>
      </div>
      {!isHome && <Link href={'/'}>
        <div className='pl-2 w-fit text-stone-400 dark:hover:text-white hover:text-indigo-900 underline underline-offset-2 cursor-pointer'>
            &#8592; zurück
        </div>
      </Link>}
    </div>
  )
}
