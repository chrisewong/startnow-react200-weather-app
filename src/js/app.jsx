import React from 'react';
import SearchEntries from '../js/components/Search';
import AddOn from '../js/components/AddOn/index'
import SearchResult from '../js/components/Result';
import SearchHistories from '../js/components/History';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          
          <h1 className='display-3 text-center'>Weather App</h1>
          
        
        </div>
        <div className='row'>
          <AddOn />
          <SearchEntries />
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <SearchResult />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <SearchHistories />
          </div>
        </div>
      </div>
    );
  }
}
