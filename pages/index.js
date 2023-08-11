
import Services from '@/pages/MainHero/ServicesMain/'
import Layout from '@/layout/Layout'
import Head from 'next/head'
import { Parallax, Background } from 'react-parallax'
import Hero from './MainHero/Hero'
import Offer from './MainHero/Offer'
import Advisory from './MainHero/Advisory'
import WhatIs from './MainHero/WhatIs'
import Estructurado from './MainHero/Estructurado'
import Wifi from './MainHero/Wifi'
import HighAvailability from './MainHero/HighAvailability'
import VideoSurveillance from './MainHero/VideoSurveillance'
import Cybersecurity from './MainHero/Cybersecurity'
import Interconection from './MainHero/Interconection'
import Consulting from './MainHero/Consulting'
import AfterSales from './MainHero/AfterSales'


export default function Home() {

  return (
    <>
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="ITC - SERVICES" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero/>
      <Offer/>
      <Advisory/>
      <WhatIs/>


      {/**<Estructurado/>
      <Wifi/>
      <HighAvailability/>
      <VideoSurveillance/>
      <Cybersecurity/>
      <Interconection/>
      <Consulting/>
      <AfterSales/>  */}
      


     </Layout>
    </>
  )
}
