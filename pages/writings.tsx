import Head from 'next/head'
import Link from 'next/link'
import DefaultLayout from '../components/layouts/default'
import Heading from '../components/heading'
import Articles from '../components/writings/articles'

export default function Writings(){
  return (
    <DefaultLayout>
      <Head>
        <title>Koalixious Space — Writings</title>
      </Head>
      <Heading title='Writings' subtitle='Words, codes, and everything in between' description='a collection of technical writing and reflective articles of mine.' />
      <Articles />
      <div className='text-center'>
        <Link href="https://medium.com/@koalicious">
          <a target="_blank" rel="noreferrer" className='mt-3 block underline text-sm md:text-base'>
            For complete articles, click here to visit my medium page.
          </a>
        </Link>
      </div>
    </DefaultLayout>
  )
}