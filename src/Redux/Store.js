import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootreducer = combineReducers({user:Reducer})
export const Store = configureStore({reducer:rootreducer,middleware:[thunk,logger]})