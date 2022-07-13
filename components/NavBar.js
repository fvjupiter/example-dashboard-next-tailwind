import ExercisePrompt from './ExercisePrompt'
import HeiseSvg from './HeiseSvg'
import ModeToggle from './ModeToggle'
import Wrapper from './Wrapper'

export default function NavBar({ isDark, toggleMode, isPrompt, setisPrompt }) {
  return (
    <nav className='mb-6 py-3 shadow-lg shadow-indigo-900/10 dark:shadow-black/10'>
        <Wrapper>
          <div className={`between mx-auto`}>
              <a className=''
                href='https://www.heise.de/' 
                rel="noreferrer" 
                target='_blank'
                >
                  <HeiseSvg isDark={isDark}/>
              </a>
              <div className='center'>
                <ExercisePrompt isDark={isDark} isPrompt={isPrompt} setisPrompt={setisPrompt}/>
                <div 
                  onClick={toggleMode} 
                  className={`
                    rounded-full p-1 
                    ring ring-transparent hover:ring-indigo-500/50 dark:hover:ring-white/30 
                    cursor-pointer duration-75 active:shadow-inner
                `}>
                  <ModeToggle isDark={isDark} />
                </div>
              </div>
          </div>
        </Wrapper>
    </nav>
  )
}
