import React from 'react';

export default class SearchHistories extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { history } = this.props;

        // history ? console.log('yes') : console.log('no')

        // console.log(history);

        return (
            <div className='card border-alert-dark mb-3'>
                <div className='card-header text-white alert-success'>History</div>
                <div className='card-body text-center' id='result'> 

                <div>
                    {history.map((list, i) => { 
                    return (<div
                     key= {i}
                    //  name={list.name}
                    //  date={list.date}
                     >
                     <p>{list[0]}</p>
                     <p>{list[1]}</p>
                    </div>
                    )
                    })}
                    
                    
                </div>   
                   
                </div>    
            </div>
        );
    }
}

