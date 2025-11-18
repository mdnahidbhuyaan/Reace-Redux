import { createStore } from 'redux';   
const INITAL_VALUE = {
    counter: 0
}

// eslint-disable-next-line no-unused-vars
const counterReducer = (store = INITAL_VALUE, action) => {
    return store;
}
const counterStore = createStore(counterReducer)

export default counterStore;