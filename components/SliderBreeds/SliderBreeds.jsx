import s from '../../styles/breeds/SliderBreeds.module.css';
import React from 'react'
import CatForSlider from './CatForSlider.jsx';
import jsonCats from '../../_data_cats.js';
import Link from 'next/link'

import { useDispatch } from 'react-redux';
import { setActiveBreed } from '../../Redux/actions/activeBreedsInfoAction.js';

const SliderBreeds = () => {
    const dispatch = useDispatch();

    const [activeSort, setActiveSort] = React.useState(0);

    const [activeCardCat, setActiveCardCat] = React.useState(0);

    const block_imgs = React.useRef();
    const [activePage, setActivePage] = React.useState(1);

    const [numberPages, setNumberPages] = React.useState()

    const [activeLatter, setActiveLatter] = React.useState(0);

    React.useEffect(() => {
        if (document.documentElement.clientWidth < 1920) {
            let marginBetwenCards = document.documentElement.clientWidth * 0.08;
            let widthCard = 8.203 * 1920 / 100;
            block_imgs.current.style.width = `${block_imgs.current.childNodes.length * (widthCard + marginBetwenCards)}px`;
        } else {
            block_imgs.current.style.width = `${block_imgs.current.childNodes.length * (157.5 + 155)}px`;
        }
        setNumberPages(Math.ceil(block_imgs.current.childNodes.length));
    }, [])


    React.useEffect(() => {
        if (activePage > numberPages) {
            setActivePage(numberPages);
        } else if (activePage < 1) {
            setActivePage(1);
        }

        let leftBlock = -2;
        for (let i = 0; i < activePage - 1; i++) {
            if (activeSort === 0) {
                leftBlock -= 15.88
            } else if (activeSort === 1) {
                leftBlock -= 15.9
            } else {
                leftBlock -= 15.5
            }
        }

        if (document.documentElement.clientWidth < 1920) {
            block_imgs.current.style.left = `${leftBlock}vw`

        } else {
            block_imgs.current.style.left = `${leftBlock * 1930 / 100}px`;
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


    let navigationLatter1 = [
        { latter: "A", indexPage: 1 },
        { latter: "B", indexPage: 4 },
        { latter: "C", indexPage: 8 },
        { latter: "H", indexPage: 9 },
        { latter: "J", indexPage: 11 },
        { latter: "K", indexPage: 12 },
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

        if (activeSort === 0) {
            setActiveSortObject(jsonCats.long_hair);
            dispatch(setActiveBreed(jsonCats.long_hair[0]));

            objsLattersRef.current = navigationLatter1;
            setObjsLatters(objsLattersRef.current);

        } else if (activeSort === 1) {
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
                let widthCard = 8.203 * 1920 / 100;
                block_imgs.current.style.width = `${block_imgs.current.childNodes.length * (widthCard + marginBetwenCards)}px`;
            } else {
                block_imgs.current.style.width = `${block_imgs.current.childNodes.length * (157.5 + 155)}px`;
            }
            setNumberPages(Math.ceil(block_imgs.current.childNodes.length));
        }, 100);

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
                    <button title="prev page" className={s.prev} onClick={() => prevPage()}>
                        <img src="/img/icon_arow.svg" alt="" />
                    </button>
                    <div className={s.wrap_cont}>
                        <div ref={block_imgs} className={s.block_imgs}>

                            {
                                activeSortObject.map((el, index) => <CatForSlider
                                    data={el}
                                    onClick={() => setActiveCardCat(index)}
                                    active={activeCardCat === index ? true : false}
                                    currentCard={activePage}
                                    indexCart={index}
                                    key={`${index}_card_cat`} image={`${el.img}`}
                                    name={`${el.name}`}
                                />)
                            }

                        </div>
                    </div>
                    <button title="next page" className={s.next} onClick={() => nextPage()}>
                        <img src="/img/icon_arow.svg" alt="" />
                    </button>
                </div>

                <div className={s.dots}>

                    <button title="prev 3 page" className={s.next3Pages} onClick={() => prev3Pages()}>
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
                    <button title="next 3 page" className={s.prev3Pages} onClick={() => next3Pages()}>
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
                <Link href="/breeds_all"><a>View All</a></Link>
            </div>

        </>
    )
}

export default SliderBreeds
