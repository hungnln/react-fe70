//Cấu hình hằng số của hệ thống

import { createBrowserHistory } from "history"

//doamain backend
export const DOMAIN = 'https://movienew.cybersoft.edu.vn'
export const TOKEN_CYBERSOFT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzAiLCJIZXRIYW5TdHJpbmciOiIxNC8xMC8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NjU3MDU2MDAwMDAiLCJuYmYiOjE2Mzc0Mjc2MDAsImV4cCI6MTY2NTg1MzIwMH0.RAzH9H37ZyQ8ZT6A62fw3_bDfJOCq0A9vz08qT262EU"

export const USER_LOGIN = 'userLogin'
export const ACCESSTOKEN = 'accessToken'
//Giúp chuyển hướng trang của route
export const history = createBrowserHistory()