// Action Creators
import axios from 'axios';
// import keys from '../../../config/keys';


export function getCity(SearchEntries) {
  return {
      type: 'GO',
      payload: axios.get(`/searched/${SearchEntries}`)
   
  };
}


export function updateCity(SearchEntries) {
  return {
    type: 'UPDATE_CITY_INFO',
    payload: SearchEntries
  };
};

  