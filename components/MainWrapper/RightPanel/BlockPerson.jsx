import s from '../../../styles/MainWrapper/RightPanel/BlockPerson.module.css';
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { setActiveMap } from '../../../Redux/actions/activeMap.js'
import { useRouter } from 'next/router'

const BlockPerson = (props) => {

    const dispatch = useDispatch();
    const router = useRouter();
    
    const numStars = [];
    for (let i = 0; i < Number(props.rating); i++) {
        numStars.push((<img key={`${i}_img_person`} src="/img/icon_star.svg" alt="star_icon"/>))
    }
    return (
        <div className={props.forMap ? `${s.person} ${s.for_map}` : s.block_person}>
            <div className={s.avatar_data}>
                <div className={s.avatar}>
                    <img src="/img/cat_for_block_person.jpg" alt={`person_card_${props.index}_img`} />
                </div>
                <div className={s.data}>
                    <div className={s.rating}>
                        {
                            props.verified && (
                                <img src="/img/icon/checked.svg" alt="verified_icon" />
                            )
                        }
                        {numStars} 
                        <Link href="/catteries/1?comments">
                            <a>
                                <p>({props.rating})</p>
                            </a>
                        </Link>
                    </div>
                    <h3 className={s.login}>{props.cattery}</h3>
                    <p onClick={() => router.push(`/breeds?info=${props.breed}`)} className={s.breed}>{props.breed}</p>
                </div>
            </div>
            {/* <p>{props.description}</p> */}
            <div className={s.location} onClick={() => dispatch(setActiveMap(true))}>
                <div>
                    <img src="/img/icon_point.svg" alt="point_map" className="point" />
                    <p>{props.location}</p>
                </div>
                <Link href="/catteries/1">
                    <a>Detail</a>
                </Link>
            </div>
        </div>
    )
}

export default BlockPerson
