import s from '../styles/home/CardCat.module.css'
import React from 'react'
const CardCat = (props) => {

    const cnt_data = React.useRef();
    const cnt_name = React.useRef();
    const more_text = React.useRef();

    const [favourite, setFavourite] = React.useState(false);

    React.useEffect(() => {
        if(props.favourite){
            setFavourite(true);
        }
        for (let i = 0; i < cnt_data.current.childNodes.length; i++) {
            const element = cnt_data.current.childNodes[i];
            if (element.scrollHeight > element.clientHeight){
                const fun_enter = () => {
                    more_text.current.childNodes[0].textContent = element.textContent;
                    more_text.current.style.top = `${element.offsetTop}px`;
                    more_text.current.style.left = `${element.offsetLeft}px`;
                    more_text.current.style.display = "block";
                }
                element.addEventListener("mouseenter", fun_enter)
                more_text.current.addEventListener("mouseleave", () => {
                    // element.removeEventListener("mouseenter", fun_enter);
                    more_text.current.style.display = "none";
                    // setTimeout(() => {
                    //     element.addEventListener("mouseenter", fun_enter);
                    // }, 100);
                })
            }
        }

        for (let i = 0; i < cnt_name.current.childNodes.length; i++) {
            const element = cnt_name.current.childNodes[i];
            // console.log(more_text.current.childNodes[0].textContent)
            if (element.scrollHeight > element.clientHeight) {
                const fun_enter = () => {
                    more_text.current.childNodes[0].textContent = element.textContent;
                    more_text.current.style.top = `${element.offsetTop}px`;
                    more_text.current.style.left = `${element.offsetLeft}px`;
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
    }, [])

    return (
        <div className={s.cat_card_info}>
            <div className={`${s.cat_card_info_row} ${s.cat_card_info_row_1}`}>
                <div className={s.cat_card_info_row_text}>
                    <h2 className={s.cat_card_info_row__title}>
                        {
                            props.name ? props.name : "QUEEN"
                        }
                        {
                            props.verefied ? <img src="/img/icon/checked.svg" alt="cat card info check icon" /> : null
                        }
                    </h2>
                    <div className={s.cat_card_info_row__sub_titles} ref={cnt_name}>
                        <p>
                            
                            {
                                props.breed ? props.breed : "Maine Coon"
                            }
                        </p>
                        <p>
                            {
                                props.cattery ? props.cattery : "Newlogica Cattery das dasda dsa"
                            }
                        </p>
                    </div>
                </div>
                {/* <img
                    className={s.cat_card_info__icon}
                    src="img/icon/catteries.svg"
                    alt="cat card info icon"
                /> */}
                <div className={s.cat_card_info__icon} style={{ background: `url('${props.img_cattery}') 0/cover no-repeat` }}></div>
            </div>
            <div className={s.cat_card_info_img} style={{ "background": `url('${props.img_cat}') 0/cover no-repeat`}}>
                <div onClick={() => setFavourite(!favourite)} className={favourite ? `${s.favourite} ${s.active}` : `${s.favourite}` } >
                    <svg xmlns="http://www.w3.org/2000/svg" className={s.heart} throwIfNamespace="preserve" width="320px" height="260px" version="1.1" viewBox="0 -0.2 5.85 5.5" xlinkHref="http://www.w3.org/1999/xlink">
                         <defs>
                        </defs>
                        <g id="Layer_x0020_1">
                            <metadata id="CorelCorpID_0Corel-Layer" />
                            <path class={s.fil0} d="M2.92 0.82c0,0 0.51,-0.78 1.27,-0.82 0.96,-0.05 1.61,0.67 1.65,1.48 0.05,0.8 -0.68,1.61 -1.15,2.07 -0.98,0.99 -1.42,1.29 -1.76,1.62 -0.33,-0.33 -0.78,-0.62 -1.77,-1.61 -0.46,-0.46 -1.2,-1.26 -1.16,-2.07 0.05,-0.81 0.69,-1.53 1.65,-1.48 0.77,0.04 1.27,0.81 1.27,0.81z" />
                        </g>
                    </svg>
                </div>
            </div>
            <div className={`${s.cat_card_info_row} ${s.cat_card_info_row_2}`}>
                <div className={s.cat_card_info_row_text} ref={cnt_data}>
                    <p><img src="/img/icon/date.svg" alt="" />{
                        props.age ? props.age : "5/2/21 (3 m YO)"
                    } </p>
                    <p><img src="/img/icon/gender.svg" alt="" />
                    {
                        props.female ? props.female : "Female"
                    }
                     </p>
                    <p><img src="/img/icon/color.svg" alt="" /> 
                        {
                            props.color ? props.color : "Chocolate Brown dsad dasda"
                        }
                        
                    </p>
                    <p><img src="/img/icon/coords.svg" alt="" /> 
                    {
                            props.location ? props.location : "Los Angeles, CA jkdsa djksajkdj jaksd"
                    }
                   </p>
                </div>
                <a href="#" className={s.cat_card_info_row__link}>
                    Detail</a>
            </div>

            <div className={s.show_more_text} ref={more_text}>
                <p></p>
            </div>
        </div>
    )
}

export default CardCat;
