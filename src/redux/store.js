import {createStore,} from "redux"
import reducer from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';
import { devToolsEnhancer } from 'redux-devtools-extension';

const initialState = {
    todos:[
        {
            id:0,
            name:"Ir al gimnasio",
            complete:false
        },
        {
            id:1,
            name:"Lavar la ropa",
            complete:true
        },

    ]
}

export const store = createStore(
    reducer, initialState, devToolsEnhancer()
)