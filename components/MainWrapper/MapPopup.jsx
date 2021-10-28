import React from 'react'
import s from '../../styles/MainWrapper/MapPopup.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveMap } from '../../Redux/actions/activeMap.js'
import GoogleMapContainer from './GoogleMap.jsx'

 
const MapPopup = () => {
    const dispatch = useDispatch();
    const active_map = useSelector(state => state.active_map);

    const map = React.useRef();
    const fon = React.useRef();
    const cnt = React.useRef();

    React.useEffect(() => {
        if (active_map.item) {
            map.current.style.display = "flex";
            document.querySelector("html").style.overflowY = "hidden";
            setTimeout(() => {
                fon.current.style.opacity = "1";
                cnt.current.style.opacity = "1";
                cnt.current.style.transform = "translate(-50%, -50%)";
            }, 200);
        } else {
            document.querySelector("html").style.overflowY = "scroll";
            fon.current.style.opacity = "0";
            cnt.current.style.opacity = "0";
            cnt.current.style.transform = "translate(-50%, -20%)";
            setTimeout(() => {
                map.current.style.display = "none";
            }, 700);
        }
    }, [active_map])

    return (
        <div className={s.map} ref={map}>
            <div className={s.fon} ref={fon} onClick={() => dispatch(setActiveMap(false))}></div>
            <div className={s.cnt} ref={cnt}>
                <GoogleMapContainer />
            </div>
        </div>
    )
}

export default MapPopup
