import Head from 'next/head'
import DefaultLayout from '../components/layouts/default'
import Heading from '../components/heading'
import Projects from '../components/works/projects'
import Experiences from '../components/works/experiences'

export default function Works(){
  return (
    <DefaultLayout>
      <Head>
        <title>Koalixious Space — Works &amp; Experiences</title>
      </Head>
      <Heading title='Works' subtitle='Projects and Experiences' description='documentation of where I have been and what am i been doing.' />
      <Projects />
      <Experiences />
      <div className='p-4 w-full h-24 lg:h-80 bg-gradient-to-t from-white sticky bottom-0 left-0 filter bg-opacity-20'></div>
    </DefaultLayout>
  )
}