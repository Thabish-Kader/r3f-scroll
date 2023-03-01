import { Canvas } from "@react-three/fiber";
import React from "react";
import { BoxGeometry } from "three";
import { Jordan } from "./Jordan";
import { OrbitControls } from "@react-three/drei";

export const CanvasContainer = () => {
	return (
		<Canvas>
			<OrbitControls />
			<ambientLight />
			<Jordan />
		</Canvas>
	);
};
