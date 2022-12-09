import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
    {
        id: 1,
        image: 'https://s3.amazonaws.com/creativetim_bucket/products/221/original/opt_blk_angular_thumbnail.jpg?1569476059',
        title:' Crypto Currency Dashboard & Financial visualtization',
        github: 'https://github.com',
        demo: ' https://dribble.com/'
    },
    {
        id: 2,
        image: 'https://bootstrapmade.com/content/templatefiles/Arsha/Arsha-bootstrap-website-template-md.png',
        title:' Crypto Currency Dashboard & Financial visualtization',
        github: 'https://github.com',
        demo: ' https://dribble.com/'
    },
    {
        id: 3,
        image: 'https://s3.amazonaws.com/creativetim_bucket/products/221/original/opt_blk_angular_thumbnail.jpg?1569476059',
        title:' Crypto Currency Dashboard & Financial visualtization',
        github: 'https://github.com',
        demo: ' https://dribble.com/'
    },
    {
        id: 4,
        image: 'https://bootstrapmade.com/content/templatefiles/Arsha/Arsha-bootstrap-website-template-md.png',
        title:' Crypto Currency Dashboard & Financial visualtization',
        github: 'https://github.com',
        demo: ' https://dribble.com/'
    },
    {
        id: 5,
        image: 'https://s3.amazonaws.com/creativetim_bucket/products/221/original/opt_blk_angular_thumbnail.jpg?1569476059',
        title:' Crypto Currency Dashboard & Financial visualtization',
        github: 'https://github.com',
        demo: ' https://dribble.com/'
    },
    {
        id: 6,
        image: 'https://bootstrapmade.com/content/templatefiles/Arsha/Arsha-bootstrap-website-template-md.png',
        title:' Crypto Currency Dashboard & Financial visualtization',
        github: 'https://github.com',
        demo: ' https://dribble.com/'
    },


]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container protfolio_container'>
        
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className='portfolio_item'>
                                <div className='portfolio_item-image'>
                                    <img src={image} alt=''></img>
                                </div>
        
                                <h3>{title}</h3>
            
                                <div className='.portfolio_item-cta'>
                                    <a href={github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                                </div>
                           
                        </article>
        

                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio
