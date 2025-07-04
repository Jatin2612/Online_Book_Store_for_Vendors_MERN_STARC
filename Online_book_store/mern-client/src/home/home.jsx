import React from 'react'
import Banner from '../components/banner'
import BestSellerBook from './BestSellerBooks'
import FavBook from './favBook'
import PromoBanner from './promoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'
import MyFooter from '../components/MyFooter'

const Home =() => {
    return(
       <div>
        <Banner/>
       <BestSellerBook/>
       <FavBook/>
       <PromoBanner/>
       <OtherBooks/>
       <Review/>
       </div>
    )
}

export default Home