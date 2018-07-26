import { connect } from 'react-redux';
import AddOn from './AddOn';

function mapStoreToProps (store) {
    // console.log(store);
    return {
        searched: store.searched
    };
}

export default connect(mapStoreToProps)(AddOn)
