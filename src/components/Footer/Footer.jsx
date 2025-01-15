import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icon">
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={facebook_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Invester Relation</li>
        <li>Terms of Use</li>
        <li>Jobs</li>
        <li>Privacy</li>
        <li>Legal notices</li>
        <li>Cookie preference</li>
        <li>Corporate information</li>
        <li>Contact us</li>
        </ul>
        <p className='copyright-text'>© 2024 Netflix, Inc. All rights reserved.</p>
    </div>
  )
}
export default Footer
