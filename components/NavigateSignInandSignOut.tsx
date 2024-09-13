import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import { ModeToggle } from './ModeToggle'

const NavigateSignInandSignOut = () => {
  return (
    <nav className='container flex items-center justify-between'>
        <ModeToggle />
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>  
    </nav>
  )
}

export default NavigateSignInandSignOut
