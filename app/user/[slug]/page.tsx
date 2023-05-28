import Link from 'next/link'

export default function User({ params }: { params: { slug: string } }) {
  return (
    <>
      <p>My about page!</p>
      <Link href="/wick">Click for John Wick</Link>
    </>
  )
}
