import {combineReducers, createStore} from 'redux';

const userReducer = (state = {
                         name: 'Leon',
                         age: 41
                     }, action) => {
    if (action.type === "BIRTHDAY") {
        console.log(state);
        /**
         * State is only the user object here
         */
        return {
            ...state,
            age: state.age + action.payload,
        }
    }
    return state;
}

const tweetReducer = (state = ['russia! russia! russia!', 'why are you a Kremlin stooge?'], action) => {
    return state;
}

const reducers = combineReducers({user: userReducer, tweets: tweetReducer});

const store = createStore(reducers);

// const store = createStore(reducers, {
//     user: {
//         name: 'Leon',
//         age: 41,
//     },
//     tweets: []
// });

store.subscribe(() => {
    console.log('store changed', store.getState());
});

store.dispatch({type: "BIRTHDAY", payload: 1});
