import { Suspense } from 'react'
import Refresh from './Refresh'

export const runtime = 'edge'

async function DynamicElement() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('success')
    }, 5000)
  })

  return <h1>{`John Wick ${Math.random()}`}</h1>
}

export default function Bio() {
  return (
    <Suspense fallback={<h2>Loading Bio...</h2>}>
      {/* @ts-ignore */}
      <DynamicElement />
      <Refresh />
    </Suspense>
  )
}
