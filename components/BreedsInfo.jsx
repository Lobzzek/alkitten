import React from 'react'
import s from '../styles/BreedsInfo.module.css'
const BreedsInfo = (props) => {
    return (
        <div className={s.breed_info}>
            <div className={s.breed_info_container}>
                <div className={s.breed_info__title}>Breed Info</div>
                <div className={s.breed_info_content}>
                    <div className={s.breed_info_left}>
                        <div className={s.breed_info_left__img}>
                            <img src={`${props.img}`} alt="" />
                        </div>
                        <a className={s.breed_info_left__button} href="#"
                        >View 21 Available Kitten</a
                        >
                    </div>
                    <div className={s.breed_info_right}>
                        <div className={`${s.breed_info_right__row} ${s.breed_info_right__row_1}`}>
                            <span>height: </span>
                            {props.height}
                            <span> Weight: </span>
                            {props.weight}
                            <span> Life Span: </span>
                            {props.life_span}
                        </div>
                        <div className={`${s.breed_info_right__row} ${s.breed_info_right__row_2}`}>
                            <span>Good With: </span>
                            {props.good_with}
                            <span> Intelligence: </span>
                            {props.intelligence}
                        </div>
                        <div className={`${s.breed_info_right__row} ${s.breed_info_right__row_3}`}>
                            <span>Temperament: </span>
                            {props.temperament}
                            <span> Playfulness: </span>
                            {props.playfulness}
                            <span> Activity: </span>
                            {props.activity}
                        </div>
                        <div className={`${s.breed_info_right__row} ${s.breed_info_right__row_4}`}>
                            <span> Shedding: </span>
                            {props.shedding}
                            <span> Vocalness: </span>
                            {props.vocalness}
                            <span> Coat Length: </span>
                            {props.coat_length}
                        </div>
                        <div className={`${s.breed_info_right__row} ${s.breed_info_right__row_5}`}>
                            <span>Patterns: </span>
                            <p>{props.patterns}</p>
                        </div>
                        <div className={`${s.breed_info_right__row} ${s.breed_info_right__row_6}`}>
                            <span>Colors: </span>
                            <p>
                                {props.colors}
                            </p>
                        </div>
                        <div className={`${s.breed_info_right__row} ${s.breed_info_right__row_7}`}>
                            <span>Other Traits: </span>
                            <p>
                                {props.other_traits}
                            </p>
                        </div>
                        <div className={s.breed_info_right__info}>
                            {props.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreedsInfo
