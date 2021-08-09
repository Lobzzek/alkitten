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
            let marginBetwenCards = document.documentElement.clientWidth * 0.08;
            block_imgs.current.style.width = `${block_imgs.current.childNodes.length * (block_imgs.current.childNodes[0].clientWidth + marginBetwenCards)}px`;
        }else{
            block_imgs.current.style.width = `${block_imgs.current.childNodes.length * (block_imgs.current.childNodes[0].clientWidth + 155)}px`;
        }
        setNumberPages(Math.ceil(block_imgs.current.childNodes.length));
        
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
                if (activeSort === 1) {
                    block_imgs.current.style.left = "-calc(2.5px * 1920) / 100)";

                } else {
                    block_imgs.current.style.left = "-calc(2px * 1920) / 100)";

                }
            } else if (activePage === 2) {
                block_imgs.current.style.left = "-calc(17px * 1920) / 100)";
            } else if (activePage === 3) {
                block_imgs.current.style.left = "-calc(33.5px * 1920) / 100)";
            } else if (activePage === 4) {
                block_imgs.current.style.left = "-calc(49px * 1920) / 100)";
            } else if (activePage === 5) {
                if (activeSort === 1) {
                    block_imgs.current.style.left = "-calc(65px * 1920) / 100)";
                } else {
                    block_imgs.current.style.left = "-calc(64px * 1920) / 100)";
                }
            } else if (activePage === 6) {
                block_imgs.current.style.left = "-calc(81px * 1920) / 100)";
            }
            else if (activePage === 7) {
                block_imgs.current.style.left = "-calc(96px * 1920) / 100)";
            }
            else if (activePage === 8) {
                block_imgs.current.style.left = "-calc(112px * 1920) / 100)";
            }
            else if (activePage === 9) {
                block_imgs.current.style.left = "-calc(127.6px * 1920) / 100)";
            }
            else if (activePage === 10) {
                if (activeSort === 2) {
                    block_imgs.current.style.left = "-calc(141px * 1920) / 100)";
                } else {
                    block_imgs.current.style.left = "-calc(144px * 1920) / 100)";
                }
            } else if (activePage === 11) {
                if(activeSort === 2){
                    block_imgs.current.style.left = "-calc(157px * 1920) / 100)";
                }else{
                    block_imgs.current.style.left = "-calc(159px * 1920) / 100)";

                }
                
            }
            else if (activePage === 12) {
                if (activeSort === 2) {
                    block_imgs.current.style.left = "-calc(171.3px * 1920) / 100)";

                } else {
                    block_imgs.current.style.left = "-calc(175.3px * 1920) / 100)";

                }
            } else if (activePage === 13) {
                if (activeSort === 2) {
                    block_imgs.current.style.left = "-calc(190px * 1920) / 100)";

                } else {
                    block_imgs.current.style.left = "-calc(191px * 1920) / 100)";

                }
            } else if (activePage === 14) {
                if (activeSort === 2) {
                    block_imgs.current.style.left = "-calc(205px * 1920) / 100)";

                } else {
                    block_imgs.current.style.left = "-calc(207px * 1920) / 100)";

                }
            } else if (activePage === 15) {
                block_imgs.current.style.left = "-calc(223px * 1920) / 100)";
            } else if (activePage === 16) {
                block_imgs.current.style.left = "-calc(239px * 1920) / 100)";
            }
            else if (activePage === 17) {     
                if (activeSort === 2) {
                    block_imgs.current.style.left = "-calc(252px * 1920) / 100)";
                } else if (activeSort === 1){
                    block_imgs.current.style.left = "-calc(254px * 1920) / 100)";

                }else{
                    block_imgs.current.style.left = "-calc(253px * 1920) / 100)";
                }
            }
            else if (activePage === 18) {
                if (activeSort === 1) {
                    block_imgs.current.style.left = "-calc(270px * 1920) / 100)";

                } else {
                    block_imgs.current.style.left = "-calc(269px * 1920) / 100)";

                }
            }
            else if (activePage === 19) {
                block_imgs.current.style.left = "-calc(286.6px * 1920) / 100)";
            }
            else if (activePage === 20) {
                block_imgs.current.style.left = "-calc(302px * 1920) / 100)";
            } else if (activePage === 21) {
                block_imgs.current.style.left = "-calc(317px * 1920) / 100)";
            }
            else if (activePage === 22) {
                if(activeSort === 0){
                    block_imgs.current.style.left = "calc(-332px * 1920) / 100)";
                } else if (activeSort === 1){
                    block_imgs.current.style.left = "calc(-334px * 1920) / 100)";
                }else{
                    block_imgs.current.style.left = "calc(-333px * 1920) / 100)";
                }
            }
            else if (activePage === 23) {
                if (activeSort === 2) {
                    block_imgs.current.style.left = "-calc(347px * 1920) / 100)";
                } else if (activeSort === 1) {
                    block_imgs.current.style.left = "-calc(349px * 1920) / 100)";
                } else {
                    block_imgs.current.style.left = "-calc(348px * 1920) / 100)";
                }
            } else if (activePage === 24) {
                block_imgs.current.style.left = "-calc(366px * 1920) / 100)";
            } else if (activePage === 25) {
                block_imgs.current.style.left = "-calc(381px * 1920) / 100)";
            } else if (activePage === 26) {
                block_imgs.current.style.left = "-calc(396px * 1920) / 100)";
            } else if (activePage === 27) {
                if (activeSort === 1) {
                    block_imgs.current.style.left = "-calc(412px * 1920) / 100)";

                } else {
                    block_imgs.current.style.left = "-calc(411px * 1920) / 100)";

                }
            }
            else if (activePage === 28) {
                if (activeSort === 1) {
                    block_imgs.current.style.left = "-calc(427.5px * 1920) / 100)";

                } else {
                    block_imgs.current.style.left = "-calc(427px * 1920) / 100)";

                }
            }
            else if (activePage === 29) {
                if (activeSort === 1) {
                    block_imgs.current.style.left = "-calc(443.5px * 1920) / 100)";

                } else {
                    block_imgs.current.style.left = "-calc(443px * 1920) / 100)";

                }
            }
            else if (activePage === 30) {
                block_imgs.current.style.left = "-calc(459px * 1920) / 100)";
            }
            else if (activePage === 31) {
                block_imgs.current.style.left = "-calc(476px * 1920) / 100)";
            } else if (activePage === 32) {
                block_imgs.current.style.left = "-calc(492px * 1920) / 100)";
            }
            else if (activePage === 33) {
                block_imgs.current.style.left = "-calc(508px * 1920) / 100)";
            }
            else if (activePage === 34) {
                block_imgs.current.style.left = "-calc(524px * 1920) / 100)";
            }
        }else{
            if (activePage === 1) {
                if (activeSort === 1) {
                    block_imgs.current.style.left = "-2.5vw";
                } else {
                    block_imgs.current.style.left = "-1vw";
                }
            } else if (activePage === 2) {
                block_imgs.current.style.left = "-17vw";
            } else if (activePage === 3) {
                block_imgs.current.style.left = "-33.5vw";
            } else if (activePage === 4) {
                block_imgs.current.style.left = "-49vw";
            } else if (activePage === 5) {
                if (activeSort === 1) {
                    block_imgs.current.style.left = "-65vw";
                } else {
                    block_imgs.current.style.left = "-64vw";
                }
            } else if (activePage === 6) {
                block_imgs.current.style.left = "-81vw";
            }
            else if (activePage === 7) {
                block_imgs.current.style.left = "-96vw";
            }
            else if (activePage === 8) {
                block_imgs.current.style.left = "-112vw";
            }
            else if (activePage === 9) {
                block_imgs.current.style.left = "-127.6vw";
            }
            else if (activePage === 10) {
                if (activeSort === 2) {
                    block_imgs.current.style.left = "-141vw";

                } else {
                    block_imgs.current.style.left = "-144vw";

                }
            } else if (activePage === 11) {
                if (activeSort === 2) {
                    block_imgs.current.style.left = "-157vw";
                } else {
                    block_imgs.current.style.left = "-159vw";

                }
            }
            else if (activePage === 12) {
                if (activeSort === 2) {
                    block_imgs.current.style.left = "-171.3vw";
                } else {
                    block_imgs.current.style.left = "-175.3vw";

                }
            } else if (activePage === 13) {
                if (activeSort === 2) {
                    block_imgs.current.style.left = "-190vw";

                } else {
                    block_imgs.current.style.left = "-191vw";

                }
            }else if (activePage === 14) {
                if (activeSort === 2) {
                    block_imgs.current.style.left = "-205vw";

                } else {
                    block_imgs.current.style.left = "-207vw";

                }
            } else if (activePage === 15) {
                block_imgs.current.style.left = "-223vw";
            } else if (activePage === 16) {
                block_imgs.current.style.left = "-239vw";
            }
            else if (activePage === 17) {
                if(activeSort === 2){
                    block_imgs.current.style.left = "-252vw";

                }else if(activeSort === 1){
                    block_imgs.current.style.left = "-254vw";

                }else{
                    block_imgs.current.style.left = "-253vw";
                }

            }
            else if (activePage === 18) {
                if (activeSort === 1) {
                    block_imgs.current.style.left = "-270vw";
                } else {
                    block_imgs.current.style.left = "-269vw";
                }
            }
            else if (activePage === 19) {
                block_imgs.current.style.left = "-286.6vw";
            }
            else if (activePage === 20) {
                block_imgs.current.style.left = "-302vw";
            } else if (activePage === 21) {
                block_imgs.current.style.left = "-317vw";
            }
            else if (activePage === 22) {
                if (activeSort === 0) {
                    block_imgs.current.style.left = "-333vw";
                } else if (activeSort === 1) {
                    block_imgs.current.style.left = "-335vw";
                } else {
                    block_imgs.current.style.left = "-333vw";
                }
            }
            else if (activePage === 23) {
                if (activeSort === 2) {
                    block_imgs.current.style.left = "-347vw";
                } else if (activeSort === 1){
                    block_imgs.current.style.left = "-349vw";
                }else{
                    block_imgs.current.style.left = "-348vw";
                }
            }else if (activePage === 24) {
                block_imgs.current.style.left = "-366vw";
            } else if (activePage === 25) {
                block_imgs.current.style.left = "-380vw";
            } else if (activePage === 26) {
                block_imgs.current.style.left = "-396vw";
            } else if (activePage === 27) {
                if (activeSort === 1) {
                    block_imgs.current.style.left = "-412vw";


                } else {
                    block_imgs.current.style.left = "-411vw";


                }
            }
            else if (activePage === 28) {
                if (activeSort === 1) {
                    block_imgs.current.style.left = "-427.5vw";
                } else {
                    block_imgs.current.style.left = "-427vw";
                }
            }
            else if (activePage === 29) {
                if (activeSort === 1) {
                    block_imgs.current.style.left = "-443.5vw";


                } else {
                    block_imgs.current.style.left = "-443vw";


                }
            }
            else if (activePage === 30) {
                block_imgs.current.style.left = "-459vw";
            }
            else if (activePage === 31) {
                block_imgs.current.style.left = "-476vw";
            } else if (activePage === 32) {
                block_imgs.current.style.left = "-492vw";
            }
            else if (activePage === 33) {
                block_imgs.current.style.left = "-508vw";
            }
            else if (activePage === 34) {
                block_imgs.current.style.left = "-524vw";
            }
            else if (activePage === 35) {
                block_imgs.current.style.left = "-540vw";
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
        { latter: "B", indexPage: 4 },
        { latter: "C", indexPage: 8 },
        { latter: "H", indexPage: 9 },
        { latter: "J", indexPage: 11 },
        { latter: "K", indexPage: 12},
        { latter: "L", indexPage: 14 },
        { latter: "M", indexPage: 15 },
        { latter: "N", indexPage: 19 },
        { latter: "P", indexPage: 22 },
        { latter: "R", indexPage: 24 },
        { latter: "S", indexPage: 25 },
        { latter: "T", indexPage: 30 },
    ]

    const objsLattersRef = React.useRef(navigationLatter1);

    const [objsLatters, setObjsLatters] = React.useState(objsLattersRef.current);

    let navigationLatter2 = [
        { latter: "A", indexPage: 1 },
        { latter: "B", indexPage: 7 },
        { latter: "C", indexPage: 12 },
        { latter: "D", indexPage: 16 },
        { latter: "E", indexPage: 17 },
        { latter: "H", indexPage: 19 },
        { latter: "J", indexPage: 20 },
        { latter: "K", indexPage: 21 },
        { latter: "L", indexPage: 23 },
        { latter: "M", indexPage: 24 },
        { latter: "O", indexPage: 27 },
        { latter: "P", indexPage: 28 },
        { latter: "R", indexPage: 29 },
        { latter: "S", indexPage: 30 },
        { latter: "T", indexPage: 35 },
    ]
    let navigationLatter3 = [
        { latter: "B", indexPage: 1 },
        { latter: "C", indexPage: 3 },
        { latter: "D", indexPage: 4 },
        { latter: "H", indexPage: 5 },
        { latter: "K", indexPage: 6 },
        { latter: "L", indexPage: 7 },
        { latter: "M", indexPage: 8 },
        { latter: "O", indexPage: 9 },
        { latter: "P", indexPage: 10 },
        { latter: "S", indexPage: 11 },
        { latter: "T", indexPage: 12 },
    ]
    React.useEffect(() => {
        setActivePage(1);
        if (activeSort === 2) {
            block_imgs.current.style.left = "";
        } else {
            block_imgs.current.style.left = "";
        }

        if (document.documentElement.clientWidth < 1920) {
            if (activePage === 1) {
                if (activeSort === 1) {
                    block_imgs.current.style.left = "-2.5vw";
                } else if (activePage === 0) {
                    block_imgs.current.style.left = "-1vw";
                }
                else if (activePage === 2) {
                    block_imgs.current.style.left = "-1vw";
                }
            }
        } else {
            if (activePage === 1) {
                if (activeSort === 1) {
                    block_imgs.current.style.left = "-calc(2.5px * 1920) / 100)";

                } else if (activePage === 0) {
                    block_imgs.current.style.left = "-calc(1px * 1920) / 100)";
                }
                else if (activePage === 2) {
                    block_imgs.current.style.left = "-calc(1px * 1920) / 100)";

                }
            }
        }

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
                let marginBetwenCards = document.documentElement.clientWidth * 0.08;
                block_imgs.current.style.width = `${block_imgs.current.childNodes.length * (block_imgs.current.childNodes[0].clientWidth + marginBetwenCards)}px`;
            } else {
                block_imgs.current.style.width = `${block_imgs.current.childNodes.length * (block_imgs.current.childNodes[0].clientWidth + 155)}px`;
            }
            setNumberPages(Math.ceil(block_imgs.current.childNodes.length));
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
                <div className={activeSort === 2 ? `${s.wrap_cont} ${s.last_sort_before}` : `${s.wrap_cont}`}>
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
