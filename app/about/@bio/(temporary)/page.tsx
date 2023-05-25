export const dynamic = 'force-dynamic'

import Refresh from './Refresh'

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
    <>
      {/* @ts-ignore */}
      <DynamicElement />
      <Refresh />
    </>
  )
}
