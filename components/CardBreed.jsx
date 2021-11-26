import React from 'react'
import s from '../styles/breeds_all/CardBreed.module.css'
import Link from 'next/link'
const CardBreed = (props) => {
    return (
        <Link href="/kitty/1">
            <a>
                <div className={s.card_breed}>
                    <div className={s.block_img}>
                        <img src={props.img} alt={`cat_${props.name}`} />
                    </div>
                    <p>{props.name}</p>
                </div>
            </a>
        </Link>
        
    )
}

export default CardBreed
