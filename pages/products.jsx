import React from 'react';
import MainWrapper from '../components/MainWrapper/MainWrapper.jsx';
import s from '../styles/products/products.module.css';
import CardGoods from '../components/Products/CardGoods.jsx';
import CardGoodsSlider from '../components/Products/CardGoodsSlider.jsx';

const products = () => {
    let dataCategory1 = [
        { name_link: "Applaws", href_a: "#"},
        { name_link: "★ Concept for Life", href_a: "#"},
        { name_link: "Hill's Prescription D", href_a: "#"},
        { name_link: "Hill's Science Plan", href_a: "#"},
        { name_link: "IAMS", href_a: "#" },
        { name_link: "James Wellbeloved", href_a: "#" },
        { name_link: "Purina ONE", href_a: "#" },
        { name_link: "Purina Pro Plan", href_a: "#" },
    ]

    let dataBottomSlider = [
        {
            img: "https://shop-cdn-m.mediazs.com/bilder/6/140/20342_pla_catsbest_original_5l_6.jpg",
            title: "Almo Nature 6 x 70g",
            rating: "5",
            price: "6.69",
            downprice: "15.93 / kg" 
        },
        {
            img: "https://shop-cdn-m.mediazs.com/bilder/1/140/518908_sparpaket_almo_nature_24x70g_1.jpg",
            title: "Almo Nature 6 x 70g",
            rating: "4",
            price: "6.69",
            downprice: "15.93 / kg"
        },
        {
            img: "https://shop-cdn-m.mediazs.com/bilder/8/140/63189_pla_hfc_jelly_thunfisch_8.jpg",
            title: "Almo Nature 6 x 70g",
            rating: "3",
            price: "6.69",
            downprice: "15.93 / kg"
        },
        {
            img: "https://shop-cdn-m.mediazs.com/bilder/9/140/578310_9.jpg",
            title: "Almo Nature 6 x 70g",
            rating: "5",
            price: "6.69",
            downprice: "15.93 / kg"
        },
        {
            img: "https://shop-cdn-m.mediazs.com/bilder/8/140/27535_pla_almo_nature_huhn_rind_70g_8.jpg",
            title: "Almo Nature 6 x 70g",
            rating: "5",
            price: "6.69",
            downprice: "15.93 / kg"
        },
        {
            img: "https://shop-cdn-m.mediazs.com/bilder/8/140/70832_pla_applaws_chicken_breast_70g_8.jpg",
            title: "Almo Nature 6 x 70g",
            rating: "5",
            price: "6.69",
            downprice: "15.93 / kg"
        },
        {
            img: "https://shop-cdn-m.mediazs.com/bilder/8/140/353347_8.jpg",
            title: "Almo Nature 6 x 70g",
            rating: "5",
            price: "6.69",
            downprice: "15.93 / kg"
        },
        {
            img: "https://shop-cdn-m.mediazs.com/bilder/6/140/20342_pla_catsbest_original_5l_6.jpg",
            title: "Almo Nature 6 x 70g",
            rating: "5",
            price: "6.69",
            downprice: "15.93 / kg"
        },
        {
            img: "https://shop-cdn-m.mediazs.com/bilder/2/140/22657_PLA_Applaws_Katzenfutter_Thunfischfilet_70g_156g_2.jpg",
            title: "Almo Nature 6 x 70g",
            rating: "5",
            price: "6.69",
            downprice: "15.93 / kg"
        },

    ]
    const refActiveSlide = React.useRef(0)
    const [activeSlide, setActiveSlide] = React.useState(refActiveSlide.current);

    const cnt_slider_top = React.useRef();

    React.useEffect(() => {
        setInterval(() => {
            if (refActiveSlide.current === 0) {
                refActiveSlide.current = 1;
                setActiveSlide(refActiveSlide.current)
            } else if (refActiveSlide.current === 1) {
                refActiveSlide.current = 0;
                setActiveSlide(refActiveSlide.current)
            }
            
        }, 5000);
    }, [])

    React.useEffect(() => {
        cnt_slider_top.current.style.opacity = "0";
        cnt_slider_top.current.style.filter = "blur(10px)";
        setTimeout(() => {
            if (activeSlide === 0) {
                cnt_slider_top.current.style.background = `url(https://uxt-cf-images.mediazs.com/m7nty8w6vr94/3lv7zmbADxek7n1bQPcUz4/e2561e4cb14b4edc97a11fc9d107ee0d/2020_03_RosiesFarm_C_1000x160_UK.jpg?fm=jpg&fl=progressive&w=928&q=85)`
                cnt_slider_top.current.style.backgroundPosition = "center";
                cnt_slider_top.current.style.backgroundSize = "cover";
            } else if (activeSlide === 1){        
                cnt_slider_top.current.style.background = `url(https://uxt-cf-images.mediazs.com/m7nty8w6vr94/6jrRTVnlRb2LKFgVUWcRjL/508a63856a17643763b318b3e9fda1db/2020_01_Tigerino_General_1000x160_UK.jpg?fm=jpg&fl=progressive&w=928&q=85)`
                cnt_slider_top.current.style.backgroundPosition = "center";
                cnt_slider_top.current.style.backgroundSize = "cover";
            }
            cnt_slider_top.current.style.opacity = "1";
            cnt_slider_top.current.style.filter = "blur(0)";
        }, 600);
        
    }, [activeSlide])

    //bottom slider

    const [activePageBSlider, setActivePageBSlider] = React.useState(0);
    const block_cards_slider = React.useRef();

    React.useEffect(() => {
        if (activePageBSlider >= dataBottomSlider.length - 3){
            setActivePageBSlider(dataBottomSlider.length - 3)
        } else if (activePageBSlider < 0){
            setActivePageBSlider(0);
        }else if ( activePageBSlider === 0){
            block_cards_slider.current.style.transform = `translateX(-0)`;
        }

        if(document.documentElement.clientWidth > 1903){
            for (let i = 0; i < activePageBSlider; i++) {
                block_cards_slider.current.style.transform = `translateX(-${190 * activePageBSlider}px)`;
            }
        }else{
            for (let i = 0; i < activePageBSlider; i++) {
                block_cards_slider.current.style.transform = `translateX(-${9.984 * activePageBSlider}vw)`;
            }
        }
        
    }, [activePageBSlider])

    const nextPageBSlider = () => setActivePageBSlider(activePageBSlider + 1);
    const prevPageBSlider = () => setActivePageBSlider(activePageBSlider - 1);
    return (
        <MainWrapper>
            <div className={s.top_text}>
                <h2>Our Products</h2>
                <p>Alkittens offers a wide range of cat supplies and cat accessories</p>
            </div>

            <div className={s.categories}>
                <div className={s.left_panel}>
                    <h3>Categories</h3>
                    <ul>
                        <li><a href="#">Dry Cat Food</a></li>
                        <li><a href="#">Wet Cat Food</a></li>
                        <li><a href="#">Consequuntur?</a></li>
                        <li><a href="#">Cat Litter</a></li>
                        <li><a href="#">★ Exclusive Cat Food, Litter &amp; Treat..</a></li>
                        <li><a href="#">Cat Litter Boxes &amp; Litter Trays</a></li>
                        <li><a href="#">Cat Trees &amp; Cat Scratching</a></li>
                        <li><a href="#">Posts</a></li>
                        <li><a href="#">Cat Baskets &amp; Beds</a></li>
                        <li><a href="#">Cat Toys</a></li>
                        <li><a href="#">Cat Bowls &amp; Fountains</a></li>
                        <li><a href="#">Cat Flaps &amp; Nets</a></li>
                        <li><a href="#">Cat Treats &amp; Snacks</a></li>
                        <li><a href="#">Cat Care &amp; Grooming</a></li>
                        <li><a href="#">Cat Supplements &amp; Specialty Food</a></li>
                        <li><a href="#">Kitten Products</a></li>
                        <li><a href="#" className={s.red}>Special Offers</a></li>
                        <li><a href="#" className={s.red}>Trial Offers</a></li>
                        <li><a href="#" className={s.red}>New Products!</a></li>
                    </ul>
                </div>
                <div className={s.right_panel}>
                    <div className={s.top_slider}>
                        <div className={s.cnt} ref={cnt_slider_top}>

                        </div>
                        <div className={s.dots}>
                            <span className={activeSlide === 0 && `${s.active}`} onClick={() => setActiveSlide(0)}></span>
                            <span className={activeSlide === 1 && `${s.active}`} onClick={() => setActiveSlide(1)}></span>
        
                            {/* {
                                dots.map((el, index) => <span key={`${index}_dots`}
                                    className={activePage === index + 1 ? `${s.active}` : ``}
                                    onClick={() => setActivePage(index + 1)}
                                ></span>)
                            } */}
                        </div>
                    </div>
                    <div className={s.block_cards}>
                        <CardGoods type="wide" name_category="Dry Cat Food" linkOnCatagory="#" img="/img/img_for_goods.jpg" dataLinks={dataCategory1}></CardGoods>
                        <CardGoods type="wide" name_category="Cat Food" linkOnCatagory="#" img="https://shop-cdn-m.mediazs.com/bilder/1/140/Cat_Wetfood_1000x1000_1.jpg" dataLinks={dataCategory1}></CardGoods>
                        <CardGoods type="wide" name_category="Cat Food" linkOnCatagory="#" img="https://shop-cdn-m.mediazs.com/bilder/4/140/Cat_Litter_1000x1000_4.jpg" dataLinks={dataCategory1}></CardGoods>
                        <CardGoods type="wide" name_category="Cat Food" linkOnCatagory="#" img="https://shop-cdn-m.mediazs.com/bilder/1/140/ExclusiveCat_Prod_1000x1000_UK_1.jpg" dataLinks={dataCategory1}></CardGoods>
                        <CardGoods type="wide" name_category="Cat Food" linkOnCatagory="#" img="https://shop-cdn-m.mediazs.com/bilder/1/140/Cat_Toilet_1000x1000_1.jpg" dataLinks={dataCategory1}></CardGoods>
                        <CardGoods type="wide" name_category="Cat Food" linkOnCatagory="#" img="https://shop-cdn-m.mediazs.com/bilder/1/140/Cat_Scratchtree_1000x1000_1.jpg" dataLinks={dataCategory1}></CardGoods>

                        <CardGoods type="narrow" name_category="Cat Baskets &amp; Beds" linkOnCatagory="#" img="/img/img_for_goods.jpg" dataLinks={dataCategory1}></CardGoods>
                        <CardGoods type="narrow" name_category="Cat Roys" linkOnCatagory="#" img="https://shop-cdn-m.mediazs.com/bilder/1/140/Cat_Wetfood_1000x1000_1.jpg" dataLinks={dataCategory1}></CardGoods>
                        <CardGoods type="narrow" name_category="Cat Bowls" linkOnCatagory="#" img="https://shop-cdn-m.mediazs.com/bilder/4/140/Cat_Litter_1000x1000_4.jpg" dataLinks={dataCategory1}></CardGoods>
                        <CardGoods type="narrow" name_category="Cat Flaps" linkOnCatagory="#" img="https://shop-cdn-m.mediazs.com/bilder/1/140/ExclusiveCat_Prod_1000x1000_UK_1.jpg" dataLinks={dataCategory1}></CardGoods>
                        <CardGoods type="narrow" name_category="Cat Treats" linkOnCatagory="#" img="https://shop-cdn-m.mediazs.com/bilder/1/140/Cat_Toilet_1000x1000_1.jpg" dataLinks={dataCategory1}></CardGoods>
                        <CardGoods type="narrow" name_category="Cat Care" linkOnCatagory="#" img="https://shop-cdn-m.mediazs.com/bilder/1/140/Cat_Scratchtree_1000x1000_1.jpg" dataLinks={dataCategory1}></CardGoods>
                        <CardGoods type="narrow" name_category="Dry Supplements &amp; Specialty Food" linkOnCatagory="#" img="/img/img_for_goods.jpg" dataLinks={dataCategory1}></CardGoods>
                        <CardGoods type="narrow" name_category="Cat Carriers" linkOnCatagory="#" img="https://shop-cdn-m.mediazs.com/bilder/1/140/Cat_Wetfood_1000x1000_1.jpg" dataLinks={dataCategory1}></CardGoods>
                        <CardGoods type="narrow" name_category="Kitten Products" linkOnCatagory="#" img="https://shop-cdn-m.mediazs.com/bilder/4/140/Cat_Litter_1000x1000_4.jpg" dataLinks={dataCategory1}></CardGoods>
                    </div>
                    <h2>Recommended for your pet</h2>
                    <div className={s.bottom_slider}>
                        <button title="prev item" className={s.prev_page} onClick={() => prevPageBSlider()}>
                            <img src="/img/icon_arow.svg" alt="" />
                        </button>
                        <div className={s.wrap_items}>
                            <div className={s.block_cards_slider} ref={block_cards_slider}>
                                {
                                    dataBottomSlider.map(el => <CardGoodsSlider 
                                        img={el.img} 
                                        rating={el.rating} 
                                        title={el.title}
                                        price={el.price} 
                                        downprice={el.downprice} />
                                    )
                                }
                                
                            </div>
                        </div>
                        <button title="next item" className={s.next_page} onClick={() => nextPageBSlider()}>
                            <img src="/img/icon_arow.svg" alt="" />
                        </button>
                        
                    </div>
                </div>

            </div>


        </MainWrapper>
    )
}

export default products
