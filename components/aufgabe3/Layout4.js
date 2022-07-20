
export default function Layout4({ isDark }) {

    const tailwind_vs_sass_content = [
        {
            title: 'Tailwind (CSS-Framework)',
            listItems: [
                `Vordefinierte CSS-Klassen, die über das 'classNames'-Attribut direkt an HTML-Elemente gebunden werden`,
                `Klassennamen sind strukturiert aufgebaut und ermöglichen eine intuitive Nutzung`,
                `Einfache Konfigurierungsmöglichkeiten & Theming via config-file`,
                `Klassen-Präfixe für Media Queries, Hover- & Focus-States`,
                `Lightweight: Entfernt automatisch alle unbenutzten CSS-Klassen beim Erstellen des Production-Builds`,
                `Farben- und Größen-Paletten für einheitlichere Darstellung`,
                `Das Tailwind-Team verfolgt einen minimalistischen, modernen und der simplen Handhabung und Anpassung zugewendeten Ansatz bei der Entwicklung ihrer Produkte und ist darüber hinaus, wie sich unschwer aus ihren veröffentlichten Inhalten erkennen lässt, echt lustig`,
                `Bedenkenloses ändern der Klassen, da diese, wenn nicht anders via @apply directive oder tailwind.config.js vorgegeben, lokal und nicht global definiert werden`,
                `Nachteile: 
                1. Unaufgeräumte, unübersichtliche Darstellung der HTML-Elemente im Code (Strings könnten bei Bedarf jedoch in Variablen gespeichert werden)
                2. Klassennamen können nicht 'on-the-fly' dynamisch verändert werden (z.B. bg-[colorVar]-200), was u. A. die Erstellung von Templates bzw. Template-Components verkompliziert und aufwändig macht`,
            ]
        },
        {
            title: 'Sass (CSS-Preprocessor)',
            listItems: [
                `CSS-nahe Syntax`,
                `Variablen können erstellt und dynamisch verwendet werden`,
                `'Mixins' ermöglichen das funktionsähnliche Erstellen von CSS-Werten, die durch '@include' in CSS-Klassen eingebettet werden können`,	
                `Das Importieren bzw. Exportieren von Variablen etc. zwischen Sass-Dateien ist möglich`,
                `CSS-Selector können innerhalb von CSS-Klassen verwendet werden`,
                `Funktionen zur Berechnung von CSS-Werten können zugunsten der Wiederverwendung erstellt werden`,
                `Nachteile:
                1. Benötigt eigene .sass oder .scss Datei, Klassen etc. werden also nicht lokal definiert
                2. Hat nicht die Tailwind-Vorteile`
            ]
        }
    ]

    const boxModellListItems = [
        `Content-Box: Bildet den Content des HTML-Elements ab`,
        `Padding: Freier, transparenter Bereich zwischen der Content-Box und Border`,
        `Border: Rahmen des Elements`,
        `Margin: Freier, transparenter Bereich um den Rahmen des Elements herum`,
        `Standartmäßig werden Breite und Höhe, die einem Element zugewiesen werden der Content-Box angelegt (box-sizing: content-box), was das Handling mit Padding und Border-Eigenschaften kompliziert macht. Um Abhilfe zu schaffen, kann bzw. sollte 'box-sizing: border-box' verwendet werden, wodurch sich zugewiesene Breite und Höhe aus Content-Box, Padding und Border zusammensetzen.`,
    ]

    const Title = ({ title, titleClassN }) => (
        <div className={`${titleClassN} ${isDark ? 'silver-gradient' : 'blue-gradient'} w-fit font-semibold text-lg`}>
            {title}
        </div>
    )

    const ListItems = ({ listItems }) => (
        <ul style={{ listStyleType: 'disc' }} className='ml-4' >
            {listItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )

    const List = ({ title, listItems, conClassN, titleClassN }) => (
        <div className={`${conClassN}`}>
            <Title title={title} titleClassN={titleClassN} />
            <ListItems listItems={listItems} />
        </div>
    )

  return (
    <div className='px-2'>
      <div className={`
        max-w-[732px] mx-auto py-4 px-4
        dark:from-stone-800 dark:via-stone-900 dark:to-black bg-gradient-to-br from-white via-white to-indigo-50 
        dark:text-stone-300 text-stone-800
        rounded-3xl shadow-2xl dark:shadow-black/90 shadow-indigo-800/80
        ring dark:ring-white/30 ring-indigo-500/70 
        border dark:border-indigo-700
        border-blue-800
      `}>
        <h1 className={`text-2xl font-bold mb-3 ${isDark ? 'silver-gradient' : 'blue-gradient'} w-fit`}>Tailwind vs. Sass (3.4)</h1>
        <div className='whitespace-pre-line'>
          <div className="sm:flex">
            {tailwind_vs_sass_content.map((item, index) => (
                <List key={index} title={item.title} listItems={item.listItems} conClassN='sm:w-1/2 mb-4' titleClassN='mx-a uto' />
            ))}
          </div>
        </div>
        <h1 className={`text-2xl font-bold mt-5 mb-3 ${isDark ? 'silver-gradient' : 'blue-gradient'} w-fit`}>CSS Box-Modell (3.5)</h1>
        <div className='whitespace-pre-line'>
            <Title title='Box-Modell' />
            <ListItems listItems={boxModellListItems} />
            <br/>
            <div className="text-sm">       
                <div className="bg-indigo-900 p-2 mt-2 shadow-black text-center text-white">Margin
                    <div className="bg-blue-500 p-2 mt-2 shadow-black m-6 text-center text-white">Border
                        <div className="bg-lime-300 p-2 mt-2 shadow-black m-6 text-center text-black">Padding
                            <div className="bg-white p-2 mt-2 shadow-black m-6 text-center text-black h-32 font-bold center text-base">
                                Content
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
