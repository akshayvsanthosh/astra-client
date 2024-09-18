import commonApi from "./commonApi"
import SERVER_URL from "./server_url"

// registerAPI
export const registerAPI = async (reqBody)=>{
    return await commonApi('POST',`${SERVER_URL}/register`,reqBody)
}

// loginAPI
export const loginAPI = async (reqBody)=>{
    return await commonApi('POST',`${SERVER_URL}/user/login`,reqBody)
}

// grievanceAPI
export const addGrievanceAPI = async(reqBody,reqHeader)=>{
    return await commonApi('POST',`${SERVER_URL}/user/submitgrievance`,reqBody,reqHeader)
}

// get grievanceAPI
export const getGrievanceAPI = async(reqHeader)=>{
    return await commonApi('GET',`${SERVER_URL}/getGrievance`,{},reqHeader)
}