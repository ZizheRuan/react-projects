import { createStore } from 'redux';

const store = createStore((state = { count: 0 })=>{//current state => default state OBJECT
    return state;
});

console.log(store.getState());