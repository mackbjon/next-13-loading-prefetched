// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'

type Data = {
  name: string
}

export async function GET() {
  const delay = new Promise((res) => {
    setTimeout(() => {
      res(true)
    }, 3000)
  })

  await delay

  return NextResponse.json({ name: 'John Doe' })
}
