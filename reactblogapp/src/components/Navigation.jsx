import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
function Navigation() {
    const [nav, setNav] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://newserverreactblogapi.herokuapp.com/home/header`).then(res => res.json()).then
            (data => setData(data))
    })
    return (
        <>
            <div className='mainHeading'>
                <div className="headAlign">
                    <p className='theHead'>{data.the}</p>
                    <p className='theSpiran'>{data.siren}</p>
                </div>
                <div className="navMenu" onClick={() => { setNav(!nav); console.log(nav); }}></div>
            </div>
            {
                nav ? <div className='navigationRWD' style={{ display: "block" }}>
                    <ul>
                        <li><Link to='/' style={{ textDecoration: 'none' }} className='navItem'>{data.home}</Link></li>
                        <li><Link to='/Bollywood' style={{ textDecoration: 'none' }} className='navItem'>{data.bolly}</Link></li>
                        <li><Link to='/Technology' style={{ textDecoration: 'none' }} className='navItem'>{data.techno}</Link></li>
                        <li><Link to='/Hollywood' style={{ textDecoration: 'none' }} className='navItem'>{data.holly}</Link></li>
                        <li><Link to='/Fitness' style={{ textDecoration: 'none' }} className='navItem'>{data.fit}</Link></li>
                        <li><Link to='/Food' style={{ textDecoration: 'none' }} className='navItem'>{data.food}</Link></li>
                    </ul>
                </div> : <div className='navigation'>
                    <ul>
                        <li><Link to='/' style={{ textDecoration: 'none' }} className='navItem'>{data.home}</Link></li>
                        <li><Link to='/Bollywood' style={{ textDecoration: 'none' }} className='navItem'>{data.bolly}</Link></li>
                        <li><Link to='/Technology' style={{ textDecoration: 'none' }} className='navItem'>{data.techno}</Link></li>
                        <li><Link to='/Hollywood' style={{ textDecoration: 'none' }} className='navItem'>{data.holly}</Link></li>
                        <li><Link to='/Fitness' style={{ textDecoration: 'none' }} className='navItem'>{data.fit}</Link></li>
                        <li><Link to='/Food' style={{ textDecoration: 'none' }} className='navItem'>{data.food}</Link></li>
                    </ul>
                </div>
            }
        </>

    )
}

export default Navigation