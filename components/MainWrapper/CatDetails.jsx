import React from 'react';
import s from '../../styles/MainWrapper/CatDetails.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCatDetails } from '../../Redux/actions/activeCatDetails.js'
import {setActiveGalleryPopup} from '../../Redux/actions/activeGalleryPopup.js'
import CardDetailCat from './CardDetailCat.jsx'
import CardCat from '../CardCat.jsx'
const CatDetails = () => {
    const details = React.useRef();
    const fon_details = React.useRef();
    const cnt_details = React.useRef();

    const active_cat_details = useSelector(state => state.active_cat_details);
    const dispatch = useDispatch();

    // const [openDetails, setOpenDetails] = React.useState(false);

    React.useEffect(() => {
        if (active_cat_details.item) {
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
    }, [active_cat_details])
    return (
        <div className={s.detail_cat} ref={details}>
            <div className={s.fon} ref={fon_details} onClick={() => dispatch(setActiveCatDetails(false))}></div>
            <div className={s.cnt} ref={cnt_details}>
                <button className={s.close} onClick={() => dispatch(setActiveCatDetails(false))}>
                    <img src="/img/icon_close.svg" alt="" />
                </button>
                    <CardDetailCat verefied_cattery verefied_cat img_cat="/img/icon/catteries.svg" with_button verefied />
                    <div className={s.right_cnt}>
                        <div className={s.media} onClick={() => dispatch(setActiveGalleryPopup(true))}>
                            <div className={s.vid}>
                                <img src="/img/icon_play.svg" alt="" />
                            </div>
                            <div className={s.img_blocks}>
                                <div className={s.top_b}></div>
                                <div className={s.top_b}></div>
                                <div className={s.top_b}></div>
                                <div className={s.top_b}></div>
                                <div className={s.top_b}></div>
                            </div>
                        </div>
                        <div className={s.desc}>
                            <p>
                                We are a breeder located in Temecula, CA, and specialize in Maine Coon kittens.

                                We are family based cat breeders since 1992. We are located in California, near San Diego, and always happy to assist you, help you with any questions regards to Maine Coon Cats. Our kittens are raised in our house along with our kids, me and my husband; they are members of our family literally, you can come and see that they growing up in an
                                atmosphere of kindness and love.

                                We produce a variety of colors ranging from brown to silver to red and black smokes. Some of our kittens are also polydactyl.  All of our kittens come current on their wormings, vaccinations and a health guarantee.
                            </p>
                        </div>
                    </div>
                    <div className={s.more_cats}>
                        <h2>More Kittens From This Cattery</h2>
                        <div className={s.block_cats}>
                        <CardCat horizontal small img_cat="/img/cat_for_block_person.jpg" img_cattery="/img/cat_for_block_person.jpg"/>
                        <CardCat horizontal small img_cat="/img/cat_for_block_person.jpg" img_cattery="/img/cat_for_block_person.jpg"/>
                        <CardCat horizontal small img_cat="/img/cat_for_block_person.jpg" img_cattery="/img/cat_for_block_person.jpg"/>
                        <CardCat horizontal small img_cat="/img/cat_for_block_person.jpg" img_cattery="/img/cat_for_block_person.jpg"/>
                        <CardCat horizontal small img_cat="/img/cat_for_block_person.jpg" img_cattery="/img/cat_for_block_person.jpg"/>
                        <CardCat horizontal small img_cat="/img/cat_for_block_person.jpg" img_cattery="/img/cat_for_block_person.jpg"/>
                        <CardCat horizontal small img_cat="/img/cat_for_block_person.jpg" img_cattery="/img/cat_for_block_person.jpg"/>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default CatDetails
