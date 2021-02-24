import {connect} from "react-redux";
import SearchPanelView from './SearchPanel.view';
import { SEARCH_START } from '../../../store/actionTypes'

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    searchRequest: id => dispatch({
      type: SEARCH_START,
      payload: id
    }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanelView);
