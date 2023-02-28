import { Canvas } from "@react-three/fiber";
import { Tokyo } from "./components/Tokyo";
import {
	OrbitControls,
	ScrollControls,
	Sky,
	useTexture,
} from "@react-three/drei";
import { Mac } from "./components/Mac";
import useRefs from "react-use-refs";
import { Composition } from "./components/Composition";

function App() {
	// const [textureRed, textureBlue] = useTexture([
	// 	"/Chroma Red.jpg",
	// 	"/Chroma Blue.jpg",
	// ]);
	return (
		<div className="App">
			<Canvas
				shadows
				dpr={[1, 2]}
				camera={{ position: [0, -3.2, 40], fov: 12 }}
			>
				<OrbitControls />
				<Composition />
				<ambientLight />
			</Canvas>
		</div>
	);
}

export default App;
