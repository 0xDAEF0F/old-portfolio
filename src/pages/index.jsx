import Header from '../components/Header'
import Head from 'next/head'
import Home from '../components/Home'
import Footer from '../components/Footer'

export default function index() {
  return (
    <div className='bg-bg h-screen'>
      <Head>
        <title>Home • 0xDAEF0F</title>
      </Head>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}
