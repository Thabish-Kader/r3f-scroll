import React from "react";

export const About = () => {
	return (
		<section
			id="about"
			className="second-section h-screen bg-black relative"
		>
			{/* glowing background */}
			<div className="h-[500px]  w-full bg-yellow-800 animate-pulse rotate-[10deg] skew-x-12"></div>
			{/* text */}
			<div className="absolute top-[15%] sm:right-20 md:right-[300px] text-white">
				<h1 className="text-5xl font-bold font-rubix">Enlighten Me</h1>
				<p className="w-[500px] font-semibold pt-10">
					Did you know that these sneakers are actually designed to be
					the perfect imitation of the real thing? From a distance, no
					one will be able to tell the difference! But here's the
					secret - they're made with the finest quality materials like
					rubber, plastic, and fabric, just like the original Jordans.
					And the best part? You don't have to break the bank to own a
					pair of these bad boys! So go ahead, flaunt your faux
					Jordans with pride and let everyone know that you're savvy
					and stylish all at once. And who knows, maybe one day you'll
					be able to afford the real deal, but until then, keep
					rocking those Air Not-So-Jordans like a boss.
				</p>
				<div className="grid md:grid-cols-2 gap-2 text-black font-rubix font-bold mt-4">
					<span className="bg-orange-500 rounded-full px-3">
						#Almost as good as the real thing
					</span>
					<span className="bg-yellow-500 rounded-full px-3">
						#Fake it till you make it
					</span>
				</div>
			</div>
		</section>
	);
};
