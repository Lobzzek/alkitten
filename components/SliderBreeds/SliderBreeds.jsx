import s from '../../styles/SliderBreeds.module.css';
import React from 'react'
import CatForSlider from './CatForSlider.jsx';
import BreedsInfo from '../../components/BreedsInfo.jsx'
import {useSelector} from 'react-redux'
import jsonCats from '../../_data_cats.js';

import { useDispatch } from 'react-redux';
import {setActiveBreed} from '../../Redux/actions/activeBreedsInfoAction.js';

const SliderBreeds = () => {
    const state = useSelector(state => state.active_breeds.items);
    const dispatch = useDispatch();

    const [activeSort, setActiveSort] = React.useState(0);

    const [activeCardCat, setActiveCardCat] = React.useState(0);

    const block_imgs = React.useRef();
    const [activePage, setActivePage] = React.useState(1);

    const [numberPages, setNumberPages] = React.useState()


    const [marginBetwenCards, setMarginBetwenCards] = React.useState(140);

    React.useEffect(() => {
        if(document.documentElement.clientWidth < 1920){
            setMarginBetwenCards(70)
            //cahnge later
        }

        block_imgs.current.style.width = `${block_imgs.current.childNodes.length * (block_imgs.current.childNodes[0].clientWidth + 140)}px`;
        setNumberPages(Math.ceil(block_imgs.current.childNodes.length / 3));
    }, [])

    //logic slider

    React.useEffect(() => {
        if (activePage > numberPages) {
            setActivePage(numberPages);
        } else if (activePage < 1) {
            setActivePage(1);
        }

        if (activePage === 1) {
            block_imgs.current.style.left = "0px";
        } else if (activePage === 2) {
            block_imgs.current.style.left = "-902px";
        } else if (activePage === 3) {
            block_imgs.current.style.left = "-1785px";
        } else if (activePage === 4) {
            block_imgs.current.style.left = "-2649px";
        } else if (activePage === 5) {
            block_imgs.current.style.left = "-3532px";
        } else if (activePage === 6) {
            block_imgs.current.style.left = "-4396px";
        }
        else if (activePage === 7) {
            block_imgs.current.style.left = "-5280px";
        }
        else if (activePage === 8) {
            block_imgs.current.style.left = "-6144px";
        }
        else if (activePage === 9) {
            block_imgs.current.style.left = "-7008px";
        }
        else if (activePage === 10) {
            block_imgs.current.style.left = "-7891px";
        } else if (activePage === 11) {
            block_imgs.current.style.left = "-8774px";
        }
        else if (activePage === 12) {
            block_imgs.current.style.left = "-9696px";
        }
        

    }, [activePage])


    let dots = [];
    for (let i = 0; i < numberPages; i++) {
        dots.push(i);
    }
    

    const prevPage = () => {
        setActivePage(activePage - 1);

    }
    const nextPage = () => {
        setActivePage(activePage + 1);
    }

    //logic sort 
    const [activeSortObject, setActiveSortObject] = React.useState(jsonCats.long_hair);

    React.useEffect(() => {
        setActivePage(1);
        if (activeSort === 0){
            setActiveSortObject(jsonCats.long_hair);
            dispatch(setActiveBreed(jsonCats.long_hair[0]))
        } else if (activeSort === 1){
            setActiveSortObject(jsonCats.short_hair)
            dispatch(setActiveBreed(jsonCats.short_hair[0]))
        } else if (activeSort === 2) {
            setActiveSortObject(jsonCats.siamese_and_oriental)      
            dispatch(setActiveBreed(jsonCats.siamese_and_oriental[0]))
        }

        setActiveCardCat(0);
        setTimeout(() => {
            block_imgs.current.style.width = `${block_imgs.current.childNodes.length * (block_imgs.current.childNodes[0].clientWidth + 140)}px`;
            setNumberPages(Math.ceil(block_imgs.current.childNodes.length / 3));
        }, 200);

    }, [activeSort])
    const changeActiveSort = (num) => setActiveSort(num);
    return (
        <>
        <div className={s.slider_breeds}>
            <div className={s.sort}>
                <div className={activeSort === 0 ? `${s.active}` : ``} onClick={() => changeActiveSort(0)}>
                    <p>
                        Longhair Breeds
                    </p>
                </div>
                <div className={activeSort === 1 ? `${s.active}` : ``} onClick={() => changeActiveSort(1)}>
                    <p>
                        Shorthair Breeds
                    </p>
                </div>
                <div className={activeSort === 2 ? `${s.active}` : ``} onClick={() => changeActiveSort(2)}>
                    <p>
                        Siamese &amp; Oriental
                    </p>
                </div>
            </div>

            <div className={s.slider_cnt}>
                <button className={s.prev} onClick={() => prevPage()}>∟</button>
                <div className={s.wrap_cont}>
                    <div ref={block_imgs} className={s.block_imgs}>
                    
                        {
                            activeSortObject.map((el, index) => <CatForSlider
                             data={el}
                             onClick = {() => setActiveCardCat(index)}
                             active={activeCardCat === index ? true : false} 
                             key={`${index}_card_cat`} image={`${el.img}`} 
                             name={`${el.name}`} 
                             />)
                        }

                    </div>
                </div>
                <button className={s.next} onClick={() => nextPage()}>∟</button>
            </div>

            <div className={s.dots}>
                {
                    dots.map((el, index) => <span key={`${index}_dots`}
                        className={activePage === index + 1 ? `${s.active}` : ``}
                        onClick={() => setActivePage(index + 1)}
                    ></span>)
                }
            </div>
        </div>
        
        <BreedsInfo {...state} />
        </>
    )
}

export default SliderBreeds
