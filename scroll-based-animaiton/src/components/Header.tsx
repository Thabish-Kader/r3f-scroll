import React from "react";

export const Header = () => {
	return (
		<header className="z-50 absolute top-0 text-black py-2 px-16 font-extrabold tracking-widest uppercase flex justify-between items-center w-full">
			{/* logo / name */}
			<div className="flex items-center text-5xl">
				<h1 className="font-rubix text-yellow-800">Sole Mates</h1>
				<img
					className="h-24 w-24 -rotate-45"
					// height={100}
					// width={100}
					src="https://freesvg.org/img/high-tops.png"
					alt=""
				/>
			</div>
			{/* button */}
			<button className="font-rubix p-2 bg-yellow-800 text-white font-medium rounded-lg">
				Buy Now
			</button>
		</header>
	);
};
