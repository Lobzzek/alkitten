import Header from './Header.jsx';
import LeftPanel from './LeftPanel/LeftPanel.jsx';
import RightPanel from './RightPanel.jsx';
import Footer from './Footer.jsx';

import s from '../../styles/MainWrapper.module.css'

function MainWrapper(props) {
    return (
        <div className={s.main_wrapper}>
            <Header />
            <section className={s.center_content}>
                <LeftPanel />
                <section className={s.main_content}>

                {
                    props.children
                }

                </section>

                <RightPanel />
            </section>
            <Footer />
        </div>
    );
}

export default MainWrapper;