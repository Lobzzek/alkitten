import React from 'react'
import s from '../../styles/breeds/CatForSlider.module.css'
import {useDispatch} from 'react-redux';
import {setActiveBreed} from '../../Redux/actions/activeBreedsInfoAction.js'
import classNames from 'classnames'
import { useRouter } from 'next/router'


const CatForSlider = (props) => {
    const dispatch = useDispatch();
    const router = useRouter();

    React.useEffect(() => {
        function locationHashChanged() {
            if (location.hash) {
                history.replaceState({}, '', router.pathname)
            }
        }
        window.onhashchange = locationHashChanged;
    }, [])
    return (

            <div className={classNames(s.card_cat, 
                {[s.active]: props.active},
                { [s.hiddenCart]: props.indexCart === props.currentCard + 2 || props.indexCart === props.currentCard - 2},
            )}>
            <div className={s.block_img}>
                {
                    props.indexCart < 4 ? <img src={props.image} alt={`cat${props.indexCart}_for_slider`} /> : <img loading="lazy" src={props.image} alt={`cat${props.indexCart}_for_slider`} />
                }
                
            </div>
            <div className={s.text}>
                <p className={s.name}>{props.name}</p>
                <div>
                    <button onClick={() => router.push(`/?breed=${props.name}`)}>Show 21 kitten</button>
                    <a href="#info" onClick={() => { 
                        dispatch(setActiveBreed(props.data))
                        props.onClick()
                    }}>Info</a>
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
