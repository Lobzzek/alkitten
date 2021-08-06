import s from '../../../styles/LeftPanel.module.css';
import BlockPerson from './BlockPerson.jsx';

const LeftPanel = () => {
    return (
        <section className={s.left_panel}>
            <div className={s.group_cats}>
                <div className={s.top_phrase}>
                    <h3>Catteries/Breeders</h3>
                </div>
                <div className={s.blocks}>
                    <BlockPerson verified rating="4" login="LAILALOVES CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA"/>
                    <BlockPerson verified rating="4" login="LAILALOVES CATTERY" description="We are a breeder located in McKinney, TX and specialize in Exotic Folds / Foldex kittens. The queen (mother) is an Exotic Long Hair and the king (father)" location="Temecula, CA"/>
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
                    <div className={s.punkt}>
                        <p>What is allkittens?</p>
                        <a href="#">+</a>
                    </div>
                    <div className={s.punkt}>
                        <p>How does the delivery <br />
                        work?</p>
                        <a href="#">+</a>
                    </div>
                    <a href="#">View More</a>
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
