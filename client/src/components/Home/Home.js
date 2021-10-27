import React from 'react'
import Navbar from '../Navbar/Navbar'
import Landing from '../Landing/Landing'
import Main from '../Main/Main'


const Home = (props) => {
    console.log(props)
    return (
        <>
        <Navbar />
        <Landing />
        <Main />
</>
    )
}

export default Home