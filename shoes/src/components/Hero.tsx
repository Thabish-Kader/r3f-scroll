export const Hero = () => {
	return (
		<section className="h-screen relative bg-black ">
			<div className="absolute top-[40%] left-20 z-20">
				<h1 className="text-5xl text-yellow-800 font-mynerver font-bold">
					Air Not-So-Jordans
				</h1>
				<p className="w-[500px] pt-2 text-yellow-500 text-justify text-sm">
					Introducing the Air Not-So-Jordans - the perfect sneakers
					for those who want to flex on a budget! These shoes may not
					be the real deal, but who needs authenticity when you can
					have imitation? Plus, these babies are so comfortable, you
					won't even notice the difference. They're the kind of shoes
					that make you say, 'Are those Jordans?' and you can
					confidently reply, 'Nah, but they're Air Not-So-Jordans!' So
					go ahead, rock these kicks with pride and let everyone know
					that you're frugal and fashionable all at once.
				</p>

				<button
					onClick={() =>
						alert(
							"I wont take you there scroll down for yourself. Sheesh!!"
						)
					}
					className="bg-yellow-800 p-2 rounded-lg text-white mt-5 hover:bg-green-500 hover:scale-110 hover:text-white transition duration-500"
				>
					Enlighten Me
				</button>
			</div>
		</section>
	);
};
