import React, { useState } from 'react'
import Header from '../../component/header/Header'
import ExploreMenu from '../../component/exploreMenu/ExploreMenu'
import FoodDisplay from '../../component/foodDisplay/FoodDisplay'
import AppDownload from '../../component/appDownload/AppDownload'

const Home = () => {
  const [category,setCategory] = useState("all");
  return (
    <div>
        <Header></Header>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}></FoodDisplay>
        <AppDownload></AppDownload>
    </div>
  )
}

export default Home