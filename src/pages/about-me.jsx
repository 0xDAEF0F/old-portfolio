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
                I am a Software Engineer, Solidity developer, and Ethereum
                security researcher. Avid problem solver and functional
                programming enthusiast (oh no, another Haskell fanboy). I enjoy
                watching comforting TV shows, meditating, and taking nature
                walks in my free time.
              </p>
              <br />
              <h2 className='text-white text-3xl tracking-tight font-extrabold sm:text-4xl mb-6'>
                Skills
              </h2>
              <h3 className='text-secondary text-2xl font-semibold'>
                Technology
              </h3>
              <p className='text-white'>
                I have real-world experience working with complex systems and
                applications encompassing a wide range of technologies, e.g.,
                PHP, JavaScript, Solidity. I am not afraid to dive into the low
                level nitty gritty of things to grasp a more in-depth knowledge
                of how things work under the hood.
              </p>
              <br />
              <h3 className='text-secondary text-2xl font-semibold'>
                Soft Skills
              </h3>
              <p className='text-white'>
                My career has taught me that being able to communicate
                effectively in a team is crucial to an organization's success,
                especially when working remotely and with people from other
                timezones.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
