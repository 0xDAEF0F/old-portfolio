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
          <DivLink title='About' to='/about' xClass='text-white' />
          <DivLink title='Blog' to='/blog' xClass='text-white' />
          <DivLink title='Projects' to='/projects' xClass='text-white' />
        </div>
      </div>
    </div>
  )
}

export default Header
