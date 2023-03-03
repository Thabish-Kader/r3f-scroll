import { CameraControls, Plane, useGLTF, useScroll } from "@react-three/drei";
import React, { useRef } from "react";
import { JordanGLTF } from "../typings";
import { useControls } from "leva";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";
import { Annotation } from "./Annotation";

type Props = {
	cameraContolsRef: React.MutableRefObject<CameraControls | null>;
};

const position1 = {
	x: -3.339276677766927,
	y: 0.5852984754823405,
	z: -0.7001722927431063,
};

const position2 = {
	x: 3,
	y: 2,
	z: -2,
};

const position3 = {
	x: 2.8341062745327106,
	y: 1.281623190342407,
	z: 4,
};
// Source : https://sketchfab.com/3d-models/air-jordan-1-a4b434181fbb48008ad460722fd53725
export const Jordan = ({ cameraContolsRef, ...props }: Props) => {
	const { nodes, materials } = useGLTF("/air_jordan_1.glb") as JordanGLTF;
	const { width } = useThree((state) => state.viewport);
	const text1 = useRef<HTMLDivElement>(null);
	const text2 = useRef<HTMLDivElement>(null);
	const text3 = useRef<HTMLDivElement>(null);
	const scroll = useScroll();

	useFrame((state) => {
		const offset = scroll.offset;
		const t1 = gsap.timeline();

		if (offset >= 0.1 && offset <= 0.25) {
			t1.to(state.camera.position, {
				x: position1.x,
				y: position1.y,
				z: position1.z,
				duration: 2,
			});
			text1.current?.classList.toggle("show");
		}
		if (offset >= 0.3 && offset <= 0.5)
			t1.to(state.camera.position, {
				x: position2.x,
				y: position2.y,
				z: position2.z,
				duration: 2,
			});
		if (offset >= 0.6 && offset <= 0.9)
			t1.to(state.camera.position, {
				x: position3.x,
				y: position3.y,
				z: position3.z,
				duration: 2,
			});
	});

	return (
		<>
			<directionalLight
				castShadow
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
		</>
	);
};
