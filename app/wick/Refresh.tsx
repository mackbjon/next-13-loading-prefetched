'use client'

import { useRouter } from 'next/navigation'
// import { refreshAbout } from '../../actions'
import { useTransition } from 'react'

export default function Bio() {
  const router = useRouter()
  // const [isPending, startTransition] = useTransition()

  return (
    <>
      <button
        className={
          // `${
          // isPending ? 'cursor-not-allowed text-gray-400' : ''}
          `text-sm text-gray-500 hover:text-gray-900`
        }
        // disabled={isPending}
        onClick={() => router.refresh()}
      >
        {/* {isPending ? 'Refreshing...' : 'Refresh'} */ 'Refresh'}
      </button>
    </>
  )
}
