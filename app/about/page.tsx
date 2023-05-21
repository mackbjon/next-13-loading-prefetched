// export const runtime = 'edge'

// async function DynamicElement() {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('success')
//     }, 4000)
//   })

//   return <h1>{'John Wick'}</h1>
// }

export default async function DynamicPage() {
  return <h1>Hi This is the about page!</h1>
}
