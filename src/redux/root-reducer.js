import { combineReducers } from "redux";
import { cakeReducer } from "./cake/cake-reducer";
import { iceCreamReducer } from "./ice-cream/ice-cream-reducer";

const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCrem: iceCreamReducer,
});

export { rootReducer };
