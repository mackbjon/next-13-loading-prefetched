export const dynamic = 'force-dynamic'

async function DynamicElement() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('success')
    }, 2000)
  })

  return <h1>{'John Wick'}</h1>
}

export default function DynamicPage() {
  return (
    /* @ts-ignore */
    <DynamicElement />
  )
}
