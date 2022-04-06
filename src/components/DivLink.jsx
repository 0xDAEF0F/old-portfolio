import Link from 'next/link'

export default function DivLink({ title, to, xClass }) {
  return (
    <Link href={to}>
      <a
        className={`cursor-pointer block text-base hover:text-dark-primary ${xClass}`}>
        {title}
      </a>
    </Link>
  )
}
