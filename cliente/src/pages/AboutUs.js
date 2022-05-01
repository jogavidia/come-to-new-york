import React from 'react';
import '../styles/AboutUs.css';
import banner2 from '../images/banner_top_.webp';

const AboutUs = () => {
    return (
    <div className="wrap aboutus" >
      
      <div className="banner_top">
        <img src={ banner2 } alt="" />
        <section className="section_home recent_posts">
        <h2  className="entry_title">Come To New York</h2>
        <div className="post_details aboutus_para">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit ligula, consequat et dui eget, feugiat elementum purus. Aliquam ut vulputate sem. Aenean pharetra diam ut lacus fringilla, nec mattis felis sollicitudin. Suspendisse vitae turpis vitae erat porta lobortis ac sed quam. Maecenas molestie non velit eu laoreet. Mauris quis nunc vel enim aliquet pellentesque sed quis neque. In commodo est nibh, eget feugiat diam pellentesque in. Nulla tincidunt lacus sed molestie volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam a ante sed nunc vestibulum molestie.</p>
          <p>Cras facilisis mi non aliquam iaculis. Pellentesque vel vestibulum est, a semper arcu. Curabitur purus dui, semper at dolor vitae, dignissim faucibus mauris. Cras sed lacus quis dolor rhoncus scelerisque ut eget ex. Nulla sagittis dui ligula, id commodo metus interdum sed. Ut sapien mi, varius sed dignissim id, interdum quis mi. Suspendisse venenatis velit vitae efficitur eleifend. Nam eu mauris et nisl pulvinar feugiat eu ac nulla. Vivamus accumsan luctus enim, in tincidunt orci accumsan varius. Maecenas egestas commodo condimentum. Aliquam sodales porttitor tortor. Ut rutrum lectus rutrum metus molestie consectetur.</p>
        </div>
      </section>
      </div>

    </div>
    );
};

export default AboutUs;