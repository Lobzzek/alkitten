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

    const [activeLatter, setActiveLatter] = React.useState(0);

    React.useEffect(() => {
        if(document.documentElement.clientWidth < 1920){
            let marginBetwenCards = document.documentElement.clientWidth * 0.073;
            block_imgs.current.style.width = `${block_imgs.current.childNodes.length * (block_imgs.current.childNodes[0].clientWidth + marginBetwenCards)}px`;
        }else{
            block_imgs.current.style.width = `${block_imgs.current.childNodes.length * (block_imgs.current.childNodes[0].clientWidth + 140)}px`;
        }
        setNumberPages(Math.ceil(block_imgs.current.childNodes.length / 3));
        
    }, [])

    //logic slider

    React.useEffect(() => {
        if (activePage > numberPages) {
            setActivePage(numberPages);
        } else if (activePage < 1) {
            setActivePage(1);
        }
        if(document.documentElement.clientWidth >= 1920){
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
        }else{
            if (activePage === 1) {
                block_imgs.current.style.left = "0vw";
            } else if (activePage === 2) {
                block_imgs.current.style.left = "-47vw";
            } else if (activePage === 3) {
                block_imgs.current.style.left = "-93vw";
            } else if (activePage === 4) {
                block_imgs.current.style.left = "-138vw";
            } else if (activePage === 5) {
                block_imgs.current.style.left = "-184vw";
            } else if (activePage === 6) {
                block_imgs.current.style.left = "-229vw";
            }
            else if (activePage === 7) {
                block_imgs.current.style.left = "-275vw";
            }
            else if (activePage === 8) {
                block_imgs.current.style.left = "-320vw";
            }
            else if (activePage === 9) {
                block_imgs.current.style.left = "-365vw";
            }
            else if (activePage === 10) {
                block_imgs.current.style.left = "-411vw";
            } else if (activePage === 11) {
                block_imgs.current.style.left = "-457vw";
            }
            else if (activePage === 12) {
                block_imgs.current.style.left = "-505vw";
            }
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

    const next3Pages = () => {
        setActivePage(activePage + 3);
    }
    const prev3Pages = () => {
        setActivePage(activePage - 3);
    }

    //logic sort 
    const [activeSortObject, setActiveSortObject] = React.useState(jsonCats.long_hair);
    // const objsLatters = React.useRef();


    let navigationLatter1 = [
        { latter: "A", indexPage: 1 },
        { latter: "B", indexPage: 2 },
        { latter: "C", indexPage: 3 },
        { latter: "H", indexPage: 3 },
        { latter: "J", indexPage: 4 },
        { latter: "K", indexPage: 4 },
        { latter: "L", indexPage: 5 },
        { latter: "M", indexPage: 5 },
        { latter: "N", indexPage: 7 },
        { latter: "P", indexPage: 8 },
        { latter: "S", indexPage: 9 },
        { latter: "T", indexPage: 10 },
    ]

    const objsLattersRef = React.useRef(navigationLatter1);

    const [objsLatters, setObjsLatters] = React.useState(objsLattersRef.current);

    let navigationLatter2 = [
        { latter: "A", indexPage: 1 },
        { latter: "B", indexPage: 3 },
        { latter: "C", indexPage: 4 },
        { latter: "D", indexPage: 6 },
        { latter: "E", indexPage: 6 },
        { latter: "H", indexPage: 7 },
        { latter: "J", indexPage: 7 },
        { latter: "K", indexPage: 7 },
        { latter: "L", indexPage: 8 },
        { latter: "M", indexPage: 8 },
        { latter: "O", indexPage: 9 },
        { latter: "P", indexPage: 10 },
        { latter: "R", indexPage: 10 },
        { latter: "S", indexPage: 10 },
        { latter: "T", indexPage: 12 },
    ]
    let navigationLatter3 = [
        { latter: "B", indexPage: 1 },
        { latter: "C", indexPage: 1 },
        { latter: "D", indexPage: 2 },
        { latter: "H", indexPage: 2 },
        { latter: "K", indexPage: 2 },
        { latter: "L", indexPage: 3 },
        { latter: "M", indexPage: 3 },
        { latter: "O", indexPage: 3 },
        { latter: "P", indexPage: 4 },
        { latter: "S", indexPage: 4 },
        { latter: "T", indexPage: 4 },
    ]
    React.useEffect(() => {
        setActivePage(1);
        if (activeSort === 0){
            setActiveSortObject(jsonCats.long_hair);
            dispatch(setActiveBreed(jsonCats.long_hair[0]));

            objsLattersRef.current = navigationLatter1;
            setObjsLatters(objsLattersRef.current);

        } else if (activeSort === 1){
            setActiveSortObject(jsonCats.short_hair)
            dispatch(setActiveBreed(jsonCats.short_hair[0]))

            objsLattersRef.current = navigationLatter2;
            setObjsLatters(objsLattersRef.current);
        } else if (activeSort === 2) {
            setActiveSortObject(jsonCats.siamese_and_oriental)      
            dispatch(setActiveBreed(jsonCats.siamese_and_oriental[0]))

            objsLattersRef.current = navigationLatter3;
            setObjsLatters(objsLattersRef.current);
        }
        setActiveCardCat(0);
        setActiveLatter(0);
        setTimeout(() => {
            if (document.documentElement.clientWidth < 1920) {
                let marginBetwenCards = document.documentElement.clientWidth * 0.073;
                block_imgs.current.style.width = `${block_imgs.current.childNodes.length * (block_imgs.current.childNodes[0].clientWidth + marginBetwenCards)}px`;
            } else {
                block_imgs.current.style.width = `${block_imgs.current.childNodes.length * (block_imgs.current.childNodes[0].clientWidth + 140)}px`;
            }
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
                <button className={s.prev} onClick={() => prevPage()}>
                    <img src="/img/icon_arow.svg" alt="" />
                </button>
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
                <button className={s.next} onClick={() => nextPage()}>
                    <img src="/img/icon_arow.svg" alt="" />
                </button>
            </div>

            <div className={s.dots}>

                <button className={s.next3Pages} onClick={() => prev3Pages()}>
                    <img src="/img/icon_arow.svg" alt="" />
                </button>
                <div className={s.container_dots}>
                        {
                            dots.map((el, index) => <span key={`${index}_dots`}
                                className={activePage === index + 1 ? `${s.active}` : ``}
                                onClick={() => setActivePage(index + 1)}
                            ></span>)
                        }
                </div>
                <button className={s.prev3Pages} onClick={() => next3Pages()}>
                    <img src="/img/icon_arow.svg" alt="" />
                </button>
            </div>
                <div className={s.container_latters}>
                    {
                        objsLatters.map((el, index) => <button 
                        className={activeLatter === index ? `${s.active}` : ``}
                         key={`${index}_latter_nav`} 
                         onClick={() => {
                             setActivePage(el.indexPage)
                             setActiveLatter(index);
                            }
                         }>
                             {el.latter}
                        </button>)
                    }
                </div>
        </div>
        
        <BreedsInfo {...state} />
        </>
    )
}

export default SliderBreeds
