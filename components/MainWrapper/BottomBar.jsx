import React from 'react'
import s from '../../styles/MainWrapper/BottomBar.module.css'
import Link from 'next/link'

const BottomBar = () => {
    return (
        <div className={s.bottom_bar}>
            <nav>
                <Link href="/">
                    <a>
                        <img src="/img/icon_home.svg" alt="" />
                        <p>Home</p>
                    </a>
                </Link>
                <Link href="/breeds">
                    <a>
                        <img src="/img/icon_home.svg" alt="" />
                        <p>Breeds</p>
                    </a>
                </Link>
                <Link href="/catteries">
                    <a>
                        <img src="/img/icon_home.svg" alt="" />
                        <p>Catteries</p>
                    </a>
                </Link>
                <Link href="/deals">
                    <a>
                        <img src="/img/icon_home.svg" alt="" />
                        <p>Deals</p>
                    </a>
                </Link>
                <button>
                    <img src="/img/icon_home.svg" alt="" />
                    <p>Profile</p>
                </button>
            </nav>
        </div>
    )
}

export default BottomBar
