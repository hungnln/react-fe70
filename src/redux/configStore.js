import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import baiTapQuanLyNguoiDungReducer from './Reducers/baiTapQuanLyNguoiDungReducer';
import { FakeBookAppReducer } from './Reducers/FakeBookAppReducer';
import { gioHangReducer } from './Reducers/gioHangReducer';
import { productDetailReducer } from './Reducers/productDetailReducer';
import toDoListReducer from './Reducers/toDoListReducer';
import reduxThunk from 'redux-thunk'
import modalReducer from './Reducers/modalReducer';
import quanLyNguoiDungReducer from './Reducers/quanLyNguoiDungReducer';
const rootReducer = combineReducers({
    //Nơi chứa các state của ứng dụng
    carDetailReducer: (state = { id: 1, name: 'black car', img: './img/products/black-car.jpg', price: 1000 }, action) => {
        switch (action.type) {
            case 'XEM_CHI_TIET': {
                state = action.carDetail;
                return { ...state }; //immutable
            }
        }
        return state;
    },
    productDetailReducer,
    gioHangReducer,
    baiTapQuanLyNguoiDungReducer,
    FakeBookAppReducer,
    toDoListReducer,
    modalReducer,
    quanLyNguoiDungReducer


});
let middleWare = applyMiddleware(reduxThunk)
let composeCustom = compose(middleWare, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export const store = createStore(rootReducer, composeCustom);