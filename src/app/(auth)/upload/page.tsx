import Navbar from '@/components/Navbar'
import Viewer from '@/components/ui/Viewer'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='bg-sky-100'>
             <Navbar />
      <div className='flex flex-col items-center px-5 py-5 bg-sky-100 '>
          
                <h1 className='text-5xl border-2 border-sky-500 px-10 py-3 rounded-lg '>Lead&apos;s Info</h1>

               
            </div>
            <div >

                 <Viewer  />

            </div>
            
            
          
              
          
          
  
        </div>
      
  )
}

export default page