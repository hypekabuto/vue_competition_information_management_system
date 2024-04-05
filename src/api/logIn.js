import http from '../utils/request'
export const login = (data) =>{
    return http.post('http://localhost:9001/user/login',data)
}
export const logout = () =>{
    const headers = {
        "Authorization": localStorage.getItem("Authorization")
    };
    return http.get('http://localhost:9001/user/logout',{
        headers: headers
    });
}
