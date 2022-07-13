import Image from 'next/image'

export default function Layout3({ isDark }) {
  return (
    <div className='px-2'>
      <div className={`
        max-w-[732px] mx-auto py-3 pb-4
        dark:from-stone-800 dark:via-stone-900 dark:to-black bg-gradient-to-br from-white via-white to-indigo-50 
        dark:text-stone-300 text-stone-800
        rounded-3xl shadow-2xl dark:shadow-black/90 shadow-indigo-800/80
        ring dark:ring-white/30 ring-indigo-500/70 
        border dark:border-indigo-700
        border-blue-800
      `}>
        <h1 className={`text-2xl font-bold mb-4 px-6 ${isDark ? 'silver-gradient' : 'blue-gradient'} w-fit`}>{`Layout 3 (Aufgabe 3.3)`}</h1>
        <div className='w-full md:w-64 md:h-64 md:mx-4 mb-2 float-left md:rounded-xl overflow-hidden'>
          <Image 
            alt='aiicecream'
            src={'/aiicecream.jpg'}
            height={800}
            width={800}
            placeholder='blur'
            blurDataURL={'/aiicecream.jpg'}
          />
        </div>
        <p className='px-4 whitespace-pre-line'>
          {`Unter einer Viewport-Breite von 768px wird die Seite im Layout-Mode 'Normal Flow' angezeigt:
          Der Image- sowie der Content-Container fließen untereinander und haben automatisch eine Breite von 100% um die volle Breite des Viewports zu nutzen.

          Ab einer Viewport-Breite von 768px wird die Seite im Layout-Mode 'Positioned Layout' angezeigt:
          Der Image-Container erhält als CSS-Property 'float: left', sowie eine feste Höhe und Breite von 256px um sich am linken Rand des Parent-Containers zu positionieren.
          Der Inhalt des Content-Containers umfließt nun den Image-Container. Wichtig hierbei ist, dass der Parent-Container im 'Block-Layout' (CSS: display: block) angeordnet ist.

          Hier noch ein bisschen lorem ipsum, um die Seite zu füllen:

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et ipsum fringilla, imperdiet turpis vel, varius augue. Nulla vel cursus metus, bibendum gravida lacus. Nam blandit at ante non vestibulum. Curabitur dolor quam, molestie vel efficitur in, blandit fringilla est. Duis libero metus, condimentum sed libero vitae, volutpat semper magna. Praesent tincidunt luctus lorem, non condimentum turpis vehicula in. 
          
          Mauris interdum eget leo vel tempor. Donec blandit venenatis purus, iaculis pellentesque enim consequat vitae. Sed nibh orci, pellentesque at dolor in, ultricies tempor libero. Nam arcu leo, pretium eu sem et, dignissim vestibulum lorem. Curabitur tempor, sapien non gravida aliquam, nunc nisl bibendum ex, id ultrices diam justo quis felis. Donec convallis mi erat, eget tincidunt quam condimentum a. Nullam euismod, purus ac dictum posuere, risus nibh vulputate tortor, id vehicula diam libero eu enim. Pellentesque accumsan turpis velit, feugiat gravida massa aliquam sit amet. 
          `}
        </p>
      </div>
    </div>
  )
}
