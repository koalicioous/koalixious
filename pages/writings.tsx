import DefaultLayout from '../components/layouts/default'
import Heading from '../components/heading'
import Articles from '../components/writings/articles'

export default function Writings(){
  return (
    <DefaultLayout>
      <Heading title='Writings' subtitle='Words, codes, and everything in between' description='a collection of technical writing and reflective articles of mine.' />
      <Articles />
    </DefaultLayout>
  )
}