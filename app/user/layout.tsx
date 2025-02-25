export const dynamic = 'force-static'

export default function Layout(props: {
  children: React.ReactNode
  messages: React.ReactNode
}) {
  return (
    <>
      {props.children}
      {props.messages}
    </>
  )
}
