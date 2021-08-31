import s from '../styles/home/CardCat.module.css'
const CardCat = (props) => {
    return (
        <div className={s.card}>
            <div className={s.block_img}>
                <img src={`${props.image}`} alt={`cat_card_${props.index}_img`} />
            </div>
            <div className={s.data_cat}>
                
                <div className={s.name_breed}>
                    <div>
                        <h3>{props.name.toUpperCase()}</h3>
                        <p>{props.breed}</p>
                    </div>
                    {
                        props.verified && <img src="/img/icon_verified.svg" alt="verified_icon" />
                    }
                </div>
        
                <div className={s.sizes}>
                    <p>H: {props.h}</p>
                    <p>W: {props.w}</p>
                </div>

                <div className={s.location}>
                    <div>
                        <img src="/img/icon_point.svg" alt="" />
                        <p>{props.location}</p>
                    </div>
                    <a href="#">Detail</a>
                </div>
            </div>
        </div>
    )
}

export default CardCat;
