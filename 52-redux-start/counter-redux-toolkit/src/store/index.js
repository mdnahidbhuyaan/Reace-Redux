import { createStore } from 'redux';   
const INITAL_VALUE = {
    counter: 0,
    privacy: false
}

// eslint-disable-next-line no-unused-vars
const counterReducer = (store = INITAL_VALUE, action) => {
    if(action.type === "INCREMENT"){
        return {counter: store.counter + 1,privacy: store.privacy}
    }
    else if(action.type === "DECREMENT"){
        return {counter: store.counter - 1,privacy: store.privacy}
    }else if(action.type === "ADD"){
        return {counter:store.counter + Number(action.payload.num),privacy: store.privacy}
    }else if(action.type === "SUBTRACT"){
        return {counter:store.counter - Number(action.payload.num),privacy: store.privacy}
    }else if(action.type === "PRIVACY_TOGGLE"){
        return {counter:store.counter,privacy: !store.privacy}
    }

    return store;
}
const counterStore = createStore(counterReducer)

export default counterStore;