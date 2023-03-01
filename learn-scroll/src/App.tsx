import { Canvas } from "@react-three/fiber";

import { Html, OrbitControls, ScrollControls } from "@react-three/drei";

import { Composition } from "./components/Composition";
import { useEffect, useRef } from "react";
import { ScrollDetector } from "./ScrollDetector";
// prints the current scroll value (initially 0)

function App() {
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
				{/* <OrbitControls /> */}

				<ambientLight />
			</Canvas>
		</div>
	);
}

export default App;
