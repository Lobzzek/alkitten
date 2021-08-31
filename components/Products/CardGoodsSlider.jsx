import React from 'react'
import s from '../../styles/products/CardGoodSlider.module.css'

const CardGoodsSlider = (props) => {
    let arrStars = [0, 1, 2, 3, 4];
    return (
        <div className={s.card_slider}>
            <div className={s.wrap_img} style={{ background: `url('${props.img}')`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            </div>
            <hr></hr>
            <div className={s.rating}>
                {/* <img src="/img/icon_star.svg" alt="" />
                <img src="/img/icon_star.svg" alt="" />
                <img src="/img/icon_star.svg" alt="" />
                <img src="/img/icon_star.svg" alt="" />
                <img src="/img/icon_star.svg" alt="" /> */}
                {
                    arrStars.map((el, i) => <img src="/img/icon_star.svg" key={`${i}_star`} className={el < props.rating ? `` : `${s.silver}`} alt="" />)
                }
            </div>
            <h3>{props.title}</h3>
            <h4>$ {props.price}</h4>
            <p>( $ {props.downprice} )</p>
        </div>
    )
}

export default CardGoodsSlider
