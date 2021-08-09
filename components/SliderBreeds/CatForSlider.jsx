import React from 'react'
import s from '../../styles/CatForSlider.module.css'
import {useDispatch} from 'react-redux';
import {setActiveBreed} from '../../Redux/actions/activeBreedsInfoAction.js'
import classNames from 'classnames'


const CatForSlider = (props) => {
    const dispatch = useDispatch();
    return (
        // <div className={props.active ? `${s.card_cat} ${s.active}` : `${s.card_cat}`}>

            <div className={classNames(s.card_cat, 
                {[s.active]: props.active},
                { [s.hiddenCart]: props.indexCart === props.currentCard + 2 || props.indexCart === props.currentCard - 2},
            )}>
            <div className={s.block_img}>
                <img src={props.image} alt="" />
            </div>
            <div className={s.text}>
                <p className={s.name}>{props.name}</p>
                <div>
                    <a href="#">Show 21 kitten</a>
                    <button onClick={() => { 
                        dispatch(setActiveBreed(props.data))
                        props.onClick()
                    }}>Info</button>
                </div>
            </div>
            <div className={s.fav_ava}>
                
                <div className={s.favorite}>
                    <img src="/img/icon_heart.svg" alt="" />
                    <p>Favorite</p>
                </div>

                <div className={s.available}>
                    <h4>21</h4>
                    <p>Available</p>
                </div>
            </div>
        </div>
    )
}

export default CatForSlider
