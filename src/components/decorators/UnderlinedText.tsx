import { cn } from '@/lib/utils'
import React from 'react'

function UnderlinedText({children,className}:{ children:React.ReactNode, className?:string}) {
  return (
    <span className={cn("underline underline-offset-4 decoration-dashed  decoration-sky-400", className)}>
        {children}
    </span>
  )
}

export default UnderlinedText