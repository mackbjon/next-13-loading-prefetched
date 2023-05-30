export const dynamic = 'force-static'

export default function Layout(props: {
  children: React.ReactNode
  bio: React.ReactNode
}) {
  return (
    <>
      {props.children}
      {props.bio}
    </>
  )
}
