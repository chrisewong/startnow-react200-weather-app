import { connect } from 'react-redux';
import SearchHistories from './SearchHistories';

function mapStoreToProps (store) {
    return {
        
        history: store.searched.history
    };
    
}
export default connect(mapStoreToProps)(SearchHistories)