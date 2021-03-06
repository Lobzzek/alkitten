import React from 'react'
import MainWrapper from '../components/MainWrapper/MainWrapper.jsx'
import s from '../styles/gallery.module.css'
import jsonCats from '../_data_cats.js'
import classNames from 'classnames'

const Gallery = () => {

    const [openZoomImg, setOpenZoomImg] = React.useState(false);

    const [activeImg, setActiveImg] = React.useState(1);
    const [activeImgTag, setActiveImgTag] = React.useState(
        <img src="/img/cat_for_card.jpg" alt="" />
    );

    const zoomImg = React.useRef();
    React.useEffect(() => {
        if (openZoomImg) {
            zoomImg.current.style.display = 'flex';
            setTimeout(() => {
                zoomImg.current.childNodes.forEach(el => { 
                    el.style.opacity = "1";
              })
            }, 300);
        }else{
            zoomImg.current.childNodes.forEach(el => el.style.opacity = "0")
            setTimeout(() => {
                zoomImg.current.style.display = 'none';
            }, 700);
        }
    }, [openZoomImg])
    let arrImg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; // remove when conect BD

    const [activeSort, setActiveSort] = React.useState(1);
    const changeActiveSort = (num) => setActiveSort(num);
    const [activeLonghairSort, setActiveLonghairSort] = React.useState(0);
    const [activeShorthairSort, setActiveShorthairSort] = React.useState(0);
    const [activeSiameseSort, setActiveSiameseSort] = React.useState(0);
    const sort_hair = React.useRef();
    const sort_longhair = React.useRef();
    const sort_shorthair = React.useRef();
    const sort_siamese = React.useRef();
    const [triggerOn2RenderSort, setTriggerOn2RenderSort] = React.useState(false)
    let openLonghair = React.useCallback(
        () => {
            sort_longhair.current.style.transform = `translateY(0)`;
            sort_longhair.current.style.opacity = `1`;
        },
        []
    )
    let openShorthair = React.useCallback(
        () => {
            sort_shorthair.current.style.transform = `translateY(0)`
            sort_shorthair.current.style.opacity = `1`
        },
        []
    )
    let openSiamese = React.useCallback(
        () => {
            sort_siamese.current.style.transform = `translateY(0)`
            sort_siamese.current.style.opacity = `1`
        },
        []
    )
    let closeBlocks = () => {
        sort_siamese.current.style.transform = `translateY(-20%)`;
        sort_siamese.current.style.opacity = "0";
        sort_shorthair.current.style.transform = `translateY(-20%)`;
        sort_shorthair.current.style.opacity = "0";
        sort_longhair.current.style.transform = `translateY(-20%)`;
        sort_longhair.current.style.opacity = "0";
    }
    React.useEffect(() => {
        setActiveLonghairSort(0);
        setActiveShorthairSort(0);
        setActiveSiameseSort(0);
        sort_hair.current.parentNode.addEventListener("mouseleave", closeBlocks)
        if (activeSort === 0) {
            // closeBlocks();
            sort_hair.current.childNodes[1].removeEventListener("mouseenter", openLonghair);

            sort_hair.current.childNodes[2].removeEventListener("mouseenter", openShorthair)
            sort_hair.current.childNodes[3].removeEventListener("mouseenter", openSiamese)

        }else if (activeSort === 1) {
            closeBlocks();
            if (triggerOn2RenderSort === false) {
                setTriggerOn2RenderSort(true);
            } else {
                sort_longhair.current.style.transform = `translateY(0)`;
                sort_longhair.current.style.opacity = `1`;
            }
            sort_hair.current.childNodes[1].addEventListener("mouseenter", openLonghair);

            sort_hair.current.childNodes[2].removeEventListener("mouseenter", openShorthair)
            sort_hair.current.childNodes[3].removeEventListener("mouseenter", openSiamese)

        } else if (activeSort === 2) {
            closeBlocks();
            sort_shorthair.current.style.transform = `translateY(0)`;
            sort_shorthair.current.style.opacity = `1`;
            sort_hair.current.childNodes[2].addEventListener("mouseenter", openShorthair)

            sort_hair.current.childNodes[1].removeEventListener("mouseenter", openLonghair);
            sort_hair.current.childNodes[3].removeEventListener("mouseenter", openSiamese)

        } else if (activeSort === 3) {
            closeBlocks();
            sort_siamese.current.style.transform = `translateY(0)`;
            sort_siamese.current.style.opacity = `1`;
            sort_hair.current.childNodes[3].addEventListener("mouseenter", openSiamese)

            sort_hair.current.childNodes[1].removeEventListener("mouseenter", openLonghair);
            sort_hair.current.childNodes[2].removeEventListener("mouseenter", openShorthair)
        }

    }, [activeSort])

    const active_sort = React.useRef();
    React.useEffect(() => {
            if (activeSort === 1 && activeLonghairSort === 0) {
                active_sort.current.textContent = `- Longhair -`
            } else if (activeSort === 2 && activeShorthairSort === 0) {
                active_sort.current.textContent = `- Shorthair -`
            } else if (activeSort === 3 && activeSiameseSort === 0) {
                active_sort.current.textContent = `- Siamese & Oriental -`
            }

            else if (activeSort === 1 && activeLonghairSort !== 0) {
                active_sort.current.textContent = `- ${jsonCats.long_hair[activeLonghairSort - 1].name} -`
            } else if (activeSort === 2 && activeShorthairSort !== 0) {
                active_sort.current.textContent = `- ${jsonCats.short_hair[activeShorthairSort - 1].name} -`
            } else if (activeSort === 3 && activeSiameseSort !== 0) {
                active_sort.current.textContent = `- ${jsonCats.siamese_and_oriental[activeSiameseSort - 1].name} -`
            }
    }, [activeSort, activeLonghairSort, activeShorthairSort, activeSiameseSort])

    const blockCard = React.useRef();
    React.useEffect(() => {
        setActiveImgTag(
            <img src={`${blockCard.current.childNodes[activeImg].style.backgroundImage.match(/(?<="|'|`).+(?="|'|`)/)}`} alt="" />
        )
        
    }, [activeImg])
    return (
        <>
            <MainWrapper>
                <div className={s.top_text}>
                    <h2>Cat Gallery</h2>
                    <p>A happy place for cats and catparents</p>
                </div>

                <h3 className={s.active_sort} ref={active_sort}>- Longhair -</h3>
                <div className={s.sort}>
                    <div className={s.sort_hair} ref={sort_hair}>
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

                    <div className={s.sort_longhair} ref={sort_longhair}>
                        <ul>
                            <li className={classNames("", { [s.active]: activeLonghairSort === 0 })} onClick={() => setActiveLonghairSort(0)}>All</li>

                            {

                                jsonCats.long_hair.map((el, index) => <li

                                    key={`long_hair_${index}`}
                                    className={classNames("", { [s.active]: activeLonghairSort === index + 1 })}
                                    onClick={() => {
                                        closeBlocks();
                                        setActiveLonghairSort(index + 1)
                                    }}

                                >{el.name}</li>)

                            }
                        </ul>
                    </div>

                    <div className={s.sort_shorthair} ref={sort_shorthair}>
                        <ul>
                            <li className={classNames("", { [s.active]: activeShorthairSort === 0 })} onClick={() => setActiveShorthairSort(0)}>All</li>

                            {

                                jsonCats.short_hair.map((el, index) => <li

                                    key={`short_hair_${index}`}
                                    className={classNames("", { [s.active]: activeShorthairSort === index + 1 })}
                                    onClick={() => {
                                        closeBlocks();
                                        setActiveShorthairSort(index + 1)
                                    }}

                                >{el.name}</li>)

                            }
                        </ul>
                    </div>

                    <div className={s.sort_siamese} ref={sort_siamese}>
                        <ul>
                            <li className={classNames("", { [s.active]: activeSiameseSort === 0 })} onClick={() => setActiveSiameseSort(0)}>All</li>

                            {

                                jsonCats.siamese_and_oriental.map((el, index) => <li

                                    key={`siamese_${index}`}
                                    className={classNames("", { [s.active]: activeSiameseSort === index + 1 })}
                                    onClick={() => {
                                        closeBlocks();
                                        setActiveSiameseSort(index + 1)
                                    } }

                                >{el.name}</li>)

                            }
                        </ul>
                    </div>
                </div>

                <div className={s.wrap_block_img} ref={blockCard}>
                    {
                        arrImg.map((el, i) => <div className={s.block_img} key={`${i}_img_cat`}
                            style={i % 2 === 0 ? { background: `url(/img/cat_for_card.jpg)`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"} : 
                                { background: `url(/img/cat_bottom_home.png)`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                            onClick={() => { 
                                setActiveImg(i);
                                setOpenZoomImg(true) 
                            }}
                        ></div>)
                    }
                </div>
            </MainWrapper>

            <div className={s.zoomImg} ref={zoomImg}>
                <p className={s.close} onClick={() => setOpenZoomImg(false)}>???</p>
                <div className={s.fon} onClick={() => setOpenZoomImg(false)}></div>
                <button title="prev slide" className={s.prev_slide} onClick={() => {
                    if(activeImg > 0){
                        setActiveImg(activeImg - 1)
                    }else{
                        setActiveImg(blockCard.current.childNodes.length - 1);
                    }
                        
                    
                    }}>
                {/* <button title="prev slide" className={s.prev_slide}> */}
                    <img src="/img/icon_arow.svg" alt="" />
                </button>
                
                {
                    activeImgTag
                }

                <button title="next slide" className={s.next_slide} onClick={() => {
                    if (activeImg < blockCard.current.childNodes.length - 1) {
                        setActiveImg(activeImg + 1)
                    } else {
                        setActiveImg(0);
                    }

                }}>
                {/* <button title="next slide" className={s.next_slide}> */}
                    <img src="/img/icon_arow.svg" alt="" />
                </button>
            </div>
        </>
    )
}

export default Gallery
