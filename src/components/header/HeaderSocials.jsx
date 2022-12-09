import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/weihao-ke/' target="_blank"><BsLinkedin /></a>        
        <a href='https://www.github.com/weihaoke13' target="_blank"> <FaGithub /></a>
        <a href='https://www.facebook.com/' target="_blank"> <BsFacebook /></a>



    </div> 
  )
}

export default HeaderSocials