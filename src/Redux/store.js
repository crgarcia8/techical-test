import { createStore } from 'redux';
import todo from './Reducers/reducers';

const store = createStore(todo);

export default store;