import React from 'react'
import MainWrapper from '../components/MainWrapper/MainWrapper.jsx'
import s from '../styles/profile.module.css'

const Profile = () => {
    return (
        <MainWrapper>
            <div className={s.top_section}>
                <div className={s.cnt}>
                    <div className={s.public_info}>
                        <div className={s.avatar}></div>
                        <div className={s.text}>
                            <div className={s.row}>
                                <h2>Lorem Ipsum</h2>
                                <img src="/img/icon/checked.svg" alt="" />
                            </div>
                            <p>ex@gmail.com</p>
                        </div>
                    </div>
                    <div className={s.tools}>
                        
                        <button className={s.settights}>
                            <img src="/img/icon_settings.svg" alt="" />
                        </button>
                    </div>
                    
                    <div className={s.socials}>
                        <a href="">
                            <img src="/img/icon_facebook.svg" alt="" />
                        </a>
                        <a href="">
                            <img src="/img/icon_gmail.svg" alt="" />
                        </a>
                    </div>

                </div>
            </div>

            <div className={s.private_info}>
                <div className={s.b1}>
                    <h2>Profile details</h2>
                    <button className={s.edit}>
                        Edit profile
                    </button>
                </div>
                <div className={s.b2}>
                    <div className={s.row}>
                        <p>Full name:</p>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className={s.row}>
                        <p>Email:</p>
                        <p>ex@gmail.com</p>
                    </div>
                    <div className={s.row}>
                        <p>Number:</p>
                        <p>+380123456789</p>
                    </div>
                    <div className={s.row}>
                        <p>Location:</p>
                        <p>Kiev, Ukraine</p>
                    </div>
                    <div className={s.row}>
                        <p>Looking for a breed:</p>
                        <p>American Bobtail, Bambino, Balinese</p>
                    </div>
                    <div className={s.row}>
                        <p>Location of catteries:</p>
                        <p>something</p>
                    </div>
                </div>
            </div>
        </MainWrapper>
    )
}

export default Profile
