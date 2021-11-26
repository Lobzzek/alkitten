import React from 'react'
import s from '../styles/breeds/BreedsInfo.module.css'
const BreedsInfo = (props) => {
    return (
        <div className={s.breed_info} id="info">
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
                            <p>
                                <span>height: </span>
                                {props.height}
                            </p>
                            
                            <br />
                            <p>
                            <span> Weight: </span>
                            {props.weight}
                            </p>
                            <br />
                            <p>
                            <span> Life Span: </span>
                            {props.life_span}
                            </p>
                        </div>
                        <div className={`${s.breed_info_right__row} ${s.breed_info_right__row_2}`}>
                            <p>
                            <span>Good With: </span>
                            {props.good_with}
                            </p>
                            <br />
                            <p>
                            <span> Intelligence: </span>
                            {props.intelligence}
                            </p>
                        </div>
                        <div className={`${s.breed_info_right__row} ${s.breed_info_right__row_3}`}>
                            <p>
                            <span>Temperament: </span>
                            {props.temperament}
                            </p>
                            <br />
                            <p>
                            <span> Playfulness: </span>
                            {props.playfulness}
                            </p>
                            <br />
                            <p>
                            <span> Activity: </span>
                            {props.activity}
                            </p>
                        </div>
                        <div className={`${s.breed_info_right__row} ${s.breed_info_right__row_4}`}>
                            <p>
                            <span> Shedding: </span>
                            {props.shedding}
                            </p>
                            <br />
                            <p>
                            <span> Vocalness: </span>
                            {props.vocalness}
                            </p>
                            <br />
                            <p>
                            <span> Coat Length: </span>
                            {props.coat_length}
                            </p>
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
                        {/* <div className={s.breed_info_right__info}>
                            {props.description}
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreedsInfo
