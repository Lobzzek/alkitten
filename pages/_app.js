import '../styles/globals.css'

import React from 'react';
// import App from 'next/app'
import { Provider } from 'react-redux'
import store from '../Redux/store.js'
import { createWrapper } from 'next-redux-wrapper'

function MyApp({ Component, pageProps }) {

  return( 
    <Provider store={store}>
      <Component {...pageProps}></Component>
    </Provider>
  )
}


// class MyApp extends App {
//   render(){
//     const {Component, pageProps} = this.props
//     return ( 
      
//     )
//   }
// }

const makestore = () => store;
const wrapper = createWrapper(makestore);



export default wrapper.withRedux(MyApp);
