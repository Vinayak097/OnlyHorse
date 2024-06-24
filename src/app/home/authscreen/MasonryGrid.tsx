"use client"
import React, { useState } from 'react'
import Image from 'next/image';

function MasonryGrid() {
    const [hoverIndex,setHoverIndex]=useState<>(null);
    const [mousePosition,setMousePosition]=useState<{x:number,y:number}>({x:0,y:0})

    const handleMouse=(e:React.MouseEvent<HTMLDivElement>,i:number)=>{
        if(hoverIndex===index){
            const rect=(e.target as HTMLDivElement).getBoundingClientRect();
        }
    }
  return (
    <div  className='p-5 sm:p-8'>
        <div className='columns-1 sm:columns-2'>
            {[...Array(15)].map((_,i)=>(
                <div key={i} className='relative overflow-hidden rounded-md'>
                    <Image 
                    src={`horse-${i}.png`}
                    className='cursor-pointer'
                    alt='Featured Horse'
                    width={500}
                    height={500}/>

                </div>
            ))}

        </div>
        
    </div>
  )
}

export default MasonryGrid