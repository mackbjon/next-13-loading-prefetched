export default function Layout(props: {
  children?: React.ReactNode
  bio: React.ReactNode
  description: React.ReactNode
}) {
  return (
    <>
      {props.bio}
      {props.description}
    </>
  )
}
