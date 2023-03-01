import { Canvas } from "@react-three/fiber";

import { Jordan } from "./Jordan";
import { Environment, OrbitControls, Plane } from "@react-three/drei";

export const CanvasContainer = () => {
	return (
		<Canvas shadows>
			<color args={["#e1e1e1"]} attach="background" />
			<OrbitControls />
			<Jordan />
			<Environment preset="city" />
		</Canvas>
	);
};
