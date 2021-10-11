import s from '../../styles/MainWrapper/Header.module.css';
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { setActiveLogin } from '../../Redux/actions/activeLogin.js'
import { setActiveForm } from '../../Redux/actions/activeForm.js'
const Header = () => {

    const dispatch = useDispatch();

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
                        <Link href="/catteries"><a className={classNames("", { [s.active]: router.pathname === "/catteries" })}>Catteries</a></Link>
                        <Link href="/products"><a className={classNames("", { [s.active]: router.pathname === "/products" })}>Products</a></Link>
                        <a href="#">Deals</a>
                        <Link href="/gallery"><a className={classNames("", { [s.active]: router.pathname === "/gallery" })}>Gallery</a></Link>
                        <Link href="/faq"><a className={classNames("", { [s.active]: router.pathname === "/faq" })}>FAQ/Guide</a></Link>
                    </nav>
                    <div className={s.user}>
                        <a href="#" className={s.message}><img src="/img/icon_messge.svg" alt="" /></a>
                        <a className={s.sign} onClick={() => {
                                dispatch(setActiveForm(1))
                                dispatch(setActiveLogin(true))
                            } }>Sign Up</a>
                        <a className={s.log} onClick={() => {
                                dispatch(setActiveForm(0))
                                dispatch(setActiveLogin(true))
                            } }>Log In</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header
