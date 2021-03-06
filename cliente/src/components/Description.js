import React from 'react';
import Notification from '../components/Notification'
import '../styles/Description.css'

export const Description = ({ text, src, alt, message, visible, level }) => {
    return(
        <div className="description">
            <p className="description-text">{text}</p>
            <Notification src={src} alt={alt} message={message} visible={visible} level={level} />
        </div>
    )
}