import { combineReducers } from "redux";
import Auth from "./auth";
import Alert from "./alert"
import Categories from "./categories";
import Products from "./product";
import Cart from './cart'
export default combineReducers({
    Auth, 
    Alert,
    Categories,
    Products,
    Cart,
})