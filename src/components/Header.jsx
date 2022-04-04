import Link from 'next/link'
import DarkMode from './DarkMode'

function Header() {
  return (
    <div className='pb-20'>
      <div className='flex fixed w-full'>
        <div className='flex justify-start w-full p-7 bg-transparent'>
          <Link href='/'>Logo</Link>
          <div className='flex justify-end w-full gap-5'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/porfolio'>Porfolio</Link>
            <Link href='/projects'>Projects</Link>
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
