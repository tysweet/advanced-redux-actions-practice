import { connect } from 'react-redux';
import {addUser, removeUser, setCurrentUserSort} from "../actions";
import Users from "../components/Users";


function mapStateToProps(state){
  return {
    users: state.users,
    firstNameFilter: state.searchText,
    sortOn: state.currentUserSort
  }
}

export default connect(mapStateToProps)(Users);