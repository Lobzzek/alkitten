import s from '../../../styles/MainWrapper/RightPanel/RightPanel.module.css';
import React from 'react'
import GroupCatteries from './GroupCatteries.jsx'

const RightPanel = () => {
    return (
        <section className={s.right_panel}>
            <div className={s.ads}>
                <h3>Ads</h3>
            </div>
            <GroupCatteries />
        </section>
    )
}

export default RightPanel
