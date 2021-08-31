import React from 'react'
import s from '../styles/breeds_all/CardBreed.module.css'
const CardBreed = (props) => {
    return (
        <div className={s.card_breed}>
            <div className={s.block_img}>
                <img src={props.img} alt={`cat_${props.name}`} />
            </div>
            <p>{props.name}</p>
        </div>
    )
}

export default CardBreed
