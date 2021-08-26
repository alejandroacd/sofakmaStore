import React, {useEffect, useState} from 'react';
import imagenes from './SlidesData'
import '../Slider/Slider.css'


const Slider = () => {
  const [count,setCount] = useState(0)
   
  const changePhoto = () => {
    setCount(count + 1)
}

    return (
        <>
        <div className='image-container'>
             <p className="landind-title"onClick={changePhoto}> My best photos. On frames </p>
            <img src={imagenes[count].img} ></img>
            
        </div>
   
      
        </>
    )
}

export default Slider;