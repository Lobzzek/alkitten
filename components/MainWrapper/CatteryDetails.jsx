import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveGalleryPopup } from '../../Redux/actions/activeGalleryPopup.js';
import { setActiveCatteryDetails } from '../../Redux/actions/activeCaterryDetails.js'
import CardDetailCattery from './CardDetailCattery.jsx'
import CardCat from '../../components/CardCat.jsx'
import Comment from './Comment.jsx'
import Link from 'next/link'
import s from '../../styles/MainWrapper/CatteryDetails.module.css'

const CatteryDetails = () => {
    const active_cattery_details = useSelector(state => state.active_cattery_details);

    const dispatch = useDispatch();
    const details = React.useRef();
    const fon_details = React.useRef();
    const cnt_details = React.useRef();

    const [activeComment, setActiveComment] = React.useState(0);
    const comments = React.useRef();

    React.useEffect(() => {
        if (activeComment < 0) {
            setActiveComment(0)
        } else if (activeComment > comments.current.childNodes.length - 1) {
            setActiveComment(comments.current.childNodes.length - 1)
        }

        let leftBlock = 0;
        for (let i = 0; i < activeComment; i++) {
            leftBlock -= 21.84
        }

        if (document.documentElement.clientWidth < 1920) {
            comments.current.style.transform = `translateX(${leftBlock}vw)`

        } else {
            comments.current.style.transform = `translateX(${leftBlock * 1930 / 100}px)`;
        }

    }, [activeComment])

    React.useEffect(() => {
        if (active_cattery_details.item) {
            details.current.style.display = "flex";
            document.querySelector("html").style.overflowY = "hidden";
            setTimeout(() => {
                fon_details.current.style.opacity = "1";
                cnt_details.current.style.opacity = "1";
                cnt_details.current.style.transform = "translate(-50%, -50%)";
            }, 200);
        } else {
            document.querySelector("html").style.overflowY = "scroll";
            fon_details.current.style.opacity = "0";
            cnt_details.current.style.opacity = "0";
            cnt_details.current.style.transform = "translate(-50%, -20%)";
            setTimeout(() => {
                details.current.style.display = "none";

            }, 700);
        }
    }, [active_cattery_details])
    return (
        <div className={s.detail_catteries} ref={details}>
            <div className={s.fon} ref={fon_details} onClick={() => dispatch(setActiveCatteryDetails(false))}></div>
            <div className={s.cnt} ref={cnt_details}>
                <button className={s.close} onClick={() => dispatch(setActiveCatteryDetails(false))}>
                    <img src="/img/icon_close.svg" alt="" />
                </button>
                <div className={s.top_section}>
                    <CardDetailCattery img_cat="/img/icon/catteries.svg" with_button verefied />
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
                        <button className={s.all_img} >View All</button>
                    </div>
                </div>

                <div className={s.cats}>
                    <div className={s.top_text}>
                        <h2>Our cats</h2>
                    </div>
                    <div className={s.wrap_cats}>
                        <CardCat img_cat="/img/cat_bottom_home.png" img_cattery="/img/icon/catteries.svg" verefied favourite />
                        <CardCat img_cat="/img/cat_bottom_home.png" img_cattery="/img/cat_bottom_home.png" />
                        <CardCat img_cat="/img/cat_bottom_home.png" img_cattery="/img/icon/catteries.svg" verefied />
                    </div>
                </div>

                <div className={s.comments}>
                    <button className={s.prev} onClick={() => setActiveComment(activeComment - 1)}>
                        <img src="/img/icon_arow.svg" alt="" />
                    </button>
                    <div className={s.wrap_comments}>
                        <div className={s.comments} ref={comments}>
                            <Comment name="Lorem Ipsum" href_facebook="#" />
                            <Comment name="Lorem Ipsum" href_facebook="#" />
                            <Comment name="Lorem Ipsum" href_facebook="#" />
                            <Comment name="Lorem Ipsum" href_facebook="#" />
                            <Comment name="Lorem Ipsum" href_facebook="#" />
                            <Comment name="Lorem Ipsum" href_facebook="#" />
                        </div>
                    </div>
                    <button className={s.next} onClick={() => setActiveComment(activeComment + 1)}>
                        <img src="/img/icon_arow.svg" alt="" />
                    </button>
                </div>
                <Link href="/catteries/1?comment">
                    <a>
                        <p className={s.all_com}>All Comments</p>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default CatteryDetails
