// Action Creators
import axios from 'axios';
import keys from '../../../config/keys';


export function Update(SearchEntries) {
  return {
    type: 'UPDATE_SEARCH',
    payload: {
      SearchEntries
    }
  };
}
  
  export function searches(SearchEntries) {
    const getCity = axios.get(`/searched/${SearchEntries}`)
    return (dispatch) => {
      dispatch({
        type: 'GO',
        payload: getCity
        .then((response) => {
          return response.data
        })
      });
    };
}


  