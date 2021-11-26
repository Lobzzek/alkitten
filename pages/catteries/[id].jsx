// import { useRouter } from 'next/router';
import s from '../../styles/catteries/cattery.module.css'
import React from 'react';
import MainWrapper from '../../components/MainWrapper/MainWrapper.jsx'
import CardCat from '../../components/CardCat.jsx'
// import Comment from '../../components/Catteries/Comment.jsx'
import CardDetailCattery from '../../components/MainWrapper/CardDetailCattery.jsx'
import AllComments from '../../components/Catteries/AllComments.jsx'
import { useRouter } from 'next/router'
// import { setActiveCaterryDetails, tails} from '../../Redux/actions/activeCaterryDetails.js';
import { useDispatch } from 'react-redux'
import { setActiveGalleryPopup } from '../../Redux/actions/activeGalleryPopup.js';
import { setActiveChats } from '../../Redux/actions/activeChats.js'


const Cattery = () => {
    const dispatch = useDispatch();

    let router = useRouter();
    const comments = React.useRef();

    function offsetPosition(element) {
        let hElem = element.clientHeight;
        let offsetTop = 0;
        do {
            offsetTop += element.offsetTop;
        } while (element = element.offsetParent);
        return [offsetTop, offsetTop + hElem];
    }

    dispatch(setActiveChats(false))
    React.useEffect(() => {
        if (/comment/.test(router.asPath)){
            window.scrollTo(0, offsetPosition(comments.current)[1]);
        }

    }, [])
    return (
        <MainWrapper>
            <div className={s.detail_catteries}>
                {/* <div onClick={() => setOpenDetails(false)}></div> */}
                    <div className={s.top_section}>
                        <CardDetailCattery big_title img_cat="/img/icon/catteries.svg" verefied />
                        <div className={s.right_cnt} onClick={() => dispatch(setActiveGalleryPopup(true))}>
                            <div className={s.vid}>
                                <img src="/img/icon_play.svg" alt="" />
                            </div>
                            <div className={s.img_blocks}>
                                <div className={s.top_b}></div>
                                <div className={s.top_b}></div>
                                <div className={s.top_b}></div>
                                <div className={s.top_b}></div>
                                <div className={s.top_b}></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <button className={s.all_img}>View All</button>
                        </div>
                    </div>

                    <div className={s.cats} ref={comments}>
                        <div className={s.top_text}>
                            <h2>Our cats</h2>
                        </div>
                        <div className={s.wrap_cats}>
                            <CardCat img_cat="/img/cat_bottom_home.png" img_cattery="/img/icon/catteries.svg" verefied favourite />
                            <CardCat img_cat="/img/cat_bottom_home.png" img_cattery="/img/cat_bottom_home.png" />
                            <CardCat img_cat="/img/cat_bottom_home.png" img_cattery="/img/icon/catteries.svg" verefied />
                            <CardCat img_cat="/img/cat_bottom_home.png" img_cattery="/img/icon/catteries.svg" verefied favourite />
                            <CardCat img_cat="/img/cat_bottom_home.png" img_cattery="/img/icon/catteries.svg" verefied favourite />
                            <CardCat img_cat="/img/cat_bottom_home.png" img_cattery="/img/icon/catteries.svg" verefied />
                        </div>
                    </div>

                    <AllComments />
            </div>
        </MainWrapper>
    )
}

export default Cattery
