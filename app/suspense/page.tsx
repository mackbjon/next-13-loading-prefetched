import React from 'react'
import { baseUrl } from '../../utils'

async function DynamicElement() {
  const res = await fetch(`${baseUrl}api/`, {
    cache: 'no-store',
  })

  const data = await res.json()

  return <h1>{data.name}</h1>
}

export default async function DynamicPage() {
  return (
    <React.Suspense fallback={<>Waiting to resolve...</>}>
      {/* @ts-ignore */}
      <DynamicElement />
    </React.Suspense>
  )
}
