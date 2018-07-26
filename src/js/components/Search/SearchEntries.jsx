import React from 'react';
import { getCity, updateCity } from './searchAction';
// import SearchReducer from './SearchReducer';

export default class SearchEntries extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
        this.handleGet = this.handleGet.bind(this);
    }


    handleSearch(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateCity(value));
    }
    handleGet() {
        const { searched, dispatch } = this.props;
        dispatch(getCity(searched.SearchEntries));
        console.log(searched.SearchEntries);
    }

    render() {
        // console.log(this.state.input);
        const { SearchEntries } = this.props;
        return (
            <div className='container'>
                <div className='input-group'>
                    <input id="SearchEntries" type="text" className="form-control" placeholder="Enter name" value={SearchEntries} onChange={this.handleSearch} />
                    <div className="input-group-append">
                        <button className="btn btn-light" type="button" onClick={this.handleGet}>ENTER</button>
                    </div>
                </div>
            </div>
        );

    }
}