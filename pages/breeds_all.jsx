import React from 'react'
import MainWrapper from './../components/MainWrapper/MainWrapper.jsx'
import s from '../styles/breeds_all/breeds_all.module.css'
import CardBreed from '../components/CardBreed.jsx'
import jsonCats from '../_data_cats.js';

const Breeds_all = () => {
    const [activeSort, setActiveSort] = React.useState(0);
    const changeActiveSort = (num) => setActiveSort(num);

    const [activeGroup, setActiveGroup] = React.useState(jsonCats.long_hair);

    const container_img = React.useRef();
    React.useEffect(() => {
        // container_img.current.style.opacity = "0";
        // container_img.current.style.filter = "blur(10px)";
        // setTimeout(() => {
            if (activeSort === 0) {
                setActiveGroup(jsonCats.long_hair);
            } else if (activeSort === 1) {
                setActiveGroup(jsonCats.short_hair)
            } else if (activeSort === 2) {
                setActiveGroup(jsonCats.siamese_and_oriental)
            }
            // container_img.current.style.opacity = "1";
            // container_img.current.style.filter = "blur(0)";
        // }, 600);
    }, [activeSort])
    return (
        <MainWrapper>
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

            <div className={s.wrapp_card} ref={container_img}>
                {
                    activeGroup.map((el, index) => <CardBreed key={`${el.name}_${el.index}`} name={el.name} img={el.img} />)
                }
            </div>
        </MainWrapper>
    )
}

export default Breeds_all;
