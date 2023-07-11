import Link from 'next/link';
import React from 'react'
import { Icons } from './Icons'
import UserAuthForm from './UserAuthForm';

const SignIn = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
        <div className='flex flex-col space-y-2 items-center'>
          <Icons.logo className='mx-auto h-6 w-6' />
          <h1 className='text-2xl font-semibold tracking-tight'>Welcome Back</h1>
          <p className='max-w-xs mx-auto text-sm'>
            By continuing, you are setting up a SpreadIt account and agree to our User Agreement and Privacy Policy.
          </p>

            {/* {Sign in form} */}
            <UserAuthForm className='w-full'  />

            <p className='text-sm px-8 text-zinc-700 text-center'>
                New To SpreadIt?{' '}
                <Link href='/sign-up' className='hover:text-zinc-800 text-sm underline underline-offset-4'>
                Sign Up
                </Link>
            </p>
        </div>
    </div>
  )
}
export default SignIn;