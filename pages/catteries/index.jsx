import React from 'react'
import MainWrapper from '../../components/MainWrapper/MainWrapper.jsx'
import s from '../../styles/catteries/catteries.module.css'
import CardCattery from '../../components/Catteries/CardCattery.jsx'



const Catteries = () => {

    const [activeSort, setActiveSort] = React.useState(1);
    const changeActiveSort = (num) => setActiveSort(num);
   
    return (
        <MainWrapper>
            <div className={s.top_text}>
                <h2>Find a Cattery You’ll Love!</h2>
                <p>Specify a breed or location or both</p>
            </div>
            <div className={s.sort}>
                <div className={s.sort_breeds}>
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
                <div className={s.sort_location}>
                    <ul>
                        <li><input type="radio" name="location" id="inp_rad_location0" defaultChecked /><label htmlFor="inp_rad_location0">All States</label></li>
                        <li><input type="radio" name="location" id="inp_rad_location1" /><label htmlFor="inp_rad_location1">My State</label></li>
                        <li><input type="radio" name="location" id="inp_rad_location2" /><label htmlFor="inp_rad_location2">Worldwide</label></li>
                        <li><input type="radio" name="location" id="inp_rad_location3" /><label htmlFor="inp_rad_location3">Specific (Map)</label></li>
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
                </div>
            </div>
        </MainWrapper>
    )
}

export default Catteries
