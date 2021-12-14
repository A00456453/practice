import React from 'react';
import ProfileImage from './Profile.png';
import './AboutMe.css'
export const AboutMe = () =>{
    return(
        <div className="">
            <img src={ProfileImage} className="ProfileImg"/>
            <div className="textSection">
                <span className="Name">Javal Vadodaria</span><br/>  
                <p className="Desc">I am doing my Master's in Halifax, Nova Scotia from Saint Mary's University</p>
            </div>
            <div className="mcdaSection">
                <span className="course">Why MCDA Course?</span><br/>
                <ul className="Desc"><li>I was interested in data analytics and ML, so I explored few programs in Canada.</li>
                <li> This program had everything I was looking for in the program so, I selected this program.</li></ul>
            </div>
        </div> 
    )
}