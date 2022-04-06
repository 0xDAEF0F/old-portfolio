import Header from '../components/Header'
import Home from '../components/Home'
export default function index() {
  return (
    <div className='bg-light-bg dark:bg-dark-bg h-screen'>
      <Header />
      <Home />
    </div>
  )
}
