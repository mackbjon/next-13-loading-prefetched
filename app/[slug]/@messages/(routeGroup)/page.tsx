export const runtime = 'edge'
export const dynamic = 'force-dynamic'

async function DynamicElement() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('success')
    }, 4000)
  })

  return <p>My message: {Math.random().toPrecision(3)}</p>
}

export default function Bio() {
  return (
    <>
      {/* @ts-ignore */}
      <DynamicElement />
    </>
  )
}
