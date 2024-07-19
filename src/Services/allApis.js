import { base_url } from "./base_url";
import commonApi from "./commonaApi";
export const addVideo = async (data) => {
    return await commonApi('POST', `${base_url}/allvideos`, data)
}

export const getVideos = async () => {
  return   await commonApi('GET', `${base_url}/allvideos`, '');
  
}

export const deleteVideo = async (id) => {
    return await commonApi('DELETE', `${base_url}/allVideos/${id}`, {})
}
//category
export const addCategory=async(data)=>{
    return await commonApi('POST',`${base_url}/category`,data)
}
export const getcategories = async () => {
    return   await commonApi('GET', `${base_url}/category`, '');
    
  }
  export const deleteCategory = async (id) => {
    return await commonApi('DELETE', `${base_url}/category/${id}`, {})
  }
    //addcategory
    export const getSpecificCategory=async(id)=>{
      return await commonApi('GET', `${base_url}/category/${id}`,'')
    }
export const updateCategory=async(id,data)=>{
  return await commonApi('PUT',`${base_url}/category/${id}`,data)
}
//history
export const addHistory=async(data)=>{
  return await commonApi('POST',`${base_url}/history`,data)
}

export const getHistory = async () => {
  return   await commonApi('GET', `${base_url}/history`, '');
  
}

export const deleteHistory = async (id) => {
  return await commonApi('DELETE', `${base_url}/history/${id}`, {})
}
