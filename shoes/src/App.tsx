import { useEffect, useRef, useState } from "react";
import { About } from "./components/About";
import { CanvasContainer } from "./components/CanvasContainer";
import { Hero } from "./components/Hero";
import { BuyNow } from "./components/BuyNow";
import { Header } from "./components/Header";

function App() {
	return (
		<main>
			{/* <div className="h-screen w-full fixed top-0 overflow-x-hidden ">
				<CanvasContainer />
			</div> */}
			<Header />
			<Hero />
			<About />
			<BuyNow />
		</main>
	);
}

export default App;
