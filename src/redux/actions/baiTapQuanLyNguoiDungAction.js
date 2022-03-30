import Register from "../../pages/Register/Register"
import { THEM_NGUOI_DUNG } from "./types/baiTapQuanLyNguoiDungType"

export const themNguoiDungAction = nguoiDung => {


    //Xử lí rẩ nhiều mới ra được object

    return {
        type: THEM_NGUOI_DUNG,
        nguoiDung,
    }
}