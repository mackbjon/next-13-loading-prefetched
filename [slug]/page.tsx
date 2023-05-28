export default function User({ params }: { params: { slug: string } }) {
  return (
    <>
      <h1>{params ? `This is user # ${params}` : 'No user selected'}</h1>
    </>
  )
}
