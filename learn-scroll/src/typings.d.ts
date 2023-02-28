import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export type TokyoGLTF = GLTF & {
	nodes: THREE.Mesh[];
};

export type MacGLTF = GLTF & {
	nodes: {
		back: THREE.Mesh;
		back_1: THREE.Mesh;
		back_2: THREE.Mesh;
		body: THREE.Mesh;
		body_1: THREE.Mesh;
		body_2: THREE.Mesh;
		matte: THREE.Mesh;
		screen: THREE.Mesh;
	};
	materials: {
		aluminium: THREE.MeshStandardMaterial;
		blackmatte: THREE.MeshStandardMaterial;
		matte: THREE.MeshStandardMaterial;
	};
};
