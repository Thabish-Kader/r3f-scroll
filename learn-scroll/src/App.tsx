import { Canvas } from "@react-three/fiber";
import { Tokyo } from "./components/Tokyo";
import { OrbitControls, ScrollControls } from "@react-three/drei";
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
				<ScrollControls pages={5}>
					<Composition />
				</ScrollControls>
				<OrbitControls />
				<ambientLight />
			</Canvas>
		</div>
	);
}

export default App;
