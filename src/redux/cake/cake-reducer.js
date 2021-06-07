import { BUY_CAKE, RETURN_CAKE } from "./cake-types";

const cakeInitialState = {
	numberOfCakes: 30,
};

const cakeReducer = (state = cakeInitialState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numberOfCakes: state.numberOfCakes - 1,
			};
		case RETURN_CAKE:
			return {
				...state,
				numberOfCake: state.numberOfCakes + 1,
			};
		default:
			return state;
	}
};

export { cakeReducer };
