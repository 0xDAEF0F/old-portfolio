import { useTheme } from 'next-themes'
import { useState } from 'react'
import { FaRegMoon, FaRegLightbulb } from 'react-icons/fa'

function DarkMode() {
  const { theme, setTheme } = useTheme()
  return (
    <div className='flex items-center'>
      <button onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? (
          <FaRegLightbulb className='' size={28} />
        ) : (
          <FaRegMoon className='' size={28} />
        )}
      </button>
    </div>
  )
}

export default DarkMode
