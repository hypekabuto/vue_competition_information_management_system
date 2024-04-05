import http from '../utils/request'
export const getUserDetail = () =>{
    const headers = {
        "Authorization": localStorage.getItem("Authorization")
    };
    return http.get('http://localhost:9001/user/getUserDetail', {
        headers: headers
    });
}
export const uploadAvatar = (data) =>{
    const headers = {
        "Authorization": localStorage.getItem("Authorization")
    };
    return http.post('http://localhost:9001/user/uploadAvatar',data, {
        headers: headers
    });
}
export const updateUserMessage = (data) =>{
    const headers = {
        "Authorization": localStorage.getItem("Authorization")
    };
    return http.post('http://localhost:9001/user/updateUserMessage',data, {
        headers: headers
    });
}
