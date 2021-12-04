import Header from './Header.jsx';
// import LeftPanel from './LeftPanel/LeftPanel.jsx';
import RightPanel from './RightPanel/RightPanel.jsx';
import Footer from './Footer.jsx';
import React from 'react'
import s from '../../styles/MainWrapper/MainWrapper.module.css'
import Login from './Login.jsx'
import GalleryPopup from './GalleryPopup.jsx'
import MapPopup from './MapPopup.jsx'
import Chats from './Chats.jsx'
import BottomBar from './BottomBar.jsx'

import {useRouter} from 'next/router'



function MainWrapper(props) {

    const router = useRouter();


    const main_content = React.useRef();

    const triggered = React.useRef(false); //remove if not needed

    const [triggeredState, setTriggeredState] = React.useState(triggered.current);

    const triggerScroll = React.useRef();
    const bottomContent = React.useRef();
    React.useEffect(() => {   
        function offset(el) {
            var rect = el.current.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { bottom: rect.top + scrollTop + el.current.clientHeight, left: rect.left + scrollLeft }
        }
        triggerScroll.current = offset(main_content).bottom - document.documentElement.clientHeight;
        bottomContent.current = offset(main_content).bottom;
    }, [])
    return (
        <div className={s.main_wrapper}>
            <Header />
            <section className={triggeredState ? `${s.center_content} ${s.triggered}` : `${s.center_content}`}>
                {/* <LeftPanel triggered={triggerScroll} bottomContent={bottomContent} /> */}
                <section className={s.main_content} ref={main_content}>
                {
                        router.pathname !== "/" && <button onClick={() => {
                            if(Object.keys(router.components).length === 2){
                                router.push("/")
                            }else{
                                router.back()
                            }
                        }} className={s.past_page}>&#8592; Back</button>
                }
                {
                    props.children
                }

                </section>

                <RightPanel triggered={triggerScroll} bottomContent={bottomContent} />
            </section>

            <BottomBar />
            <Footer />


            <Login />
            <GalleryPopup />
            <MapPopup />
            <Chats />
        </div>
    );
}

export default MainWrapper;