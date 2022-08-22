import Header from '../components/Header'
import Footer from '../components/Footer'

import BackgroundAnimation from '../components/BackgroundAnimation'

export default function aboutMe() {
  return (
    <>
      <Header />
      <div class='bg-bg h-max pt-24 pb-10'>
        <div class='grid grid-cols-1  md:grid-cols-2 md:h-screen'>
          <div class='max-h-0 md:max-h-96 md:h-screen'>
            <BackgroundAnimation />
          </div>
          <div class='flex p-10'>
            <div class='mb-auto mt-auto max-w-lg'>
              <h2 className='text-3xl text-primary italic tracking-tight font-extrabold sm:text-4xl mb-6'>
                A Tidbit
              </h2>
              <p className='text-white'>
                I am an overly pragmatic person that focuses on getting the job.
                Competing against myself and ignoring outside noise helps me
                stay sane and focused during these challenging times.
              </p>
              <br />
              <p className='text-white'>
                I believe in maximizing value to society by approaching problems
                pragmatically and objectively as well as:
              </p>
              <ul className='text-gray-300 list-disc pl-10 pt-2'>
                <li>Building and improving on innate/natural skills.</li>
                <li>If you love your work, it will never feel like so.</li>
              </ul>
              <br />
              <h2 className='text-white text-3xl tracking-tight font-extrabold sm:text-4xl mb-6'>
                Skills
              </h2>
              <h3 className='text-secondary text-2xl font-semibold'>
                Technology
              </h3>
              <p className='text-white'>
                Any challenging problem that involves abstraction, and
                composition will always thrill me. However, the ecosystems where
                I'm most fluid in are: JavaScript, Solidity, and the CLI.
              </p>
              <br />
              <h3 className='text-secondary text-2xl font-semibold'>
                Soft Skills
              </h3>
              <p className='text-white'>
                Any successful organization demands effective communication
                amongst participants. Countless of business endeavors throughout
                my career have refined my interpersonal skills and business
                acumen.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
