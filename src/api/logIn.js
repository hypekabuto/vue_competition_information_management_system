import http from '../utils/request'
export const login = (data) =>{
    return http.post('http://localhost:9001/user/login',data)
}
