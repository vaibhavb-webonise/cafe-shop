import { BUY_ICE_CREAM, RETURN_ICE_CREAM } from "./ice-cream-types";

const buyIceCream = () => {
	return {
		type: BUY_ICE_CREAM,
	};
};

const returnIceCream = () => {
	return {
		type: RETURN_ICE_CREAM,
	};
};

export { buyIceCream, returnIceCream };
