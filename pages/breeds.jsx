import MainWrapper from '../components/MainWrapper/MainWrapper.jsx';
import SliderBreeds from '../components/SliderBreeds/SliderBreeds.jsx'
import Head from 'next/head'

import s from '../styles/breeds.module.css'

export default function Home() {
    return (
        <>
        <Head>
            <title>Breeds</title>
        </Head>
        <MainWrapper>
            <div className={s.top_text}>
                <h2>Explore Our Breeds</h2>
                <p>Browse breeds that fit your lifestyle</p>
            </div>
            <SliderBreeds />

        </MainWrapper>
        </>
    )
}
