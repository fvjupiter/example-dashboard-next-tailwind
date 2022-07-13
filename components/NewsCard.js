import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

export default function NewsCard({ index, id, title, synopsis, image, isDark }) {
//   const getWidth = (width, height, prefferedHeight) =>  width / height * prefferedHeight
//   const getHeight = (height, width, prefferedWidth) =>  height / width * prefferedWidth
  const imgConRef = useRef(null)
  const isOdd = false // index % 2 == 1

  return (
    <>
        <Link key={index} href={`/news/${id}`}>
            <div className={`
                group md:flex
                mb-10 md:h-52 lg:h-36 relative
                shadow-2xl shadow-indigo-900/50 dark:shadow-black/90 bg-white dark:bg-stone-900 hover:shadow-none 
                bg-gradient-to-br dark:from-stone-700 dark:via-stone-900 dark:to-stone-900 from-white via-white to-indigo-50
                ring ring-transparent hover:ring-indigo-500/50 dark:hover:ring-white/30
                text-stone-800 dark:text-white
                duration cursor-pointer overflow-hidden
            `}>
                <div ref={imgConRef} className={`${isOdd && 'right-0'} absolute z-10 w-full md:w-80 lg:w-72 h-80 md:h-full center`}>
                    <Image 
                        priority={index == 0 ? true : false}
                        alt={`${image.alt ? image.alt : `thumbnail of '${title}'`}`}
                        src={`${image.src}`}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        className={`text-stone-400 dark:bg-stone-800 bg-white`}
                    />
                </div>
                <div className={`${isOdd ? 'mr-72' : 'md:ml-80 lg:ml-72'} pt-[336px] pb-4 md:pb-0 md:pt-4`}>
                    <div className='px-4 md:px-8'>
                        <h1 className={`text-base lg:text-lg font-semibold ${isDark ? 'text-indigo-300 group-hover:text-indigo-200' : 'blue-gradient'} w-fit duration`}>{title}</h1>
                        <p className='whitespace-pre-line text-sm text-stone-700 dark:text-stone-300 group-hover:text-stone-800 dark:group-hover:text-white duration'>{synopsis}</p>
                    </div>
                </div>
            </div>
        </Link>
    </>
  )
}
