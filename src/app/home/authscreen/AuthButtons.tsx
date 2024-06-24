"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
function AuthButtons() {
  const [loading,setloading]=useState(false)
  
  
 

  return (
    <div className='flex gap-3 flex-1  md:flex-row flex-col'>
      <RegisterLink className='flex-1' onClick={()=>{setloading(true)}}>
      <Button className='w-full  ' disabled={loading}>
        Signup 
      </Button>
        
      </RegisterLink >

      <LoginLink className='flex-1' onClick={()=>setloading(true)} >
      <Button className='w-full' disabled={loading}>
        Signin 
      </Button>
      </LoginLink>
      <div className='text-black'>
        hello
        
      </div>
      
        

    </div>
  )
}

export default AuthButtons