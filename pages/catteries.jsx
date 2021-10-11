import React from 'react'
import MainWrapper from '../components/MainWrapper/MainWrapper.jsx'
import s from '../styles/catteries/catteries.module.css'
import CardCattery from '../components/Catteries/CardCattery.jsx'
import CardDetail from '../components/Catteries/CardDetail.jsx'
import CardCat from './../components/CardCat.jsx'
import Comment from '../components/Catteries/Comment.jsx'

const Catteries = () => {
    const details = React.useRef();
    const fon_details = React.useRef();
    const cnt_details = React.useRef();

    const [openDetails, setOpenDetails] = React.useState(false);

    const [activeSort, setActiveSort] = React.useState(1);
    const changeActiveSort = (num) => setActiveSort(num);

    const [activeComment, setActiveComment] = React.useState(0);
    const comments = React.useRef();

    React.useEffect(() => {
        if (activeComment < 0){
            setActiveComment(0)
        } else if (activeComment > comments.current.childNodes.length - 1){
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
        if (openDetails){
            details.current.style.display = "flex";
            setTimeout(() => {
                fon_details.current.style.opacity = "1";
                cnt_details.current.style.opacity = "1";
                cnt_details.current.style.transform = "translate(-50%, -50%)";
            }, 200);
        }else{

            fon_details.current.style.opacity = "0";
            cnt_details.current.style.opacity = "0";
            cnt_details.current.style.transform = "translate(-50%, -20%)";
            setTimeout(() => {
                details.current.style.display = "none";

            }, 700);
        }
    }, [openDetails])
    return (
        <MainWrapper>
            <div className={s.top_text}>
                <h2>Find a Cattery You’ll Love!</h2>
                <p>Specify a breed or location or both</p>
            </div>
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
            
            <div className={s.last_kittens}>
                <div className={s.top_text}>
                    <h2>You May Be Interested In</h2>
                </div>
                <div className={s.block_cats}>
                    <CardCattery openDetails={() => setOpenDetails(!openDetails)} img_cat="/img/icon/catteries.svg" verefied favourite />
                    <CardCattery openDetails={() => setOpenDetails(!openDetails)} img_cat="/img/icon/catteries.svg" verefied />
                    <CardCattery openDetails={() => setOpenDetails(!openDetails)} img_cat="/img/icon/catteries.svg" />
                </div>
            </div>

            <div className={s.detail_catteries} ref={details}>
                <div className={s.fon} ref={fon_details} onClick={() => setOpenDetails(false)}></div>
                <div className={s.cnt} ref={cnt_details}>
                    <button className={s.close} onClick={() => setOpenDetails(false)}>
                        <img src="/img/icon_close.svg" alt="" />
                    </button>
                    <div className={s.top_section}>
                        <CardDetail img_cat="/img/icon/catteries.svg" verefied />
                        <div className={s.right_cnt}>
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
                                <Comment name="Lorem Ipsum" href_facebook="#"/>
                                <Comment name="Lorem Ipsum" href_facebook="#"/>
                                <Comment name="Lorem Ipsum" href_facebook="#"/>
                                <Comment name="Lorem Ipsum" href_facebook="#"/>
                                <Comment name="Lorem Ipsum" href_facebook="#"/>
                                <Comment name="Lorem Ipsum" href_facebook="#"/>
                            </div>
                        </div>
                        <button className={s.next} onClick={() => setActiveComment(activeComment + 1)}>
                            <img src="/img/icon_arow.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        
        </MainWrapper>
    )
}

export default Catteries
