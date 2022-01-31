import Head from 'next/head'
import DefaultLayout from '../components/layouts/default'
import Heading from '../components/heading'

export default function Bookmarks(){
  return (
    <DefaultLayout>
      <Head>
        <title>Koalixious Space — Bookmakrs</title>
      </Head>
      <Heading title='Bookmarks' subtitle='Interesting Stuff' description='What i highlighted from books I read and gems from the internet.' />
    </DefaultLayout>
  )
}