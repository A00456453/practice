import React, { useEffect, useState } from 'react';
import img from "./Ahmedabad.jpg";
import cold from "./cold.png";
import mild from "./mild.png";
import sunny from "./sunny.png";
import "./myTown.css";
export const MyTown = () =>{
    const [temp,setTemp]=useState();
    const [imgSrc,setSrc]=useState("");
    useEffect(()=>{
       fetch("https://api.openweathermap.org/data/2.5/weather?q=ahmedabad&appid=11bc4934392e3a6dd250341ace0684f3&units=metric")
        .then(res=>{
            return res.json();
        })
        .then(text=>{
            setTemp(text.main.temp)

        })
        .catch(err=>{
            console.log(err)
        })
        if(temp<10.00)
        {
            setSrc(cold);
        }
        else if(temp>10 && temp<20)
        {
            setSrc(mild);
        }
        else
        {
            setSrc(sunny);
        }
        
    },[temp])
   


    return(
       
        <div className="Section">
            <h1 className="chdText">Ahmedabad</h1>
            <img src={img} className="townImg"/>
            <div className="text">
            <ul className="Desc"><h2 className="chdText">I lived in Ahmedabad, Gujarat</h2>
                <li>Ahmedabad is a city located in the province name Gujarat, which is in the western part of India.</li>
                <li>Ahmedabad is a great place for a foodie.</li></ul>
                <img className="tempImg" src={imgSrc}/>
                <span className="temp"> {temp} C</span>
                </div>
        </div>
    )
}