import { Canvas } from "@react-three/fiber";
import { Tokyo } from "./components/Tokyo";
import { OrbitControls, Sky } from "@react-three/drei";

function App() {
	return (
		<div className="App">
			<Canvas shadows camera={{ position: [0, 0, 10] }}>
				<color args={["#4a2001"]} attach="background" />
				<OrbitControls />
				<ambientLight intensity={0.03} />
				<spotLight
					angle={0.14}
					color="#ffd0d0"
					penumbra={1}
					position={[25, 50, -20]}
					shadow-mapSize={[2048, 2048]}
					shadow-bias={-0.0001}
					castShadow
				/>
				<fog attach="fog" args={["#ff5020", 5, 18]} />
				<Sky sunPosition={[2, 0.4, 10]} />
				<Tokyo scale={0.02} position={[0, 2.5, 0]} />
			</Canvas>
		</div>
	);
}

export default App;
