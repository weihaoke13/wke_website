import React from 'react';
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
           <h5>Get to Know</h5>
           <h2>About Me</h2>

           <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/71679939_2464225650331507_4169363528639053824_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bWgEdyInJWIAX9-xY1n&_nc_ht=scontent-lax3-2.xx&oh=00_AfCtPMYk0C8lo4qYYyA-8rRhAQHPDDDQRyAl4XrGHy83vA&oe=63BB3D87" alt='About Image' ></img>
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward  className='about__icon'/>
                            <h5>Experience</h5>
                            <small>2+ Years Working</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers  className='about__icon'/>
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary  className='about__icon'/>
                            <h5>Projects</h5>
                            <small>80+ Completed</small>
                        </article>

                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet iste 
                        laborum commodi quam, earum reprehenderit necessitatibus magnam! 
                        Omnis iste nesciunt quo amet veniam perferendis voluptate rerum neque et, ipsam cumque.
                    </p>
                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>

                </div>
           </div>
        </section>
    )
}

export default About
