import { useGLTF } from "@react-three/drei";
import { MacGLTF } from "../typings";
import { useControls } from "leva";

export const Mac = () => {
	const { nodes, materials } = useGLTF("/mac.glb") as MacGLTF;
	const { rotation } = useControls({
		rotation: {
			value: { x: -1.56, y: 3.09, z: 1.45 },
		},
	});
	return (
		<>
			<group position={[0, -0.43, -11.35]} rotation={[Math.PI / 2, 0, 0]}>
				<mesh geometry={nodes.back_1.geometry} />
				<mesh geometry={nodes.back_2.geometry} />
			</group>
			<mesh geometry={nodes.body_1.geometry} />
			{/* <mesh geometry={nodes.body_2.geometry} />
			<mesh geometry={nodes.matte.geometry} />
			<mesh geometry={nodes.screen.geometry} />  */}
		</>
	);
};
