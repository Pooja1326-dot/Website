import React, { useState } from 'react'
import Head from '../../Header/Head'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'
import AppDownload from '../../AppDownload/AppDownload'
const Home = () => {
  const [category, setCategory] = useState("All")
  return (
    <div>
      <Head />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}
export default Home
