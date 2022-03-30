//rxreducer

import { CAP_NHAT_NGUOI_DUNG, SUA_NGUOI_DUNG, THEM_NGUOI_DUNG, XOA_NGUOI_DUNG } from "../actions/types/baiTapQuanLyNguoiDungType";

const initialState = {
    mangNguoiDung: [
        { taiKhoan: 'abc', hoTen: 'B', soDienThoai: '0939398000', email: 'nguyenvana@gmail.com', matKhau: '123123', loaiNguoiDung: '1' },
        { taiKhoan: 'xyz', hoTen: 'A', soDienThoai: '0932332000', email: 'nguyenvanb@gmail.com', matKhau: '123123', loaiNguoiDung: '2' }

    ],
    nguoiDungSua: {
        taiKhoan: 'xyz', hoTen: 'A', soDienThoai: '0932332000', email: 'nguyenvanb@gmail.com', matKhau: '123123', loaiNguoiDung: '2'

    }
}

export default (state = initialState, action) => {
    switch (action.type) {

        case THEM_NGUOI_DUNG: {
            state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung]
        }
        case XOA_NGUOI_DUNG: {
            let mangNguoiDungUpdate = [...state.mangNguoiDung]
            mangNguoiDungUpdate = mangNguoiDungUpdate.filter(nguoiDung => nguoiDung.taiKhoan !== action.taiKhoan);
            state.mangNguoiDung = mangNguoiDungUpdate;
        }
        case SUA_NGUOI_DUNG: {
            state.nguoiDungSua = action.nguoiDung;
        }
            return { ...state }
        case CAP_NHAT_NGUOI_DUNG: {
            let mangNguoiDungUpdate = [...state.mangNguoiDung]
            let nguoiDungUpdate = mangNguoiDungUpdate.find(nd => nd.taiKhoan === action.nguoiDungCapNhat.taiKhoan);
            if (nguoiDungUpdate) {
                for (let key in nguoiDungUpdate) {
                    nguoiDungUpdate[key] = action.nguoiDungCapNhat[key];
                }
            }
            //setState mảng người dùng
            state.mangNguoiDung = mangNguoiDungUpdate;
            return { ...state }

        }

        default:
            return state
    }
}
