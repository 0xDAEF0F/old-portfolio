import Footer from '../components/Footer'
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
      <Footer />
    </div>
  )
}

export default aboutMe
