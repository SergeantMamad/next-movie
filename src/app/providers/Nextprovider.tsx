'use client'

import {NextUIProvider} from '@nextui-org/react'

export function Nextprovider({children}:{children:React.ReactNode}) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}