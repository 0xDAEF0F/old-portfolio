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
              <p className='text-white  text-justify'>
                I consider myself to be a person that wakes up every day
                intending to accomplish what I proposed throughout my day.
                Competing against myself and ignoring outside noise helps me
                stay sane and focused during these challenging times.
              </p>
              <br />
              <p className='text-white text-justify'>
                I believe in maximizing output value to society by approaching
                problems pragmatically and objectively as well as:
              </p>
              <ul className='text-gray-300 list-disc pl-10 pt-2'>
                <li>Building and working on innate/natural skills.</li>
                <li>If you love your work, it won't feel like drudgery.</li>
              </ul>
              <br />
              <h2 className='text-white text-3xl tracking-tight font-extrabold sm:text-4xl mb-6'>
                Skills
              </h2>
              <h3 className='text-secondary text-2xl font-semibold'>
                Technology
              </h3>
              <p className='text-white  text-justify'>
                Any challenging software problem that involves abstraction,
                composition, and complexity will always thrill me. However, the
                ecosystems where I'm most comfortable are JavaScript, Shell, and
                Solidity.
              </p>
              <br />
              <h3 className='text-secondary text-2xl font-semibold'>
                Soft Skills
              </h3>
              <p className='text-white text-justify'>
                Any successful organization demands effective communication
                amongst colleagues. Countless business endeavors throughout my
                career have propelled my interpersonal skills by trial and
                error.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
