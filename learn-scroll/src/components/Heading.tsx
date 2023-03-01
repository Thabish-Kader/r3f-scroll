import { Html, useScroll } from "@react-three/drei";
import { forwardRef } from "react";

type Props = {
	tag: string;
	perf: string;
	exp: string;
	position: THREE.Vector3;
};

export const Heading = forwardRef<HTMLDivElement, Props>(
	({ tag, perf, exp, ...props }, ref) => {
		const scrollData = useScroll();

		return (
			<Html
				transform
				portal={{ current: scrollData.fixed }}
				ref={ref}
				className="heading"
				center
				{...props}
			>
				<div className="tag">{tag}</div>
				<h1>{perf}</h1>
				<h2>{exp}</h2>
			</Html>
		);
	}
);
