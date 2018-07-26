import React from 'react';
import { getCity } from '../Search/searchAction';
// import { Update, searches } from '../Search/searchAction';
export default class AddOn extends React.Component {
  constructor(props) {
    super(props);

    

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    // console.log(event.target.name);
    const { dispatch } = this.props;
    dispatch(getCity(event.target.name));
  }
  

  render() {
    return (
      <div className='container'>
        <div className='btn-group' role='group'>
          {/* <button type="button" className="btn btn-primary btn-sm" onClick={()=>{this.handleClick("San Diego")}}>San Diego</button> */}
          <button type='button' name='San Diego' className='btn btn-success btn-sm' onClick={ this.handleClick }>San Diego</button>
          <button type='button' name='New York' className='btn btn-success btn-sm' onClick={ this.handleClick }>New York</button>
          <button type='button' name='Washington' className='btn btn-success btn-sm' onClick={ this.handleClick }>Washing D.C</button>
          <button type='button' name='London' className='btn btn-success btn-sm' onClick={ this.handleClick }>London</button>
          <button type='button' name='Tokyo' className='btn btn-success btn-sm' onClick={ this.handleClick }>Tokyo</button>
        
        </div>
      </div>
    );
  }
}