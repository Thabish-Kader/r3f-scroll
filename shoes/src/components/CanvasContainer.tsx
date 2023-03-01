import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { Jordan } from "./Jordan";
import {
	BakeShadows,
	ContactShadows,
	Environment,
	Grid,
	OrbitControls,
	Plane,
	Shadow,
	useHelper,
} from "@react-three/drei";
import * as THREE from "three";

export const CanvasContainer = () => {
	return (
		<Canvas shadows>
			<color args={["#e1e1e1"]} attach="background" />
			<OrbitControls />
			<Jordan />
			<Environment preset="city" />
			<Plane
				receiveShadow
				rotation={[-Math.PI / 2, 0, 0]}
				position={[0, -0.45, 0]}
				args={[1000, 1000]}
			>
				<meshStandardMaterial attach="material" color="grey" />
			</Plane>
		</Canvas>
	);
};
