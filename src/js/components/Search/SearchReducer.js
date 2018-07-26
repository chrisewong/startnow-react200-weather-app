import moment from 'moment';

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
  
    case 'UPDATE_CITY_INFO': {
      return {
        ...state,
        SearchEntries: payload
      };
    }

    case "GO_FULFILLED": {
      
      // console.log(payload.searched);
      return {
        ...state,
        data: payload.data,
        history: [...state.history, [payload.data.name, moment().format('MMMM Do YYYY, h:mm:ss a')]]
      };
    }

      //   data: payload.data,
      //   history: [{
      //     name: payload.data.name,
      //     date: payload.headers.name,
      //     ...state.history 
      //   }]
      //   };
      // }
    case "GO_REJECTED":
      {
        // console.log("REJECTED: ");
        return {
          ...state,
        };
      }
    case "GO_PENDING":
      {
        // console.log("pending: ")
        return {
          ...state
        };
      }
    default:
      {
        // console.log(JSON.stringify(state));

        return state;
      }
  }
}


// var history = []
      // var hist = {}
      // hist.Name = payload.data.name;
      // hist.Date = payload.headers.date;
      // history.push(hist);
      // console.log(history);
      // console.log('go_fulfilled');