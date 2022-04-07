import DarkMode from './DarkMode'
import Logo from './Logo'
import DivLink from './DivLink'

function Header() {
  return (
    <div className='flex fixed align w-full px-5'>
      <div className='flex justify-start w-full backdrop-blur-sm'>
        <div className='pt-2'>
          <Logo />
        </div>
        <div className='flex justify-end w-full gap-5 items-center'>
          <DivLink title='Home' to='/' xClass='' />
          <DivLink title='About' to='/about' xClass='' />
          <DivLink title='Blog' to='/blog' xClass='' />
          <DivLink title='Projects' to='/projects' xClass='' />
          <DarkMode />
        </div>
      </div>
    </div>
  )
}

export default Header
