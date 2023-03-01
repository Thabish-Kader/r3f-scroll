import { useGLTF } from "@react-three/drei";
import React from "react";
import { JordanGLTF } from "../typings";
import { useControls } from "leva";
import { useThree } from "@react-three/fiber";

// Source : https://sketchfab.com/3d-models/air-jordan-1-a4b434181fbb48008ad460722fd53725
export const Jordan = ({ ...props }) => {
	const { nodes, materials } = useGLTF("/air_jordan_1.glb") as JordanGLTF;
	const { width, height } = useThree((state) => state.viewport);
	return (
		<group scale={width / 0.9} rotation-x={[-Math.PI * 0.5]} {...props}>
			<mesh
				geometry={nodes.shoe_shoe_0.geometry}
				material={materials.shoe}
			/>
			<mesh
				geometry={nodes.shoelace_shoelace_0.geometry}
				material={materials.shoelace}
			/>
		</group>
	);
};
