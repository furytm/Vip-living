import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Footer() {

	const [currentYear, _] = useState(new Date().getFullYear());

	return (
		<footer className="bg-slate-900 text-slate-300 py-12">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
					{/* Logo and Description */}
					<div className="space-y-4">
						<div className="flex items-center space-x-2">
							{/* <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
								<Home className="w-5 h-5 text-white" />
							</div>
							<span className="text-xl font-bold text-white">VIP Living Center</span> */}
							<img
								src="/logo.png"
								alt="logo"
								className="w-50"
							/>
						</div>
						<p className="text-slate-400 text-sm leading-relaxed">
							Providing exceptional assisted living care with dignity and compassion
							in South Irving, Texas.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-white font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									to="/services"
									className="hover:text-emerald-400 transition-colors">
									Services
								</Link>
							</li>
							<li>
								<Link
									to="/community-activities"
									className="hover:text-emerald-400 transition-colors">
									Community & Activities
								</Link>
							</li>
							<li>
								<Link
									to="/about"
									className="hover:text-emerald-400 transition-colors">
									About Us
								</Link>
							</li>
							<li>
								<Link
									to="/faqs"
									className="hover:text-emerald-400 transition-colors">
									FAQs
								</Link>
							</li>
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className="text-white font-semibold mb-4">Our Services</h3>
						<ul className="space-y-2 text-sm">
							<li className="text-slate-400">Personal Care</li>
							<li className="text-slate-400">Medication Management</li>
							<li className="text-slate-400">24/7 Care Support</li>
							<li className="text-slate-400">Social Activities</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="text-white font-semibold mb-4">Contact Info</h3>
						<div className="space-y-3 text-sm">
							<div className="flex items-center space-x-2">
								<Phone className="w-4 h-4 text-emerald-400" />
								<span>(972) 555-0123</span>
							</div>
							<div className="flex items-center space-x-2">
								<Mail className="w-4 h-4 text-emerald-400" />
								<span>info@viplivingcenter.com</span>
							</div>
							<div className="flex items-start space-x-2">
								<MapPin className="w-4 h-4 text-emerald-400 mt-0.5" />
								<span>3219 Vinson Ct, Irving, TX 75060, USA</span>
							</div>
						</div>
					</div>
				</div>

				<div className="border-t border-slate-800 pt-8 text-center">
					<p className="text-sm text-slate-500">
						© {currentYear} VIP Living Center. All rights reserved. | Licensed Assisted
						Living Facility
					</p>
				</div>
			</div>
		</footer>
	);
}
// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import logo from "../../assets/logo.png";
// import { Link } from "react-router-dom";

// const pages = [
// 	{ title: "Services", link: "#" },
// 	{ title: "Community & Activities", link: "#" },
// 	{ title: "FAQs", link: "#" },
// 	{ title: "Careers", link: "#" },
// 	{ title: "About", link: "#" },
// 	{ title: "Contact", link: "#" },
// ];

// function Header() {
// 	const navRef = useRef(null);
// 	const tabsRef = useRef(null);

// 	useGSAP(() => {
// 		// const tl = gsap.timeline({
// 		// 	scrollTrigger: {
// 		// 		trigger: ".nav",
// 		// 		start: "center top",
// 		// 		scrub: true,
// 		// 		pin: true,
// 		// 	},
// 		// });
// 		// tl.fromTo(".nav",{position: "static"} ,{
// 		// 	position: "fixed",
// 		// 	backgroundColor: "white",
// 		// 	backdropFilter: "blur(10px)",
// 		// 	boxShadow: "0 2px 20px rgba(0, 0, 0, 0.1)",
// 		// 	duration: 0.1,
// 		// 	delay: 0,
// 		// }).to(".tabs", {
// 		// 	color: "black",
// 		// });

// 		gsap.to(".nav", {
// 			backgroundColor: "white",
// 			backdropFilter: "blur(10px)",
// 			boxShadow: "0 2px 20px rgba(0, 0, 0, 0.1)",
// 			duration: 0.1,
// 			delay: 0,
// 			scrollTrigger: {
// 				trigger: ".nav",
// 				start: "center top",
// 				scrub: true,
// 				endTrigger: "body",
// 				end: "bottom bottom",
// 			},
// 		});
// 	});

// 	return (
// 		<div
// 			ref={navRef}
// 			className="flex w-full justify-between nav left-0 right-0 px-20 transition-all duration-300 py-3">
// 			<img
// 				src={logo}
// 				alt="logo"
// 				className="w-50"
// 			/>
// 			<div className="hidden md:flex gap-10 hover:cursor-pointer">
// 				{pages.map((page, index) => (
// 					<Link
// 						ref={tabsRef}
// 						key={index}
// 						to={page.link}
// 						className="hover:border-b-2 border-black flex items-center tabs">
// 						{page.title}
// 					</Link>
// 				))}
// 			</div>
// 		</div>
// 	);
// }

// export default Header;
