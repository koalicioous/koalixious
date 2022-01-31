import Head from 'next/head';
import DefaultLayout from '../components/layouts/default'
import HomeHeading from '../components/index/heading'
import HomeAbout from '../components/index/about'
import styles from '../styles/Home.module.css'
import Highlights from '../components/index/highlights'

export default function index(){
  return (
    <DefaultLayout>
      <Head>
        <title>Koalixious Space</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HomeHeading />
      <HomeAbout />
      {/* <Highlights /> */}
      <div className='p-4 w-full h-24 lg:h-80 bg-gradient-to-t from-white sticky bottom-0 left-0 filter bg-opacity-20'></div>
    </DefaultLayout>
  )
}