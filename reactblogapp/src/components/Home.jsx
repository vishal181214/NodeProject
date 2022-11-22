import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation';

export const Home = () => {
    const [data, setData] = useState([]);
    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch(`https://newserverreactblogapi.herokuapp.com/home/nature`).then(res => res.json()).then
            (data => setData(data));

        fetch('https://newserverreactblogapi.herokuapp.com/home/header').then(res => res.json()).then
            (info => setInfo(info));
    })
    return (
        <>
            <Navigation />
            <div className="mainContent">
                <div className="firstContent">
                    <Link to={{pathname:'/HomeImageOne',state:{id: "tech10pid30ff84", page: "nature"}}}>

                        {data.map((item, index) => {
                            return (
                                (item.id === "tech10pid30ff84") ? <div className="leftImg"><img src={item.img1} alt="Bollywood Images" height="100%" width="100%" /><div className="leftImgText">
                                    <p className='titleText'>{item.Heading1}</p>
                                    <p className='smallText'><span>{item.subh1} </span>{item.date1}</p>
                                </div>
                                </div> : <p></p>
                            );
                        })}

                    </Link>
                    <div className="rightimg">
                        <Link to='/HomeImageOne'>
                            {data.map((item, index) => {
                                return (
                                    (item.id === "tech7pid30ff84") ? <div className="rightTop">
                                        <img src={item.img1} alt="Bollywood Images" height="100%" width="100%" />
                                        <div className="rightTopText">
                                            <p className='rightTopTitleText'>{item.sub1} <br /> {item.Heading1}</p>
                                            <p className='rightTopsmallText'><span>{item.subh1}</span>{item.date1}</p>
                                        </div>
                                    </div> : <p></p>
                                );
                            })}
                        </Link>
                        <Link to='/HomeImageOne'>
                            {data.map((item, index) => {
                                return (
                                    (item.id === "tech7pid30ff84") ? <div className="rightSec">
                                        <img src={item.img1} alt="Bollywood Images" height="100%" width="100%" />
                                        <div className="rightTopText">
                                            <p className='rightTopTitleText'>{item.sub1} <br /> {item.Heading1}</p>
                                            <p className='rightTopsmallText'><span>{item.subh1}</span>{item.date1}</p>
                                        </div>
                                    </div> : <p></p>
                                );
                            })}
                        </Link>
                    </div>
                </div>
                <div className="theLatest">
                    <p>{info.theLatest}</p>
                    <hr />
                </div>
                <div className="HomesecContent">
                    <div className="infoCard">
                        {data.map((item) => {
                            return (
                                (item.id === "tech8pid30ff84") ? <>
                                    <Link to='/HomeImageOne'>
                                        <div className="image">
                                            <img src={item.img1} alt="Bollywood Images" height="100%" width="100%" /></div>
                                    </Link>
                                    <div className="imageText">
                                        <p className='imageTitle'>{item.Heading1}<br /> {item.Heading2}</p>
                                        <p className='imgDesc'>{item.sub1}</p>
                                        <p className='lastBlock'><span className='travel'>{item.subh1}</span> <span className='dateInfo'>{item.date1}</span></p>
                                    </div>
                                </> : <p></p>
                            );
                        })}
                    </div>
                    <div className="infoCard">
                        {data.map((item) => {
                            return (
                                (item.id === "tech8pid30ff84") ? <>
                                    <Link to='/HomeImageOne'>
                                        <div className="image">
                                            <img src={item.img1} alt="Bollywood Images" height="100%" width="100%" /></div>
                                    </Link>
                                    <div className="imageText">
                                        <p className='imageTitle'>{item.Heading1}<br /> {item.Heading2}</p>
                                        <p className='imgDesc'>{item.sub1}</p>
                                        <p className='lastBlock'><span className='travel'>{item.subh1}</span> <span className='dateInfo'>{item.date1}</span></p>
                                    </div>
                                </> : <p></p>
                            );
                        })}
                    </div>
                    <div className="infoCard algn">
                        {data.map((item) => {
                            return (
                                (item.id === "tech8pid30ff84") ? <>
                                    <Link to='/HomeImageOne'>
                                        <div className="image">
                                            <img src={item.img1} alt="Bollywood Images" height="100%" width="100%" /></div>
                                    </Link>
                                    <div className="imageText">
                                        <p className='imageTitle'>{item.Heading1}<br /> {item.Heading2}</p>
                                        <p className='imgDesc'>{item.sub1}</p>
                                        <p className='lastBlock'><span className='travel'>{item.subh1}</span> <span className='dateInfo'>{item.date1}</span></p>
                                    </div>
                                </> : <p></p>
                            );
                        })}
                    </div>
                </div>
                <div className="theLatest">
                    <p>{info.lastArt}</p>
                    <hr />
                </div>
                <div className="latestArt">
                    <div className="leftArticle">
                        <hr />
                        {
                            data.map((item, index) => {
                                return (
                                    (item.id === "tech15pid30ff84") ?
                                        <div className="wavesBlock">
                                            <Link to='/HomeImageOne'>
                                                <div className="waveImg"><img src={item.img1} alt="Bollywood Images" height="100%" width="100%" /></div>
                                            </Link>
                                            <div className="waveText">
                                                <p className='waveTextHeading'>{item.Heading1} <br />{item.Heading2}</p>
                                                <p className='waveTextInfo'>{item.sub1}</p>
                                                <p className='travAlgn'><span className='travel'>{item.subh1}</span><span className='dateInfo'> {item.date1}</span></p>
                                            </div>
                                        </div> : <p></p>
                                )
                            })
                        }
                        <hr />
                        {
                            data.map((item, index) => {
                                return (
                                    (item.id === "tech15pid30ff84") ?
                                        <div className="wavesBlock">
                                            <Link to='/HomeImageOne'>
                                                <div className="waveImg"><img src={item.img1} alt="Bollywood Images" height="100%" width="100%" /></div>
                                            </Link>
                                            <div className="waveText">
                                                <p className='waveTextHeading'>{item.Heading1} <br />{item.Heading2}</p>
                                                <p className='waveTextInfo'>{item.sub1}</p>
                                                <p className='travAlgn'><span className='travel'>{item.subh1}</span><span className='dateInfo'> {item.date1}</span></p>
                                            </div>
                                        </div> : <p></p>
                                )
                            })
                        }
                        <hr />
                        {
                            data.map((item, index) => {
                                return (
                                    (item.id === "tech15pid30ff84") ?
                                        <div className="wavesBlock">
                                            <Link to='/HomeImageOne'>
                                                <div className="waveImg"><img src={item.img1} alt="Bollywood Images" height="100%" width="100%" /></div>
                                            </Link>
                                            <div className="waveText">
                                                <p className='waveTextHeading'>{item.Heading1} <br />{item.Heading2}</p>
                                                <p className='waveTextInfo'>{item.sub1}</p>
                                                <p className='travAlgn'><span className='travel'>{item.subh1}</span><span className='dateInfo'> {item.date1}</span></p>
                                            </div>
                                        </div> : <p></p>
                                )
                            })
                        }
                        <hr />
                        {
                            data.map((item, index) => {
                                return (
                                    (item.id === "tech15pid30ff84") ?
                                        <div className="wavesBlock">
                                            <Link to='/HomeImageOne'>
                                                <div className="waveImg"><img src={item.img1} alt="Bollywood Images" height="100%" width="100%" /></div>
                                            </Link>
                                            <div className="waveText">
                                                <p className='waveTextHeading'>{item.Heading1} <br />{item.Heading2}</p>
                                                <p className='waveTextInfo'>{item.sub1}</p>
                                                <p className='travAlgn'><span className='travel'>{item.subh1}</span><span className='dateInfo'> {item.date1}</span></p>
                                            </div>
                                        </div> : <p></p>
                                )
                            })
                        }
                        <div className="loadMore">
                            <div className="loadImg"></div>
                            <p>{info.vMore}</p>
                        </div>
                        <Link to='/HomeImageOne'>
                            <div className="HomegalleryImg">
                                {
                                    data.map((item, index) => {
                                        return (
                                            (item.id === "tech6pid30ff84") ? <>
                                                <img src={item.img1} alt="Bollywood Images" height="100%" width="100%" />
                                                <p className='gallTitle'>{item.Heading1}</p>
                                                <p className='travGall'>{item.subh1} {item.date1}</p></> : <p></p>
                                        )
                                    })
                                }
                            </div>
                        </Link>
                    </div>
                    <div className="rightArticle alignright">
                        <div className="advert"><p>{info.adv}</p></div>
                        <div className="topPost">
                            <div className="theLatest">
                                <p>{info.post}</p>
                            </div>
                            <p className='hey'></p>
                            {
                                data.map((item, index) => {
                                    return (
                                        (item.id === "tech4pid30ff84") ?
                                            <>
                                                <Link to='/HomeImageOne'>
                                                    <div className='topImage'>
                                                        <img src={item.img1} alt="Bollywood Images" height="100%" width="100%" />
                                                    </div>
                                                </Link>
                                                <div className="topText">
                                                    <div className="ltext">
                                                        <p className="topTitle">{item.Heading1} <br />{item.Heading2}</p>
                                                        <p className='trav'><span className='travel'>{item.subh1}</span><span className='dateInfo'> {item.date1}</span></p>
                                                    </div>
                                                    <div className="num" style={{ marginLeft: "7vw" }}>
                                                        <p>{info.one}</p>
                                                    </div>
                                                </div>
                                            </> : <p></p>
                                    )
                                })
                            }
                            <hr />
                            <div className="topTextOne">
                                {
                                    data.map((item, index) => {
                                        return (
                                            (item.id === "tech11pid30ff84") ?
                                                <><Link to='/HomeImageOne'>
                                                    <div className="topTextImg">
                                                        <img src={item.img1} alt="Bollywood Images" height="100%" width="100%" />

                                                    </div>
                                                </Link>
                                                    <div className="ltextOne">
                                                        <p className="topTitleTwo">{item.Heading1}<br />{item.Heading2}</p>
                                                        <p className='travTwo'><span className='travel'>{item.subh1}</span><span className='dateInfo'> {item.date1}</span></p>
                                                    </div>
                                                    <div className="num">
                                                        <p>{info.two}</p>
                                                    </div></> : <p></p>
                                        )
                                    })
                                }
                            </div>
                            <hr />
                            <div className="topTextOne">
                                {
                                    data.map((item, index) => {
                                        return (
                                            (item.id === "tech11pid30ff84") ?
                                                <><Link to='/HomeImageOne'>
                                                    <div className="topTextImg">
                                                        <img src={item.img1} alt="Bollywood Images" height="100%" width="100%" />

                                                    </div>
                                                </Link>
                                                    <div className="ltextOne">
                                                        <p className="topTitleTwo">{item.Heading1}<br />{item.Heading2}</p>
                                                        <p className='travTwo'><span className='travel'>{item.subh1}</span><span className='dateInfo'> {item.date1}</span></p>
                                                    </div>
                                                    <div className="num">
                                                        <p>{info.three}</p>
                                                    </div></> : <p></p>
                                        )
                                    })
                                }
                            </div>
                            <hr />
                            <div className="topTextOne">
                                {
                                    data.map((item, index) => {
                                        return (
                                            (item.id === "tech11pid30ff84") ?
                                                <><Link to='/HomeImageOne'>
                                                    <div className="topTextImg">
                                                        <img src={item.img1} alt="Bollywood Images" height="100%" width="100%" />

                                                    </div>
                                                </Link>
                                                    <div className="ltextOne">
                                                        <p className="topTitleTwo">{item.Heading1}<br />{item.Heading2}</p>
                                                        <p className='travTwo'><span className='travel'>{item.subh1}</span><span className='dateInfo'> {item.date1}</span></p>
                                                    </div>
                                                    <div className="num">
                                                        <p>{info.four}</p>
                                                    </div></> : <p></p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="theLatest ">
                    <p>{info.lastArt}</p>
                    <hr />
                </div>
                <div className="cardInfo">
                    <hr />
                    <div className="cardDiv">
                        <div className="cards">
                            <p className='cardsTitle'>{info.sub1}<br />{info.sub2}</p>
                            <p className='cardsInfo'>{info.info}</p>
                            <p className='techDate'><span className='tech'>{info.subh1} </span><span className='today'>{info.date}</span></p>
                        </div>
                        <hr />

                        <div className="cards">
                            <p className='cardsTitle'>{info.sub1}<br />{info.sub2}</p>
                            <p className='cardsInfo'>{info.info}</p>
                            <p className='techDate'><span className='tech'>{info.subh2} </span><span className='today'>{info.date}</span></p>
                        </div>
                        <hr />

                        <div className="cards">
                            <p className='cardsTitle'>{info.sub1}<br />{info.sub2}</p>
                            <p className='cardsInfo'>{info.info}</p>
                            <p className='techDate'><span className='tech'>{info.subh1} </span><span className='today'>{info.date}</span></p>
                        </div>

                    </div>
                    <hr />
                </div>
                <div className="loadMore">
                    <p>{info.vMore}</p>
                    <div className="viewMore"></div>
                </div>
            </div>

        </>

    )
}

export default Home
