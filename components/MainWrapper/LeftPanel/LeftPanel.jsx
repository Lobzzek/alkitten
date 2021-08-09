import s from '../../../styles/LeftPanel.module.css';
import BlockPerson from './BlockPerson.jsx';
import React from 'react'

const LeftPanel = (props) => {    
    // console.log(props.triggered.current)

    const left_p = React.useRef();
    // React.useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (props.triggered.current <= window.scrollY){
    //             left_p.current.style.top = `${props.bottomContent}px`;
    //             left_p.current.style.position = `absolute`;

    //         }else{
    //             if(document.documentElement.clientWidth < 1920){
    //                 left_p.current.style.top = `50% + (0.5vw + 3.073vw) / 3)`;
    //                 left_p.current.style.position = `fixed`;
    //             }else{
    //                 left_p.current.style.top = `calc(50% + (0.5vw + 56.25px) / 3)`;
    //                 left_p.current.style.position = `fixed`;
    //             }
    //         }
    //     })
    // }, [])

    // React.useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (window.scrollY >= props.triggered.current){
    //             if (document.documentElement.clientWidth > 1920){
    //                 left_p.current.style.position = `absolute`;
    //                 left_p.current.style.top = `${props.bottomContent.current - left_p.current.clientHeight * 2 + document.documentElement.clientHeight +
    //                     (document.documentElement.clientHeight * 0.05 + 56.25) / 2}px`;
    //             }else{
    //                 left_p.current.style.position = `absolute`;
    //                 left_p.current.style.top = `${props.bottomContent.current - left_p.current.clientHeight * 2 + document.documentElement.clientHeight +
    //                 (document.documentElement.clientWidth * 0.0359) / 2}px`;
    //             }
                
            
    //         }else{
    //             if(document.documentElement.clientWidth < 1920){
    //                 left_p.current.style.position = `fixed`;
    //                 left_p.current.style.top = `calc(50% + (0.5vw + 3.073vw) / 3)`;
    //             }else{
    //                 left_p.current.style.position = `fixed`;
    //                 left_p.current.style.top = `calc(50% + (0.5vw + 56.25px) / 3)`;
    //             }
    //         }
    //     })
    // }, [])
    return (
        <section className={s.left_panel} ref={left_p}>
         {/* <section className={s.left_panel}> */}
            <div className={s.group_cats}>
                <div className={s.top_phrase}>
                    <h3>Catteries/Breeders</h3>
                </div>
                <div className={s.blocks}>
                    <BlockPerson verified rating="4" login="LAILALOVES CATTERYLOREM" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA"/>
                    <BlockPerson verified rating="4" login="LAILALOVESLOREMIM CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father) We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA"/>
                    <BlockPerson verified rating="4" login="LAILALOVES CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA"/>
                    <BlockPerson verified rating="4" login="LAILALOVES CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA"/>
                    <BlockPerson verified rating="4" login="LAILALOVES CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA"/>
                    <BlockPerson verified rating="4" login="LAILALOVES CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA"/>
                    <BlockPerson verified rating="4" login="LAILALOVES CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA"/>
                    <BlockPerson verified rating="4" login="LAILALOVES CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA"/>
                    <BlockPerson verified rating="4" login="LAILALOVES CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA"/>
                </div>
                <div className={s.link}>
                    <a href="#">View All</a>
                </div>
            </div>
            <div className={s.faq}>
                <div className={s.text}>
                    <h4>FAQs</h4>
                    <a href="#">
                        <div className={s.punkt}>
                            <p>What is allkittens?</p>
                            <p>+</p>
                        </div>
                    </a>
                    <a href="#">
                        <div className={s.punkt}>
                            <p>How does the delivery <br />
                            work?</p>
                            <p>+</p>
                        </div>
                    </a>
                    <a href="#" className={s.view}>View More</a>
                </div>
            </div>
            {/* <div className={s.gallery}>
                <div className={s.text}>
                    <h4>Cat Gallery</h4>
                    <img src="/img/fon_gallery.jpg" alt="" />
                    <a href="#">View Gallery</a>
                </div>
            </div> */}
        </section>
    )
}

export default LeftPanel
