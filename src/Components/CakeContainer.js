import React from "react";
import { connect } from "react-redux";
import { buyCake, returnCake } from "../redux";
function CakeContainer(props) {
	return (
		<div>
			<h3>Number of cakes -{props.numberOfCakes}</h3>
			<button onClick={props.buyCake}>Buy Cake</button>
			<button onClick={props.returnCake}>Return cake</button>
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		numberOfCakes: state.cake.numberOfCakes,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyCake: () => dispatch(buyCake()),
		returnCake: () => dispatch(returnCake()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
