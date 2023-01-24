import atLogo from '../assets/icons/atLogo.png'
import avatar from '../assets/avatar.png'
import Link from 'next/link'
import Image from 'next/image'

import React from 'react'

function Logo() {
  return (
    <Link href='/' className=''>
      <Image
        src={avatar}
        alt='logo'
        width={70}
        height={70}
        className='cursor-pointer rounded-full'
      />
    </Link>
  )
}

export default Logo
