import { BUY_ICE_CREAM, RETURN_ICE_CREAM } from "./ice-cream-types";

const iceCreamInitialState = {
	numberOfIceCreams: 40,
};
const iceCreamReducer = (state = iceCreamInitialState, action) => {
	switch (action.type) {
		case BUY_ICE_CREAM:
			return {
				...state,
				numberOfIceCreams: state.numberOfIceCreams - 1,
			};
		case RETURN_ICE_CREAM:
			return {
				...state,
				numberOfIceCreams: state.numberOfIceCreams + 1,
			};
		default:
			return state;
	}
};

export { iceCreamReducer };
