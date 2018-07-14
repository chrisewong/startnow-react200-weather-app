import React from 'react';

export default class SearchHistories extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { history } = this.props;

        history ? console.log('yes') : console.log('no')

        console.log(history.length);

        return (
            <div className='card border-alert-dark mb-3'>
                <div className='card-header text-white alert-success'>History</div>
                <div className='card-body text-center' id='result'>     
                         
                </div>    
            </div>
        );
    }
}


// <tbody>
//                         {data ? (
//                             data.map((data) => {
//                               <tr>
//                               <td>{data.name}</td>
//                               </tr>  
//                         })} 
                    
//                      ) : () 
//                      </tbody>





// {history ? (
//     <div className='row'>
//             <div className='col-4'> <p className='card-title text-success'> 
//             {history.name}
//             </p>
//             </div>
//             </div>
//             <div className='col-4'> <p className='card-title text-success'> 
//             {history.Date}
//             </p>
//             </div>
    
    
//  ) : (
//     <div>
//     </div>
    
//  )
//  }

