import {connect} from "react-redux";
import { LOAD_MAIN_START } from '../../store/actionTypes'
import SearchResultView from "./SearchResult";


const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadMain: () => dispatch({
      type: LOAD_MAIN_START
    }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultView);
