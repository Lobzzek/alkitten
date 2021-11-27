import MainWrapper from '../components/MainWrapper/MainWrapper.jsx';
import SliderBreeds from '../components/SliderBreeds/SliderBreeds.jsx'
import Head from 'next/head'
import s from '../styles/breeds/breeds.module.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setActiveBreed } from '../Redux/actions/activeBreedsInfoAction.js'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import jsonCats from '../_data_cats.js'

const BreedsInfo = dynamic(() => import('../components/BreedsInfo.jsx'));

export default function Breeds() {
    
    const state = useSelector(state => state.active_breeds.items);
    const router = useRouter();
    const dispatch = useDispatch();

    const info = React.useRef();
    function offsetPosition(element) {
        let hElem = element.clientHeight;
        let offsetTop = 0;
        do {
            offsetTop += element.offsetTop;
        } while (element = element.offsetParent);
        return [offsetTop, offsetTop + hElem];
    }
    React.useEffect(() => {
        const allBreeds = [...jsonCats.long_hair, ...jsonCats.short_hair, ...jsonCats.siamese_and_oriental];
        if (router.query.info) {
            window.scrollTo(0, offsetPosition(info.current)[0]);
            allBreeds.forEach((el, index) => {
                if (el.name === router.query.info){
                    dispatch(setActiveBreed(el))
                }
            })
        }
    }, [])

    return (
        <>
        <Head>
            <title>Breeds</title>
        </Head>
        <MainWrapper>
                <div className={s.top_text}>
                <h2>Explore Our Breeds</h2>
                <p>Browse breeds that fit your lifestyle</p>
            </div>
            <SliderBreeds />

            <div className={s.top_text} ref={info}>
                <h2>Breed Info</h2>
            </div>
            <BreedsInfo {...state} />
        </MainWrapper>
        </>
    )
}
