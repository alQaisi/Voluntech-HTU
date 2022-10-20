import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducers } from "./root-reducers";

const middleWares=[process.env.NODE_ENV!=="production" && logger,thunk].filter(Boolean);
const composeEnhancer=(process.env.NODE_ENV!=="production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose;
const composeMiddlewars=composeEnhancer(applyMiddleware(...middleWares));

const persistConfig={
    key:"root",
    storage,
    blacklist:["user",
            "userDashboard","companySignUp",
            "userSignup","userUpdate",
            "activities","companies","technologists","activity"]
};
const persistedReducer=persistReducer(persistConfig,rootReducers)

export const store=createStore(persistedReducer,undefined,composeMiddlewars);
export const persistor=persistStore(store);