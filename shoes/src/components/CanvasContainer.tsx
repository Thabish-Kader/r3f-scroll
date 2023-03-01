import { Canvas } from "@react-three/fiber";

import { Jordan } from "./Jordan";
import {
	Environment,
	OrbitControls,
	Plane,
	ScrollControls,
} from "@react-three/drei";

export const CanvasContainer = () => {
	return (
		<Canvas
			camera={{
				position: [
					-2.4985964332861763, 1.716287878053323, 3.657030459705883,
				],
			}}
			shadows
		>
			<color args={["#e1e1e1"]} attach="background" />
			{/* <OrbitControls /> */}
			<ScrollControls pages={3}>
				<Jordan />
			</ScrollControls>
			<Environment preset="city" />
		</Canvas>
	);
};
