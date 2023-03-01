import { Plane, useGLTF, useHelper } from "@react-three/drei";
import React, { useRef } from "react";
import { JordanGLTF } from "../typings";
import { useControls } from "leva";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

// Source : https://sketchfab.com/3d-models/air-jordan-1-a4b434181fbb48008ad460722fd53725
export const Jordan = ({ ...props }) => {
	const { nodes, materials } = useGLTF("/air_jordan_1.glb") as JordanGLTF;
	const { width, height } = useThree((state) => state.viewport);
	const pointLight = useRef(null!);
	// debug
	// useHelper(pointLight, THREE.DirectionalLightHelper, 1);
	// const { position } = useControls({
	// 	position: {
	// 		value: { x: 0, y: 0, z: 0 },
	// 	},
	// 	rotation: {
	// 		value: { x: 0, y: 0, z: 0 },
	// 	},
	// });
	const { camera } = useThree();
	console.log(width / 1000);
	return (
		<>
			<directionalLight
				castShadow
				ref={pointLight}
				position={[-2.38, 1.32, 0.74]}
				intensity={5}
			/>

			<group
				castShadow
				scale={width / 0.9}
				rotation-x={[-Math.PI * 0.5]}
				{...props}
			>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.shoe_shoe_0.geometry}
					material={materials.shoe}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.shoelace_shoelace_0.geometry}
					material={materials.shoelace}
				/>
			</group>
			<Plane
				receiveShadow
				rotation={[-Math.PI / 2, 0, 0]}
				position={[0, width * -0.03, 0]}
				args={[1000, 1000]}
			>
				<meshStandardMaterial attach="material" color="grey" />
			</Plane>
		</>
	);
};
