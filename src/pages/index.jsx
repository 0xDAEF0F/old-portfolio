import Header from '../components/Header'
export default function index() {
  return (
    <div className='bg-light-bg dark:bg-dark-bg h-screen'>
      <Header />
      <div className='pl-20 pt-20 text-4xl font-bold'>
        <p>Hi,</p>
        <div className='flex'>
          <p>I'm</p>
          &nbsp;
          <p className='text-light-primary'>Alex</p>
        </div>
        <p>Senior Javascript Developer.</p>
      </div>
    </div>
  )
}
