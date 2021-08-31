import Header from './Header.jsx';
import LeftPanel from './LeftPanel/LeftPanel.jsx';
import RightPanel from './RightPanel.jsx';
import Footer from './Footer.jsx';
import React from 'react'
import s from '../../styles/MainWrapper/MainWrapper.module.css'

// import { setTriggeredScroll } from '../../Redux/actions/triggeredScroll.js';
// import { useDispatch } from 'react-redux'

import moduleName from '../../Redux/actions/triggeredScroll.js'

function MainWrapper(props) {

    // const dispatch = useDispatch();

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
        // window.addEventListener("scroll", () => {
        //     if (triggerScroll.current <= window.scrollY){
        //         triggered.current = true;
        //         setTriggeredState(triggered.current);
        //     }else{
        //         triggered.current = false;
        //         setTriggeredState(triggered.current);
        //     }
        // })
    }, [])
    return (
        <div className={s.main_wrapper}>
            <Header />
            <section className={triggeredState ? `${s.center_content} ${s.triggered}` : `${s.center_content}`}>
                <LeftPanel triggered={triggerScroll} bottomContent={bottomContent} />
                <section className={s.main_content} ref={main_content}>

                {
                    props.children
                }

                </section>

                <RightPanel triggered={triggerScroll} bottomContent={bottomContent} />
            </section>
            <Footer />
        </div>
    );
}

export default MainWrapper;