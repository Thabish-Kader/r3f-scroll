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
import { useEffect, useRef } from "react";
import { Annotation } from "./Annotation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scroller from "./Scroller";
gsap.registerPlugin(ScrollTrigger);

export const CanvasContainer = () => {
	const shoes = useRef<THREE.Group>(null);

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
			{/* <ScrollControls pages={3}> */}
			<Jordan ref={shoes} />
			<Scroller />
			{/* </ScrollControls> */}
			<Environment preset="city" />
		</Canvas>
	);
};
