import { motion } from "framer-motion";
import {
	ArrowRight,
	Heart,
	Users,
	Shield,
	Award,
	Home,
	CheckCircle,
	Star,
	Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import MapEmbed from "@/components/Map";
import { Link } from "react-router-dom";

export default function AboutPage() {
	const values = [
		{
			icon: Heart,
			title: "Compassionate Care",
			description:
				"We treat every resident with dignity, respect, and genuine care as if they were our own family members.",
		},
		{
			icon: Shield,
			title: "Safety & Security",
			description:
				"Our facility maintains the highest safety standards with 24/7 staff and emergency response systems.",
		},
		{
			icon: Users,
			title: "Family Atmosphere",
			description:
				"We create a warm, welcoming environment where residents feel at home and families feel at peace.",
		},
		{
			icon: Award,
			title: "Quality Excellence",
			description:
				"We are committed to providing exceptional care that exceeds state standards and family expectations.",
		},
	];

	const stats = [
		{ number: "25+", label: "Years of Experience", icon: Clock },
		{ number: "100+", label: "Happy Residents Served", icon: Users },
		{ number: "24/7", label: "Care Available", icon: Shield },
		{ number: "98%", label: "Family Satisfaction", icon: Star },
	];

	const certifications = [
		"Texas State Licensed Type B Assisted Living Facility",
		"Medicare and Medicaid Certified",
		"Joint Commission Standards Compliant",
		"Better Business Bureau A+ Rating",
		"Texas Health and Human Services Approved",
		"Fire Safety and Building Code Compliant",
	];

	return (
		<div className="min-h-screen bg-white">
			<Header />

			{/* Hero Section */}
			<section className="relative pt-24 pb-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-100">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							className="space-y-8">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
								className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
								<Home className="w-4 h-4 mr-2" />
								Established 1998
							</motion.div>

							<h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
								About{" "}
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
									VIP Living Center
								</span>
							</h1>

							<div className="space-y-4 text-xl text-slate-600 leading-relaxed">
								<p>
									VIP Living Center-Irving is a small State licensed type B
									assisted living facility, conveniently located in South Irving
									at the corner of a quiet cul-de-sac.
								</p>
								<p>
									We are pleased to provide a home-like environment and family
									friendly atmosphere for our residents and their families.
								</p>
							</div>

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

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2 }}
							className="relative">
							<div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
								{/* <img
									src="/careers/culture.jpeg"
									alt="VIP Living Center facility exterior"
									className="object-cover h-full w-full object-center"
								/> */}
								<video
									controls
									loop
									poster="https://viplivingcenters.com/wp-content/themes/divi-master/img/headers/header-sitting.jpg"
									playsInline
									className="object-cover h-full w-full object-center"
									src="https://web.archive.org/web/20240423102657im_/https://viplivingcenters.com/wp-content/uploads/2021/08/VIP-VIDEO.mp4"
								/>
								{/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" /> */}
							</div>

							{/* Floating stats cards */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.8 }}
								className="absolute -left-6 top-20 bg-white rounded-xl shadow-lg p-4">
								<div className="text-center">
									<div className="text-2xl font-bold text-emerald-600">25+</div>
									<div className="text-sm text-slate-600">Years Experience</div>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1 }}
								className="absolute -right-6 bottom-20 bg-white rounded-xl shadow-lg p-4">
								<div className="text-center">
									<div className="text-2xl font-bold text-teal-600">24/7</div>
									<div className="text-sm text-slate-600">Care Available</div>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{stats.map((stat, index) => (
							<motion.div
								key={stat.label}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ y: -5 }}
								className="text-center group">
								<Card className="p-6 hover:shadow-lg transition-all duration-300">
									<CardContent className="space-y-4">
										<motion.div
											className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
											whileHover={{ scale: 1.1, rotate: 5 }}>
											<stat.icon className="w-6 h-6 text-emerald-600" />
										</motion.div>
										<div className="text-4xl font-bold text-emerald-600">
											{stat.number}
										</div>
										<div className="text-slate-600 font-medium">
											{stat.label}
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Our Mission */}
			<section className="py-20 bg-slate-50">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="space-y-6">
							<h2 className="text-4xl font-bold text-slate-800">
								Our Mission & Philosophy
							</h2>
							<div className="space-y-4 text-slate-600 leading-relaxed">
								<p>
									At VIP Living Center, we believe that every individual deserves
									to live with dignity, respect, and independence, regardless of
									their care needs. Our mission is to provide exceptional assisted
									living services in a warm, home-like environment.
								</p>
								<p>
									We understand that choosing assisted living is a significant
									decision for families. That's why we've created a small,
									intimate facility where residents receive personalized attention
									and families feel confident in their choice.
								</p>
								<p>
									Our philosophy center on treating each resident as a unique
									individual with their own preferences, needs, and life story. We
									celebrate these differences and work to enhance each person's
									quality of life.
								</p>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="relative">
							<div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
								<img
									src="/about/new_image4.jpeg"
									alt="VIP Living Center interior common area"
									className="object-cover h-full w-full object-center"
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Our Values */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16">
						<h2 className="text-4xl font-bold text-slate-800 mb-4">Our Core Values</h2>
						<p className="text-xl text-slate-600 max-w-2xl mx-auto">
							These values guide everything we do and shape the caring environment we
							create for our residents
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{values.map((value, index) => (
							<motion.div
								key={value.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ y: -5, scale: 1.02 }}>
								<Card className="text-center p-6 hover:shadow-xl transition-all duration-300 h-full group">
									<CardContent className="space-y-4">
										<motion.div
											className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
											whileHover={{ rotate: 360 }}
											transition={{ duration: 0.5 }}>
											<value.icon className="w-6 h-6 text-emerald-600" />
										</motion.div>
										<h3 className="font-semibold text-slate-800">
											{value.title}
										</h3>
										<p className="text-sm text-slate-600">
											{value.description}
										</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Certifications */}
			<section className="py-20 bg-slate-50">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16">
						<h2 className="text-4xl font-bold text-slate-800 mb-4">
							Certifications & Compliance
						</h2>
						<p className="text-xl text-slate-600 max-w-2xl mx-auto">
							We maintain the highest standards of care through rigorous
							certifications and ongoing compliance with state and federal regulations
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-4xl mx-auto">
						<Card className="overflow-hidden">
							<CardContent className="p-8">
								<div className="grid md:grid-cols-2 gap-6">
									{certifications.map((cert, index) => (
										<motion.div
											key={cert}
											initial={{ opacity: 0, x: -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{ delay: index * 0.1 }}
											className="flex items-center space-x-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors duration-200">
											<CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
											<span className="text-slate-700">{cert}</span>
										</motion.div>
									))}
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</section>

			{/* Location & Facility */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="space-y-6">
							<h2 className="text-4xl font-bold text-slate-800">
								Our Location & Facility
							</h2>
							<div className="space-y-4 text-slate-600 leading-relaxed">
								<p>
									Located in South Irving at the corner of a quiet cul-de-sac, VIP
									Living Center offers the perfect balance of peaceful
									residential living and convenient access to medical facilities,
									shopping, and family visits.
								</p>
								<p>
									Our small facility design allows us to maintain a low
									resident-to-staff ratio, ensuring personalized attention and
									creating an intimate, family-like atmosphere that larger
									facilities simply cannot provide.
								</p>
								<p>
									The facility features comfortable private rooms, inviting common
									areas, beautiful outdoor spaces, and all the amenities needed
									for safe, comfortable assisted living.
								</p>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="relative">
							<MapEmbed />
							{/* <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
								<img
									src="/placeholder.svg?height=400&width=500"
									alt="VIP Living Centers facility location"
									className="object-cover"
								/>
							</div> */}
						</motion.div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-green-800 to-emerald-300">
				<div className="container mx-auto px-4 text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-3xl mx-auto">
						<h2 className="text-4xl font-bold text-white mb-6">
							Experience the VIP Living Difference
						</h2>
						<p className="text-xl text-emerald-100 mb-8">
							Discover why families choose VIP Living Centers for their loved ones.
							Schedule a personal tour and see our caring community in action.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link 
							// to="https://forms.gle/eVe8DCEiW2Bk6QFq9"
							to={"/contact"}
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
								Contact Us Today
							</Button>
						</div>
					</motion.div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
