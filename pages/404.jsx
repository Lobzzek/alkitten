import React from 'react'
import s from '../styles/404.module.css'
import MainWrapper from '../components/MainWrapper/MainWrapper.jsx'

const NotFound = () => {
    return (
        <MainWrapper>
            <div className={s.top_text}>
                <h2>404</h2>
                <p>Page not found.</p>
            </div>
        </MainWrapper>
    )
}

export default NotFound
