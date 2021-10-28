import React from 'react'
import s from '../../styles/MainWrapper/Chats.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveChats } from '../../Redux/actions/activeChats.js'
import Link from 'next/link'

const User = (props) => {
    return (
        <div className={s.user} onClick={props.openChat}>
            <div className={s.avatar} style={{ "background": `url('${props.avatar}') 0/cover no-repeat` }}>
                <div className={props.online ? `${s.status} ${s.online}` : s.status}></div>
            </div>
            <div className={s.name_message}>
                <p className={s.name}>{props.name}</p>
                <p className={s.last_message}>{props.last_message}</p>
            </div>
            <div className={s.time_incoming}>
                <p className={s.time}>{props.time}</p>
                {
                    Number(props.incoming) >= 1 ? ( <p className={s.incoming}>{props.incoming}</p> ) :
                    Number(props.incoming) <= 0 && props.see ? ( <img src="/img/icon_double-check.svg" alt="" />) :
                            Number(props.incoming) <= 0 && !props.see ? (<img src="/img/icon_check.svg" alt="" /> ) :
                    null
                }
                
            </div>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={props.my ? `${s.message} ${s.my}` : `${s.message}`}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus totam autem dignissimos quis quidem incidunt ab eligendi! Consequuntur deleniti tempora perspiciatis quas facilis, neque veritatis harum similique quis omnis hic?</p>
            <div className={s.time_status}>
                <span>{props.time}</span>
                {
                    props.my && props.check ? <img className={s.invert} src="/img/icon_double-check.svg" alt="" /> :
                    props.my && !props.check ? <img src="/img/icon_check.svg" alt="" /> :
                    null
                }
            </div>
        </div>
    )
}
const Chats = () => {
    const dispatch = useDispatch();
    const active_chats = useSelector(state => state.active_chats);
    const chats = React.useRef();
    const fon = React.useRef();
    const cnt = React.useRef();

    const [openChat, setOpenChat] = React.useState(false);

    const chat = React.useRef()
    React.useEffect(() => {
        if(openChat){
                chat.current.style.display = "flex";
            setTimeout(() => {
                chat.current.style.opacity = "1";
                chat.current.style.left = "0";
            }, 200);
        }else{
                chat.current.style.opacity = "0";
                chat.current.style.left = "100%";
            setTimeout(() => {
                chat.current.style.display = "none";
            }, 500);
        }
    }, [openChat])
    React.useEffect(() => {
        if (active_chats.item) {
            chats.current.style.display = "flex";
            document.querySelector("html").style.overflowY = "hidden";
            setTimeout(() => {
                fon.current.style.opacity = "1";
                cnt.current.style.opacity = "1";
                cnt.current.style.right = "0";
            }, 200);
        } else {
            document.querySelector("html").style.overflowY = "scroll";
            fon.current.style.opacity = "0";
            cnt.current.style.opacity = "0";
            cnt.current.style.right = "-601px";
            setTimeout(() => {
                chats.current.style.display = "none";
            }, 700);
        }
    }, [active_chats])
    return (
        <div className={s.chats} ref={chats}>
            <div className={s.fon} onClick={() => dispatch(setActiveChats(false))} ref={fon}></div>
            <div className={s.cnt} ref={cnt}>
                <h2>Chats</h2>
                <div className={s.users}>
                    <User openChat={() => setOpenChat(true)} online incoming="0" avatar="/img/cat_bottom_home.png" name="Lorem Ipsum" last_message="Lorem ipusm apple water mountain pen mouse paper" time="14:45" />
                    <User openChat={() => setOpenChat(true)} incoming="0" see avatar="/img/cat_bottom_home.png" name="Lorem Ipsum" last_message="Lorem ipusm apple water mountain pen mouse paper" time="14:45" />
                    <User openChat={() => setOpenChat(true)} online incoming="1" avatar="/img/cat_bottom_home.png" name="Lorem Ipsum" last_message="Lorem ipusm apple water mountain pen mouse paper" time="14:45" />
                    <User openChat={() => setOpenChat(true)} online incoming="32" avatar="/img/cat_bottom_home.png" name="Lorem Ipsum" last_message="Lorem ipusm apple water mountain pen mouse paper" time="14:45" />
                    <User openChat={() => setOpenChat(true)} incoming="0" avatar="/img/cat_bottom_home.png" name="Lorem Ipsum" last_message="Lorem ipusm apple water mountain pen mouse paper" time="14:45" />
                    <User openChat={() => setOpenChat(true)} online incoming="0" see avatar="/img/cat_bottom_home.png" name="Lorem Ipsum" last_message="Lorem ipusm apple water mountain pen mouse paper" time="14:45" />
                    <User openChat={() => setOpenChat(true)} incoming="1" avatar="/img/cat_bottom_home.png" name="Lorem Ipsum" last_message="Lorem ipusm apple water mountain pen mouse paper" time="14:45" />
                    <User openChat={() => setOpenChat(true)} online incoming="1" avatar="/img/cat_bottom_home.png" name="Lorem Ipsum" last_message="Lorem ipusm apple water mountain pen mouse paper" time="14:45" />
                    <User openChat={() => setOpenChat(true)} incoming="0" avatar="/img/cat_bottom_home.png" name="Lorem Ipsum" last_message="Lorem ipusm apple water mountain pen mouse paper" time="14:45" />
                    <User openChat={() => setOpenChat(true)} online incoming="0" see avatar="/img/cat_bottom_home.png" name="Lorem Ipsum" last_message="Lorem ipusm apple water mountain pen mouse paper" time="14:45" />
                    <User openChat={() => setOpenChat(true)} incoming="1" avatar="/img/cat_bottom_home.png" name="Lorem Ipsum" last_message="Lorem ipusm apple water mountain pen mouse paper" time="14:45" />
                    <User openChat={() => setOpenChat(true)} online incoming="1" avatar="/img/cat_bottom_home.png" name="Lorem Ipsum" last_message="Lorem ipusm apple water mountain pen mouse paper" time="14:45" />
                    <User openChat={() => setOpenChat(true)} incoming="0" avatar="/img/cat_bottom_home.png" name="Lorem Ipsum" last_message="Lorem ipusm apple water mountain pen mouse paper" time="14:45" />
                    <User openChat={() => setOpenChat(true)} online incoming="0" see avatar="/img/cat_bottom_home.png" name="Lorem Ipsum" last_message="Lorem ipusm apple water mountain pen mouse paper" time="14:45" />
                    <User openChat={() => setOpenChat(true)} incoming="1" avatar="/img/cat_bottom_home.png" name="Lorem Ipsum" last_message="Lorem ipusm apple water mountain pen mouse paper" time="14:45" />
                    <User openChat={() => setOpenChat(true)} incoming="1" avatar="/img/cat_bottom_home.png" name="Lorem Ipsum" last_message="Lorem ipusm apple water mountain pen mouse paper" time="14:45" />
                </div>

                <div className={s.chat} ref={chat}>
                    <div className={s.top_section}>
                        <button className={s.back} onClick={() => setOpenChat(false)}>
                            <img src="/img/icon_line-arrow.svg" alt="" />
                        </button>
                        <Link href="/catteries/1">
                            <a>
                                <div className={s.avatar}>
                                    <div className={`${s.status} ${s.online}`}></div>
                                </div>
                                <div className={s.name_status}>
                                    <p className={s.name}>Name Ipsum</p>
                                    <p className={s.status}>Online</p>
                                </div>
                            </a>
                        </Link>
                        

                        <button className={s.options}>
                            <img src="/img/icon_dots.svg" alt="" />
                        </button>
                    </div>

                    <div className={s.messages}>
                        <Message time="14:45"/>
                        <Message my check time="14:45"/>
                        <Message my time="14:45"/>
                    </div>

                    <div className={s.send_message}>
                    <textarea placeholder="typing text..." rows="2"></textarea>
                    <button className={s.send}>
                        <img src="/img/icon_send.svg" alt="" />
                    </button>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Chats
