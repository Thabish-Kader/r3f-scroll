import React, { useRef } from "react";
import { Mac } from "./Mac";
import { useScroll, useTexture } from "@react-three/drei";
import useRefs from "react-use-refs";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useControls } from "leva";
const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) =>
	(a / Math.atan(1 / delta)) *
	Math.atan(Math.sin(2 * Math.PI * t * f) / delta);
export const Composition = ({ ...props }) => {
	const { rotation } = useControls({
		rotation: {
			x: 0,
			step: 0.5,
		},
	});
	const scroll = useScroll();
	const [group, mbp16, mbp14, left, right] = useRefs<THREE.Group>(null!);
	const [stripLight, fillLight] = useRefs<THREE.SpotLight>(null);
	const keyLight = useRef<THREE.DirectionalLight>(null);
	const [textureRed, textureBlue] = useTexture([
		"/Chroma Red.jpg",
		"/Chroma Blue.jpg",
	]);
	const { width, height } = useThree((state) => state.viewport);

	useFrame((state, delta) => {
		const r1 = scroll.range(0, 1);

		mbp16.current.rotation.x = Math.PI - r1 * 1.9;
		mbp14.current.rotation.x = Math.PI - r1;
		group.current.rotation.y = -Math.PI - r1 * 2.5;
	});
	return (
		<>
			<spotLight position={[0, -width * 0.7, 0]} intensity={0.5} />
			<directionalLight ref={keyLight} castShadow intensity={6}>
				<orthographicCamera
					// @ts-ignore
					attachObject={["shadow", "camera"]}
					args={[-10, 10, 10, -10, 0.5, 30]}
				/>
			</directionalLight>
			<group ref={group} position={[0, -height / 2.65, 0]} {...props}>
				<spotLight
					ref={stripLight}
					position={[width * 2.5, 0, width]}
					angle={0.19}
					penumbra={1}
					intensity={0.25}
				/>
				<spotLight
					ref={fillLight}
					position={[0, -width / 2.4, -width * 2.2]}
					angle={0.2}
					penumbra={1}
					intensity={2}
					distance={width * 3}
				/>
				<Mac ref={mbp16} texture={textureRed} scale={width / 67} />;
				<Mac
					ref={mbp14}
					texture={textureBlue}
					scale={width / 67}
					rotation={new THREE.Euler(0, Math.PI, 0)}
					position={new THREE.Vector3(0, 0, -width / 2.625)}
				/>
			</group>
		</>
	);
};
