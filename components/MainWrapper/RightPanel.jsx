import s from '../../styles/MainWrapper/RightPanel.module.css';

const RightPanel = () => {
    return (
        <section className={s.right_panel}>
            {/* <div className={s.browse}>
                    <div className={s.text}>
                    <h4>Browse top certified <br /> breeders around you</h4>
                    <a href="#">Create a Buyer Account</a>
                </div>
            </div> */}
            <div className={s.become}>
                <div className={s.text}>
                    <h4>Become a verified <br />
                        breeder at AllKittens</h4>
                    <a href="#">Create a Buyer Account</a>
                </div>
            </div>
            <div className={s.ads}>
                <h3>Ads</h3>
            </div>
            {/* <div className={s.verified}>
                <div className={s.text}>
                    <img src="/img/icon_verified.svg" alt="" />
                    <h4>Only Verified <br />
                        Catteries at AllKittens! <br />
                        Learn more Why!</h4>
                </div>
            </div> */}
            <div className={s.started}>
                <div className={s.text}>
                    <h4>Lost on how to <br /> get started?</h4>
                    <p>Here’s a quick guide <br />
                        to help you through <br />
                        allkittens.com</p>
                    <a href="#">Take Me To a Trip</a>
                </div>
            </div>
        </section>
    )
}

export default RightPanel
