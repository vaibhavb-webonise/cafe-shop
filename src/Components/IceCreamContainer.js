import React from "react";
import { buyIceCream, returnIceCream } from "../redux";
function IceCreamContainer(props) {
	return (
		<div>
			<h2>Number of Ice creams -{props.numberOfIceCreams}</h2>
			<button>Buy Ice Cream</button>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		numberOfIceCreams: state.iceCream.numberOfIceCreams,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		buyIceCream: () => dispatch(buyIceCream()),
		returnIceCream: () => dispatch(returnIceCream()),
	};
};

export default IceCreamContainer;
