import React from 'react'
import s from '../../styles/products/CardGoods.module.css'

const cardGoods = (props) => {
    return (
        <div className={props.type === "wide" ? `${s.card_goods}` : `${s.card_goods} ${s.narrow}`}>
            <a href={props.linkOnCatagory}>
                <h3>
                    {props.name_category}
                </h3>
            </a>

            <div className={s.cnt_goods}>
                <img src={props.img} alt="" />
                <div className={s.links}>
                    {
                        props.dataLinks.map(el => <a href={el.href_a}>{el.name_link}</a>)
                    }
                    <a href={props.linkOnCatagory} className={s.all_prod}>All products...&#10230;</a>
                </div>
            </div>
        </div>
    )
}

export default cardGoods
