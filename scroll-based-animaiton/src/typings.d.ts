import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export type JordanGLTF = GLTF & {
	nodes: {
		shoe_shoe_0: THREE.Mesh;
		shoelace_shoelace_0: THREE.Mesh;

		// all undefined
		// RootNode: THREE.Mesh;
		// Sketchfab_Scene: THREE.Mesh;
		// Sketchfab_model: THREE.Mesh;
		// d8deb8ca54d7411c8d14a56540e715c4fbx: THREE.Mesh;
		// shoe: THREE.Mesh;
		// shoelace: THREE.Mesh;
	};
	materials: {
		shoe: THREE.MeshStandardMaterial;
		shoelace: THREE.MeshStandardMaterial;
	};
};
