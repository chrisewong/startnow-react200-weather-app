import React from 'react';

export default class SearchResult extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        // console.log(data)
        return (
            <div className='card border-alert-primary mb-3'>
                <div className='card-header text-primary alert-success'>City</div>
                <div className='card-body text-center' id='result'>
                    {data ? (
                        <div>                            
                            <label>Lat/Long:</label>
                            {data.coord.lat}
                            {data.coord.lon}
                            <hr />
                            <div className='row'>
                                <div className='col-4'>Temperature(F) <p className='card-title text-success'> 
                                {data.main.temp}
                                F</p></div>
                                <div className='col-4'>Pressure <p className='card-title text-success'>
                                {data.main.pressure}                                    
                                </p></div>
                                <div className='col-4'>Humidity <p className='card-title text-success'>
                                {data.main.humidity}
                                %</p></div>
                            </div>
                            <div className='row'>
                                <div className='col-4'>Lowest Temp(F) <p className='card-title text-success'> 
                                  {data.main.temp_min}
                                </p></div>
                                <div className='col-4'>Highest Temp(F) <p className='card-title text-success'> 
                                  {data.main.temp_max}
                                </p></div>
                                <div className='col-4'>Wind Speed <p className='card-title text-success'>
                                   {data.wind.speed} 
                                    mph</p></div>
                            </div>
                        </div>
                    ) : (
                            <div>
                                <h2 className='card-title text-center'>List</h2>
                            </div>
                        )}

                </div>
            </div>
        );
    }
}

// <h2 className='card-title text-center'>
//                                 <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
//                                 {data.name}
//                             </h2>