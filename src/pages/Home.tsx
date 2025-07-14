import { motion } from "framer-motion";
import { ArrowRight, Heart, Home, Users, Shield, Star, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { useEffect, useState } from "react";
import { Footer } from "@/components/layout/Footer";
import Testimonial from "@/components/home/Testimonial";

const imageUrl = [
	"/one.jpeg",
	"/two.jpeg",
	"/three.jpeg",
	"/four.jpeg",
	"/five.jpeg",
	"/six.jpeg",
	"/seven.jpeg",
];

const testimonial = {
	testimonial:
		"My uncle spent his last years surrounded by caring staff at VIP Living Center. It was such an incredible experience to watch them lavished their attention on him. Now, a decade later, when it became clear that my aunt can no longer live by herself, we are grateful That VIP is again opening their door to our family. Thank you!",
	name: "The Pannel Family",
};

export default function HomePage() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % imageUrl.length);
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	}, [index]);

	return (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<Header />

			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-100" />
				<div className="container mx-auto px-4 py-20 relative z-10">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className="space-y-8">
							<div className="space-y-4">
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.2 }}
									className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
									<Heart className="w-4 h-4 mr-2" />
									Compassionate Care Since 1995
								</motion.div>

								<h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
									A Home Away from{" "}
									<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
										Home
									</span>
								</h1>

								<p className="text-xl text-slate-600 leading-relaxed max-w-lg">
									Experience exceptional assisted living in South Irving with
									personalized care, family-friendly atmosphere, and
									dignity-focused services.
								</p>
							</div>

							<div className="flex flex-col sm:flex-row gap-4">
								<Button
									size="lg"
									className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8">
									Schedule a Tour
									<ArrowRight className="w-5 h-5 ml-2" />
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="text-lg px-8 border-slate-300 bg-transparent">
									Learn More
								</Button>
							</div>

							<div className="flex items-center space-x-8 pt-4">
								<div className="text-center">
									<div className="text-2xl font-bold text-slate-800">25+</div>
									<div className="text-sm text-slate-600">Years Experience</div>
								</div>
								<div className="text-center">
									<div className="text-2xl font-bold text-slate-800">100+</div>
									<div className="text-sm text-slate-600">Happy Residents</div>
								</div>
								<div className="text-center">
									<div className="text-2xl font-bold text-slate-800">24/7</div>
									<div className="text-sm text-slate-600">Care Available</div>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="relative">
							<div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
								<img
									src="/low-angle-smiley-senior-couple-with-coffee-cups.jpg"
									alt="VIP Living Centers - Happy resident"
									className="object-cover object-center h-full w-full"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
							</div>

							{/* Floating Cards */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1 }}
								className="absolute -left-6 top-20 bg-white rounded-xl shadow-lg p-4 max-w-xs">
								<div className="flex items-center space-x-3">
									<div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
										<Star className="w-5 h-5 text-emerald-600" />
									</div>
									<div>
										<div className="font-semibold text-slate-800">
											5-Star Care
										</div>
										<div className="text-sm text-slate-600">
											Exceptional service
										</div>
									</div>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.2 }}
								className="absolute -right-6 bottom-20 bg-white rounded-xl shadow-lg p-4 max-w-xs">
								<div className="flex items-center space-x-3">
									<div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
										<Shield className="w-5 h-5 text-teal-600" />
									</div>
									<div>
										<div className="font-semibold text-slate-800">
											Licensed Facility
										</div>
										<div className="text-sm text-slate-600">
											State certified
										</div>
									</div>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section
				id="services"
				className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16">
						<h2 className="text-4xl font-bold text-slate-800 mb-4">
							Comprehensive Care Services
						</h2>
						<p className="text-xl text-slate-600 max-w-2xl mx-auto">
							We provide personalized assistance while maintaining your independence
							and dignity
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								icon: Heart,
								title: "Personal Care",
								description:
									"Assistance with daily activities, medication management, and health monitoring",
								color: "emerald",
							},
							{
								icon: Users,
								title: "Social Activities",
								description:
									"Engaging community programs, events, and recreational activities",
								color: "teal",
							},
							{
								icon: Home,
								title: "Comfortable Living",
								description:
									"Private rooms, nutritious meals, and housekeeping services",
								color: "slate",
							},
						].map((service, index) => (
							<motion.div
								key={service.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}>
								<Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
									<CardContent className="p-8">
										<div
											className={`w-12 h-12 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-6`}>
											<service.icon
												className={`w-6 h-6 text-${service.color}-600`}
											/>
										</div>
										<h3 className="text-xl font-semibold text-slate-800 mb-4">
											{service.title}
										</h3>
										<p className="text-slate-600 leading-relaxed">
											{service.description}
										</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* About Section */}
			<section
				id="about"
				className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="space-y-6">
							<h2 className="text-4xl font-bold text-slate-800">
								Why Choose VIP Living Centers?
							</h2>
							<p className="text-lg text-slate-600 leading-relaxed">
								VIP Living Center-Irving is a small State licensed type B assisted
								living facility, conveniently located in South Irving at the corner
								of a quiet cul-de-sac. We are pleased to provide a home-like
								environment and family friendly atmosphere.
							</p>
							<div className="space-y-4">
								{[
									"State licensed and certified facility",
									"Experienced and compassionate staff",
									"Personalized care plans for each resident",
									"Family-friendly atmosphere",
									"Quiet, peaceful location",
								].map((feature, index) => (
									<motion.div
										key={feature}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ delay: index * 0.1 }}
										className="flex items-center space-x-3">
										<div className="w-2 h-2 bg-emerald-600 rounded-full" />
										<span className="text-slate-700">{feature}</span>
									</motion.div>
								))}
							</div>
							<Button className="bg-emerald-600 hover:bg-emerald-700 mt-6">
								Learn More About Us
								<ArrowRight className="w-4 h-4 ml-2" />
							</Button>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="relative">
							<div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
								<img
									src={imageUrl[index]}
									alt="VIP Living Centers facility"
									className="object-cover w-full h-full"
								/>
								<div className="absolute flex gap-1 top-[95%] left-[35%] lg:left-[50%]">
									{Array.from({ length: imageUrl.length }).map((_, idx) => (
										<div
											key={idx}
											className={`w-3 h-3 rounded-full ${
												index === idx ? "bg-white" : "bg-gray-300/60"
											}`}></div>
									))}
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* testimonial section */}
			<Testimonial
				testimonial={testimonial.testimonial}
				name={testimonial.name}
			/>

			{/* Contact Section */}
			<section
				id="contact"
				className="py-20 bg-slate-800">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16">
						<h2 className="text-4xl font-bold text-white mb-4">Ready to Learn More?</h2>
						<p className="text-xl text-slate-300 max-w-2xl mx-auto">
							Contact us today to schedule a tour and see why VIP Living Centers is
							the perfect home for your loved one
						</p>
					</motion.div>

					<div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
						{[
							{
								icon: Phone,
								title: "Call Us",
								info: "(972) 555-0123",
								action: "tel:+19725550123",
							},
							{
								icon: Mail,
								title: "Email Us",
								info: "info@viplivingcenters.com",
								action: "mailto:info@viplivingcenters.com",
							},
							{
								icon: MapPin,
								title: "Visit Us",
								info: "South Irving, TX",
								action: "#",
							},
						].map((contact, index) => (
							<motion.div
								key={contact.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}>
								<Link
									to={contact.action}
									className="block">
									<Card className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-colors duration-300 text-center p-8">
										<CardContent className="space-y-4">
											<div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mx-auto">
												<contact.icon className="w-6 h-6 text-white" />
											</div>
											<h3 className="text-xl font-semibold text-white">
												{contact.title}
											</h3>
											<p className="text-slate-300">{contact.info}</p>
										</CardContent>
									</Card>
								</Link>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mt-12">
						<Button
							size="lg"
							className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8">
							Schedule Your Visit Today
							<ArrowRight className="w-5 h-5 ml-2" />
						</Button>
					</motion.div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	);
}
