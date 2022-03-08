import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'
import tw from 'tailwind-styled-components'
import { auth } from '../firebase'


export default function Home() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,

        })
      } else {
        setUser(null)
        router.push('/login')
      }
    }) 
  }, [])

  return (
    <div className='bg-[#15202b]'>
      <Head>
        <title>Adarsh Boys Hostel</title>
        
      </Head>
        
      <div className=' justify-center h-screen w-screen select-none text-white'>
        {/* Header */}
        <Header />
        {/* <LoginForm /> */}

        <main className='flex'>
          {/* Sidebar */}
          <Sidebar />
          
          {/* Feed */}
          <Feed />
          {/* Widgets */}
          <Name>{user && user.name}</Name>
          <UserImage src={user && user.photoUrl} onClick={() => signOut(auth)} />
        </main>


      </div>
      

    </div>

  )
}


const Name = tw.div`mr-4 w-20 text-sm`
const UserImage = tw.img`h-12 w-12 rounded-full border border-gray p-px cursor-pointer`


