import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
    return (
       <header>
        <div className="container header__container">
            <h5>Hello I'm </h5>
            <h1>Weihao Ke</h1>
            <h5 className='text-light'>Fullstack Developer</h5>
            <CTA></CTA>
            <HeaderSocial />

            <div className='me'>
                <img src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/71679939_2464225650331507_4169363528639053824_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bWgEdyInJWIAX9-xY1n&_nc_ht=scontent-lax3-2.xx&oh=00_AfCtPMYk0C8lo4qYYyA-8rRhAQHPDDDQRyAl4XrGHy83vA&oe=63BB3D87" alt="me"></img>
            </div>

            <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
       </header>
    )
}

export default Header
