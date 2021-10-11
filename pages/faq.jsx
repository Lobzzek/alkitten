import React from 'react'
import s from '../styles/faq.module.css'
import MainWrapper from '../components/MainWrapper/MainWrapper.jsx'

const Faq = () => {

    const listLi = React.useRef();
    const punkts = React.useRef()
    const [activePunkt, setActivePunkt] = React.useState(0);

    function offsetPosition(element) {
        let hElem = element.clientHeight;
        let offsetTop = 0;
        do {
            offsetTop += element.offsetTop;
        } while (element = element.offsetParent);
        return [offsetTop, offsetTop + hElem];
    }
    React.useEffect(() => {

        let allDivWithLi = listLi.current.childNodes;

        for (let i = 0; i < allDivWithLi.length; i++) {


            const elementsDiv = allDivWithLi[i];

            for (let a = 0; a < elementsDiv.childNodes.length; a++) {
                const elementInDiv = elementsDiv.childNodes[a];
                if (elementInDiv.localName === 'li'){
                    elementInDiv.addEventListener("click", function () {
                        if (this.childNodes[1].clientHeight === 0) {
                            this.childNodes[1].style.height = `${this.childNodes[1].scrollHeight}px`;
                            this.childNodes[1].style.marginTop = `20px`;
                            this.childNodes[0].childNodes[1].textContent = "-";
                        } else {
                            this.childNodes[1].style.height = `0`;
                            this.childNodes[1].style.marginTop = `0`;
                            this.childNodes[0].childNodes[1].textContent = "+";
                        }
                    })
                }
            }
        }
        //change active link

        

        let setActivePunktOnScroll = () => {
            // console.log(listLi.current.childNodes[0].getBoundingClientRect())
            if (window.scrollY < offsetPosition(listLi.current.childNodes[0])[1]) {
                setActivePunkt(0)
            } else if (window.scrollY > offsetPosition(listLi.current.childNodes[1])[0] &&
                window.scrollY < offsetPosition(listLi.current.childNodes[1])[1]) {
                setActivePunkt(1)
            } else if (window.scrollY > offsetPosition(listLi.current.childNodes[2])[0] &&
                window.scrollY < offsetPosition(listLi.current.childNodes[2])[1]) {
                setActivePunkt(2)
            } else if (window.scrollY > offsetPosition(listLi.current.childNodes[3])[0] &&
                window.scrollY < offsetPosition(listLi.current.childNodes[3])[1]) {
                setActivePunkt(3)
            } else if (window.scrollY > offsetPosition(listLi.current.childNodes[4])[0] &&
                window.scrollY < offsetPosition(listLi.current.childNodes[4])[1]) {
                setActivePunkt(4)
            }
        }

        window.addEventListener("scroll", setActivePunktOnScroll)

        //remove change url
        function locationHashChanged() {
            if (location.hash) {
                history.replaceState({}, '', '/faq')
            }
        }
        window.onhashchange = locationHashChanged;

        // return window.removeEventListener("scroll", setActivePunktOnScroll)

    }, [])

    
    return (
        <MainWrapper>
            <div className={s.top_text}>
                <h2>Got a question or two?</h2>
                <p>Here &apos;s a list of Frequently Asked Questions answered for you!</p>
            </div>
            <div className={s.faq_cnt}>
                <div className={s.punkts} ref={punkts}>
                    <div><a href="#tit_1" onClick={() => setTimeout(() => {setActivePunkt(0)}, 1000)}
                        className={activePunkt === 0 ? `${s.active}` : `` }
                    >Lorem Ipsum1</a></div>
                    <div><a href="#tit_2" onClick={() => setTimeout(() => {setActivePunkt(1)}, 1000)}
                        className={activePunkt === 1 ? `${s.active}` : `` }
                    >Lorem Ipsum2</a></div>
                    <div><a href="#tit_3" onClick={() => setTimeout(() => {setActivePunkt(2)}, 1000)}
                        className={activePunkt === 2 ? `${s.active}` : `` }
                    >Lorem Ipsum3</a></div>
                    <div><a href="#tit_4" onClick={() => setTimeout(() => {setActivePunkt(3)}, 1000)}
                        className={activePunkt === 3 ? `${s.active}` : `` }
                    >Lorem Ipsum4</a></div>
                    <div><a href="#tit_5" onClick={() => setTimeout(() => {setActivePunkt(4)}, 1000)}
                        className={activePunkt ===4 ? `${s.active}` : `` }
                    >Lorem Ipsum5</a></div>
                </div>

                <ul ref={listLi}>
                    <div className={s.section_li_1}>
                        <h3 id="tit_1">Lorem1</h3>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto, rem ratione porro dolorem aliquid in distinctio, voluptates nostrum et voluptas. Eius, tempore eos. Debitis voluptatibus tenetur labore laborum voluptatem perferendis molestiae blanditiis, commodi voluptates officia, dolorum voluptas, doloremque consequuntur autem incidunt? Quis quasi ad doloribus reiciendis, laboriosam voluptates earum!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Similique, obcaecati odio. Eius, amet quibusdam dolor saepe cupiditate laudantium nam, eos laborum quisquam a consectetur, ipsa dolorum quaerat iure voluptate quae officia illo perferendis expedita error esse nostrum vero dignissimos vitae! Expedita cupiditate assumenda rem totam voluptatem quasi velit in voluptatum, debitis reiciendis quaerat, error est animi facilis nihil.</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Modi culpa distinctio, sit ipsam ipsa molestiae temporibus animi quod quae iste nobis amet nulla similique doloremque aliquam provident accusamus est magni praesentium corrupti doloribus quibusdam itaque. Illo non vitae blanditiis eos quaerat quidem, dolor obcaecati dignissimos dicta adipisci veniam repudiandae nisi expedita saepe accusantium. Ipsam culpa cupiditate et sunt.</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Porro eius ratione ullam ea perspiciatis quidem perferendis aperiam earum laboriosam eligendi dolorem vitae omnis non velit error, expedita explicabo commodi! Qui similique excepturi temporibus veritatis minus, neque facilis, repellat sapiente harum alias impedit provident cum accusamus atque sit, eum rerum dolor commodi? Animi reiciendis quidem doloribus fuga, recusandae magni!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Porro eius ratione ullam ea perspiciatis quidem perferendis aperiam earum laboriosam eligendi dolorem vitae omnis non velit error, expedita explicabo commodi! Qui similique excepturi temporibus veritatis minus, neque facilis, repellat sapiente harum alias impedit provident cum accusamus atque sit, eum rerum dolor commodi? Animi reiciendis quidem doloribus fuga, recusandae magni!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Porro eius ratione ullam ea perspiciatis quidem perferendis aperiam earum laboriosam eligendi dolorem vitae omnis non velit error, expedita explicabo commodi! Qui similique excepturi temporibus veritatis minus, neque facilis, repellat sapiente harum alias impedit provident cum accusamus atque sit, eum rerum dolor commodi? Animi reiciendis quidem doloribus fuga, recusandae magni!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Porro eius ratione ullam ea perspiciatis quidem perferendis aperiam earum laboriosam eligendi dolorem vitae omnis non velit error, expedita explicabo commodi! Qui similique excepturi temporibus veritatis minus, neque facilis, repellat sapiente harum alias impedit provident cum accusamus atque sit, eum rerum dolor commodi? Animi reiciendis quidem doloribus fuga, recusandae magni!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Porro eius ratione ullam ea perspiciatis quidem perferendis aperiam earum laboriosam eligendi dolorem vitae omnis non velit error, expedita explicabo commodi! Qui similique excepturi temporibus veritatis minus, neque facilis, repellat sapiente harum alias impedit provident cum accusamus atque sit, eum rerum dolor commodi? Animi reiciendis quidem doloribus fuga, recusandae magni!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Porro eius ratione ullam ea perspiciatis quidem perferendis aperiam earum laboriosam eligendi dolorem vitae omnis non velit error, expedita explicabo commodi! Qui similique excepturi temporibus veritatis minus, neque facilis, repellat sapiente harum alias impedit provident cum accusamus atque sit, eum rerum dolor commodi? Animi reiciendis quidem doloribus fuga, recusandae magni!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Porro eius ratione ullam ea perspiciatis quidem perferendis aperiam earum laboriosam eligendi dolorem vitae omnis non velit error, expedita explicabo commodi! Qui similique excepturi temporibus veritatis minus, neque facilis, repellat sapiente harum alias impedit provident cum accusamus atque sit, eum rerum dolor commodi? Animi reiciendis quidem doloribus fuga, recusandae magni!</p>
                        </li>
                    </div>
                    <div className={s.section_li_2}>
                        <h3 id="tit_2">Lorem2</h3>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Exercitationem iure molestias hic. Accusamus voluptatibus dolorem ipsam sapiente eaque, voluptates est libero soluta architecto possimus vel temporibus quidem aut omnis corporis sed quo modi facere. Laboriosam, ipsam nam incidunt eius, veniam excepturi provident quod minus magnam quaerat accusamus nihil velit ut reiciendis deleniti necessitatibus inventore dolores earum nostrum voluptatem.</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Suscipit repellat facilis tempora inventore modi aut blanditiis id quas consequatur aperiam quod, vel odio nihil officiis ut sunt eius, optio consectetur vitae sit voluptatem recusandae fugit a. Ipsum magni hic nisi iste eaque officia, fugit aspernatur, distinctio voluptatum fugiat consectetur, voluptates nulla saepe et voluptatibus! Nemo maxime odio pariatur!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Pariatur asperiores vitae ipsam ullam. Magni, blanditiis sint iste ipsam tempora temporibus aut adipisci repellendus perspiciatis animi delectus dicta et, voluptate ad, maiores consequuntur fuga voluptatum ullam dolore vel possimus porro. Eveniet hic inventore quam voluptas, assumenda quibusdam! Totam, atque voluptatibus minima unde excepturi iure ipsa blanditiis facere facilis officia?</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Illo, facere cumque. Laudantium nesciunt explicabo officiis dolorum placeat corporis enim distinctio. Harum cum, reprehenderit consectetur, aliquam ut fuga sapiente incidunt, ullam minima vel autem exercitationem. Consequatur, ex laboriosam tempore inventore natus voluptates. Harum atque quasi adipisci, quo blanditiis cum unde rem aperiam deleniti asperiores nihil nam in, facere eligendi.</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Porro eius ratione ullam ea perspiciatis quidem perferendis aperiam earum laboriosam eligendi dolorem vitae omnis non velit error, expedita explicabo commodi! Qui similique excepturi temporibus veritatis minus, neque facilis, repellat sapiente harum alias impedit provident cum accusamus atque sit, eum rerum dolor commodi? Animi reiciendis quidem doloribus fuga, recusandae magni!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Porro eius ratione ullam ea perspiciatis quidem perferendis aperiam earum laboriosam eligendi dolorem vitae omnis non velit error, expedita explicabo commodi! Qui similique excepturi temporibus veritatis minus, neque facilis, repellat sapiente harum alias impedit provident cum accusamus atque sit, eum rerum dolor commodi? Animi reiciendis quidem doloribus fuga, recusandae magni!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Porro eius ratione ullam ea perspiciatis quidem perferendis aperiam earum laboriosam eligendi dolorem vitae omnis non velit error, expedita explicabo commodi! Qui similique excepturi temporibus veritatis minus, neque facilis, repellat sapiente harum alias impedit provident cum accusamus atque sit, eum rerum dolor commodi? Animi reiciendis quidem doloribus fuga, recusandae magni!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Porro eius ratione ullam ea perspiciatis quidem perferendis aperiam earum laboriosam eligendi dolorem vitae omnis non velit error, expedita explicabo commodi! Qui similique excepturi temporibus veritatis minus, neque facilis, repellat sapiente harum alias impedit provident cum accusamus atque sit, eum rerum dolor commodi? Animi reiciendis quidem doloribus fuga, recusandae magni!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Porro eius ratione ullam ea perspiciatis quidem perferendis aperiam earum laboriosam eligendi dolorem vitae omnis non velit error, expedita explicabo commodi! Qui similique excepturi temporibus veritatis minus, neque facilis, repellat sapiente harum alias impedit provident cum accusamus atque sit, eum rerum dolor commodi? Animi reiciendis quidem doloribus fuga, recusandae magni!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Porro eius ratione ullam ea perspiciatis quidem perferendis aperiam earum laboriosam eligendi dolorem vitae omnis non velit error, expedita explicabo commodi! Qui similique excepturi temporibus veritatis minus, neque facilis, repellat sapiente harum alias impedit provident cum accusamus atque sit, eum rerum dolor commodi? Animi reiciendis quidem doloribus fuga, recusandae magni!</p>
                        </li>
                    </div>
                    <div className={s.section_li_3}>
                        <h3 id="tit_3">Lorem3</h3>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Ipsum pariatur maiores culpa, id laboriosam, cumque veritatis eligendi consequuntur accusamus voluptate odio soluta, mollitia assumenda odit et nihil voluptatum labore repellendus quas! Sunt iusto aspernatur dolor? Odio porro magni quod beatae laudantium vel nam! Reprehenderit sapiente recusandae porro praesentium dolore, tenetur distinctio, unde earum nulla possimus, eligendi obcaecati quisquam!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Voluptas voluptatem nobis, soluta accusamus, repudiandae quae, porro facilis sed nostrum incidunt laudantium unde inventore. Quo, deleniti tempora laudantium repudiandae pariatur soluta est praesentium, dolore delectus autem repellat quos hic totam tempore sequi, ut amet porro consequuntur provident odio! Sit veniam quia consequatur ratione, optio excepturi corporis dicta officia eaque.</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Fugit quos ad aperiam cupiditate debitis voluptates ex quas magni quaerat corrupti accusamus autem, earum fugiat enim atque iusto pariatur est eum at repellendus facere a omnis animi? Tenetur asperiores, aspernatur consequuntur, non minus architecto autem vel cumque quis unde cum officia. Quam voluptate expedita mollitia saepe sapiente incidunt! Est.</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Voluptas voluptatem nobis, soluta accusamus, repudiandae quae, porro facilis sed nostrum incidunt laudantium unde inventore. Quo, deleniti tempora laudantium repudiandae pariatur soluta est praesentium, dolore delectus autem repellat quos hic totam tempore sequi, ut amet porro consequuntur provident odio! Sit veniam quia consequatur ratione, optio excepturi corporis dicta officia eaque.</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Fugit quos ad aperiam cupiditate debitis voluptates ex quas magni quaerat corrupti accusamus autem, earum fugiat enim atque iusto pariatur est eum at repellendus facere a omnis animi? Tenetur asperiores, aspernatur consequuntur, non minus architecto autem vel cumque quis unde cum officia. Quam voluptate expedita mollitia saepe sapiente incidunt! Est.</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Voluptas voluptatem nobis, soluta accusamus, repudiandae quae, porro facilis sed nostrum incidunt laudantium unde inventore. Quo, deleniti tempora laudantium repudiandae pariatur soluta est praesentium, dolore delectus autem repellat quos hic totam tempore sequi, ut amet porro consequuntur provident odio! Sit veniam quia consequatur ratione, optio excepturi corporis dicta officia eaque.</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Fugit quos ad aperiam cupiditate debitis voluptates ex quas magni quaerat corrupti accusamus autem, earum fugiat enim atque iusto pariatur est eum at repellendus facere a omnis animi? Tenetur asperiores, aspernatur consequuntur, non minus architecto autem vel cumque quis unde cum officia. Quam voluptate expedita mollitia saepe sapiente incidunt! Est.</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Porro eius ratione ullam ea perspiciatis quidem perferendis aperiam earum laboriosam eligendi dolorem vitae omnis non velit error, expedita explicabo commodi! Qui similique excepturi temporibus veritatis minus, neque facilis, repellat sapiente harum alias impedit provident cum accusamus atque sit, eum rerum dolor commodi? Animi reiciendis quidem doloribus fuga, recusandae magni!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Porro eius ratione ullam ea perspiciatis quidem perferendis aperiam earum laboriosam eligendi dolorem vitae omnis non velit error, expedita explicabo commodi! Qui similique excepturi temporibus veritatis minus, neque facilis, repellat sapiente harum alias impedit provident cum accusamus atque sit, eum rerum dolor commodi? Animi reiciendis quidem doloribus fuga, recusandae magni!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Porro eius ratione ullam ea perspiciatis quidem perferendis aperiam earum laboriosam eligendi dolorem vitae omnis non velit error, expedita explicabo commodi! Qui similique excepturi temporibus veritatis minus, neque facilis, repellat sapiente harum alias impedit provident cum accusamus atque sit, eum rerum dolor commodi? Animi reiciendis quidem doloribus fuga, recusandae magni!</p>
                        </li>
                    </div>
                    <div className={s.section_li_4}>
                        <h3 id="tit_4">Lorem4</h3>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Suscipit dolorum, rerum earum facere quo velit. Modi alias incidunt soluta impedit debitis veritatis, corrupti exercitationem, mollitia earum similique vel ipsam fugit cum dignissimos iste perspiciatis! Architecto labore a voluptates amet odio explicabo eveniet nisi beatae perferendis quasi temporibus, eligendi sint ipsa reiciendis minima commodi doloremque consequuntur deserunt facilis animi.</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Expedita sit saepe illo autem tenetur recusandae eaque at, error nulla, quos perspiciatis doloremque velit nisi! Iste, eligendi eum. Recusandae, totam soluta omnis voluptatibus, explicabo unde aut laborum ab impedit iure possimus id! Distinctio ad nihil possimus, eveniet itaque tempore totam eaque tenetur numquam placeat non voluptate accusantium perspiciatis maxime!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Numquam facilis inventore suscipit eaque. Molestias est hic odit deserunt! Sed deserunt facilis consectetur tempora! Et, eum fugit. Doloremque, ex adipisci perferendis nihil, culpa iure sunt veniam quis voluptatibus aspernatur ea odit veritatis, nostrum esse quas dolores sapiente. Facilis eligendi quibusdam aliquam delectus quo dolorum a porro fugiat hic quisquam!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Expedita sit saepe illo autem tenetur recusandae eaque at, error nulla, quos perspiciatis doloremque velit nisi! Iste, eligendi eum. Recusandae, totam soluta omnis voluptatibus, explicabo unde aut laborum ab impedit iure possimus id! Distinctio ad nihil possimus, eveniet itaque tempore totam eaque tenetur numquam placeat non voluptate accusantium perspiciatis maxime!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Numquam facilis inventore suscipit eaque. Molestias est hic odit deserunt! Sed deserunt facilis consectetur tempora! Et, eum fugit. Doloremque, ex adipisci perferendis nihil, culpa iure sunt veniam quis voluptatibus aspernatur ea odit veritatis, nostrum esse quas dolores sapiente. Facilis eligendi quibusdam aliquam delectus quo dolorum a porro fugiat hic quisquam!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Expedita sit saepe illo autem tenetur recusandae eaque at, error nulla, quos perspiciatis doloremque velit nisi! Iste, eligendi eum. Recusandae, totam soluta omnis voluptatibus, explicabo unde aut laborum ab impedit iure possimus id! Distinctio ad nihil possimus, eveniet itaque tempore totam eaque tenetur numquam placeat non voluptate accusantium perspiciatis maxime!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Numquam facilis inventore suscipit eaque. Molestias est hic odit deserunt! Sed deserunt facilis consectetur tempora! Et, eum fugit. Doloremque, ex adipisci perferendis nihil, culpa iure sunt veniam quis voluptatibus aspernatur ea odit veritatis, nostrum esse quas dolores sapiente. Facilis eligendi quibusdam aliquam delectus quo dolorum a porro fugiat hic quisquam!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Expedita sit saepe illo autem tenetur recusandae eaque at, error nulla, quos perspiciatis doloremque velit nisi! Iste, eligendi eum. Recusandae, totam soluta omnis voluptatibus, explicabo unde aut laborum ab impedit iure possimus id! Distinctio ad nihil possimus, eveniet itaque tempore totam eaque tenetur numquam placeat non voluptate accusantium perspiciatis maxime!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Numquam facilis inventore suscipit eaque. Molestias est hic odit deserunt! Sed deserunt facilis consectetur tempora! Et, eum fugit. Doloremque, ex adipisci perferendis nihil, culpa iure sunt veniam quis voluptatibus aspernatur ea odit veritatis, nostrum esse quas dolores sapiente. Facilis eligendi quibusdam aliquam delectus quo dolorum a porro fugiat hic quisquam!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Porro eius ratione ullam ea perspiciatis quidem perferendis aperiam earum laboriosam eligendi dolorem vitae omnis non velit error, expedita explicabo commodi! Qui similique excepturi temporibus veritatis minus, neque facilis, repellat sapiente harum alias impedit provident cum accusamus atque sit, eum rerum dolor commodi? Animi reiciendis quidem doloribus fuga, recusandae magni!</p>
                        </li>
                    </div>
                    <div className={s.section_li_5}>
                        <h3 id="tit_5">Lorem5</h3>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Tempora quis aliquid fuga beatae, sit animi! Iusto iste esse, eligendi itaque fuga eos nobis, reiciendis quibusdam repellat fugiat atque necessitatibus dolor earum, quasi optio. Accusantium cum repellendus, quos ex ab nobis magni voluptatibus nihil laborum minus dolorum, iure officiis officia voluptatem. Magni minima, expedita eum voluptatum minus necessitatibus cupiditate.</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Voluptates ex voluptas, earum dolorum odit quaerat magni harum reprehenderit eum odio, cum, quis quae. Animi quis delectus, explicabo eveniet numquam omnis excepturi saepe labore? Quia impedit deserunt velit rerum, fugiat in accusantium doloremque fuga iure magni labore! Magni eos reprehenderit sint dignissimos provident? Quae beatae delectus explicabo odio ullam.</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Porro eius ratione ullam ea perspiciatis quidem perferendis aperiam earum laboriosam eligendi dolorem vitae omnis non velit error, expedita explicabo commodi! Qui similique excepturi temporibus veritatis minus, neque facilis, repellat sapiente harum alias impedit provident cum accusamus atque sit, eum rerum dolor commodi? Animi reiciendis quidem doloribus fuga, recusandae magni!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Porro eius ratione ullam ea perspiciatis quidem perferendis aperiam earum laboriosam eligendi dolorem vitae omnis non velit error, expedita explicabo commodi! Qui similique excepturi temporibus veritatis minus, neque facilis, repellat sapiente harum alias impedit provident cum accusamus atque sit, eum rerum dolor commodi? Animi reiciendis quidem doloribus fuga, recusandae magni!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Porro eius ratione ullam ea perspiciatis quidem perferendis aperiam earum laboriosam eligendi dolorem vitae omnis non velit error, expedita explicabo commodi! Qui similique excepturi temporibus veritatis minus, neque facilis, repellat sapiente harum alias impedit provident cum accusamus atque sit, eum rerum dolor commodi? Animi reiciendis quidem doloribus fuga, recusandae magni!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Porro eius ratione ullam ea perspiciatis quidem perferendis aperiam earum laboriosam eligendi dolorem vitae omnis non velit error, expedita explicabo commodi! Qui similique excepturi temporibus veritatis minus, neque facilis, repellat sapiente harum alias impedit provident cum accusamus atque sit, eum rerum dolor commodi? Animi reiciendis quidem doloribus fuga, recusandae magni!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Porro eius ratione ullam ea perspiciatis quidem perferendis aperiam earum laboriosam eligendi dolorem vitae omnis non velit error, expedita explicabo commodi! Qui similique excepturi temporibus veritatis minus, neque facilis, repellat sapiente harum alias impedit provident cum accusamus atque sit, eum rerum dolor commodi? Animi reiciendis quidem doloribus fuga, recusandae magni!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Porro eius ratione ullam ea perspiciatis quidem perferendis aperiam earum laboriosam eligendi dolorem vitae omnis non velit error, expedita explicabo commodi! Qui similique excepturi temporibus veritatis minus, neque facilis, repellat sapiente harum alias impedit provident cum accusamus atque sit, eum rerum dolor commodi? Animi reiciendis quidem doloribus fuga, recusandae magni!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Porro eius ratione ullam ea perspiciatis quidem perferendis aperiam earum laboriosam eligendi dolorem vitae omnis non velit error, expedita explicabo commodi! Qui similique excepturi temporibus veritatis minus, neque facilis, repellat sapiente harum alias impedit provident cum accusamus atque sit, eum rerum dolor commodi? Animi reiciendis quidem doloribus fuga, recusandae magni!</p>
                        </li>
                        <li>
                            <div>
                                <h4>Lorem, ipsum dolor.</h4>
                                <button>
                                    +
                                </button>
                            </div>
                            <p>Porro eius ratione ullam ea perspiciatis quidem perferendis aperiam earum laboriosam eligendi dolorem vitae omnis non velit error, expedita explicabo commodi! Qui similique excepturi temporibus veritatis minus, neque facilis, repellat sapiente harum alias impedit provident cum accusamus atque sit, eum rerum dolor commodi? Animi reiciendis quidem doloribus fuga, recusandae magni!</p>
                        </li>
                    </div>
                </ul>
            </div>
        </MainWrapper>
    )
}

export default Faq
