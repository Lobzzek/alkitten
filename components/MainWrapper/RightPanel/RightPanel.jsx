import s from '../../../styles/MainWrapper/RightPanel.module.css';
import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
const BlockPerson = dynamic(() => import('./BlockPerson.jsx'));

const RightPanel = () => {
    return (
        <section className={s.right_panel}>
            {/* <div className={s.browse}>
                    <div className={s.text}>
                    <h4>Browse top certified <br /> breeders around you</h4>
                    <a href="#">Create a Buyer Account</a>
                </div>
            </div> */}
            {/* <div className={s.become}>
                <div className={s.text}>
                    <h4>Become a verified <br />
                        breeder at AllKittens</h4>
                    <a href="#">Create a Buyer Account</a>
                </div>
            </div> */}
            <div className={s.ads}>
                <h3>Ads</h3>
            </div>
            {/* <div className={s.verified}>
                <div className={s.text}>
                    <img src="/img/icon_verified.svg" alt="" />
                    <h4>Only Verified <br />
                        Catteries at AllKittens! <br />
                        Learn more Why!</h4>
                </div>
            </div> */}
            {/* <div className={s.started}>
                <div className={s.text}>
                    <h4>Lost on how to <br /> get started?</h4>
                    <p>Here’s a quick guide <br />
                        to help you through <br />
                        allkittens.com</p>
                    <a href="#">Take Me To a Trip</a>
                </div>
            </div> */}

            <div className={s.group_cats}>
                <div className={s.top_phrase}>
                    <h3>Catteries/Breeders</h3>
                </div>
                <div className={s.blocks}>
                    <BlockPerson verified rating="4" index="0" login="LAILALOVES CATTERYLOREM" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA" />
                    <BlockPerson verified rating="4" index="1" login="LAILALOVESLOREMIM CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father) We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA" />
                    <BlockPerson verified rating="4" index="2" login="LAILALOVES CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA" />
                    <BlockPerson verified rating="4" index="3" login="LAILALOVES CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA" />
                    <BlockPerson verified rating="4" index="4" login="LAILALOVES CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA" />
                    <BlockPerson verified rating="4" index="5" login="LAILALOVES CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA" />
                    <BlockPerson verified rating="4" index="6" login="LAILALOVES CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA" />
                    <BlockPerson verified rating="4" index="7" login="LAILALOVES CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA" />
                    <BlockPerson verified rating="4" index="8" login="LAILALOVES CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA" />
                </div>
                <div className={s.link}>
                    <Link href="/catteries"><a className={s.view}>View All</a></Link>
                </div>
            </div>
        </section>
    )
}

export default RightPanel
