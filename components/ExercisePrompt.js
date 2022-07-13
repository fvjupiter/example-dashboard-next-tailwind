import Link from 'next/link'

export default function ExercisePrompt({ isPrompt, setisPrompt }) {
  const exercises = [
    {
      name: '1 + 2: Dashboard (News, Wetter)',
      href: '/'
    },
    {
      name: '3.1: Layout 1',
      href: '/aufgabe3/layout1',
    },
    {
      name: '3.2: Layout 2',
      href: '/aufgabe3/layout2',
    },
    {
      name: '3.3: Layout 3',
      href: '/aufgabe3/layout3',
    },
    {
      name: '3.4 + 3.5: CSS Styling und Box-Modell',
      href: '/aufgabe3/layout4',
    }
  ]
  return <>
    <div onClick={() => setisPrompt(true)}
      className={`
        bg-indigo-500/50 dark:bg-stone-600 hover:ring-offset-2
        rounded-full center w-8 h-8 mr-4 text-xl
        ring ring-transparent hover:ring-indigo-500/50 dark:hover:ring-white/30 
        cursor-pointer duration-75 active:shadow-inner
    `}
      >💡
    </div>
    <div className={`${isPrompt ? 'visible' : 'hidden'} fixed inset-0 z-50 backdrop center bg-black/60`}>
        <div className={`
          w-11/12 max-w-2xl px-4 py-3 sm:px-8 sm:py-4 lg:-translate-y-10
          dark:bg-stone-800 bg-white dark:text-white text-indigo-900
          rounded-3xl shadow-2xl shadow-black border-2 dark:border-indigo-700 border-indigo-900
          ring dark:ring-white/30 ring-indigo-500/90
          max-h-screen overflow-y-scroll
        `}>
            <h2 className='text-base sm:text-lg font-bold mb-3 sm:mb-4 between'>
              <span className='px-4'>Bewerbungsaufgaben</span>
              <span onClick={() => setisPrompt(false)} className='cursor-pointer text-stone-400 dark:hover:text-white hover:text-indigo-900'>x</span>
            </h2>
            {exercises.map((exercise, index) => (
              <Link key={index} href={exercise.href}>
                <div onClick={() => setisPrompt(false)}
                  className={`
                    px-4 py-3 sm:px-8 sm:py-4 mb-2
                    dark:text-stone-300 text-indigo-900 dark:hover:text-indigo-300 hover:text-indigo-600
                    border dark:border-white/10 hover:border-transparent dark:hover:border-transparent border-indigo-500/20
                    rounded-2xl cursor-pointer 
                    shadow-lg dark:shadow-black/30 shadow-indigo-900/10 hover:shadow-none
                    duration-75
                  `}>
                  <h3 className='text-sm sm:text-base font-bold'>{exercise.name}</h3>
                </div>
              </Link>
            ))}
        </div>
    </div>
  </>
}
