import http from '../utils/request'
export const selectCompetitionList = (data,pageData) =>{
    const headers = {
        "Authorization": localStorage.getItem("Authorization"),
        "Content-Type": "application/json"
    };
    const postData = {...data, ...pageData};
    return http.post('http://localhost:9001/competition/selectCompetitionList',postData, {
        headers: headers
    });
}
export const selectDictionaryList = (codeType) => {
    const headers = {
        "Authorization": localStorage.getItem("Authorization"),
        "Content-Type": "application/json"
    };
    const params = { codeType };
    const options = {
        params,
        headers
    };
    return http.get('http://localhost:9001/competition/selectDictionaryList', options);
};
