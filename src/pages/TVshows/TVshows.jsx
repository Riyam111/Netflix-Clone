import React from 'react'
import './TVshows.css'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
function TVshows() {
  return (
    <div className='TVshows'>
        <Navbar/>
      <div className="hero">
       <img src={hero_banner} alt='' className='banner-img'/>
       <div className="hero-caption">
         <img src={hero_title} alt='' className='caption-img'/>
         <p>Hii ppl see you soon!!!!
         </p>
         <div className="hero-btns">
          <button className='btn'><img src={play_icon} alt="" />Play</button>
          <button className=' btn dark'><img src={info_icon} alt="" />more info</button>
         </div>
        
       </div>
      </div>
      <div className="morecards">
        
      <TitleCards title="Trending Today" category="day" type="tv"/>
<TitleCards title="Trending This Week" category="week" type="tv" />
      <TitleCards title={"Ariving Today"} category={"airing_today"} type="tv"/>
      <TitleCards title={"On the air"} category={"on_the_air"} type="tv"/>
      <TitleCards title={"Popular"} category={"popular"} type="tv"/>
      <TitleCards title={"Top Rated"} category={"top_rated"} type="tv"/>
      </div>
      <Footer/>
    </div>
  )
}

export default TVshows
