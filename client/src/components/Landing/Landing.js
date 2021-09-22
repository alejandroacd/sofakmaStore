import React, { useEffect } from 'react'
import './Landing.css'
import imagenes from './sliderImages'
import {GrInstagram}  from 'react-icons/gr'

const Landing = () => {
    let  index = 0;
    const changeSliderIndex = () => {

     
        if(index < imagenes.length - 1){
            index++;
        }
        else if(index === imagenes.length - 1){
            index = 0;
        }
         
        if(document.getElementById('landingContainer')){
            document.getElementById('landingContainer').style.backgroundImage = `url(${imagenes[index]})`
        }
    }

    useEffect(() => {
    
        setInterval(changeSliderIndex, 3000)
      
    },[changeSliderIndex])

//   

    return (
        <>
      <div className='routes'>
         <h1 >My best photos. On frames.</h1>
         <div className="link_routes">
         <a href="#main"> See catalogue </a>
         <a href="http://www.instagram.com/sofakma" > Check my Instagram <GrInstagram className='instagram' /></a>  
         </div>
       
      </div>  
         <div id="landingContainer" className='landing__container'>
        </div>
       
        </>
    )
}

export default Landing;