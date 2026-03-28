/**
 * HomePage
 *
 * The main landing page of the App Team Carolina website.
 * Composed of vertical sections that users scroll through:
 * hero → mission → team structure → apps → apply.
 */

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Landing from './Landing'
import Missions from './Missions'
import Teams from './Teams'
import AppProducts from './AppProducts'
import Apply from './Apply'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Landing />
        <Missions />
        <Teams />
        <AppProducts />
        <Apply />
      </main>
      <Footer />
    </>
  )
}
