import moment from 'react-moment';

const defaultState = {
  SearchEntries: '',
  history: [],
  data: {
    name: '',
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
      lon: '',
    },
    headers: {
      date: ''
    }
    
  }
  
};

export default function SearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GO_FULFILLED': {
      // var history = []
      // var hist = {}
      // hist.Name = payload.data.name;
      // hist.Date = payload.headers.date;
      // history.push(hist);
      // console.log(history);

      return {state, 
        data: payload.data,
        history: [{
          name: payload.data.name,
          date: payload.headers.name,
          ...state.history 
        }]
        };
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