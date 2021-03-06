import { createStore, applyMiddleware } from "redux"; // createStore() creates the store using the root reducer and the middleware we want to use, to use the middleware we use applyMiddleware() method
import logger from "redux-logger"; // this is a middleware that is nice to use when debugging our redux code
import rootReducer from "./root-reducer"; // we need the root reducer to create the store
import { persistStore } from "redux-persist"; // this allows our browser to cache our store depending on the config options we set

const middlewares = [logger]; // we create an array with all the middlewares we want to use so then we can spread this array as the parameter of applyMiddleware method so each of them is passed as a parameter.
// this makes it easier to add new middlewares just by adding them to the array

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// we create a persistor, which calls the persistStore() passing our store as parameter
export const persistor = persistStore(store); // this is a persistant version of our store
// using persistor and store is how we are going to create the new Provider that is wrapping our application

// as we now have more than one thing to export we export them separately instead of one by default
