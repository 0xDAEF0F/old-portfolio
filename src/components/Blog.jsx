const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Crypto', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Front', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Back', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Other', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export default function Blog() {
  return (
    <div className='pt-32 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div className='sm:max-w-xl md:max-w-3xl mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl'>
        <div>
          <h2 className='text-3xl tracking-tight font-extrabold text-white sm:text-4xl'>
            Recent publications
          </h2>
        </div>
        <div className='mt-6 grid gap-16 pt-12 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-x-5 lg:gap-y-12'>
          {posts.map((post) => (
            <a
              href={post.href}
              key={post.title}
              className='p-3 hover:scale-105 transition duration-300'>
              <div className='flex-shrink-0'>
                <img
                  className='h-48 w-full object-cover rounded-md'
                  src={post.imageUrl}
                  alt=''
                />
              </div>
              <div>
                <div className='inline-block'>
                  <span className='text-primary inline-flex items-center pt-3 rounded-full text-sm font-medium'>
                    {post.category.name}
                  </span>
                </div>
              </div>
              <div className='block mt-1'>
                <p className='text-xl text-white font-bold'>{post.title}</p>
                <p className='mt-3 text-base  text-fourth'>
                  {post.description}
                </p>
              </div>
              <div className='mt-6 flex items-center'>
                <div className='flex-shrink-0'></div>
                <div className='flex space-x-1 text-sm'>
                  <time className='text-white' dateTime={post.datetime}>
                    {post.date}
                  </time>
                  <span aria-hidden='true' className='text-white'>
                    &middot;
                  </span>
                  <span className='text-gray-400'>{post.readingTime} read</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
