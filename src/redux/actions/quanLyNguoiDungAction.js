import axios from "axios"
import { ACCESSTOKEN, DOMAIN, history, TOKEN_CYBERSOFT, USER_LOGIN } from "../../util/setting"

//userLogin :{taiKhoan:'',matKhau:''}
export const dangNhapAction = (userLogin) => {
    return async dispatch => {
        try {
            let result = await axios({
                url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
                method: 'POST',
                data: userLogin,
                headers: {
                    //token đưa vào phần thuộc tính header
                    'TokenCybersoft': TOKEN_CYBERSOFT
                }
            });
            console.log(result.data);
            let usLogin = result.data.content;
            let token = usLogin.accessToken;
            //Lưu thông tin token vào storage để dùng cho các api sau
            localStorage.setItem(ACCESSTOKEN, token);
            //Thông tin user trả về chuyển về chuỗi => lưu vào 
            localStorage.setItem(USER_LOGIN, JSON.stringify(usLogin))
            history.push('/home')
        } catch (error) {
            // console.log(error.response?.data);
            console.log('1');
        }
    }

}