import { Html, useScroll } from "@react-three/drei";
import React, { forwardRef } from "react";

type Props = {
	heading: string;
	info?: string;
	position?: THREE.Vector3;
};

export const Annotation = forwardRef<HTMLDivElement, Props>(
	({ heading, info, ...props }, ref) => {
		const scrollData = useScroll();
		return (
			<Html
				ref={ref}
				portal={{ current: scrollData.fixed }}
				{...props}
				className="annotation"
			>
				<h1>Comfort</h1>
				<p>Luxury</p>
			</Html>
		);
	}
);
