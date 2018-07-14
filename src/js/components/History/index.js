import { connect } from 'react-redux';
import SearchHistories from './SearchHistories';

function mapStoreToProps (store) {
    // console.log(store.searched.data);
    return {
        
        history: store.searched.history
    };
    
}
export default connect(mapStoreToProps)(SearchHistories)