import { useGLTF } from "@react-three/drei";
import { TokyoGLTF } from "../typings";

export const Tokyo = ({ ...props }) => {
	const { scene, animations } = useGLTF("/tokyo.glb") as TokyoGLTF;
	console.log(scene);
	return <primitive object={scene} {...props} />;
};
