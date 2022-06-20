import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import algoSolver from '../assets/algosolverSS.png'
import set from '../assets/setSS.png'
import { AiFillGithub } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'

const projects = [
  {
    id: 1,
    name: 'AlgoSolver',
    href: 'https://jovial-kirch-754800.netlify.app/',
    github: 'https://github.com/radaemon/algoheart',
    description:
      'This project helps visualize the depth-first-search algorithm with or without a maze generator. Users can draw obstacles and the algorithm will find the shortest path.',
    imageSrc: algoSolver,
    imageAlt:
      'Person using a pen to cross a task off a projectivity paper card.',
  },
  {
    id: 2,
    name: 'Set Game',
    href: 'https://tender-allen-b2ffa0.netlify.app/',
    github: 'https://github.com/radaemon/set-higo',
    description:
      'The purpose of this game is to make sets of cards that complete a certain criteria. It is a very common featured in The New York Times.',
    imageSrc: set,
    imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
  },
  {
    id: 3,
    name: 'LooksRare Analytics',
    href: 'https://looksrare-volume-tracker.herokuapp.com/graphql',
    github: 'https://github.com/radaemon/looksrare-volumes',
    description:
      'GraphQL server that tracks and updates LooksRare NFT exchange volume metrics, prices, and Ethereum prices. It filters down the wash-trading by excluding collections that operate without a royalty.',
    imageSrc: algoSolver,
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
  // More projects...
]

function Projects() {
  return (
    <div>
      <div className='pt-32 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
        <div className='sm:max-w-xl md:max-w-3xl mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl'>
          <h2 className='text-3xl tracking-tight font-extrabold text-white sm:text-4xl mb-6'>
            My Projects
          </h2>
          <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8 pt-12'>
            {projects.map((project) => (
              <div key={project.id} className='group p-6 bg-black rounded-2xl'>
                <div className='text-fourth flex justify-between mb-4'>
                  <a href={project.href} target='_blank'>
                    <CgWebsite className='w-8 h-8 hover:text-primary' />
                  </a>
                  <a href={project.github} target='_blank'>
                    <AiFillGithub className='w-8 h-8 hover:text-purple-500' />
                  </a>
                </div>
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className='object-center object-cover  rounded-lg'
                />

                <h3 className='text-base font-bold text-secondary mt-2'>
                  {project.name}
                </h3>

                <p className='mt-1 text-sm italic text-gray-300'>
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* <div className='mt-6 grid gap-16 pt-12 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-x-5 lg:gap-y-12'>
            <div>hola</div>
            <div>hg</div>
            <div>hg</div>
            <div>hg</div>
            <div>hg</div>
          </div> */}
      </div>
    </div>
  )
}

export default Projects
