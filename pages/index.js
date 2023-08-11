
import Services from '@/pages/MainHero/ServicesMain/'
import Layout from '@/layout/Layout'
import Head from 'next/head'
import { Parallax, Background } from 'react-parallax'
import Hero from './MainHero/Hero'
import Offer from './MainHero/Offer'
import Advisory from './MainHero/Advisory'
import WhatIs from './MainHero/WhatIs'


export default function Home() {

  return (
    <>
    <Layout>
      <Head>
        <title>ITC - Services</title>
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
