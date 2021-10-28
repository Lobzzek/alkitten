import React from 'react'
import s from '../../styles/catteries/CardCattery.module.css'
import { useDispatch } from 'react-redux';
import { setActiveCatteryDetails } from '../../Redux/actions/activeCaterryDetails.js'
import { setActiveMap } from '../../Redux/actions/activeMap.js'
import PropTypes from 'prop-types'
const CardCattery = (props) => {
    const dispatch = useDispatch();
    const cnt_data = React.useRef();
    const cnt_breed = React.useRef();
    const cnt_name = React.useRef();
    const more_text = React.useRef();

    

    const [favourite, setFavourite] = React.useState(false);

    React.useEffect(() => {
        if (props.favourite) {
            setFavourite(true);
        }

        
        
        setTimeout(() => {
            for (let i = 0; i < cnt_data.current.childNodes.length; i++) {
                const element = cnt_data.current.childNodes[i];
                if (element.scrollHeight > element.clientHeight && element.tagName === "P") {
                    const fun_enter = () => {
                        more_text.current.childNodes[0].textContent = element.textContent;
                        more_text.current.style.top = `${element.offsetTop}px`;
                        more_text.current.style.left = `${element.offsetLeft}px`;
                        more_text.current.childNodes[0].style.fontSize = `${getComputedStyle(element).fontSize}`;
                        more_text.current.style.display = "block";
                    }
                    element.addEventListener("mouseenter", fun_enter)
                    more_text.current.addEventListener("mouseleave", () => {
                        more_text.current.style.display = "none";
                    })
                }
            }

            for (let i = 0; i < cnt_breed.current.childNodes.length; i++) {
                const element = cnt_breed.current.childNodes[i];
                if (element.scrollHeight > element.clientHeight) {
                    const fun_enter = () => {
                        more_text.current.childNodes[0].textContent = element.textContent;
                        more_text.current.style.top = `${element.parentNode.offsetTop}px`;
                        more_text.current.style.left = `${element.parentNode.offsetLeft}px`;
                        more_text.current.childNodes[0].style.fontSize = `${getComputedStyle(element).fontSize}`;
                        more_text.current.style.display = "block";
                    }
                    element.addEventListener("mouseenter", fun_enter)
                    more_text.current.addEventListener("mouseleave", () => {
                        element.removeEventListener("mouseenter", fun_enter);
                        more_text.current.style.display = "none";
                        setTimeout(() => {
                            element.addEventListener("mouseenter", fun_enter);
                        }, 100);
                    })
                }
            }

            if (cnt_name.current.scrollHeight > cnt_name.current.clientHeight) {
                const fun_enter = () => {
                    let element = cnt_name.current;
                    // console.log(getComputedStyle(element.parentNode).fontSize)
                    more_text.current.childNodes[0].textContent = element.textContent;
                    more_text.current.style.top = `${element.offsetTop}px`;
                    more_text.current.style.left = `${element.offsetLeft}px`;
                    more_text.current.childNodes[0].style.fontSize = `${getComputedStyle(element).fontSize}`;
                    more_text.current.style.display = "block";
                }
                cnt_name.current.addEventListener("mouseenter", fun_enter)
                more_text.current.addEventListener("mouseleave", () => {
                    cnt_name.current.removeEventListener("mouseenter", fun_enter);
                    more_text.current.style.display = "none";
                    setTimeout(() => {
                        cnt_name.current.addEventListener("mouseenter", fun_enter);
                    }, 100);
                })
            }
        }, 200);
        
    }, [])

    return (
        <div className={s.cat_card_info}>
            <div className={`${s.cat_card_info_row} ${s.cat_card_info_row_1}`}>
                <div className={s.cat_card_info_row_text}>
                    <h2 className={s.cat_card_info_row__title} >
                        <span ref={cnt_name}>
                        {
                            props.name ? props.name : "Newlogica Cattery"
                        }
                        </span>
                        {
                            props.verefied ? <img src="/img/icon/checked.svg" alt="cat card info check icon" /> : null
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
            <div className={s.rating}>
                <div className={s.stars}>
                    <img src="/img/icon_star.svg" alt="" />
                    <img src="/img/icon_star.svg" alt="" />
                    <img src="/img/icon_star.svg" alt="" />
                    <img src="/img/icon_star.svg" alt="" />
                    <img src="/img/icon_star.svg" alt="" />
                </div>
                <p className={s.num}>10.0</p>
                <p className={s.vote}>(47)</p>
            </div>
            <div className={s.cat_card_info_img} style={{ "background": `url('${props.img_cattery}') 0/cover no-repeat` }}>
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
                        props.date ? props.date : "5/2/21 (3 m YO)"
                    } </p>
                    {/* <p><img src="/img/icon/gender.svg" alt="" />
                        {
                            props.female ? props.female : "Female"
                        }
                    </p> */}
                    {/* <p><img src="/img/icon/color.svg" alt="" />
                        {
                            props.color ? props.color : "Chocolate Brown dsad dasda"
                        }

                    </p> */}
                    <p className={s.location} onClick={() => dispatch(setActiveMap(true))}><img src="/img/icon/coords.svg" alt="" />
                        {
                            props.location ? props.location : "Los Angeles, CA"
                        }
                    </p>
                    <a href={`${props.href_site}`} className={s.href_site}><img src="/img/icon/href.svg" alt="" />
                        {
                            props.href_site ? props.href_site : "www.usamainecoons.com"
                        }
                    </a>
                    <h5>
                        {
                            props.description ? props.description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ullam vitae rerum illo aperiam repellat, voluptatibus quas beatae aut numquam!"
                            
                        }
                    </h5>
                </div>
                {/* <a href="#" className={s.cat_card_info_row__link}>
                    Detail</a> */}
            </div>
            <button className={s.detail} onClick={() => dispatch(setActiveCatteryDetails(true))}>Detail</button>

            <div className={s.show_more_text} ref={more_text}>
                <p></p>
            </div>
        </div>
    )
}

CardCattery.propTypes = {
    img_cattery: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    href_site: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default CardCattery
