import Link from 'next/link'

/* This example requires Tailwind CSS v2.0+ */
export default function page404() {
  return (
    <div className='bg-light-bg dark:bg-dark-bg min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8'>
      <div className='max-w-max mx-auto'>
        <main className='sm:flex'>
          <p className='text-4xl dark:text-dark-primary text-light-primary font-extrabold sm:text-5xl'>
            404
          </p>
          <div className='sm:ml-6'>
            <div className='sm:border-l sm:border-gray-200 sm:pl-6'>
              <h1 className='text-4xl font-extrabold tracking-tight sm:text-5xl'>
                Page not found
              </h1>
              <p className='mt-1 text-base text-light-forth dark:text-dark-forth'>
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <div className='mt-10 flex space-x-3 sm:border-transparent sm:pl-6'>
              <a
                href='/'
                className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-light-bg dark:text-dark-bg
                bg-light-primary dark:bg-dark-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                Go back home
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
