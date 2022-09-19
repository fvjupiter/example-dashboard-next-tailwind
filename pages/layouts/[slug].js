import { useRouter } from 'next/router'
import Layout1 from '../../components/aufgabe3/Layout1.js'
import Layout2 from '../../components/aufgabe3/Layout2.js'
import Layout3 from '../../components/aufgabe3/Layout3.js'
import Layout4 from '../../components/aufgabe3/Layout4.js'

export default function Aufgabe3({ isDark }) {
    const router = useRouter()
    const { slug } = router.query
    const getLayout = () => {
      switch (slug) {
        case 'layout1': return <Layout1 />
        case 'layout2': return <Layout2 />
        case 'layout3': return <Layout3 isDark={isDark} />
        case 'layout4': return <Layout4 isDark={isDark} />
        default: return <Layout1 />
      }
    }
  return <div>{getLayout()}</div>
}
