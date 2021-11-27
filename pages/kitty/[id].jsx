import s from '../../styles/kitty/kitty.module.css'
import React from 'react';
import MainWrapper from '../../components/MainWrapper/MainWrapper.jsx'
import CardCat from '../../components/CardCat.jsx'
import CardDetailCat from '../../components/Kitty/CardDetailCat.jsx'
import { useDispatch } from 'react-redux'
import { setActiveGalleryPopup } from '../../Redux/actions/activeGalleryPopup.js';


const Kitty = () => {

    const dispatch = useDispatch();

    return (
        <MainWrapper>
            <div className={s.detail_cat}>
                <div className={s.top_block}>
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
                </div>
                <div className={s.more_cats}>
                    <h2>More Kittens From This Cattery</h2>
                    <div className={s.block_cats}>
                        <CardCat verefied img_cat="/img/cat_for_block_person.jpg" img_cattery="/img/cat_for_block_person.jpg" />
                        <CardCat verefied img_cat="/img/cat_for_block_person.jpg" img_cattery="/img/cat_for_block_person.jpg" />
                        <CardCat verefied img_cat="/img/cat_for_block_person.jpg" img_cattery="/img/cat_for_block_person.jpg" />
                        <CardCat verefied img_cat="/img/cat_for_block_person.jpg" img_cattery="/img/cat_for_block_person.jpg" />
                        <CardCat verefied img_cat="/img/cat_for_block_person.jpg" img_cattery="/img/cat_for_block_person.jpg" />
                        <CardCat verefied img_cat="/img/cat_for_block_person.jpg" img_cattery="/img/cat_for_block_person.jpg" />
                        <CardCat verefied img_cat="/img/cat_for_block_person.jpg" img_cattery="/img/cat_for_block_person.jpg" />
                        <CardCat verefied img_cat="/img/cat_for_block_person.jpg" img_cattery="/img/cat_for_block_person.jpg" />
                    </div>
                </div>
            </div>
        </MainWrapper >
    )
}

export default Kitty
