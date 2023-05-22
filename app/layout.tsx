import Link from 'next/link'
import { PropsWithChildren } from 'react'

import './globals.css'

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <head>
        <title>Next 13 App</title>
      </head>
      <body>
        <div>
          <h1>Layout</h1>

          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              {/* <li>
                <Link href="/suspense">Suspense</Link>
              </li> */}
              <li>
                <Link href="/about">About (static)</Link>
              </li>
            </ul>
          </nav>

          {children}
        </div>
      </body>
    </html>
  )
}
