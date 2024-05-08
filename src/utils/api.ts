import axiosApi from "./axios";

// 抛出get
export function get(url: string,params?: any){
    return axiosApi({
        url,
        method:'get',
        params
    })
}

// 抛出post
export function post(url: string,data?:any){
    return axiosApi({
        url,
        method:'post',
        data
    })
}