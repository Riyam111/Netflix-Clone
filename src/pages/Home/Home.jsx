import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className="home">
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
         <TitleCards/>
       </div>
      </div>
      <div className="morecards">
        
      <TitleCards title="Trending Today" category="day" type="movie" />
<TitleCards title="Trending This Week" category="week"type="movie" />
      <TitleCards title={"blockbuster movies"} category={"top_rated"} type="movie"/>
      <TitleCards title={"bollywood popcorn"} category={"popular"} type="movie"/>
      <TitleCards title={"upcoming"} category={"upcoming"} type="movie"/>
      <TitleCards title={"top picks for you"} category={"now_playing"} type="movie"/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
