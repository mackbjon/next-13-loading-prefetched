import { Suspense } from 'react'

export const runtime = 'edge'

async function DynamicElement() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('success')
    }, 2000)
  })

  return <h1>{'John Wick'}</h1>
}

export default async function DynamicPage() {
  return (
    <Suspense fallback={<>Waiting to resolve...</>}>
      {/* @ts-ignore */}
      <DynamicElement />
    </Suspense>
  )
}
