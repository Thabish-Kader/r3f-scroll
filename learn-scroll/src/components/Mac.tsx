import { useGLTF } from "@react-three/drei";
import { MacGLTF } from "../typings";
import { useControls } from "leva";

export const Mac = () => {
	const { nodes, materials } = useGLTF("/mac.glb") as MacGLTF;
	const { rotation } = useControls({
		rotation: {
			value: { x: 0, y: 0, z: 0 },
		},
	});
	return (
		<>
			<group rotation={[0, Math.PI * 0.5, 0]}>
				<mesh geometry={nodes.back_1.geometry} />
				<mesh geometry={nodes.back_2.geometry} />
			</group>
			{/* <mesh geometry={nodes.body_1.geometry} />
			<mesh geometry={nodes.body_2.geometry} />
			<mesh geometry={nodes.matte.geometry} />
			<mesh geometry={nodes.screen.geometry} /> */}
		</>
	);
};
