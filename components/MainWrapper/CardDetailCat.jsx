import React from 'react'
import s from '../../styles/MainWrapper/CardDetailCat.module.css'
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { setActiveCatDetails } from '../../Redux/actions/activeCatDetails.js'
import { setActiveMap } from '../../Redux/actions/activeMap.js'

const CardDetail = (props) => {
    const dispatch = useDispatch();
    const cnt_data = React.useRef();
    const cnt_breed = React.useRef();
    const cnt_name = React.useRef();

    const [favourite, setFavourite] = React.useState(false);

    React.useEffect(() => {
        if (props.favourite) {
            setFavourite(true);
        }
        // setTimeout(() => {
        //     for (let i = 0; i < cnt_data.current.childNodes.length; i++) {
        //         const element = cnt_data.current.childNodes[i];
        //         if (element.scrollHeight > element.clientHeight && element.tagName === "P") {
        //             const fun_enter = () => {
        //                 more_text.current.childNodes[0].textContent = element.textContent;
        //                 more_text.current.style.top = `${element.offsetTop}px`;
        //                 more_text.current.style.left = `${element.offsetLeft}px`;
        //                 more_text.current.childNodes[0].style.fontSize = `${getComputedStyle(element).fontSize}`;
        //                 more_text.current.style.display = "block";
        //             }
        //             element.addEventListener("mouseenter", fun_enter)
        //             more_text.current.addEventListener("mouseleave", () => {
        //                 more_text.current.style.display = "none";
        //             })
        //         }
        //     }

        //     for (let i = 0; i < cnt_breed.current.childNodes.length; i++) {
        //         const element = cnt_breed.current.childNodes[i];
        //         if (element.scrollHeight > element.clientHeight) {
        //             const fun_enter = () => {
        //                 more_text.current.childNodes[0].textContent = element.textContent;
        //                 more_text.current.style.top = `${element.parentNode.offsetTop}px`;
        //                 more_text.current.style.left = `${element.parentNode.offsetLeft}px`;
        //                 more_text.current.childNodes[0].style.fontSize = `${getComputedStyle(element).fontSize}`;
        //                 more_text.current.style.display = "block";
        //             }
        //             element.addEventListener("mouseenter", fun_enter)
        //             more_text.current.addEventListener("mouseleave", () => {
        //                 element.removeEventListener("mouseenter", fun_enter);
        //                 more_text.current.style.display = "none";
        //                 setTimeout(() => {
        //                     element.addEventListener("mouseenter", fun_enter);
        //                 }, 100);
        //             })
        //         }
        //     }

        //     if (cnt_name.current.scrollHeight > cnt_name.current.clientHeight) {
        //         const fun_enter = () => {
        //             let element = cnt_name.current;
        //             // console.log(getComputedStyle(element.parentNode).fontSize)
        //             more_text.current.childNodes[0].textContent = element.textContent;
        //             more_text.current.style.top = `${element.offsetTop}px`;
        //             more_text.current.style.left = `${element.offsetLeft}px`;
        //             more_text.current.childNodes[0].style.fontSize = `${getComputedStyle(element).fontSize}`;
        //             more_text.current.style.display = "block";
        //         }
        //         cnt_name.current.addEventListener("mouseenter", fun_enter)
        //         more_text.current.addEventListener("mouseleave", () => {
        //             cnt_name.current.removeEventListener("mouseenter", fun_enter);
        //             more_text.current.style.display = "none";
        //             setTimeout(() => {
        //                 cnt_name.current.addEventListener("mouseenter", fun_enter);
        //             }, 100);
        //         })
        //     }
        // }, 200);
    }, [])

    return (
        <div className={s.cat_card_info}>
            <div className={`${s.cat_card_info_row} ${s.cat_card_info_row_1}`}>
                <div className={s.cat_card_info_row_text}>
                    <h2 className={props.big_title ? `${s.cat_card_info_row__title} ${s.big}` : `${s.cat_card_info_row__title}`}  >
                        <span ref={cnt_name}>
                            {
                                props.name ? props.name : "Queen"
                            }
                        </span>
                        {
                            props.verefied_cat ? <img src="/img/icon/checked.svg" alt="cat card info check icon" /> : null
                        }

                    </h2>
                    <div className={s.cat_card_info_row__sub_titles} ref={cnt_breed}>
                        <p>
                            {
                                props.breed ? props.breed : "Maine Coon"
                            }
                        </p>

                    </div>
                </div>
            </div>
            <div className={s.cat_card_info_img} style={{ "background": `url('${props.img_cat}') 0/cover no-repeat` }}>
                <div onClick={() => setFavourite(!favourite)} className={favourite ? `${s.favourite} ${s.active}` : `${s.favourite}`} >
                    <svg xmlns="http://www.w3.org/2000/svg" className={s.heart} throwIfNamespace="preserve" width="320px" height="260px" version="1.1" viewBox="0 -0.2 5.85 5.5" xlinkHref="http://www.w3.org/1999/xlink">
                        <defs>
                        </defs>
                        <g id="Layer_x0020_1">
                            <metadata id="CorelCorpID_0Corel-Layer" />
                            <path className={s.fil0} d="M2.92 0.82c0,0 0.51,-0.78 1.27,-0.82 0.96,-0.05 1.61,0.67 1.65,1.48 0.05,0.8 -0.68,1.61 -1.15,2.07 -0.98,0.99 -1.42,1.29 -1.76,1.62 -0.33,-0.33 -0.78,-0.62 -1.77,-1.61 -0.46,-0.46 -1.2,-1.26 -1.16,-2.07 0.05,-0.81 0.69,-1.53 1.65,-1.48 0.77,0.04 1.27,0.81 1.27,0.81z" />
                        </g>
                    </svg>
                </div>
            </div>
            <div className={`${s.cat_card_info_row} ${s.cat_card_info_row_2}`}>
                <div className={s.cat_card_info_row_text} ref={cnt_data}>
                    <p><img src="/img/icon/date.svg" alt="" />{
                        props.age ? props.age : "5/2/21 (3 m YO)"
                    } </p>

                    <p><img src="/img/icon/color.svg" alt="" />
                        {
                            props.color ? props.color : "Chocolate Brown"
                        }

                    </p>
                    <p><img src="/img/icon/gender.svg" alt="" />
                        {
                            props.female ? props.female : "Female"
                        }
                    </p>
                    <p className={s.location} onClick={() => dispatch(setActiveMap(true))}><img src="/img/icon/coords.svg" alt="" />
                        {
                            props.location ? props.location : "Los Angeles, CA"
                        }
                    </p>
                    <p><img src="/img/icon/cost.svg" alt="" />
                        {
                            props.cost ? props.cost : "$3500"
                        }
                    </p>

                </div>
            </div>

            <h2 className={`${s.cat_card_info_row__title} ${s.name_cattery}`}>
                <span ref={cnt_name}>
                    {
                        props.name_cattery ? props.name_cattery : "Newlogica Cattery"
                    }
                </span>
                {
                    props.verefied_cattery ? <img src="/img/icon/checked.svg" alt="cat card info check icon" /> : null
                }

            </h2>
            <div className={s.rating}>
                <div className={s.stars}>
                    <img src="/img/icon_star.svg" alt="" />
                    <img src="/img/icon_star.svg" alt="" />
                    <img src="/img/icon_star.svg" alt="" />
                    <img src="/img/icon_star.svg" alt="" />
                    <img src="/img/icon_star.svg" alt="" />
                </div>
                <p className={s.num}>10.0</p>
                <Link href="/catteries/1?comments" onClick={() => dispatch(setActiveCatDetails(false))}>
                    <a>
                        <p className={s.vote}>(47)</p>
                    </a>
                </Link>
            </div>
            {
                props.with_button && (
                    <Link href="/catteries/1">
                        <a>
                            <button className={s.detail}>Contact Cattery</button>
                        </a>
                    </Link>
                )
            }

            {/* <div className={s.show_more_text} ref={more_text}>
                <p></p>
            </div> */}
        </div>
    )
}

export default CardDetail
