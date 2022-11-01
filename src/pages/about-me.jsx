import Header from '../components/Header'
import Footer from '../components/Footer'
import BackgroundAnimation from '../components/BackgroundAnimation'

export default function aboutMe() {
  return (
    <>
      <Header />
      <div className='bg-bg h-max pt-24 pb-10'>
        <div className='grid grid-cols-1  md:grid-cols-2 md:h-screen'>
          <div className='max-h-0 md:max-h-96 md:h-screen'>
            <BackgroundAnimation />
          </div>
          <div className='flex p-10'>
            <div className='mb-auto mt-auto max-w-lg'>
              <h2 className='text-3xl text-primary italic tracking-tight font-extrabold sm:text-4xl mb-6'>
                About Me
              </h2>
              <p className='text-white'>
                I am a mission-centric individual focused on building scalable
                and rich web applications. Competing against myself and being
                critical of my day's work allows me to stay competitive and
                relevant during these challenging times.
              </p>
              <br />
              <h2 className='text-white text-3xl tracking-tight font-extrabold sm:text-4xl mb-6'>
                Skills
              </h2>
              <h3 className='text-secondary text-2xl font-semibold'>
                Technology
              </h3>
              <p className='text-white'>
                Any challenging problem that involves abstraction and
                decomposition will always appeal to me. However, the domain
                where I'm the most fluent in are web applications.
              </p>
              <br />
              <h3 className='text-secondary text-2xl font-semibold'>
                Soft Skills
              </h3>
              <p className='text-white'>
                My software career has taught me that being able to communicate
                effectively in a team is crucial to an organizations success.
                Specially when working remotely and with people from other
                timezones.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
