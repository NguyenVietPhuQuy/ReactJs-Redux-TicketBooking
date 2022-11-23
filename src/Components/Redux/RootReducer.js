import ProductReducer from "./ProductReducer";
import {combineReducers} from 'redux'
const RootReducer = combineReducers({
    products: ProductReducer,
})
export default RootReducer