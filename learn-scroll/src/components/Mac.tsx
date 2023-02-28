import { useGLTF } from "@react-three/drei";
import { MacGLTF } from "../typings";
import { forwardRef } from "react";

type Props = {
	children?: React.ReactNode;
	texture?: THREE.Texture;
	scale: number;
	rotation?: THREE.Euler;
	position?: THREE.Vector3;
};

export const Mac = forwardRef<THREE.Group, Props>(
	({ children, texture, ...props }, ref) => {
		const { nodes, materials } = useGLTF("/mac.glb") as MacGLTF;

		return (
			<group {...props} dispose={null}>
				<group
					ref={ref}
					position={[0, -0.43, -11.35]}
					rotation={[Math.PI / 2, 0, 0]}
				>
					<mesh
						geometry={nodes.back_1.geometry}
						material={materials.blackmatte}
					/>
					<mesh
						receiveShadow
						castShadow
						geometry={nodes.back_2.geometry}
						material={materials.aluminium}
					/>
					<mesh geometry={nodes.matte.geometry}>
						<meshLambertMaterial map={texture} toneMapped={false} />
					</mesh>
				</group>
				{children}
				<mesh
					geometry={nodes.body_1.geometry}
					material={materials.aluminium}
					material-color="#aaaaaf"
					material-envMapIntensity={0.2}
				/>
				<mesh
					geometry={nodes.body_2.geometry}
					material={materials.blackmatte}
				/>
			</group>
		);
	}
);
