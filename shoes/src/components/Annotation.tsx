import { Html, useScroll } from "@react-three/drei";
import React from "react";

export const Annotation = () => {
	const scrollData = useScroll();
	return (
		<Html portal={{ current: scrollData.fixed }}>
			<div className="annotation">
				<h1>Comfort</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Ipsa voluptatem itaque reiciendis veniam voluptatum totam
				</p>
			</div>
		</Html>
	);
};
