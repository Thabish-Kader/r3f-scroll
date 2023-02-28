import React from "react";
import { Mac } from "./Mac";
import { useTexture } from "@react-three/drei";

export const Composition = ({ ...props }) => {
	const [textureRed, textureBlue] = useTexture([
		"/Chroma Red.jpg",
		"/Chroma Blue.jpg",
	]);
	return <Mac texture={textureRed} />;
};
