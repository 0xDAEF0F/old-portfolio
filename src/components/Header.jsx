import Logo from './Logo'
import DivLink from './DivLink'

function Header() {
  return (
    <div className='flex fixed align w-full px-5 z-50'>
      <div className='flex justify-start w-full backdrop-blur-sm'>
        <div className='pt-2'>
          <Logo />
        </div>
        <div className='flex justify-end w-full gap-5 items-center'>
          <DivLink title='About Me' to='/about-me' xClass='text-white' />
          <DivLink title='Projects' to='/projects' xClass='text-white' />

          <a
            href='mailto:amojarrot@gmail.com'
            className='cursor-pointer block text-base text-white hover:text-primary'>
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
