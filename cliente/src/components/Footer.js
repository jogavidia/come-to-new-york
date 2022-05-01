import React, { Component } from 'react';
import logofooter from '../logo_mono.svg';
import InstagramIcon from '../images/instagram_logo.svg';
import FacebookIcon from '../images/facebook_logo.svg';
import Menu from './Menu';
import Subscribe from './Subscribe';
import { Description } from './Description';
import '../styles/Footer.css'

import check from '../images/check.svg';
import exclamation from '../images/exclamation.svg';
import xmark from '../images/xmark.svg';


class Footer extends Component {

    state = {
        // description: {
        //     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
        //   },
        subscribe: {
          placeholder: "Enter Email Address",
          buttonText: "submit"
        },
        notification: {
          src: '',
          alt: '',
          message: '',
          level: '',
          visible: false
    
        }
      }

      configureNotification = level => {
        const notification = { ...this.state.notification };
        notification.level = level;
        if (level === "success") {
          notification.src = check;
          notification.alt = "Check Mark";
          notification.message = `Thank you for subscribing to our mailing list.
                              You will be receiving a welcome email shortly.`;
        } else if (level === "warning") {
          notification.src = exclamation;
          notification.alt = "Exclamation Point";
          notification.message = `The email you entered is already on our mailing list.
                              Thank you for joining the community.`;      
        } else{
          notification.src = xmark;
          notification.alt = "X Mark";
          notification.message = `There was an issue with your email submission.
                              Please check your email and try again.`; 
        }
        this.setState({ notification });
      };
    
      showNotification = () => {
        const notification = { ...this.state.notification };
        notification.visible = true;
        this.setState({ notification }, () => {
          setTimeout(() => {
            notification.visible = false;
            this.setState({ notification });
          }, 3000);
        });
      };

    render(){

        const {
            // description,
            subscribe,
            notification
          } = this.state;

    return ( 
        <footer>

              <div className="level_01_footer footer_signup" >
                <div className="sub_level_01">
                  <div className="item_01">
                    <p>Signup for Monthly Newsletters &#38; Deals</p>
                  </div>
                  <div className="item_02">
                    <Description className="hidden_note" src={notification.src} alt={notification.alt} message={notification.message} level={notification.level} visible={notification.visible} />
                    <Subscribe placeholder={subscribe.placeholder} buttonText={subscribe.buttonText} configureNotification={this.configureNotification} showNotification={this.showNotification} />
                  </div>
                </div>
              </div>

              <div className="level_01_footer footer_more" >
                <div className="sub_level_01">

                  <div className="item_1 item" >
                      <img src={ logofooter } alt="" />                    
                  </div>

                  <div className="item_2 item footer_menu" >
                      <Menu />                      
                  </div>

                  <div className="item_3 item footer_info" >
                   <h4>contact us:</h4>
                    <p>tours@cometonewyork.info</p>
                    <p>+1 (680) 223-8749</p>                                           
                  </div>

                  <div className="item_4 item social_footer" >
                  <h4>find us:</h4>
                      <ul>
                          <li><a href={ 'https://www.instagram.com/cometonewyork/' } target={'_blank'}><img src={InstagramIcon} alt="" /></a></li>
                          <li><a href={ 'https://www.facebook.com/cometonewyork/' } target={'_blank'}><img src={FacebookIcon} alt="" /></a></li>
                      </ul>
                      </div>
                </div>
              </div>

        </footer>
     )};
}
 
export default Footer;