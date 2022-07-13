
export default function Layout1() {
  const containers = [
    {
      title: 'Layout 1 (Aufgabe 3.1)',
      content: `Welcher Layout-Mode und weshalb er verwendet wurde ist in den folgenden Containern ausgeführt =>`,
      footnote: 'vpw = viewport-width',
      classN: 'border-cyan-400 ring-cyan-400 shadow-cyan-700/20',
    },
    {
      title: 'Normal Flow (vpw < 768px)',
      content: `Unter einer Viewport-Breite von 768px wird die Seite im Layout-Mode 'Normal Flow' angezeigt:
      
      Der Parent-Container erhält als CSS-Property 'display: block'. Dadurch werden die zugehörigen 'Children-Container' untereinander angeordnet und erlauben auf kleineren Bildschirmen die volle Breite zur Darstellung von Inhalten zu nutzen.
      
      Die 'Children-Container' passen sich mit dem CSS-Property 'width: 100%' an die Viewport-Breite an und wachsen in der Höhe je nachdem, wieviel Content (Inhalt) sie beinhalten.`,
      footnote: `Layout-Mode 'Normal Flow' ist der Standart-Layout-Mode`,
      classN: 'border-lime-400 ring-lime-400 shadow-lime-700/20',
    },
    {
      title: 'Flexible Box Layout (vpw >= 768px)',
      content: `Ab einer Breite von 768px wird die Seite im Layout-Mode 'Flexible Box Layout' angezeigt:
      
      Der Parent-Container erhält als CSS-Property 'display: flex'. Dadurch werden die zugehörigen 'Children-Container' nebeneinander angeordnet und erlauben eine übersichtliche Darstellung des Inhalts. Damit jeder 'Child-Container' gleichbreit ist und mit der Veränderung der Viewport-Breite wächst bzw. schrumpft, erhält er (bzw. sein Wrapper-Element) als CSS-Property 'width: calc(100%/3)'.
      
      Der Parent-Container wächst flexibel auf die Höhe des größten Child-Containers. Dadurch können die Children-Container mit CSS-Property 'height: 100%' an die Höhe des Parent-Containers (welcher die Höhe des höchsten Elements hat) angepasst werden.`,
      footnote: `Layout-Mode 'Flexible Box Layout' ist sinnvoll um Elemente, wie der Name bereits vermuten lässt, 'flexibel' anzuordnen`,
      classN: 'border-fuchsia-400 ring-fuchsia-400 shadow-fuchsia-700/20',
    }
  ]
  return <>
    <div key='parentContainer' className='md:flex'>
      {containers.map((container, index) => (
        <div key={`wrapperChildContainer${index}`} className='md:w-1/3 w-full p-2'>
          <div className={`
            ${container.classN} 
            px-8 py-4 h-full
            border-l-8 ring-1
            bg-gradient-to-r dark:from-stone-800 dark:via-stone-900 dark:to-stone-900
            from-white via-white to-white
            text-stone-800 dark:text-white whitespace-pre-line
            rounded-r-lg shadow-2xl dark:shadow-black/90
          `}>
            <h2 className='mb-2 text-xl md:text-lg lg:text-xl font-bold'>{container.title}</h2>
            <p className='text-base md:text-sm lg:text-base'>{container.content}</p>
            <p className='mt-4 text-sm font-light italic'>{container.footnote}</p>
          </div>
        </div>
      ))}
    </div>
  </>
}
