import React from 'react'
import s from '../../styles/catteries/BlockComment.module.css'

const BlockComment = (props) => {
    return (
        <div className={s.comment}>
            <div className={s.top_block}>
                <div className={s.user}>
                    <div className={s.avtatar}>
                        {
                            props.verefied && <img src="/img/icon/checked.svg" alt="" />
                        }
                    </div>
                    <div className={s.text}>
                        <p className={s.name}>Lorem ipsum</p>
                        <div>
                            <p><img src="/img/icon_pencil.svg" alt="" /> 1 review</p>
                            <p><img src="/img/icon_point.svg" alt="" /> MA</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.center_block}>
                <div className={s.top_string}>
                    <div className={s.rating}>
                        <img src="/img/icon_star.svg" alt="" />
                        <img src="/img/icon_star.svg" alt="" />
                        <img src="/img/icon_star.svg" alt="" />
                        <img src="/img/icon_star.svg" alt="" />
                        <img src="/img/icon_star.svg" alt="" />
                    </div>  
                    <p className={s.data}>
                        5 days ago
                    </p>
                </div>
                <div className={s.cnt}>
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptates molestiae necessitatibus porro aspernatur libero, sed esse eaque ducimus. Culpa fugiat, neque voluptate excepturi porro maxime consequatur error eaque facere atque illo quia laborum perspiciatis ratione ex. Sed sequi qui quam possimus animi sapiente, tempore nihil, blanditiis quasi provident hic.</p>
                </div>
            </div>
            <div className={s.bottom_block}>
                <p><img src="/img/icon_like.svg" alt="" /> Useful<span>2</span></p>
                <p><img src="/img/icon_share.svg" alt="" /> Share</p>
                <a href="#" className={s.facebook}>
                    <img src="/img/icon_facebook.svg" alt="" />
                </a>
            </div>
        </div>
    )
}

export default BlockComment
