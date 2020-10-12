import authReducer from './authReducer';
import projectreducer from './projectreducer';
import { combineReducers } from 'redux';

const rooReducer = combineReducers({
    auth: authReducer,
    project: projectreducer
});

export default rooReducer;