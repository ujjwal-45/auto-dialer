'use client'
import { cn } from '@/lib/utils'
import { FC, useState } from 'react'
import { Button } from './ui/Button'
import {signIn} from 'next-auth/react';
import { Icons } from './Icons';


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement>{}


const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props}) => {
   
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

   

   const loginWithGoogle = async() =>{
    setIsLoading(true)
    try{
        await signIn('google')

    }catch (error){
      return error;

    } finally{
        setIsLoading(false)
    }
   }
  
  const loginWithCredentials = async () => {
    setIsLoading(true)
    try {
      await signIn('credentials', { email, password })
      
    } catch (error) {
      return error;
    }
    finally {
      setIsLoading(false);
    }
    }




  return (
    
    <div className={cn('flex flex-col gap-2 justify-center', className)}{...props}>
      
       <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />

   

       <Button onClick={loginWithGoogle} isLoading={isLoading} size="sm" className="w-full">
        {isLoading ? null : <Icons.google className="h-4 w-4 mr-2" />} Google
      </Button>

       <Button onClick={loginWithCredentials} isLoading={isLoading} size='sm' className='w-full'
    
      > {isLoading ? null : <Icons.email className='h-4 w-4 mr-2 ' />} Sign In Credentials</Button>
      
     


   
  </div>
  )
}

export default UserAuthForm