import MainWrapper from '../components/MainWrapper/MainWrapper.jsx';
import SliderBreeds from '../components/SliderBreeds/SliderBreeds.jsx'
import Head from 'next/head'
import s from '../styles/breeds/breeds.module.css'
import { useSelector } from 'react-redux'
import dynamic from 'next/dynamic'

const BreedsInfo = dynamic(() => import('../components/BreedsInfo.jsx'));

export default function Home() {
    const state = useSelector(state => state.active_breeds.items);

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
            <BreedsInfo {...state} />
        </MainWrapper>
        </>
    )
}
