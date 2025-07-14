import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Pages() {
	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".trigger",
				start: "top top",
				end: "+=300%",
				scrub: true,
				pin: true,
				anticipatePin: 1,
			},
			defaults: { duration: 2, ease: "none" },
		});

		tl.fromTo(".second", { xPercent: 100 }, { xPercent: 0 })
			.fromTo(".third", { yPercent: -1000 }, { yPercent: 0 })
			.fromTo(".fourth", { xPercent: 100 }, { xPercent: 0 });
	});

	return (
		<div className="w-screen overflow-x-hidden">
			<div className="h-screen bg-black">
				<h1 className="bg-white text-black">Pages</h1>
			</div>
			<div className="trigger h-screen">
				<div className="h-screen bg-amber-300 second flex justify-center items-center absolute w-full text-3xl text-black">
					first page
				</div>
				<div className="h-screen bg-orange-400 third flex justify-center items-center text-3xl absolute w-full">
					second page
				</div>
				<div className="h-screen bg-green-500 fourth flex justify-center items-center text-3xl absolute w-full">
					third page
				</div>
				<div className="h-screen bg-amber-800 last"></div>
			</div>
		</div>
	);
}

export default Pages;
