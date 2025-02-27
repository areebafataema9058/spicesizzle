import React from 'react'
import HomeSection from "../components/HomeSection"
import GalleryCards from "../pages/GalleryCards"
import MainDish from '../components/MainDish'
import About from "../pages/About"
import DailyOffers from '../components/DailyOffers'
import MenuCategories from '../components/MenuCategories'


const Home = () => {
  return (
   <>
   <HomeSection/>
   <MainDish/>
   <GalleryCards/>
   <DailyOffers/>
   <MenuCategories/>
   <About/>
   </>
  )
}

export default Home