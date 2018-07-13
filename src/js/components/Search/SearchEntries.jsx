import React from 'react';
import { Update, searches } from './searchAction';

export default class SearchEntries extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
        this.handleGet = this.handleGet.bind(this);
    }

    handleSearch(event){
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(Update(value));
    }
    
    handleGet(){
        // console.log(this.props)
        const { searched, dispatch } = this.props;
        dispatch(searches(searched.SearchEntries));
    }

    render() {
        const { SearchEntries } = this.props;
        return (
            <div className='container'>
                <div className='input-group mb-3'>
                    <input type='text' className='form-control' placeholder="Type City's name" id='search-input' value={SearchEntries} onChange={this.handleSearch}/>
                    <div className='input-group-append'>
                        <button className='btn btn-outline-secondary' type='button' onClick={this.handleGet}>ENTER</button>
                    </div>
                </div>
            </div>
        );

    }
}