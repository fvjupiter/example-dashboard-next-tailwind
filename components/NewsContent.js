import Image from 'next/image'

export default function NewsContent({ title, image, content, isDark }) {
  return <>
    <div className={`
        pb-6 rounded-lg overflow-hidden
        shadow-2xl shadow-indigo-900/50 dark:shadow-black/90 bg-white dark:bg-stone-900
        bg-gradient-to-br dark:from-stone-700 dark:via-stone-900 dark:to-stone-900 from-white via-white to-indigo-100
        text-stone-800 dark:text-white
    `}>
        <Image 
            priority
            alt={`${image.alt ? image.alt : `thumbnail of ${title}`}`}
            src={`${image.src}`}
            width={image.width}
            height={image.height}
            placeholder='blur'
            blurDataURL={'/aiicecream.jpg'}
            className={`text-stone-400`}
        />
        <h1 className={`px-4 sm:px-8 py-2 sm:py-4 text-xl lg:text-2xl font-semibold ${isDark ? 'text-indigo-300' : 'blue-gradient'} w-fit`}>{title}</h1>
        <p className='px-4 sm:px-8 whitespace-pre-line font-light text-base xl:text-lg text-stone-800 dark:text-stone-200'>{content}</p>
    </div>
  </>
}
