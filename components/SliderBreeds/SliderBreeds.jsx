import s from '../../styles/breeds/SliderBreeds.module.css';
import React from 'react'
import CatForSlider from './CatForSlider.jsx';
import jsonCats from '../../_data_cats.js';
import Link from 'next/link'

import { useDispatch } from 'react-redux';
import { setActiveBreed } from '../../Redux/actions/activeBreedsInfoAction.js';

const SliderBreeds = () => {
    const dispatch = useDispatch();

    const [activeSort, setActiveSort] = React.useState(1);

    const [activeCardCat, setActiveCardCat] = React.useState(1);

    const block_imgs = React.useRef();
    const [activePage, setActivePage] = React.useState(1);

    const [numberPages, setNumberPages] = React.useState()

    const [activeLatter, setActiveLatter] = React.useState(0);

    React.useEffect(() => {
        if (document.documentElement.clientWidth < 1920) {
            let marginBetwenCards = document.documentElement.clientWidth * 0.086;
            let widthCard = 8.5 * document.documentElement.clientWidth / 100;
            block_imgs.current.style.width = `${block_imgs.current.childNodes.length * (widthCard + marginBetwenCards)}px`;
        } else {
            block_imgs.current.style.width = `${block_imgs.current.childNodes.length * (163.2 + 166)}px`;
        }
        setNumberPages(Math.ceil(block_imgs.current.childNodes.length));


        window.addEventListener("resize", function () {
            if (document.documentElement.clientWidth < 1920) {
                let marginBetwenCards = document.documentElement.clientWidth * 0.086;
                let widthCard = 8.5 * document.documentElement.clientWidth / 100;
                block_imgs.current.style.width = `${block_imgs.current.childNodes.length * (widthCard + marginBetwenCards)}px`;
            } else {
                block_imgs.current.style.width = `${block_imgs.current.childNodes.length * (163.2 + 166)}px`;
            }
        });
    }, [])


    React.useEffect(() => {
        if (activePage > numberPages) {
            setActivePage(numberPages);
        } else if (activePage < 1) {
            setActivePage(1);
        }

        let leftBlock = 3;
        for (let i = 0; i < activePage - 1; i++) {
            if (activeSort === 0) {
                leftBlock -= 16.87
            }else if (activeSort === 1) {
                leftBlock -= 16.713
            } else if (activeSort === 2) {
                leftBlock -= 16.790
            } else if (activeSort === 3) {
                leftBlock -= 16.526
            }
        }

        if (document.documentElement.clientWidth < 1920) {
            block_imgs.current.style.left = `${leftBlock}vw`
        } else {
            block_imgs.current.style.left = `${leftBlock * 1940 / 100}px`;
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
        { latter: "B", indexPage: 10 },
        { latter: "C", indexPage: 21 },
        { latter: "D", indexPage: 27 },
        { latter: "E", indexPage: 29 },
        { latter: "H", indexPage: 31 },
        { latter: "J", indexPage: 35 },
        { latter: "K", indexPage: 37 },
        { latter: "L", indexPage: 42 },
        { latter: "M", indexPage: 45 },
        { latter: "N", indexPage: 53 },
        { latter: "O", indexPage: 56 },
        { latter: "P", indexPage: 58 },
        { latter: "R", indexPage: 62 },
        { latter: "S", indexPage: 64 },
        { latter: "T", indexPage: 75 },
    ]

    let navigationLatter2 = [
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

    const objsLattersRef = React.useRef(navigationLatter2);

    const [objsLatters, setObjsLatters] = React.useState(objsLattersRef.current);

    let navigationLatter3 = [
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
    let navigationLatter4 = [
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
            let obj = [...jsonCats.long_hair, ...jsonCats.short_hair, ...jsonCats.siamese_and_oriental];
            obj.sort(function (a, b) {
                if (a.name < b.name) { return -1; }
                if (a.name > b.name) { return 1; }
                return 0;
            })
            setActiveSortObject(obj);
            dispatch(setActiveBreed(jsonCats.short_hair[0]));

            objsLattersRef.current = navigationLatter1;
            setObjsLatters(objsLattersRef.current);

        }else if (activeSort === 1) {
            setActiveSortObject(jsonCats.long_hair);
            dispatch(setActiveBreed(jsonCats.long_hair[0]));

            objsLattersRef.current = navigationLatter2;
            setObjsLatters(objsLattersRef.current);

        } else if (activeSort === 2) {
            setActiveSortObject(jsonCats.short_hair)
            dispatch(setActiveBreed(jsonCats.short_hair[0]))

            objsLattersRef.current = navigationLatter3;
            setObjsLatters(objsLattersRef.current);
        } else if (activeSort === 3) {
            setActiveSortObject(jsonCats.siamese_and_oriental)
            dispatch(setActiveBreed(jsonCats.siamese_and_oriental[0]))

            objsLattersRef.current = navigationLatter4;
            setObjsLatters(objsLattersRef.current);
        }
        setActiveCardCat(0);
        setActiveLatter(0);

        setTimeout(() => {
            if (document.documentElement.clientWidth < 1920) {
                let marginBetwenCards = document.documentElement.clientWidth * 0.086;
                let widthCard = 8.5 * document.documentElement.clientWidth / 100;
                block_imgs.current.style.width = `${block_imgs.current.childNodes.length * (widthCard + marginBetwenCards)}px`;
            } else {
                block_imgs.current.style.width = `${block_imgs.current.childNodes.length * (163.2 + 166)}px`;
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
                            All Breeds
                        </p>
                    </div>
                    <div className={activeSort === 1 ? `${s.active}` : ``} onClick={() => changeActiveSort(1)}>
                        <p>
                            Longhair Breeds
                        </p>
                    </div>
                    <div className={activeSort === 2 ? `${s.active}` : ``} onClick={() => changeActiveSort(2)}>
                        <p>
                            Shorthair Breeds
                        </p>
                    </div>
                    <div className={activeSort === 3 ? `${s.active}` : ``} onClick={() => changeActiveSort(3)}>
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
