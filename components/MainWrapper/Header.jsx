import s from '../../styles/MainWrapper/Header.module.css';
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { useDispatch, useSelector} from 'react-redux'
import { setActiveLogin } from '../../Redux/actions/activeLogin.js'
import { setActiveForm } from '../../Redux/actions/activeForm.js'
import { setActiveChats } from '../../Redux/actions/activeChats.js'
import { setLoginUser } from '../../Redux/actions/loginUser.js'

const Header = () => {

    const inp = React.useRef();

    const login_user = useSelector(state => state.login_user);
    const dispatch = useDispatch();

    const router = useRouter();

    const [openProfile, setOpenProfile] = React.useState(false);
    // const [triggerMouse, setTriggerMouse] = React.useState(false);

    const modal_profile = React.useRef();
    const user = React.useRef();
    React.useEffect(() => {
        if (openProfile){
            modal_profile.current.style.display = "flex";
            setTimeout(() => {
                modal_profile.current.style.opacity = "1";
                modal_profile.current.style.transform = "translateY(100%)";
            }, 200);
        }else{
            // user.current.style.pointerEvents = "none"
            modal_profile.current.style.opacity = "0";
            modal_profile.current.style.transform = "translateY(125%)";
            setTimeout(() => {
                // user.current.style.pointerEvents = "auto"
                modal_profile.current.style.display = "none";
            }, 600);
        }
    }, [openProfile])

    // React.useEffect(() => {
    //     setTimeout(() => {
    //         // console.log("1", triggerMouse)
    //         if (!triggerMouse) {
    //             setOpenProfile(false);
    //         }else{
    //             setOpenProfile(true)
    //         }
    //     }, 1000);
        
    // }, [triggerMouse])
    return (
        <section className={s.header}>
            <div className={s.green_sect}>
                <input type="checkbox" ref={inp} onChange={() => dispatch(setLoginUser(inp.current.checked))} />
                <div className={s.wrap}>
                    <div className={s.logo}>
                        <img src="/img/logoForHeader.svg" alt="logo_site"/>
                    </div>
                    <nav>
                        <Link href="/"><a className={classNames("", { [s.active]: router.pathname === "/" })}>Home</a></Link>
                        <Link href="/breeds"><a className={classNames("", { [s.active]: router.pathname === "/breeds" })}>Breeds</a></Link>
                        <Link href="/catteries"><a className={classNames("", { [s.active]: router.pathname === "/catteries" })}>Catteries</a></Link>
                        <Link href="/products"><a className={classNames("", { [s.active]: router.pathname === "/products" })}>Products</a></Link>
                        <Link href="/deals"><a className={classNames("", { [s.active]: router.pathname === "/deals" })}>Deals</a></Link>
                        <Link href="/gallery"><a className={classNames("", { [s.active]: router.pathname === "/gallery" })}>Gallery</a></Link>
                        <Link href="/faq"><a className={classNames("", { [s.active]: router.pathname === "/faq" })}>FAQ/Guide</a></Link>
                    </nav>
                    <div ref={user} onMouseLeave={() => setOpenProfile(false)} className={login_user.item ? `${s.user} ${s.login}` : s.user}>
                        {
                            login_user.item ?
                            (
                                    <>
                                        <a onClick={() => dispatch(setActiveChats(true))} className={`${s.message} ${s.active}`}><img src="/img/icon_messge.svg" alt="" /></a>
                                        <button className={s.profile} onMouseLeave={() => {
                                            // setTriggerMouse(false)
                                        }} onMouseEnter={() => {
                                            // setTriggerMouse(true)
                                            setOpenProfile(true)
                                        } }>
                                            <div></div>
                                        </button>

                                        
                                    </>
                            )
                            :
                            (
                                <>
                                    <a className={s.sign} onClick={() => {
                                    dispatch(setActiveForm(1))
                                    dispatch(setActiveLogin(true))
                                    } }>Sign Up</a>

                                    <a className={s.log} onClick={() => {
                                    dispatch(setActiveForm(0))
                                    dispatch(setActiveLogin(true))
                                    } }>Log In</a>
                                </>
                            )
                        }

                        <div className={s.modal_profile} ref={modal_profile} onMouseEnter={() => {
                        //  setTriggerMouse(true)
                        }} onMouseLeave={() => { 
                            // setTriggerMouse(false)
                            setOpenProfile(false) 
                            }}>
                            <div className={s.top_section}>
                                <div className={s.avatar}></div>
                                <div className={s.text}>
                                    <p className={s.login}>Lorem Ipsum</p>
                                    <p className={s.email}>ex@gmail.com</p>
                                </div>
                            </div>
                            <Link href="/profile/">
                                <a className={router.pathname === "/profile" && s.active}>My profile</a>
                            </Link>
                            <Link href="/liked/">
                                <a className={router.pathname === "/liked" && s.active}>My liked</a>
                            </Link>
                            <Link href="/viewed/">
                                <a className={router.pathname === "/viewed" && s.active}>My last viewed</a>
                            </Link>
                            <a onClick={() => dispatch(setLoginUser(false))}>Sing Out</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header
