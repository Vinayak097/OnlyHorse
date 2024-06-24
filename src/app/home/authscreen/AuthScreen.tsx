import React from 'react'
import Image from 'next/image'
import AuthButtons from './AuthButtons'
import Herosection from './Herosection'
import UnderlinedText from '@/components/decorators/UnderlinedText'
import TodaysHighlight from './TodaysHighlight'
import RotatedText from '@/components/decorators/RotatedText'
function AuthScreen() {
  return (
    <div className='flex flex-col w-full'>

      <div className='flex h-screen w-full'>
      <div className=' bg-noise flex-1 flex flex-col overflow-hidden bg-[#00b0f0a6] relative justify-center items-center z-10'>
    <div className=' flex flex-col justify-center items-center'>
    <Image src={'/onlyhorse.png'} alt={'OnlyHorse logo'}
    width={769}
    height={182}
    className='p-2 mt-20  w-[420] z-0 pointer-events-none select-none'>
    </Image>
    <p className='text-xl  md:text-3xl text-balance'>
      Hey? Its's <span className='bg=stone-800 px-2 font-bold
      text-white '>NOT </span>what it looks like.
    </p>
    <p className=' text-2xl md:text-3xl mb-32 leading-snug text-balance'>
      Built for <span className='text-xl bg-blue-500  md:text-3xl '>HORSES</span>
      <span className='text-xl md:text-3xl '> NOT </span><span className='md:text-3xl text-xl text-white  bg-red-400'>OTHERS</span>
    </p>
    <div className='mb-5 '>
      <AuthButtons></AuthButtons>
    </div>
    </div>
    
    
</div>
<div className='flex-1 relative overflow-hidden justify-center items-center hidden md:flex'>
  <Image src={"/horse-1.png"}
  alt='HoRse'
  fill
  className=' object-cover opacity-90'
  >
  </Image>
</div>

</div>
<div className='' >

  

  <div className='mb-20 mt-12'>
  <Herosection></Herosection>
    <div className='max-w-6xl mx-auto px-4'>
      <p className='text-3xl md:text-5xl tracking-tight mt-4 mb-8 font-semibold text-center'>
      Today's{" "}
      <UnderlinedText  >Highlight</UnderlinedText>
      <span className='text-2xl md:text-4xl ml-1'>symbol</span></p>
      <div className='flex flex-col gap-10 mt-10'>
        <TodaysHighlight></TodaysHighlight>

        <div className='mt-24'>
          <p className='text-2xl md:text-5xl text-center tracking-tighter font-bold '>
            Meet the <RotatedText>Stars</RotatedText> of Our Farm
          </p>
          
        </div>

      </div>


    </div>


  </div>


</div>
    


  </div>
  )
}

export default AuthScreen