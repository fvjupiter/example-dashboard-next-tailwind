import { useCallback, useEffect, useRef, useState } from 'react'

export default function Layout2() {
  const conRef = useRef(null)
  const [conWidth, setconWidth] = useState(0)

  const calcWidth = useCallback(() => {
    if(conRef && conRef.current) setconWidth(conRef.current.getBoundingClientRect().width)
  }, [conRef])
   
  useEffect(() => {
    calcWidth()
    window.addEventListener('resize', calcWidth)
    return () => window.removeEventListener("resize", calcWidth)
  }, [calcWidth])

  //classNames
  const cN = `m-3 p-4 text-xl font-semibold bg-gradient-to-b rounded-lg border ring-1 shadow-xl`
  const colored = {
    lime: 'from-lime-200 to-lime-300 border-lime-400 ring-lime-900 text-lime-900',
    pink: 'from-pink-200 to-pink-300 border-pink-400 ring-pink-900 text-pink-900',
    stone: 'from-stone-200 to-stone-300 dark:from-stone-800 dark:to-stone-900 dark:text-white dark:border-stone-700 dark:ring-white/10 border-stone-400 ring-stone-900',
    yellow: 'from-yellow-200 to-yellow-300 border-yellow-400 ring-yellow-900 text-yellow-900',
    blue: 'from-blue-200 to-blue-300 border-blue-400 ring-blue-900 text-blue-900'
  }

  return <>
    <div className={`${cN} ${colored.lime}`}>Layout 2 (Aufgabe 3.2)</div>
    <div className='md:flex'>
      <div className={`${cN} ${colored.pink} flex-none md:w-52 overflow-scroll`}>Navigation</div>
      <div ref={conRef} className={`${cN} ${colored.stone} md:w-full whitespace-pre-line`}>
          <h1 className='lg:text-2xl lg:font-bold pb-2'>Warum welcher Layout-Mode</h1>
          <p className='font-light'>{`Unter einer Viewport-Breite von 768px wird die Seite im Layout-Mode 'Normal Flow' (beinhaltet Block-Layout) angezeigt:
          So fließen alle Container untereinander und haben automatisch eine Breite von 100% und damit genug Platz um ihre Inhalte angemessen zu platzieren.

          Ab einer Viewport-Breite von 768px wird die Seite im Layout-Mode 'Flexible Box Layout' angezeigt:
          Der Parent-Container von Navigation, Content und Sidebar erhält als CSS-Property 'display: flex'.
          Der Navigations- und Sidebar-Container erhalten als CSS-Property 'flex: none', sowie eine bestimmte, feste Breite (width) um genug Platz für ihre Inhalte zu garantieren und nicht in ihrer Breite zu schrumpfen bzw. zu wachsen.
          Ihre Höhe passt sich automatisch an die Höhe des Content-Containers für eine symmetrische Darstellung an und bietet 'overflow: scroll', sollte der container zu niedrig sein, um den gesamten Inhalt anzuzeigen.
          Die Breite des Footers wird an die des Contents angegleicht und erhält einen Abstand zur linken Seite (margin-left) in Breite der Navigation.
          `}
          </p>
      </div>
      <div className={`${cN} ${colored.yellow} flex-none md:w-40 overflow-scroll`}>Sidebar</div>
    </div>
    <div style={{ width: conWidth }} className={`${cN} ${colored.blue} md:ml-[244px]`}>Footer</div>
  </>
}
