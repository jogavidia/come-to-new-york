import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/BlogList.css';
import Aos from 'aos';

const BlogList = ({tours, title}) => {

    useEffect(() => {
        Aos.init({ duration: 1000});
    }, []);

    return ( 
        <article className="recent_posts">
            <h2 className="entry_title">{ title }</h2>
                <div data-aos="fade-up" className="blog-list">
                    {tours.map((tour) => (
                        <div className="blog-preview" key={tour.id}>
                            
                                <img src={tour.image} alt="" />
                                <div className="post_details">
                                    <h2 className="tour_title"><Link to={`/tours/${tour.id}`}>{ tour.title }</Link></h2>
                                    <p>{ tour.excerpt }</p>
                                    <a className="id_link btn_more" href={'http://google.com'}>Book Now</a>
                                </div>

                        </div>
                    ))}
                </div>
        </article>
     )
}
 
export default BlogList;