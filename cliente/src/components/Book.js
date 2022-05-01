import React, { useEffect } from 'react';
import bannerbottom from '../images/banner_bottom.webp';
import Aos from 'aos';
import '../styles/Book.css';

export const Book = () => {

    useEffect(() => {
        Aos.init({ duration: 1000});
    }, []);

    return ( 
        <article className="book_now">
                <div className="img_bottom">
                    <img src={ bannerbottom } alt="" />
                </div>            
                <div className="book_text" >

                    <div data-aos="fade-right" >
                        <p className="text_ready" >Ready for an Unforgetable Trip?</p>
                    </div>
                    <div data-aos="fade-left" className="wrap_book">
                        <a className="book_button" href={'http://google.com'}>Book Now</a>
                    </div>
                    
                </div>
        </article>
     );
}
 
export default Book;