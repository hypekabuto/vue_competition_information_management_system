import http from '../utils/request'
export const getRole = () =>{
    const headers = {
        "Authorization": localStorage.getItem("Authorization")
    };
    return http.get('http://localhost:9001/user/getRole', {
        headers: headers
    });
}
export const getMenuData = (roleLists) => {
    const headers = {
        "Authorization": localStorage.getItem("Authorization"),
        "Content-Type": "application/json"
    };
    return http.post('http://localhost:9001/menu/getMenuData', roleLists, {
        headers: headers
    });
}
export const getCollegeList = () => {
    const headers = {
        "Authorization": localStorage.getItem("Authorization"),
        "Content-Type": "application/json"
    };
    return http.get('http://localhost:9001/college/getCollegeList', {
        headers: headers
    });
}
export const getProfessionList = () => {
    const headers = {
        "Authorization": localStorage.getItem("Authorization"),
        "Content-Type": "application/json"
    };
    return http.get('http://localhost:9001/profession/getProfessionList', {
        headers: headers
    });
}