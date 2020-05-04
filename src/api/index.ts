import axios from "axios";

const URL_API = 'https://5eafd5000605ed0016d2ceca.mockapi.io/list-user';

export const getListUserFormAPI = () => axios.get(`${URL_API}`);

export const deleteUserFromAPI = (id: any) =>{
    console.log('asdasd', id)
    console.log('asdasd', typeof id)
  return axios.delete(`${URL_API}/${id}`, {
  }); }