import { useGLTF } from "@react-three/drei";
import React from "react";
import { JordanGLTF } from "../typings";
import { useControls } from "leva";

// Source : https://sketchfab.com/3d-models/air-jordan-1-a4b434181fbb48008ad460722fd53725
export const Jordan = () => {
	const { nodes, materials } = useGLTF("/air_jordan_1.glb") as JordanGLTF;
	const { position, rotation } = useControls({
		position: {
			value: { x: 0, y: 0, z: 0 },
			step: 0.5,
		},
		rotation: {
			value: { x: -1.5, y: 0, z: 0 },
			step: 0.5,
		},
	});
	return (
		<group
			scale={7}
			position={[position.x, position.y, position.z]}
			rotation={[rotation.x, rotation.y, rotation.z]}
		>
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
