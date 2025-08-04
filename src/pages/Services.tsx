import { motion } from "framer-motion";
import {
	ArrowRight,
	Heart,
	Users,
	Home,
	Utensils,
	Car,
	Activity,
	Stethoscope,
	Bath,
	Shirt,
	Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import ctaBacground from "/services/trees.jpg";
import Testimonial from "@/components/home/Testimonial";
import { Link } from "react-router-dom";

export default function ServicesPage() {
	const services = [
		{
			icon: Heart,
			title: "Personal Care Services",
			description:
				"Assistance with activities of daily living including bathing, dressing, grooming, and mobility support.",
			features: [
				"Bathing Assistance",
				"Dressing Support",
				"Grooming Care",
				"Mobility Help",
				"Toileting Assistance",
			],
			color: "emerald",
			img: "/services/new_image1.jpeg",
		},
		{
			icon: Stethoscope,
			title: "Health Care Services",
			description:
				"Comprehensive health monitoring and medical care coordination with healthcare professionals.",
			features: [
				"Medication Management",
				"Health Monitoring",
				"Doctor Coordination",
				"Nurse on Staff",
				"Emergency Response",
			],
			color: "blue",
			img: "/services/health.jpg",
		},
		{
			icon: Utensils,
			title: "Nutritional Services",
			description:
				"Three nutritious meals daily plus snacks, prepared fresh with attention to dietary needs.",
			features: [
				"3 Daily Meals",
				"Special Diets",
				"Fresh Ingredients",
				"Dining Assistance",
				"Nutritional Planning",
			],
			color: "orange",
			img: "/services/lifestyle.jpg",
		},
		{
			icon: Home,
			title: "Housekeeping & Maintenance",
			description:
				"Complete housekeeping services and facility maintenance to ensure a clean, safe environment.",
			features: [
				"Weekly Cleaning",
				"Laundry Service",
				"Linen Changes",
				"Room Maintenance",
				"Common Area Upkeep",
			],
			color: "purple",
			img: "/services/full-shot-man-pushing-elevator-button.jpg",
		},
		{
			icon: Users,
			title: "Social & Recreational Activities",
			description:
				"Engaging programs designed to promote social interaction, mental stimulation, and overall well-being.",
			features: [
				"Group Activities",
				"Entertainment Programs",
				"Exercise Classes",
				"Community Outings",
				"Special Events",
			],
			color: "teal",
			img: "/services/new_image3.jpeg",
		},
		{
			icon: Shield,
			title: "24-Hour Care & Security",
			description:
				"Round-the-clock staff availability for assistance, safety monitoring, and emergency response.",
			features: [
				"24/7 Staffing",
				"Emergency Response",
				"Safety Monitoring",
				"Security Systems",
				"On-Call Support",
			],
			color: "red",
			img: "/services/new_image2.jpeg",
		},
	];

	const additionalServices = [
		{
			icon: Car,
			title: "Transportation Services",
			description:
				"Scheduled transportation for medical appointments, shopping, and social outings",
		},
		{
			icon: Activity,
			title: "Physical Therapy",
			description: "On-site physical therapy services and rehabilitation programs",
		},
		{
			icon: Bath,
			title: "Beauty & Wellness Services",
			description: "Hair care, nail care, and other personal wellness services",
		},
		{
			icon: Shirt,
			title: "Personal Shopping",
			description: "Assistance with personal shopping and errands",
		},
	];

	return (
		<div className="min-h-screen bg-white">
			<Header />

			{/* Hero Section */}
			<section className="relative pt-24 pb-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-100">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center max-w-4xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
							className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
							<Heart className="w-4 h-4 mr-2" />
							Comprehensive Care Services
						</motion.div>

						<h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
							Services Designed for{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
								Your Comfort
							</span>
						</h1>

						<p className="text-xl text-slate-600 leading-relaxed mb-8">
							At VIP Living Centers, we provide comprehensive assisted living services
							designed to support your independence while ensuring your safety,
							comfort, and well-being.
						</p>
						<Link 
						// to="https://forms.gle/eVe8DCEiW2Bk6QFq9"
						to={"/contact"}
						>
							<Button
								size="lg"
								className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8">
								Schedule a Tour
								<ArrowRight className="w-5 h-5 ml-2" />
							</Button>
						</Link>
					</motion.div>
				</div>
			</section>

			{/* Main Services */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16">
						<h2 className="text-4xl font-bold text-slate-800 mb-4">
							Our Core Services
						</h2>
						<p className="text-xl text-slate-600 max-w-2xl mx-auto">
							We provide personalized care services tailored to meet each resident's
							unique needs and preferences
						</p>
					</motion.div>

					<div className="space-y-16">
						{services.map((service, index) => (
							<motion.div
								key={service.title}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className={`grid lg:grid-cols-2 gap-12 items-center ${
									index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
								}`}>
								<div
									className={`space-y-6 ${
										index % 2 === 1 ? "lg:col-start-2" : ""
									}`}>
									<div className="flex items-center space-x-4">
										<div
											className={`w-16 h-16 bg-${service.color}-100 rounded-xl flex items-center justify-center`}>
											<service.icon
												className={`w-8 h-8 text-${service.color}-600`}
											/>
										</div>
										<h3 className="text-2xl font-bold text-slate-800">
											{service.title}
										</h3>
									</div>

									<p className="text-lg text-slate-600 leading-relaxed">
										{service.description}
									</p>

									<ul className="space-y-3">
										{service.features.map((feature, idx) => (
											<motion.li
												key={idx}
												initial={{ opacity: 0, x: -20 }}
												whileInView={{ opacity: 1, x: 0 }}
												viewport={{ once: true }}
												transition={{ delay: index * 0.1 + idx * 0.05 }}
												className="flex items-center text-slate-700">
												<div
													className={`w-2 h-2 bg-${service.color}-500 rounded-full mr-3`}
												/>
												{feature}
											</motion.li>
										))}
									</ul>
								</div>

								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									whileHover={{ scale: 1.05 }}
									className={`relative ${
										index % 2 === 1 ? "lg:col-start-1" : ""
									}`}>
									<div className="relative w-full h-90 rounded-2xl overflow-hidden shadow-xl">
										<img
											src={service.img || "/placeholder.svg"}
											alt={service.title}
											className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
									</div>
								</motion.div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
			<section>
				<Testimonial
					testimonial="My father told me that the last two weeks were the best days he had had for a long while. My only regret was I found VIP Living Centers too late."
					name="Steward Rake"
				/>
			</section>
			{/* Additional Services */}
			<section className="py-20 bg-slate-50">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16">
						<h2 className="text-4xl font-bold text-slate-800 mb-4">
							Additional Services
						</h2>
						<p className="text-xl text-slate-600 max-w-2xl mx-auto">
							Extra services available to enhance your comfort and convenience
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{additionalServices.map((service, index) => (
							<motion.div
								key={service.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ y: -5, scale: 1.02 }}>
								<Card className="text-center p-6 hover:shadow-xl transition-all duration-300 h-full">
									<CardContent className="space-y-4">
										<motion.div
											className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
											whileHover={{ rotate: 360 }}
											transition={{ duration: 0.5 }}>
											<service.icon className="w-6 h-6 text-emerald-600" />
										</motion.div>
										<h3 className="font-semibold text-slate-800">
											{service.title}
										</h3>
										<p className="text-sm text-slate-600">
											{service.description}
										</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section
				style={{
					backgroundImage: `url(${ctaBacground})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundAttachment: "fixed",
				}}
				className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
				<div className="container mx-auto px-4 text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-3xl mx-auto">
						<h2 className="text-4xl font-bold text-white mb-6">
							Ready to Learn More About Our Services?
						</h2>
						<p className="text-xl text-emerald-100 mb-8">
							Contact us today to discuss how our services can be tailored to meet
							your specific needs.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link 
							// to="https://forms.gle/eVe8DCEiW2Bk6QFq9"
							to="/contact"
							>
								<Button
									size="lg"
									variant="secondary"
									className="text-lg px-8">
									Schedule a Tour
									<ArrowRight className="w-5 h-5 ml-2" />
								</Button>
							</Link>
							<Button
								size="lg"
								variant="outline"
								className="text-lg px-8 border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent">
								Contact Us
							</Button>
						</div>
					</motion.div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
