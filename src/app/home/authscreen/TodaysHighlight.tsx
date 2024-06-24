"use client"
import React from 'react'
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css'; 
function ToadayHightlight() {
  return (
    <div className='w-full md:w-3/4  mx-auto'>
      <CldVideoPlayer src={'highlighted-vid_ovdihz'}
      width={960}
      height={540}
      className='rounded-md'></CldVideoPlayer>
      
    </div>
  )
}

export default ToadayHightlight