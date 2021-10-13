import React from 'react'
import s from '../../styles/catteries/Comment.module.css'

const Comment = (props) => {
    return (
        <div className={s.comment}>
            <h4 className={s.name}>{props.name}</h4>
            <div className={s.rating}>
                <img src="/img/icon_star.svg" alt="" />
                <img src="/img/icon_star.svg" alt="" />
                <img src="/img/icon_star.svg" alt="" />
                <img src="/img/icon_star.svg" alt="" />
                <img src="/img/icon_star.svg" alt="" />
            </div>
            <div className={s.wrap_text}>
                <p className={s.text}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas assumenda accusantium repellat odit quae distinctio deleniti aliquam, nisi quasi inventore commodi ullam eveniet. Praesentium, omnis nemo quis ad numquam voluptatem porro sequi, ullam perspiciatis, culpa molestias cum fugit iusto dolorem aut aperiam rem! Quam excepturi labore cum, beatae pariatur, consequatur ipsa est ducimus molestiae eaque maiores alias in! Mollitia quasi repellat possimus saepe ratione facilis. Quod expedita dicta laudantium modi, labore repellendus, cum a magni, repellat nemo dolorum omnis nobis quibusdam maiores optio? Voluptate maxime eum veritatis ratione expedita? Dolorum quisquam architecto incidunt commodi atque fugiat recusandae, autem eos magnam!
                </p>
            </div>
            <a href={props.href_facebook} className={s.link_facebook}>
                <img src="/img/icon_facebook.svg" alt="" />
            </a>
        </div>
    )
}

export default Comment
