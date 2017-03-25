import {createStore, bindActionCreators, compose} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './actions/actionCreators';
import reducer from './reducer/reducer';
import Home from './components/Home';
import data from '../static/data/data.js';

const mapStateToProp = (state) => {return {state}};
const mapDispatchToProp = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};
const app = connect(mapStateToProp, mapDispatchToProp)(Home);
const store = createStore(reducer, data, compose(window.devToolsExtension && window.devToolsExtension()));

export {store, app};