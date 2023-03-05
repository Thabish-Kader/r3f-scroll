export const BuyNow = () => {
	return (
		<section className="third-section h-screen bg-black relative ">
			<div className="z-20 absolute top-[30%] left-24 flex flex-col justify-center border border-yellow-800 text-yellow-800 p-5 rounded-lg">
				<h1 className="font-bold font-rubix text-5xl">
					Fake It Till You Make It
				</h1>
				<div className="flex items-center gap-2 pt-2">
					<input
						type="text"
						className="bg-transparent border border-yellow-800 rounded-md text-yellow-800 p-2 placeholder:text-yellow-700 flex-1"
						placeholder="Fake Name..."
					/>
					<input
						type="text"
						className="bg-transparent border border-yellow-800 rounded-md text-yellow-800 p-2 placeholder:text-yellow-700 flex-1"
						placeholder="Fake Email..."
					/>
				</div>
				<select className="mt-2 p-2 bg-transparent border border-yellow-700 rounded-lg flex-1">
					<option value="">List of bad jokes</option>
					<option value="">Almost as good as the real thing</option>
					<option value="">
						Sneakers that won't break the bank (or your heart)
					</option>
					<option value="">A budget-friendly way to flex</option>
					<option value="">The ultimate knockoff kicks</option>
				</select>
				<button
					onClick={() =>
						alert(
							"Congratulations, you've just taken the first step towards becoming a sneakerhead on a budget. Just remember, when someone asks if those are real Jordans, you didn't hear it from us. Happy shoe shopping!"
						)
					}
					className="border border-yellow-800 p-2 mt-2 rounded-lg text-yellow-700 hover:bg-green-500 hover:text-white transition duration-500"
				>
					Buy now and make me rich
				</button>
			</div>
		</section>
	);
};
