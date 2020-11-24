import authReducer from './authReducer';
import projectreducer from './projectReducer';
import { combineReducers } from 'redux';

const rooReducer = combineReducers({
    auth: authReducer,
    project: projectreducer
});

export default rooReducer;