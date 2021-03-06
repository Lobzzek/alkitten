import MainWrapper from "../components/MainWrapper/MainWrapper.jsx";
import Head from "next/head"
import s from "../styles/home/index.module.css";
import jsonCats from '../_data_cats.js';
import React from 'react'
import { useRouter } from 'next/router'

import dynamic from 'next/dynamic';
const CardCat = dynamic(() => import('../components/CardCat.jsx'));

export default function Home() {
  // const [activeBreed, setActiveBreed] = React.useState(0);
  const router = useRouter();
  const list_breeds = React.useRef();
  const allBreeds = [
    ...jsonCats.long_hair, ...jsonCats.short_hair, ...jsonCats.siamese_and_oriental
  ]
  React.useEffect(() => {
    if (router.query.breed){
      allBreeds.forEach((el, index) => {
        if (el.name === router.query.breed) {
          list_breeds.current.childNodes.forEach(el => el.childNodes[0].defaultChecked = false);
          list_breeds.current.childNodes[index].childNodes[0].defaultChecked = true;
        }
      })
    }else{
      list_breeds.current.childNodes[0].childNodes[0].defaultChecked = true;
    }
  }, [])


  const [showGroupKitty, setShowGroupKitty] = React.useState(1);

  const testDataKitty = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
    <MainWrapper>
      <div className={s.top_text}>
          <h2>You&apos;re on the Right Track</h2>
        <p>The Best Way to Find a New Family Member</p>
      </div>
      <form className={s.search_form}>
        <div className={s.search_inp}>
          <button title="search button" ><img src="/img/icon_loupe.svg" alt="" /></button>
          <input type="text" placeholder="Enter Breed or Location" />
        </div>        
        <div className={s.criteries}>
          <div className={s.section_param1}>
            <p>Breeds</p>
            <ul ref={list_breeds}>
                {
                  allBreeds.map( (el, i) =>
                    <li key={`li_beeds${i + 1}`}><input type="radio" name="breeds" id={`inp_rad_beeds${i + 1}`}/><label htmlFor={`inp_rad_beeds${i + 1}`}>{el.name}</label></li>
                  )
                }
            </ul>
          </div>
          <div className={s.section_param2}>
            <p>Agegroup</p>
            <ul>
              <li><input type="radio" name="agegroup" id="inp_rad_agegroup1" defaultChecked /><label htmlFor="inp_rad_agegroup1">All Ages</label></li>
              <li><input type="radio" name="agegroup" id="inp_rad_agegroup2" /><label htmlFor="inp_rad_agegroup2">4+ weeks</label></li>
              <li><input type="radio" name="agegroup" id="inp_rad_agegroup3" /><label htmlFor="inp_rad_agegroup3">1-2 months</label></li>
              <li><input type="radio" name="agegroup" id="inp_rad_agegroup4" /><label htmlFor="inp_rad_agegroup4">2-6 months</label></li>
              <li><input type="radio" name="agegroup" id="inp_rad_agegroup5" /><label htmlFor="inp_rad_agegroup5">1-3 years</label></li>
              <li><input type="radio" name="agegroup" id="inp_rad_agegroup6" /><label htmlFor="inp_rad_agegroup6">3-5 years</label></li>
              <li><input type="radio" name="agegroup" id="inp_rad_agegroup7" /><label htmlFor="inp_rad_agegroup7">5+ years</label></li>
            </ul>
          </div>
          <div className={s.section_param3}>
            <div className={s.pick_availability}>
              <p>Availability</p>
              <ul>
                <li><input type="radio" name="availability" id="inp_rad_availability1" defaultChecked /><label htmlFor="inp_rad_availability1">All Available</label></li>
                <li><input type="radio" name="availability" id="inp_rad_availability2" /><label htmlFor="inp_rad_availability2">Kitties for Sale</label></li>
                <li><input type="radio" name="availability" id="inp_rad_availability3" /><label htmlFor="inp_rad_availability3">Kitties for Adoption</label></li>
                <li><input type="radio" name="availability" id="inp_rad_availability4" /><label htmlFor="inp_rad_availability4">Retired Breeding Cats</label></li>
                <li><input type="radio" name="availability" id="inp_rad_availability5" /><label htmlFor="inp_rad_availability5">Breeding Cats</label></li>
              </ul>
            </div>

            <div className={s.pick_price}>
              <p>Sort by Price</p>
              <ul>
                <li><input type="radio" name="price" id="inp_rad_price1" defaultChecked /><label htmlFor="inp_rad_price1">Low First</label></li>
                <li><input type="radio" name="price" id="inp_rad_price2" /><label htmlFor="inp_rad_price2">High First</label></li>
              </ul>
            </div>
          </div>
          <div className={s.section_param4}>
            <div className={s.pick_gender}>
              <p>Gender</p>
              <ul>
                <li><input type="radio" name="gender" id="inp_rad_gender1" defaultChecked /><label htmlFor="inp_rad_gender1">All</label></li>
                <li><input type="radio" name="gender" id="inp_rad_gender2" /><label htmlFor="inp_rad_gender2">Male</label></li>
                <li><input type="radio" name="gender" id="inp_rad_gender3" /><label htmlFor="inp_rad_gender3">Female</label></li>
              </ul>
            </div>
            <div className={s.pick_location}>
              <p>Location</p>
              <ul>
                <li><input type="radio" name="location" id="inp_rad_location1" defaultChecked /><label htmlFor="inp_rad_location1">All States</label></li>
                <li><input type="radio" name="location" id="inp_rad_location2" /><label htmlFor="inp_rad_location2">Worldwide</label></li>
                <li><input type="radio" name="location" id="inp_rad_location3" /><label htmlFor="inp_rad_location3">Specific (Map)</label></li>
              </ul>
            </div>

            <div className={s.with_photo}>
              <input type="checkbox" id="with_photo" />
              <label htmlFor="with_photo">With Photos Only</label>
            </div>

            <input type="submit" value="Search" />
          </div>
        </div>
      </form>
      
      {
          router.query.breed ? 
          (
              <div className={`${s.compilation} ${s.matched_kittens}`}>
                <div className={s.top_text}>
                  <h2>We have selected kittens for you</h2>
                  <p>Browse breeds that fit your lifestyle</p>
                </div>
                <div className={s.block_cats}>
                  {
                    testDataKitty.slice(0, showGroupKitty * 6).map((el, index) => <CardCat name={`Kitty ${index}`} key={`compilation_cat_${index}`} breed={`${router.query.breed.replace(/_/g, " ")}`} img_cat="/img/cat_bottom_home.png" img_cattery="/img/icon/catteries.svg" verefied favourite />)
                  }
                </div>
                <button className={showGroupKitty * 6 >= testDataKitty.length ? s.hide : null} onClick={() => {
                  if (showGroupKitty * 6 < testDataKitty.length){
                      setShowGroupKitty(showGroupKitty + 1)
                    }else{
                      setShowGroupKitty(1);
                    }
                }}>
                  {
                    showGroupKitty * 6 < testDataKitty.length ? "View More" : "Hidden All"
                  }
                </button>
              </div>
          )
          :
          null
      }
        
        <div className={`${s.compilation} ${s.last_kittens}`}>
        <div className={s.top_text}>
          <h2>Recently Viewed Kittens</h2>
          <p>Browse breeds that fit your lifestyle</p>
        </div>
          <div className={s.block_cats}>
            <CardCat breed="American Curl Longhair" img_cat="/img/cat_bottom_home.png" img_cattery="/img/icon/catteries.svg" verefied favourite />
            <CardCat img_cat="/img/cat_bottom_home.png" img_cattery="/img/cat_bottom_home.png" />
            <CardCat img_cat="/img/cat_bottom_home.png" img_cattery="/img/icon/catteries.svg" verefied />
          </div> 
      </div>
    </MainWrapper>
    </>
  )
}
