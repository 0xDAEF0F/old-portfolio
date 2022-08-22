import Image from 'next/image'

import algoSolver from '../assets/algosolverSS.png'
import set from '../assets/setSS.png'
import looks from '../assets/lr-image.png'
import puppeteer from '../assets/puppeteer.png'
import reliks from '../assets/reliks-screenshot.png'
import foundry from '../assets/foundry-banner.png'
import { AiFillGithub } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'

const projects = [
  {
    id: 1,
    name: 'Reliks',
    stack: 'Moralis | Hardhat | Solidity',
    href: 'https://reliks.xyz',
    github: 'https://github.com/radaemon/Acme',
    description:
      'Reliks is a platform for content creators to connect with their fan base, get supported, and in return, grant rewards in the form of NFTs, fungible tokens, and physical items.',
    imageSrc: reliks,
    imageAlt: 'Reliks ScreenShot HomePage.',
  },
  {
    id: 2,
    name: 'NFT - VRF Chainlink',
    stack: 'Foundry | Solidity',
    href: '',
    github: 'https://github.com/radaemon/my-nft-with-vrf',
    description:
      'ERC-721 custom contract with chainlink VRF as a dependency to provide randomization when minting tokens.',
    imageSrc: foundry,
    imageAlt: 'Foundry Image.',
  },
  {
    id: 3,
    name: 'AlgoSolver',
    stack: 'React.js',
    href: 'https://jovial-kirch-754800.netlify.app/',
    github: 'https://github.com/radaemon/algoheart',
    description:
      'This project helps visualize the depth-first-search algorithm with or without a maze generator. Users can draw obstacles and the algorithm will find the shortest path.',
    imageSrc: algoSolver,
    imageAlt:
      'Person using a pen to cross a task off a projectivity paper card.',
  },
  {
    id: 4,
    name: 'Set Game',
    stack: 'React.js | React Testing Library',
    href: 'https://tender-allen-b2ffa0.netlify.app/',
    github: 'https://github.com/radaemon/set-higo',
    description:
      'The purpose of this game is to make sets of cards that complete a certain criteria. It is featured in The New York Times.',
    imageSrc: set,
    imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
  },
  {
    id: 5,
    name: 'LooksRare Analytics',
    stack: 'Express-GraphQL | MySQL | Prisma.js | Nexus.js',
    href: 'https://looksrare-volume-tracker.herokuapp.com/graphql',
    github: 'https://github.com/radaemon/looksrare-volumes',
    description:
      'GraphQL server that tracks and updates LooksRare NFT exchange volume metrics, prices, and Ethereum prices. It filters down the wash-trading by excluding collections that operate without a royalty.',
    imageSrc: looks,
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
  {
    id: 6,
    name: 'Floor Price Web-Scraper',
    stack: 'React.js | Puppeteer | Express.js | PostgresSQL',
    href: '',
    github: 'https://github.com/radaemon/challenge-sell-wall',
    description:
      'Web scraping tool that retrieves OpenSea listings (floor prices) for any NFT collection.',
    imageSrc: puppeteer,
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
]

function Projects() {
  return (
    <div className='pt-32 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div className='sm:max-w-xl md:max-w-3xl mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl'>
        <h2 className='text-3xl tracking-tight font-extrabold text-white sm:text-4xl mb-6'>
          My Projects
        </h2>
        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-10 lg:grid-cols-3 xl:gap-x-16 pt-12'>
          {projects.map((project) => (
            <div key={project.id} className='group p-6 bg-black rounded-2xl'>
              <div className='text-fourth flex justify-between mb-4'>
                {project.href ? (
                  <a href={project.href} target='_blank'>
                    <CgWebsite className='w-8 h-8 hover:text-primary' />
                  </a>
                ) : (
                  ''
                )}
                <a href={project.github} target='_blank'>
                  <AiFillGithub className='w-8 h-8 hover:text-purple-500' />
                </a>
              </div>
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                className='object-center object-cover rounded-lg'
              />

              <h3 className='text-base font-bold text-secondary mt-2'>
                {project.name}
              </h3>

              <p className='mt-1 text-sm italic text-gray-300'>
                {project.description}
              </p>

              <p className='mt-3 font-semibold text-sm text-center text-gray-500'>
                {project.stack}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
