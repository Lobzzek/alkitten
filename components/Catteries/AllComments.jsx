import React from 'react'
import s from '../../styles/catteries/AllComments.module.css'
import BlockComment from './BlockComment.jsx'


const AllComments = () => {
    return (
        <div className={s.all_commnets}>
            <div className={s.statistic}>
                <div className={s.b1}>
                    <h2>Reviews <span>246</span></h2>
                    <p>Newlogica Cattery</p>
                </div>
                <div className={s.b2}>
                    <ul>
                        <li>
                            <div className={s.group}>
                                <input type="checkbox" id="category0" />
                                <label htmlFor="category0">Excellent</label>
                            </div>
                            <div className={s.bar}>
                                <div className={s.thumb}></div>
                            </div>
                            <p className={s.progress}>50%</p>
                        </li>
                        <li>
                            <div className={s.group}>
                                <input type="checkbox" id="category1" />
                                <label htmlFor="category1">Great</label>
                            </div>
                            <div className={s.bar}>
                                <div className={s.thumb}></div>
                            </div>
                            <p className={s.progress}>50%</p>
                        </li>
                        <li>
                            <div className={s.group}>
                                <input type="checkbox" id="category2" />
                                <label htmlFor="category2">Average</label>
                            </div>
                            <div className={s.bar}>
                                <div className={s.thumb}></div>
                            </div>
                            <p className={s.progress}>50%</p>
                        </li>
                        <li>
                            <div className={s.group}>
                                <input type="checkbox" id="category3" />
                                <label htmlFor="category3">Poor</label>
                            </div>
                            <div className={s.bar}>
                                <div className={s.thumb}></div>
                            </div>
                            <p className={s.progress}>50%</p>
                        </li>
                        <li>
                            <div className={s.group}>
                                <input type="checkbox" id="category4" />
                                <label htmlFor="category4">Bad</label>
                            </div>
                            <div className={s.bar}>
                                <div className={s.thumb}></div>
                            </div>
                            <p className={s.progress}>50%</p>
                        </li>
                    </ul>
                </div>
            </div>
            <BlockComment verefied />
            <BlockComment verefied />
            <BlockComment verefied />
            <BlockComment verefied />
            
        </div>
    )
}

export default AllComments
