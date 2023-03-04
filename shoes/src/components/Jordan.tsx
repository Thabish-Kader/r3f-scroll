import { CameraControls, Plane, useGLTF, useScroll } from "@react-three/drei";
import React, {
	forwardRef,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import { JordanGLTF } from "../typings";
import { useControls } from "leva";
import { extend, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";
import { scrollerConfig } from "./Scroller";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type Props = {};

// Source : https://sketchfab.com/3d-models/air-jordan-1-a4b434181fbb48008ad460722fd53725
export const Jordan = forwardRef<THREE.Group, Props>(
	({ animate, ...props }: any, ref) => {
		const { nodes, materials } = useGLTF("/air_jordan_1.glb") as JordanGLTF;
		const jordans = useRef(null!);

		const { scene, camera } = useThree();
		const tl = gsap.timeline();

		useEffect(() => {
			new ScrollTrigger({});

			tl.to(camera.position, {
				x: 3.696822917859152,
				y: 2.0570648144306634,
				z: 2.159741804758821,
				scrollTrigger: {
					trigger: ".second",
					start: "top bottom",
					end: "top top",
					scrub: true,
					immediateRender: false,
				},
			});
			tl.to(scene.position, {
				x: -3,
				y: -3,
				z: 1,
				scrollTrigger: {
					trigger: ".second",
					start: "top bottom",
					end: "top top",
					scrub: true,
					immediateRender: false,
				},
			});
		}, []);
		useFrame(() => {
			// tl.to(camera.position, {
			// 	x: 3.696822917859152,
			// 	y: 2.0570648144306634,
			// 	z: 2.159741804758821,
			// 	scrollTrigger: {
			// 		trigger: ".second",
			// 		start: "top bottom",
			// 		end: "top top",
			// 		scrub: true,
			// 		immediateRender: false,
			// 	},
			// });
		});
		return (
			<>
				<directionalLight
					castShadow
					position={[-2.38, 1.32, 0.74]}
					intensity={5}
				/>

				<group
					ref={jordans}
					position={[1.5, 1, 0]}
					castShadow
					scale={10}
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
	}
);
