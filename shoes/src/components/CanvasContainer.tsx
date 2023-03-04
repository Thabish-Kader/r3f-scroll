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
					4.742922067308307, 2.2387122409413784, 1.2218255872664914,
				],
			}}
			shadows
		>
			<OrbitControls
				enablePan={false}
				enableRotate={false}
				enableZoom={false}
			/>

			<Jordan ref={shoes} />
			<Scroller />

			<Environment preset="city" />
		</Canvas>
	);
};
