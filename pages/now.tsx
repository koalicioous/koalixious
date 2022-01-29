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
        <div className='p-4 w-full h-24 lg:h-80 bg-gradient-to-t from-white sticky bottom-0 left-0 filter bg-opacity-20'></div>
    </DefaultLayout>
  )
}