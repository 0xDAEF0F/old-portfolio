import atLogo from '../assets/icons/atLogo.png'
import Link from 'next/link'
import Image from 'next/image'

import React from 'react'

function Logo() {
  return (
    <Link href='/'>
      <Image
        src={atLogo}
        alt='Alex logo'
        width={80}
        height={80}
        className='cursor-pointer'
      />
    </Link>
  )
}

export default Logo
