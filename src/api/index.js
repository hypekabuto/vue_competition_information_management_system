import http from '../utils/request'
export const getRole = () =>{
    const headers = {
        "Authorization": localStorage.getItem("Authorization")
    };
    return http.get('http://localhost:9001/user/getRole', {
        headers: headers
    });
}
export const getMenuData = (data) =>{
    const headers = {
        "Authorization": localStorage.getItem("Authorization")
    };
    return http.post('http://localhost:9001/menu/getMenuData', {
        params: data,
        headers: headers
    });
}