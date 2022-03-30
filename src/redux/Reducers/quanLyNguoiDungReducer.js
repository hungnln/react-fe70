import { USER_LOGIN } from "../../util/setting";

let usLogin;
if (localStorage.getItem(USER_LOGIN)) {
    usLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const initialState = {
    userLogin: usLogin
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        default:
            return state
    }
}
