import Header from '../components/Header'

function aboutMe() {
  return (
    <div className='bg-bg h-max'>
      <Header />
      <div>
        <div className='pt-32 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 text-white'>
          <div className='sm:max-w-xl md:max-w-3xl mx-auto lg:max-w-7xl'>
            <h2 className='text-3xl tracking-tight font-extrabold sm:text-4xl mb-6'>
              A Tidbit
            </h2>
            <p>
              I consider myself to be a person that wakes up every day intending
              to accomplish what I proposed throughout my day. Competing against
              myself and ignoring outside noise helps me stay sane and focused
              during these challenging times.
            </p>
            <br />
            <p>
              I believe in maximizing output value to society by approaching
              problems pragmatically and objectively as well as:
            </p>
            <ul className='list-disc pl-10'>
              <li>Building and working on innate/natural skills.</li>
              <li>If you love your work, it won't feel like drudgery.</li>
            </ul>
            <br />
            <p>
              To me, decentralization, Web3, and open-source signify a chance
              for marginalized people to step in, raise their voices, and
              contribute to a more inclusive society.
            </p>
            <br />
            <h2 className='text-3xl tracking-tight font-extrabold sm:text-4xl mb-6'>
              Skills
            </h2>
            <h3 className='text-2xl'>Technology</h3>
            <p>
              Any challenging software problem that involves abstraction,
              composition, and complexity will always thrill me. However, the
              ecosystems where I'm most comfortable are JavaScript, Shell, and
              Solidity.
            </p>
            <br />
            <h3 className='text-2xl'>Soft Skills</h3>
            <p>
              Any successful organization demands effective communication
              amongst colleagues. Countless business endeavors throughout my
              career have propelled my interpersonal skills by trial and error.
            </p>
          </div>
        </div>
      </div>
      <footer className='bg-slate-100 fixed bottom-0 w-full'>
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 md:flex flex justify-center lg:px-8'>
          <div className='mt-8 md:mt-0 md:order-1'>
            <p className='text-base text-gray-500 text-center'>
              &copy; 2022 WAGMI, Inc. All rights reserved.
            </p>
            <a
              target='_blank'
              key='GitHub'
              href='https://github.com/radaemon'
              className='text-gray-400 hover:text-gray-600 flex justify-center mt-4'>
              <span className='sr-only'>GitHub</span>
              <svg
                fill='currentColor'
                viewBox='0 0 24 24'
                className='h-6 w-6'
                aria-hidden='true'>
                <path
                  fillRule='evenodd'
                  d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default aboutMe
