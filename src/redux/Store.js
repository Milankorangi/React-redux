import { createStore } from 'redux';
import addPost from './Reducer';

 const store = createStore(addPost);

 export default store;
