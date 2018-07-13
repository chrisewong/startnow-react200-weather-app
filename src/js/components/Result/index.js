import { connect } from 'react-redux';
import SearchResult from './SearchResult';

function mapStoreToProps(store) {
    return {
        data: store.searched.data
    };
}

export default connect(mapStoreToProps)(SearchResult);