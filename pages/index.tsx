import DefaultLayout from '../components/layouts/default'
import HomeHeading from '../components/index/heading'
import HomeAbout from '../components/index/about'
import styles from '../styles/Home.module.css'
import Highlights from '../components/index/highlights'

export default function index(){
  return (
    <DefaultLayout>
      <HomeHeading />
      <HomeAbout />
      <Highlights />
    </DefaultLayout>
  )
}