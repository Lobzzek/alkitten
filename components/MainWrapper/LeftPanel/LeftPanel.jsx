import s from '../../../styles/MainWrapper/LeftPanel.module.css';
// import BlockPerson from './BlockPerson.jsx';
import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
const BlockPerson = dynamic(() => import('../RightPanel/BlockPerson.jsx'));

const LeftPanel = () => {    

    return (
        <section className={s.left_panel}>
            <div className={s.group_cats}>
                <div className={s.top_phrase}>
                    <h3>Catteries/Breeders</h3>
                </div>
                <div className={s.blocks}>
                    <BlockPerson verified rating="4" index="0" login="LAILALOVES CATTERYLOREM" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA"/>
                    <BlockPerson verified rating="4" index="1" login="LAILALOVESLOREMIM CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father) We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA"/>
                    <BlockPerson verified rating="4" index="2" login="LAILALOVES CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA"/>
                    <BlockPerson verified rating="4" index="3" login="LAILALOVES CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA"/>
                    <BlockPerson verified rating="4" index="4" login="LAILALOVES CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA"/>
                    <BlockPerson verified rating="4" index="5" login="LAILALOVES CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA"/>
                    <BlockPerson verified rating="4" index="6" login="LAILALOVES CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA"/>
                    <BlockPerson verified rating="4" index="7" login="LAILALOVES CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA"/>
                    <BlockPerson verified rating="4" index="8" login="LAILALOVES CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA"/>
                </div>
                <div className={s.link}>
                    <Link href="/catteries"><a className={s.view}>View All</a></Link>
                </div>
            </div>
            <div className={s.faq}>
                <div className={s.text}>
                    <h4>FAQs</h4>
                    <Link href="/faq">
                        <a>
                            <div className={s.punkt}>
                                <p>What is allkittens?</p>
                                <p>+</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/faq">
                        <a>
                            <div className={s.punkt}>
                                <p>How does the delivery <br />
                                work?</p>
                                <p>+</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/faq"><a className={s.view}>View More</a></Link>
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
