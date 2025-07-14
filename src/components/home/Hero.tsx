import heroImg from "../../assets/home/low-angle-smiley-senior-couple-with-coffee-cups.jpg";

function Hero() {
	return (
		<div className="w-full h-200 relative">
			<img
				src={heroImg}
				alt="hero"
				className="h-full w-full object-center object-cover"
			/>
			<p className="absolute top-1/2 right-1/2 font-bold text-3xl transform translate-x-50 bg-black/20 p-5">WELCOME TO VIP LIVING CENTERS</p>
		</div>
	);
}

export default Hero;
