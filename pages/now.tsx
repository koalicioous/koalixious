import DefaultLayout from '../components/layouts/default'
import Heading from '../components/heading'

export default function Now(){
  return (
    <DefaultLayout>
      <main className='max-w-7xl mx-auto'>
        <Heading title='Now Page' subtitle='What do I do now' description='a descriptive log of my currently doing, learning, and concerns.' />
      </main>
    </DefaultLayout>
  )
}