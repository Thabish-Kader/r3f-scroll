import { Canvas } from "@react-three/fiber";

import { Jordan } from "./Jordan";
import {
	CameraControls,
	Environment,
	OrbitControls,
	Plane,
	PresentationControls,
	ScrollControls,
} from "@react-three/drei";
import { useRef } from "react";

export const CanvasContainer = () => {
	const cameraControlsRef = useRef<CameraControls | null>(null);

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

			<CameraControls ref={cameraControlsRef} />
			<ScrollControls pages={3}>
				<Jordan cameraContolsRef={cameraControlsRef} />
			</ScrollControls>
			<Environment preset="city" />
		</Canvas>
	);
};
