import s from '../../styles/Header.module.css';
import Link from 'next/link'

const Header = () => {
    return (
        <section className={s.header}>
            <div className={s.green_sect}>
                <div className={s.wrap}>
                    <div className={s.logo}>
                        <img src="/img/logoForHeader.svg" />
                    </div>
                    <nav>
                        <Link href="/"><a>Home</a></Link>
                        <Link href="/breeds"><a>Breeds</a></Link>
                        <a href="#">Catteries</a>
                        <a href="#">Products</a>
                        <a href="#">Deals</a>
                        <a href="#">Gallery</a>
                        <a href="#">FAQ/Guide</a>
                    </nav>
                    <div className={s.user}>
                        <a href="#" className={s.message}><img src="/img/icon_messge.svg" alt="" /></a>
                        <a href="#" className={s.sign}>Sign Up</a>
                        <a href="#" className={s.log}>Log In</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header
