import React from "react";
import { Mac } from "./Mac";
import { useTexture } from "@react-three/drei";
import useRefs from "react-use-refs";
import { useThree } from "@react-three/fiber";

export const Composition = ({ ...props }) => {
	const [group, mbp16, mbp14, keyLight, stripLight, fillLight, left, right] =
		useRefs<THREE.Group>(null);
	const [textureRed, textureBlue] = useTexture([
		"/Chroma Red.jpg",
		"/Chroma Blue.jpg",
	]);
	const { width, height } = useThree((state) => state.viewport);

	return <Mac ref={mbp16} texture={textureRed} scale={width / 67} />;
};
