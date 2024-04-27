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
import { useThree } from "@react-three/fiber";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Source : https://sketchfab.com/3d-models/air-jordan-1-a4b434181fbb48008ad460722fd53725
export const Jordan = ({ ...props }) => {
  const { nodes, materials } = useGLTF("/air_jordan_1.glb") as JordanGLTF;
  const jordans = useRef(null!);

  const { scene, camera } = useThree();
  const tl = gsap.timeline();

  // ----- used for getting the position for the shoes ----
  // const { cameraPosition, scenePosition, sceneRotation } = useControls({
  // 	cameraPosition: {
  // 		value: {
  // 			x: 5,
  // 			y: 4,
  // 			z: 2.8,
  // 		},
  // 		step: 0.05,
  // 	},
  // 	scenePosition: {
  // 		value: { x: 3.01, y: 0.76, z: 3.7 },
  // 		step: 0.05,
  // 	},

  // 	sceneRotation: {
  // 		value: { x: -0.53, y: -3.48, z: -0.21 },
  // 		step: 0.01,
  // 	},
  // });

  useLayoutEffect(() => {
    new ScrollTrigger({});
    // component About.tsx
    tl.to(camera.position, {
      x: 5,
      y: 4.0,
      z: 2.8,
      scrollTrigger: {
        trigger: ".second-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })
      .to(scene.position, {
        x: 3.01,
        y: 0.76,
        z: 3.7,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(scene.rotation, {
        x: -0.53,
        y: -3.48,
        z: -0.21,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      // component - BuyNow.tsx
      .to(camera.position, {
        x: 5,
        y: 3.8,
        z: 2.8,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.position, {
        x: 2.31,
        y: 0.01,
        z: -0.7,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.rotation, {
        x: 0.67,
        y: -12.9,
        z: 0.79,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      });
  }, []);

  // ---- used for debug ----
  // useFrame(() => {
  // 	camera.position.x = cameraPosition.x;
  // 	camera.position.y = cameraPosition.y;
  // 	camera.position.z = cameraPosition.z;
  // 	scene.position.x = scenePosition.x;
  // 	scene.position.y = scenePosition.y;
  // 	scene.position.z = scenePosition.z;
  // 	scene.rotation.x = sceneRotation.x;
  // 	scene.rotation.y = sceneRotation.y;
  // 	scene.rotation.z = sceneRotation.z;
  // });

  return (
    <>
      <directionalLight
        castShadow
        position={[-2.38, 1.32, 0.74]}
        intensity={5}
      />
      <ambientLight intensity={0.5} />
      <group
        ref={jordans}
        position={[2, 1, -1]}
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
};
