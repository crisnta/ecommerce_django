import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Error404 from './containers/errors/Error404'

import Signup from './containers/auth/Signup'
import Login from './containers/auth/Login'
import Activate from './containers/auth/Activate'
import ResetPassword from './containers/auth/ResetPassword';
import ResetPasswordComfirm from './containers/auth/ResetPasswordComfirm';
import Shop from './containers/Shop';
import ProductDetail from './containers/pages/productDetail';
import Search from './containers/pages/Search';




function App() {
  return (
    <Provider store={store}>
        <Router>
          <Routes>
            {/* Error Dsiplay */}
            <Route path="*" element={<Error404/>}/>
            <Route exact path="/" element={<Home/>}/>
            {/*Authetication*/}
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/activate/:uid/:token" element={<Activate/>}/>
            <Route exact path='/reset_password' element={<ResetPassword/>} />
            <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordComfirm/>} />

            <Route exact path="/shop" element={<Shop/>}/>
            <Route exact path="/product/:productId" element={<ProductDetail/>}/>

            <Route exact path="/search" element={<Search/>}/>


          </Routes>
        </Router>
    </Provider>
  );
}

export default App;
