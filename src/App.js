import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import IceCreamContainer from "./Components/IceCreamContainer";
import { store } from "./redux/store";

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<CakeContainer />
				<IceCreamContainer />
			</Provider>
		</div>
	);
}

export default App;
