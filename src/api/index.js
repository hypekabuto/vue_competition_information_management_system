import http from '../utils/request'
export const getIndexTable = () =>{
    return http.get("www.baidu.com")
}