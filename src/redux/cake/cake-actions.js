import { BUY_CAKE, RETURN_CAKE } from "./cake-types";

const buyCake = () => {
	return {
		type: BUY_CAKE,
	};
};

const returnCake = () => {
	return {
		type: RETURN_CAKE,
	};
};

export { buyCake, returnCake };
