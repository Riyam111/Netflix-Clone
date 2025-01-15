import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import caret_icon from '../../assets/caret_icon.svg'
import profile_img from '../../assets/profile_img.png'
import { logout } from '../../firebase'
const Navbar = () => {
  const navref=useRef();
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>=80){
        navref.current.classList.add('nav-dark')
      }
      else{
        navref.current.classList.remove('nav-dark')
      }
    })
  },[])
  return (
    <div ref={navref} className='navbar'>
      <div className="nav-left">
      <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/TVshows" activeClassName="active">
              TV Shows
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" activeClassName="active">
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink to="/mylist" activeClassName="active">
              My List
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-and-popular" activeClassName="active">
              New & Popular
            </NavLink>
          </li>
          <li>
            <NavLink to="/browse-language" activeClassName="active">
              Browse by Language
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        
      <img src={search_icon} alt="" className='icons'/>
      <p>children</p>
      <img src={bell_icon} alt="" className='icons'/>
      <div className="nav-profile">
      <img src={profile_img} alt=""className='profile'/>
      <img src={caret_icon} alt=""/>
      <div className="dropdown">
        <p onClick={()=>{logout()}}>sign out</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
