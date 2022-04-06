import DarkMode from './DarkMode'
import Logo from './Logo'
import Link from 'next/link'
import DivLink from './DivLink'

function Header() {
  return (
    <div className='pb-20'>
      <div className='flex fixed align w-full px-5'>
        <div className='flex justify-start w-full bg-transparent'>
          <div className='pt-2'>
            <Logo />
          </div>
          <div className='flex justify-end w-full gap-5 items-center'>
            <DivLink title='Home' to='/' xClass='' />
            <DivLink title='About' to='/about' xClass='' />
            <DivLink title='Portfolio' to='/portfolio' xClass='' />
            <DivLink title='Projects' to='/projects' xClass='' />
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
