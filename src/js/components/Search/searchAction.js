// Action Creators
import axios from 'axios';
import keys from '../../../config/keys';





  export function searches(SearchEntries) {
    const getCity = axios.get(`/searched/${SearchEntries}`)
    return (dispatch) => {
      dispatch({
        type: 'GO',
        payload: getCity
        .then((response) => {
          // console.log(response);
          return response
        })
      });
    };
}


  