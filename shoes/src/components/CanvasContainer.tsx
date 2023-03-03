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
import { Annotation } from "./Annotation";

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
			<OrbitControls enableZoom={false} />
			{/* <CameraControls ref={cameraControlsRef} /> */}
			<ScrollControls pages={3}>
				<Jordan cameraContolsRef={cameraControlsRef} />
			</ScrollControls>
			<Environment preset="city" />
		</Canvas>
	);
};
