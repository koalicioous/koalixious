import DefaultLayout from '../components/layouts/default'
import Heading from '../components/heading'
import Items from '../components/now/items'

export default function Now(){
  return (
    <DefaultLayout>
      <main className='max-w-7xl mx-auto'>
        <Heading title='Now Page' subtitle='What do I do now' description='a descriptive log of my currently doing, learning, and concerns.' />
        <Items />
      </main>
    </DefaultLayout>
  )
}