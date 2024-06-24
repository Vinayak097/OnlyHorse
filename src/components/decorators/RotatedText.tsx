import React from 'react'

function RotatedText({children}:{children:React.ReactNode}) {
  return (
   
        <span>
            <span className='absolute  -left-2 -top-1 -bottom-1 -right-2 md:-left-3
            md:top-0 md:-bottom-0 md--right-3 -rotate-1 mx-2' 
            aria-hidden='true'></span>
            <span className='relative uppercase bg-sky-500'>
                {children}
            </span>
        </span>
   
  )
}

export default RotatedText