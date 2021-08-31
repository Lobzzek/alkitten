import s from '../../styles/MainWrapper/Header.module.css';
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
const Header = () => {

    const router = useRouter();
    return (
        <section className={s.header}>
            <div className={s.green_sect}>
                <div className={s.wrap}>
                    <div className={s.logo}>
                        <img src="/img/logoForHeader.svg" alt="logo_site"/>
                    </div>
                    <nav>
                        <Link href="/"><a className={classNames("", { [s.active]: router.pathname === "/" })}>Home</a></Link>
                        <Link href="/breeds"><a className={classNames("", { [s.active]: router.pathname === "/breeds" })}>Breeds</a></Link>
                        <a href="#">Catteries</a>
                        <Link href="/products"><a className={classNames("", { [s.active]: router.pathname === "/products" })}>Products</a></Link>
                        <a href="#">Deals</a>
                        <Link href="/gallery"><a className={classNames("", { [s.active]: router.pathname === "/gallery" })}>Gallery</a></Link>
                        <Link href="/faq"><a className={classNames("", { [s.active]: router.pathname === "/faq" })}>FAQ/Guide</a></Link>
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
