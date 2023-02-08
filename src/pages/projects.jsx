import Footer from '../components/Footer'
import Head from 'next/head'
import Header from '../components/Header'
import Projects from '../components/Projects'

export default function projects() {
  return (
    <div className='bg-bg h-max'>
      <Head>
        <title>Projects • 0xDAEF0F</title>
      </Head>
      <Header />
      <Projects />
      <Footer />
    </div>
  )
}
