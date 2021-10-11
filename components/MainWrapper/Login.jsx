import React from 'react'
import s from '../../styles/MainWrapper/Login.module.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { setActiveLogin } from '../../Redux/actions/activeLogin.js'

const Login = (props) => {
    const dispatch = useDispatch();
    const active_login = useSelector(state => state.active_login)
    const active_form_login = useSelector(state => state.active_form_login)
    // console.log(active_form_login)
    const [activeForm, setActiveForm] = React.useState(1);
    const login = React.useRef();
    const fon_login = React.useRef();
    const form_login = React.useRef();

    

    React.useEffect(() => {
        // alert("dsads")
        if (active_login.items) {
            login.current.style.display = "flex";
            setTimeout(() => {
                fon_login.current.style.opacity = "1";
                form_login.current.style.opacity = "1";
                form_login.current.style.transform = "translate(-50%, -50%)";
            }, 200);
        } else {
            fon_login.current.style.opacity = "0";
            form_login.current.style.opacity = "0";
            form_login.current.style.transform = "translate(-50%, -20%)";
            setTimeout(() => {
                login.current.style.display = "none";
            }, 700);
        }
    }, [active_login])

    React.useEffect(() => {
        // console.log(active_form_login.items);

        if (active_form_login.items === 0){
            setActiveForm(1);
        }else{
            setActiveForm(0);
        }
    }, [active_form_login])
    
    return (
        <div className={s.login_wrap} ref={login}>
            <div className={s.fon} ref={fon_login} onClick={() => {
                dispatch(setActiveLogin(false));
                }}></div>
            <article ref={form_login} id="post_47" className={`${s.post_47} ${s.page} ${s.type_page} ${s.status_publish} ${s.hentry}`}>
                <header className={s.entry_header}>
                    <h2 className={s.entry_title}>My account</h2>
                </header>
                <div className={s.entry_content}>
                    <div className={s.woocommerce}>
                        <div className={s.woocommerce_notices_wrapper}></div>

                        <div className={s.form_wrapper}>
                            <div className={s.buttons_wrapper}>
                                <button className=
                                    {activeForm === 0 ? `${s.register_btn} ${s.active}` : `${s.register_btn}`}
                                onClick={() => setActiveForm(0)}>Register</button>
                                <button className=
                                    {activeForm === 1 ? `${s.login_btn} ${s.active}` : `${s.login_btn}`}
                                
                                onClick={() => setActiveForm(1)}>Login</button>
                            </div>
                            <div className={s.form_content} id="customer_login">

                                <div className={activeForm === 1 ? `${s.wrap_login} ${s.active}` : `${s.wrap_login}`}>


                                    <form className={`${s.woocommerce_form} ${s.woocommerce_form_login} ${s.login}`}  method="post" >


                                        <p className={`${s.woocommerce_form_row} ${s.woocommerce_form_row__wide} ${s.form_row} ${s.form_row_wide}`}>
                                            <label for="username">Email address&nbsp; <span lassName={s.required}>*</span></label>
                                            <input type="text" className={` ${s.woocommerce_Input} ${s.woocommerce_Input__text} ${s.input_text} `}
                                                name="username" id="username" autocomplete="username" value="" />
                                        </p>
                                        <p className={`${s.woocommerce_form_row} ${s.woocommerce_form_row__wide} ${s.form_row} ${s.form_row_wide}`}>
                                            <label for="password">Password&nbsp; <span className={s.required}>*</span></label>
                                            <span className={s.password_input}><input
                                                className={`${s.woocommerce_Input} ${s.woocommerce_Input__text} ${s.input_text}`} type="password"
                                                name="password" id="password" autocomplete="current_password" /><span
                                                    className={s.show_password_input}></span></span>
                                        </p>


                                        <p className={`${s.form_row} ${s.row_specs_form}`}>
                                            <>
                                            <label
                                                className={`${s.woocommerce_form__label} ${s.woocommerce_form__label_for_checkbox} ${s.woocommerce_form_login__rememberme}`}>
                                                <input className={`${s.woocommerce_form__input} ${s.woocommerce_form__input_checkbox}`}
                                                    name="rememberme" type="checkbox" id="rememberme" value="forever" />
                                                <span>Remember me</span>
                                            </label>
                                            </>
                                            <input type="hidden" id="woocommerce_login_nonce" name="woocommerce_login_nonce"
                                                value="df83472d48" /><input type="hidden" name="_wp_http_referer"
                                                    value="/my_account/" /> <a
                                                        href="https://www.coniferkingdom.com/my_account/lost_password/">Lost your
                                                password?</a>
                                        </p>

                                        <button type="submit" className={`${s.woocommerce_button} ${s.button} ${s.woocommerce_form_login__submit}`}
                                            name="login" value="Log in">Log in</button>

                                        <div className={s.text_under_button}>
                                            Not a member yet?<a className={s.clicable_form_btn} onClick={() => setActiveForm(0)}> Sign up</a>
                                        </div>

                                    </form>


                                </div>

                                <div className=
                                    {activeForm === 0 ? `${s.wrap_register} ${s.active}` : `${s.wrap_register}`}>

                                    <form method="post" className={`${s.woocommerce_form} ${s.woocommerce_form_register} ${s.register}`}>



                                        <p className={`${s.woocommerce_form_row} ${s.woocommerce_form_row__wide} ${s.form_row} ${s.form_row_wide}}`}>
                                            <label for="reg_email">Email address&nbsp; <span className={s.required}>*</span></label>
                                            <input type="email" className={`${s.woocommerce_Input} ${s.woocommerce_Input__text} ${s.input_text}`}
                                                name="email" id="reg_email" autocomplete="email" value="" />
                                        </p>


                                        <p className={`${s.woocommerce_form_row} ${s.woocommerce_form_row__wide} ${s.form_row} ${s.form_row_wide}`}>
                                            <label for="reg_password">Password&nbsp; <span className={s.required}>*</span></label>
                                            <span className={s.password_input}><input type="password"
                                                className={`${s.woocommerce_Input} ${s.woocommerce_Input__text} ${s.input_text}`} name="password"
                                                id="reg_password" autocomplete="new_password" /><span
                                                className={s.show_password_input}></span></span>
                                        </p>


                                        <div className={s.woocommerce_privacy_policy_text}>
                                            <p>Your personal data will be used to support your experience throughout this website,
                                                to manage access to your account, and for other purposes described in our <a
                                                    href="https://www.coniferkingdom.com/terms_and_conditions/"
                                                    className={s.woocommerce_privacy_policy_link} target="_blank">privacy policy</a>.</p>
                                        </div>
                                        <p className={`${s.woocommerce_form_row} ${s.form_row}`}>
                                            <input type="hidden" id="woocommerce_register_nonce" name="woocommerce_register_nonce"
                                                value="50e02cea86" /><input type="hidden" name="_wp_http_referer"
                                                    value="/my_account/" /> <button type="submit"
                                                        className={`${s.woocommerce_Button} ${s.woocommerce_button} ${s.button} ${s.woocommerce_form_register__submit}`}
                                                        name="register" value="Register" > Register</button>
                                        </p>

                                        <div className={s.text_under_button}>
                                            Already have an account?<a className={s.clicable_form_btn} onClick={() => setActiveForm(1)}> Log in</a>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Login
