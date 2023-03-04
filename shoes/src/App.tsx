import { CanvasContainer } from "./components/CanvasContainer";
import { Hero } from "./components/Hero";

function App() {
	return (
		<div className="App">
			<div className="h-screen w-screen fixed top-0">
				<CanvasContainer />
			</div>
			<Hero />
			<Hero />
			<Hero />
		</div>
	);
}

export default App;
