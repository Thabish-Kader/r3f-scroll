import { useEffect, useRef, useState } from "react";
import { About } from "./components/About";
import { CanvasContainer } from "./components/CanvasContainer";
import { Hero } from "./components/Hero";
import { BuyNow } from "./components/BuyNow";
import { Header } from "./components/Header";

function App() {
	return (
		<main className="overflow-x-hidden">
			<div className="h-screen w-full fixed top-0 z-10 hidden lg:block">
				<CanvasContainer />
			</div>
			<Header />
			<Hero />
			<About />
			<BuyNow />
		</main>
	);
}

export default App;
