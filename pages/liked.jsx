import React from 'react'
import s from '../styles/liked.module.css'
import MainWrapper from '../components/MainWrapper/MainWrapper.jsx'
import CardCat from '../components/CardCat.jsx'
import CardCattery from '../components/Catteries/CardCattery.jsx'

const Liked = () => {
    const [activeSort, setActiveSort] = React.useState(0);
    return (
        <MainWrapper>
            <div className={s.top_text}>
                <h2>My liked cats/citteries</h2>
            </div>

            <div className={s.sort}>
                    <div className={activeSort === 0 ? `${s.active}` : ``} onClick={() => setActiveSort(0)}>
                        <p>
                            Cats
                        </p>
                    </div>
                    <div className={activeSort === 1 ? `${s.active}` : ``} onClick={() => setActiveSort(1)}>
                        <p>
                            Catteries
                        </p>
                    </div>
            </div>
            <div className={s.cards}>
                {
                    activeSort === 0 ? 

                    (
                        <>
                        <CardCat img_cat="/img/cat_bottom_home.png" img_cattery="/img/icon/catteries.svg" verefied favourite />
                        <CardCat img_cat="/img/cat_bottom_home.png" img_cattery="/img/icon/catteries.svg" verefied favourite />
                        <CardCat img_cat="/img/cat_bottom_home.png" img_cattery="/img/icon/catteries.svg" verefied favourite />
                        <CardCat img_cat="/img/cat_bottom_home.png" img_cattery="/img/icon/catteries.svg" verefied favourite />
                        <CardCat img_cat="/img/cat_bottom_home.png" img_cattery="/img/icon/catteries.svg" verefied favourite />
                        <CardCat img_cat="/img/cat_bottom_home.png" img_cattery="/img/icon/catteries.svg" verefied favourite />
                        </>
                    ) 
                    :
                    (
                        <>
                        <CardCattery img_cattery="/img/icon/catteries.svg" verefied favourite />
                        <CardCattery img_cattery="/img/icon/catteries.svg" verefied favourite />
                        <CardCattery img_cattery="/img/icon/catteries.svg" verefied favourite />
                        <CardCattery img_cattery="/img/icon/catteries.svg" verefied favourite />
                        <CardCattery img_cattery="/img/icon/catteries.svg" verefied favourite />
                        </>
                    )
                }
            </div>
        </MainWrapper>
    )
}

export default Liked
