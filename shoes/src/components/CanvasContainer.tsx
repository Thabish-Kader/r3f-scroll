import { Canvas } from "@react-three/fiber";
import React from "react";
import { BoxGeometry } from "three";

export const CanvasContainer = () => {
	return (
		<Canvas>
			<mesh>
				<boxGeometry />
			</mesh>
		</Canvas>
	);
};
