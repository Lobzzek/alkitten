import React from 'react'
import MainWrapper from '../../components/MainWrapper/MainWrapper.jsx'
import s from '../../styles/catteries/catteries.module.css'
import CardCattery from '../../components/Catteries/CardCattery.jsx'
import classNames from 'classnames'
import jsonCats from '../../_data_cats.js'


const Catteries = () => {

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

        } else if (activeSort === 1) {
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
   
    return (
        <MainWrapper>
            <div className={s.top_text}>
                <h2>Find a Cattery You’ll Love!</h2>
                <p>Specify a breed or location or both</p>
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
                                }}

                            >{el.name}</li>)

                        }
                    </ul>
                </div>
            </div>

            <div className={s.last_kittens}>
                {/* <div className={s.top_text}>
                    <h2>You May Be Interested In</h2>
                </div> */}
                <div className={s.block_cats}>
                    <CardCattery img_cattery="/img/icon/catteries.svg" verefied favourite />
                    <CardCattery img_cattery="/img/icon/catteries.svg" verefied />
                    <CardCattery img_cattery="/img/icon/catteries.svg" />
                    <CardCattery img_cattery="/img/icon/catteries.svg" />
                    <CardCattery img_cattery="/img/icon/catteries.svg" />
                </div>
            </div>
        </MainWrapper>
    )
}

export default Catteries
