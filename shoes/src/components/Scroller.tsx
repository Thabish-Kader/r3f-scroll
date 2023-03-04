import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const scrollerConfig = {
	scroller: ".second",
	trigger: ".second",
	start: "top bottom",
	end: `100%`,
	scrub: true,
};

export default function Scroller({
	height = 10,
	progressBar = false,
	progressBarColor = "#fbf5ef",
}) {
	const scrollContainerRef = useRef();
	const scrollHeightRef = useRef();
	const [progress, setProgress] = useState(0);
	const multiplier = 1000;

	useEffect(() => {
		new ScrollTrigger({
			scroller: scrollContainerRef.current,
			trigger: scrollContainerRef.current,
			start: "top top",
			end: () => `+=${height * multiplier - window.innerHeight}px`,
			scrub: true,
		});
	}, [height]);

	return null;
}
