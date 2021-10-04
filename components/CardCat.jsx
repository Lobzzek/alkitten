import s from '../styles/home/CardCat.module.css'
import React from 'react'
const CardCat = (props) => {

    const cnt_data = React.useRef();
    const cnt_name = React.useRef();
    const more_text = React.useRef();

    React.useEffect(() => {
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
                        <img src="/img/icon/checked.svg" alt="cat card info check icon" />
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
                <img
                    className={s.cat_card_info__icon}
                    src="img/icon/1.svg"
                    alt="cat card info icon"
                />
            </div>
            <div className={s.cat_card_info_img} style={{ "background": `url('${props.img_cat}') 0/cover no-repeat`}}></div>
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
