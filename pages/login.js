import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth, provider } from '../firebase'



const Login = () => {
    const router = useRouter()
    
    useEffect(() => {
        onAuthStateChanged(auth, user  => {
            if(user) {
                router.push('/')
            }
        })
    }, [])
  return <Wrapper>
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
          Sign In With Button
      </SignInButton>
      

  </Wrapper>
}
export default Login

const Wrapper = tw.div`flex flex-col bg-gray-200 w-screen h-screen p-4`
const SignInButton = tw.button`bg-black text-white text-center py-4 mt-8 self-center w-full`