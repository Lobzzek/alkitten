import React from 'react'
import s from '../../styles/MainWrapper/GalleryPopup.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveGalleryPopup } from '../../Redux/actions/activeGalleryPopup.js'

const GalleryPopup = () => {
    const dispatch = useDispatch();
    const active_gallery_popup = useSelector(state => state.active_gallery_popup);

    let imgsGallery = [
        { type: "video", href: "/video/test.mp4" },
        { type: "video", href: "https://www.youtube.com/watch?v=5qap5aO4i9A" },
        { type: "video", href: "https://vimeo.com/558977834" },
        { type: "img", href: "/img/cat_bottom_home.png" },
        { type: "img", href: "/img/cat_for_card.jpg" },
        { type: "img", href: "/img/cat_bottom_home.png" },
        { type: "img", href: "/img/cat_for_card.jpg" },
        { type: "img", href: "/img/cat_bottom_home.png" },
        { type: "img", href: "/img/cat_for_card.jpg" },
        { type: "img", href: "/img/cat_bottom_home.png" },
        { type: "img", href: "/img/cat_for_card.jpg" },
        { type: "img", href: "/img/cat_bottom_home.png" },
    ]
    const [vimeoVideo, setVimeoVideo] = React.useState(null);
    // const [openZoomImg, setOpenZoomImg] = React.useState(true);

    const [activeImg, setActiveImg] = React.useState(0);
    const zoomImg = React.useRef();
    React.useEffect(() => {
        if (active_gallery_popup.item) {
            zoomImg.current.style.display = 'flex';
            setTimeout(() => {
                zoomImg.current.style.opacity = "1";
            }, 300);
        } else {
            zoomImg.current.style.opacity = "0";
            setTimeout(() => {
                zoomImg.current.style.display = 'none';
            }, 700);
        }


    }, [active_gallery_popup])
    const panels = React.useRef();
    React.useEffect(() => {
        let leftBlock = 0;
        if (activeImg < imgsGallery.length - 4) {
            for (let i = 0; i < activeImg - 1; i++) {
                leftBlock -= 180;
            }
        } else {
            for (let i = 0; i < imgsGallery.length - 6; i++) {
                leftBlock -= 180;
            }
        }


        panels.current.style.left = `${leftBlock}px`

    }, [activeImg])
    return (
        <div className={s.zoomImg} ref={zoomImg}>
            <p className={s.close} onClick={() => dispatch(setActiveGalleryPopup(false))}>✕</p>
            <div className={s.fon} onClick={() => dispatch(setActiveGalleryPopup(false))}></div>
            <div className={s.slider}>
                <div className={s.slides}>
                    <button title="prev slide" className={s.prev_slide} onClick={() => {
                        if (activeImg > 0) {
                            setActiveImg(activeImg - 1)
                        } else {
                            setActiveImg(imgsGallery.length - 1);
                        }

                    }}>
                        <img src="/img/icon_arow.svg" alt="" />
                    </button>

                    <div className={imgsGallery[activeImg].type === "img" ? `${s.main_container}` : `${s.main_container} ${s.video}`} style={{
                        background:

                            imgsGallery[activeImg].type === "img" ? `url(${imgsGallery[activeImg].href}) center/cover no-repeat` : "#938556"

                    }}>

                        {
                            imgsGallery[activeImg].type === "video" && /youtube.com/.test(imgsGallery[activeImg].href) ?
                                <iframe width="949" height="534" src={`https://www.youtube.com/embed/${imgsGallery[activeImg].href.match(/(?<=v\=)(\w|\D)+/)[0]}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> :

                                imgsGallery[activeImg].type === "video" && /vimeo.com/.test(imgsGallery[activeImg].href) ?
                                    <iframe src={`https://player.vimeo.com/video/${imgsGallery[activeImg].href.match(/(?<=\/)\d+/)[0]}`} width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe> :

                                    imgsGallery[activeImg].type === "video" && !/vimeo.com|youtube.com/.test(imgsGallery[activeImg].href) ?
                                        <video controls><source src={`${imgsGallery[activeImg].href}`} /></video>
                                        : null
                        }
                    </div>

                    <button title="next slide" className={s.next_slide} onClick={() => {
                        if (activeImg < imgsGallery.length - 1) {
                            setActiveImg(activeImg + 1)
                        } else {
                            setActiveImg(0);
                        }

                    }}>
                        <img src="/img/icon_arow.svg" alt="" />
                    </button>
                </div>
                <div className={s.slide_bar}>
                    <button title="prev panel" onClick={() => {
                        if (activeImg > 4) {
                            setActiveImg(activeImg - 5)
                        } else {
                            setActiveImg(imgsGallery.length - 1);
                        }
                    }} className={s.prev_panel}>
                        <img src="/img/icon_arow.svg" alt="" />
                    </button>
                    <div className={s.wrap_panels}>
                        <div className={s.panles} ref={panels}>
                            {
                                imgsGallery.map((el, id) => {
                                    if (el.type === "img") {
                                        return (<div style={{ background: `url(${el.href}) 0/cover no-repeat` }}
                                            onClick={() => setActiveImg(id)}
                                            className={id === activeImg ? `${s.img} ${s.active}` : null}
                                        ></div>)
                                    } else if (el.type === "video" && /youtube.com/.test(el.href)) {
                                        return (<div style={{ background: `url('http://img.youtube.com/vi/${el.href.match(/(?<=v\=)(\w|\D)+/)[0]}/mqdefault.jpg') center/cover no-repeat` }}
                                            onClick={() => setActiveImg(id)}
                                            className={id === activeImg ? `${s.video} ${s.active}` : null}
                                        >
                                            <img src="/img/icon_play.svg" alt="" />
                                        </div>)
                                    } else if (el.type === "video" && !/youtube.com|vimeo/.test(el.href)) {
                                        return (<div style={{ background: `pink` }}
                                            onClick={() => setActiveImg(id)}
                                            className={id === activeImg ? `${s.video} ${s.active}` : null}
                                        >
                                            <img src="/img/icon_play.svg" alt="" />
                                        </div>)
                                    } else if (el.type === "video" && /vimeo.com/.test(el.href)) {

                                        async function fun() {
                                            const fetchImg = await fetch(`https://vimeo.com/api/v2/video/${el.href.match(/(?<=\/)\d+/)[0]}.json`);
                                            let data = await fetchImg.json();
                                            let imgUrl = await data[0].thumbnail_large;

                                            setVimeoVideo(<div style={{ background: `url('${imgUrl}') center/cover no-repeat` }}
                                                onClick={() => setActiveImg(id)}
                                                className={id === activeImg ? `${s.video} ${s.active}` : null}
                                            >
                                                <img src="/img/icon_play.svg" alt="" />
                                            </div>);
                                        }
                                        fun();

                                        return vimeoVideo
                                    }
                                }
                                )
                            }
                        </div>
                    </div>
                    <button title="next panel" onClick={() => {
                        if (activeImg < imgsGallery.length - 5) {
                            setActiveImg(activeImg + 5)
                        } else {
                            setActiveImg(0);
                        }
                    }}
                        className={s.next_panel}>
                        <img src="/img/icon_arow.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GalleryPopup
