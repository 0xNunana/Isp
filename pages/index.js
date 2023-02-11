import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
import Offers from '@/components/Offers'
import Connection from '@/components/Connection'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Danny's Internet</title>
        <meta name="description" content="Unlimited Internet Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sticky top-0  z-20">
         <Header />
      </div>
     
      <main className='item-center' >
        
        <div>
          <Banner/>
          <div className='flex items-center max-w-screen-sm mx-auto space-x-2'>
            <h1 className='flex-grow text-right font-semibold text-md pt-7 pr-2'>CONNECTION STATUS:</h1>
            <Connection />
          </div>
          
       <Offers/>
       </div>
      
       
      </main>
      
      <Footer/>
    </div>
  )
}
