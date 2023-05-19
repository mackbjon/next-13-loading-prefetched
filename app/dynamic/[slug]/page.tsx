import { baseUrl } from '../../../utils'

interface Props {
  params: {
    slug: string
  }
}

export default async function DynamicPage({ params }: Props) {
  console.log(`${baseUrl}api/hello`)
  const res = await fetch(`${baseUrl}api/`, {
    cache: 'no-store',
  })

  const data = await res.json()

  console.log(data)

  return (
    <h1>
      {params.slug}
      {data.name}
    </h1>
  )
}
