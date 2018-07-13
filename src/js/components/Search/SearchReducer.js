import moment from 'react-moment';

const defaultState = {
  SearchEntries: '',
  history: [],
  data: {
    main: {
      humidity: '',
      pressure: '',
      temp: '',
      temp_max: '',
      temp_min: ''
    },
    wind: {
      speed: ''
    },
    coord: {
      lat: '',
      lon: ''
    }

  }
  
};

export default function SearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
  case 'UPDATE_SEARCH':{
    console.log(payload);
        return {
          ...state,
          history: payload
        };
      }
    case 'GO_FULFILLED': {
      return {...state, data: payload}
      }
    case 'GO_REJECTED':
      {
        // console.log("REJECTED: ", payload);
        return {
          ...state,
        };
      }
    case 'GO_PENDING':
      {
        // console.log("pending: ", payload)
        return {
          ...state
        };
      }
    default:
      {
        return state;
      }
  }
}