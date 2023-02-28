import { Canvas } from "@react-three/fiber";
import { Tokyo } from "./components/Tokyo";
import { OrbitControls, ScrollControls, Sky } from "@react-three/drei";
import { Mac } from "./components/Mac";

function App() {
	return (
		<div className="App">
			<Canvas shadows camera={{ position: [0, 0, 10] }}>
				<OrbitControls />
				<Mac />
				<ambientLight />
			</Canvas>
		</div>
	);
}

export default App;
