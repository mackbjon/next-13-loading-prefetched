import Refresh from './Refresh'

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
