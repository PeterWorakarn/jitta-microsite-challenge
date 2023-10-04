import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../src/components/common/Header'
import Footer from '../src/components/common/Footer'
import FootNote from '../src/components/home/FootNote'
import { Carousal } from '../src/components/home/Carousal'
import Cover from '../src/components/home/Cover'
import Mockup from '../src/components/home/Mockup'

const Home: NextPage = () => {
  return (
    <div className='bg-netflix-black font-sans'>
      <Head>
        <title>Netflix Top 10 - By Country: Thailand</title>
        <meta name="description" content="Thailand: Weekly Top 10 lists of the most watched TV and films on Netflix in countries around the world." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Cover />
        <div className='list-view h-full'>
          <Carousal />
        </div>
        <section className='container mx-auto w-full my-10'>
          <p className='text-2xl text-netflix-white font-semibold text-center max-w-[575px] w-full mx-auto'>These titles also made the Top 10 in other countries around the world:</p>
          <p className='text-netflix-gray text-center'>Top 10 lists available in selected countries and territories. Regional groupings based on the United Nations Statistics Division.</p>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 p-5'>
            <Mockup />
            <div className='flex flex-col gap-5 flex-wrap'>
              <Mockup />
              <Mockup />
            </div>
            <Mockup />
          </div>
        </section>
        <FootNote />
      </main>
      <Footer />
    </div>
  )
}

export default Home
