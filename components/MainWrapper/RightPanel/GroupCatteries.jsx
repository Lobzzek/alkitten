import s from '../../../styles/MainWrapper/RightPanel/GroupCatteries.module.css'
import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
const BlockPerson = dynamic(() => import('./BlockPerson.jsx'));

const GroupCatteries = () => {
    return (
        <div className={s.group_catteries} >
            <div className={s.top_phrase}>
                <h3>Catteries/Breeders</h3>
            </div>
            <div className={s.blocks}>
                <BlockPerson verified rating="4" breed="Maine Coon" index="0" cattery="Newlogica Cattery" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA" />
                <BlockPerson verified rating="4" breed="Maine Coon" index="1" cattery="Newlogica Cattery" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father) We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA" />
                <BlockPerson verified rating="4" breed="Maine Coon" index="2" cattery="Newlogica Cattery" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA" />
                <BlockPerson verified rating="4" breed="Maine Coon" index="3" cattery="Newlogica Cattery" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA" />
                <BlockPerson verified rating="4" breed="Maine Coon" index="4" cattery="Newlogica Cattery" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA" />
            </div>
            <div className={s.link}>
                <Link href="/catteries"><a className={s.view}>View All</a></Link>
            </div>
        </div>
    )
}

export default GroupCatteries
