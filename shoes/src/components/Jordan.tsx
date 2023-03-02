import {
	CameraControls,
	Plane,
	useGLTF,
	useHelper,
	useScroll,
} from "@react-three/drei";
import React, { useRef } from "react";
import { JordanGLTF } from "../typings";
import { useControls } from "leva";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

type Props = {
	cameraContolsRef: React.MutableRefObject<CameraControls | null>;
};

// Source : https://sketchfab.com/3d-models/air-jordan-1-a4b434181fbb48008ad460722fd53725
export const Jordan = ({ cameraContolsRef, ...props }: Props) => {
	const { nodes, materials } = useGLTF("/air_jordan_1.glb") as JordanGLTF;
	const { width, height } = useThree((state) => state.viewport);
	const pointLight = useRef(null!);
	const scroll = useScroll();

	const position1 = {
		x: -3.339276677766927,
		y: 0.5852984754823405,
		z: -0.7001722927431063,
	};

	const position2 = {
		x: 1.3267283090481237,
		y: 0.6881011428835936,
		z: -0.6900312697503127,
	};

	useFrame((state) => {
		const offset = 1 - scroll.offset;
		// if (offset === 1) {
		// 	cameraContolsRef.current?.reset(true);
		// }
		// if (offset <= 0.9 && offset >= 0.85) {
		// 	cameraContolsRef.current?.setLookAt(
		// 		position1.x,
		// 		position1.y,
		// 		position1.z,
		// 		1,
		// 		0,
		// 		1,
		// 		true
		// 	);
		// }
		if (offset <= 0.85 && offset >= 0.5) {
			cameraContolsRef.current?.setLookAt(
				position2.x,
				position2.y,
				(position2.z / width) * 2,
				0,
				0,
				0,
				true
			);
		}
		// console.log(offset);
	});
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
	// const { camera } = useThree();
	// console.log(camera.position);
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
