import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import imgOne from './img/react.png'
import imgTwo from './img/code.png'
import imgThree from './img/Mask Group 16.png'
import '../App.css'
export function HomeImageOne(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://newserverreactblogapi.herokuapp.com/home/header`).then(res => res.json()).then
            (data => setData(data))
    })
    
    return (
        <>
            <div className="Imageheader">                    
                <Link to='/'><p className='ImageHead'>{data.the}</p><p className='imageSpiran'>{data.siren}</p></Link>
                <button className='btnGet'>{data.btnName}</button>
            </div>
            <hr className='footSepe'/>
            <div className="imageContent">
                <div className="options">
                    <div className="stickyText">
                    <div className="clap">
                        <div className="clapImg"></div>
                        <p className='followers'>{data.followers}</p>
                    </div>
                    <div className="share">
                        <div className="shareImg"></div>
                        <p className='shareMsg'>{data.shareArt}</p>
                    </div>
                    </div>
                </div>
                <div className="imageDataInfo">
                    <p className="imgInfoHeading">{data.fivhead}</p>
                    <div className="userProf">                  
                        <div className="img"></div>
                        <div className="userDesc">
                            <p className='userName'>{data.userName}</p>
                            <p className='userInfo'>{data.userRead}</p>
                        </div>
                        <div className="socialIcon">
                            <ul>
                                <li className="facebook"></li>
                                <li className="twitter"></li>
                                <li className="instagram"></li>
                                <li className="youtube"></li>
                            </ul>
                        </div>
                    </div>
                    <div className="reactImage"><img src={imgOne}/></div>
                    <div className="contImg">
                        <p>{data.contImgText}</p><br/>
                        <p>{data.contImgText}</p>
                        <p style={{marginTop:'5vh'}}>{data.talk}</p>
                    </div>
                    <div className="codeImg"><img src={imgTwo}/></div>
                    <div className="Rjava">
                        <div className="lang"><p>{data.react}</p></div>
                        <div className="lang"><p>{data.js}</p></div>
                        <div className="lang"><p>{data.ani}</p></div>
                    </div>
                    <div className="clapalgn">
                        <div className="clapalgnImg"></div>
                        <p className='clapalgnfollowers'>{data.followers}</p>
                        <p className='clasps'>{data.clap}</p>
                    </div>
                    <hr className='sepe'/>
                        <div className="userProfTwo">
                            <div className="userImageTwo"></div>
                            <div className="userInfoTwo">
                                <p className='autInfo'>{data.authInfo}</p>
                                <p className='authName'>{data.authName}</p>
                                <p className='authDate'>{data.authDat}</p>
                            </div>
                        </div>
                    <hr className='sepe'/>
                </div>
                <div className="blankDiv">
                </div>
            </div>
            <div className="footColor">
            <div className="footer">
                <div className="moreSiren"><p>{data.mSiren}</p></div>
                <hr className='footSepe'/>
                <div className="userCards">
                    <div className="userCared">
                        <p className='taggedText'>{data.tagged}</p>
                        <div className="authImage"><img src={imgOne}/></div>
                        <p className='Joshua'>{data.authText}</p>
                        <div className="authInfoCard">
                            <div className="Authpic"></div>
                            <div className="picInfo">
                                <p className='AuthPicName'>{data.authName}</p>
                                <p className='AuthPicDate'>{data.augdate}</p>
                            </div>
                        </div>
                    </div>
                    <div className="userCared">
                    <p className='taggedText'>{data.tagged}</p>
                        <div className="authImage"><img src={imgOne}/></div>
                        <p className='Joshua'>{data.authText}</p>
                        <div className="authInfoCard">
                            <div className="Authpic"></div>
                            <div className="picInfo">
                                <p className='AuthPicName'>{data.authName}</p>
                                <p className='AuthPicDate'>{data.augdate}</p>
                            </div>
                        </div>
                    </div>
                    <div className="userCared">
                    <p className='taggedText'>{data.tagged}</p>
                        <div className="authImage"><img src={imgOne}/></div>
                        <p className='Joshua'>{data.authText}</p>
                        <div className="authInfoCard">
                            <div className="Authpic"></div>
                            <div className="picInfo">
                                <p className='AuthPicName'>{data.authName}</p>
                                <p className='AuthPicDate'>{data.augdate}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
)
}

// export default HomeImageOne