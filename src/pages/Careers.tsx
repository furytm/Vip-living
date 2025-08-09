import type React from "react";
import { motion } from "framer-motion";
import {
	ArrowRight,
	Heart,
	Users,
	Clock,
	Award,
	MapPin,
	DollarSign,
	Calendar,
	Send,
	Star,
	Shield,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Testimonial from "@/components/home/Testimonial";

export default function CareersPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		position: "",
		experience: "",
		message: "",
	});

	const benefits = [
		{
			icon: Heart,
			title: "Meaningful Work",
			description:
				"Make a real difference in the lives of our residents every day in a family-like environment",
		},
		{
			icon: DollarSign,
			title: "Competitive Compensation",
			description:
				"Competitive wages with performance-based increases and comprehensive benefits",
		},
		{
			icon: Users,
			title: "Supportive Team",
			description:
				"Work with a caring team that puts employees first to better serve our residents",
		},
		{
			icon: Award,
			title: "Professional Growth",
			description: "Ongoing training opportunities and career development in a growing field",
		},
		{
			icon: Calendar,
			title: "Work-Life Balance",
			description:
				"Flexible scheduling options and a workplace that values your personal time",
		},
		{
			icon: Shield,
			title: "Job Security",
			description: "Stable employment in the growing assisted living industry",
		},
	];

	const openPositions = [
		{
			title: "Certified Nursing Assistant (CNA)",
			type: "Full-time/Part-time",
			shift: "Day & Night Shifts Available",
			requirements: [
				"Current CNA certification in Texas",
				"Experience in assisted living or long-term care preferred",
				"Compassionate and patient demeanor",
				"Ability to work as part of a caring team",
				"Strong communication skills",
			],
			responsibilities: [
				"Assist residents with activities of daily living",
				"Provide personal care with dignity and respect",
				"Monitor resident health and report changes",
				"Maintain accurate documentation",
				"Build meaningful relationships with residents and families",
			],
		},
		{
			title: "Licensed Vocational Nurse (LVN)",
			type: "Full-time",
			shift: "Day Shift",
			requirements: [
				"Current LVN license in Texas",
				"Experience in geriatric care preferred",
				"Strong medication management skills",
				"Excellent assessment and communication abilities",
				"Commitment to resident-centered care",
			],
			responsibilities: [
				"Oversee and customize care plans for residents",
				"Administer medications and treatments",
				"Coordinate with primary care physicians",
				"Supervise and support CNAs",
				"Ensure compliance with care standards",
			],
		},
		{
			title: "Activities Coordinator",
			type: "Part-time",
			shift: "Flexible Hours",
			requirements: [
				"Experience in activity planning or recreation therapy preferred",
				"Creative and energetic personality",
				"Ability to engage with elderly residents",
				"Basic computer skills for program documentation",
				"Understanding of therapeutic activities",
			],
			responsibilities: [
				"Plan and coordinate Life Enrichment programs",
				"Organize music therapy, art, and recreational activities",
				"Coordinate special events and community outings",
				"Document resident participation and engagement",
				"Adapt activities to meet individual resident needs",
			],
		},
		{
			title: "Dietary Aide/Cook",
			type: "Part-time",
			shift: "Morning/Afternoon",
			requirements: [
				"Food service experience preferred",
				"Knowledge of special dietary requirements",
				"Food safety certification or willingness to obtain",
				"Ability to work in a team environment",
				"Attention to detail and cleanliness",
			],
			responsibilities: [
				"Prepare nutritious meals for residents",
				"Accommodate special dietary needs",
				"Maintain kitchen cleanliness and food safety standards",
				"Assist with meal service and dining room setup",
				"Support gourmet cooking programs with residents",
			],
		},
	];

	const culturePoints = [
		"We put our employees first to create a supportive workplace",
		"Dedicated to nurturing every relationship with residents and coworkers",
		"High standards - we don't settle for less than the best",
		"Passion for service unites our team",
		"Family-like atmosphere extends to our staff",
		"Commitment to creating vibrant, inspiring, and purposeful work environment",
	];

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log("Form submitted:", formData);
	};

	return (
		<div className="min-h-screen bg-white">
			<Header />

			{/* Hero Section */}
			<section
				// style={{
				// 	backgroundImage: `url('https://viplivingcenters.com/wp-content/themes/divi-master/img/headers/header-sitting.jpg')`,
				// 	backgroundSize: "auto",
				// 	backgroundAttachment: "fixed",
				// 	backgroundPosition: "center",
				// }}
				className="relative pt-24 pb-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
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
								<Users className="w-4 h-4 mr-2" />
								Join Our Caring Team
							</motion.div>

							<h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
								Build a{" "}
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
									Rewarding Career
								</span>
							</h1>

							<p className="text-xl text-slate-600 leading-relaxed">
								Join our compassionate team at VIP Living Center where our passion
								for service unites us. We put our employees first to create a
								supportive workplace that better serves our residents.
							</p>

							<Button
								size="lg"
								className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8">
								View Open Positions
								<ArrowRight className="w-5 h-5 ml-2" />
							</Button>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2 }}
							className="relative">
							<div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
								<img
									src="https://viplivingcenters.com/wp-content/themes/divi-master/img/headers/header-sitting.jpg"
									alt="VIP Living Centers team members"
									className="object-cover w-full h-full "
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
							</div>

							{/* Floating benefit cards */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.8 }}
								className="absolute -left-6 top-20 bg-white rounded-xl shadow-lg p-4">
								<div className="flex items-center space-x-3">
									<div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
										<Heart className="w-5 h-5 text-emerald-600" />
									</div>
									<div>
										<div className="font-semibold text-slate-800">
											Meaningful Work
										</div>
										<div className="text-sm text-slate-600">
											Make a difference daily
										</div>
									</div>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1 }}
								className="absolute -right-6 bottom-20 bg-white rounded-xl shadow-lg p-4">
								<div className="flex items-center space-x-3">
									<div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
										<Users className="w-5 h-5 text-teal-600" />
									</div>
									<div>
										<div className="font-semibold text-slate-800">
											Supportive Team
										</div>
										<div className="text-sm text-slate-600">
											Family-like atmosphere
										</div>
									</div>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Our Culture Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="space-y-6">
							<h2 className="text-4xl font-bold text-slate-800">Our Culture</h2>
							<div className="space-y-4 text-slate-600 leading-relaxed">
								<p>
									At VIP Living Center, our passion for service is what unites
									us. We not only serve our residents, but we also serve our
									employees. We put our employees first to create a supportive
									workplace that, in turn, better serves our residents.
								</p>
								<p>
									We strive to create a lifestyle for our residents that is
									vibrant, inspiring, and purposeful. We are dedicated to
									nurturing every relationship, to loving and celebrating our
									residents and our coworkers. And because of this dedication, our
									standards are high. We don't settle for less than the best.
								</p>
							</div>

							<div className="space-y-3">
								{culturePoints.map((point, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ delay: index * 0.1 }}
										className="flex items-start space-x-3">
										<Star className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
										<span className="text-slate-700">{point}</span>
									</motion.div>
								))}
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="relative">
							<div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
								<img
									src="/careers/culture.jpeg"
									alt="VIP Living Centers workplace culture"
									className="object-cover h-full w-full object-center"
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Why Work With Us */}
			<section className="py-20 bg-slate-50">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16">
						<h2 className="text-4xl font-bold text-slate-800 mb-4">
							Why Work With Us?
						</h2>
						<p className="text-xl text-slate-600 max-w-2xl mx-auto">
							We believe in supporting our team members with competitive benefits and
							a positive work environment where you can truly make a difference
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{benefits.map((benefit, index) => (
							<motion.div
								key={benefit.title}
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
											<benefit.icon className="w-6 h-6 text-emerald-600" />
										</motion.div>
										<h3 className="font-semibold text-slate-800">
											{benefit.title}
										</h3>
										<p className="text-sm text-slate-600">
											{benefit.description}
										</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>
			<section>
				<Testimonial testimonial="Not long ago, VIP Living Center in Irving, TX, was, for our family, a safe haven in a storm. Having suffered inadequate care at other facilities, we intensely focused on finding a satisfactory provider for Mom during her recovery from multiple health issues. Bing and his staff truly exhibit what is described in detail on their website. The explanation of services and attitudes is entirely accurate, with no exaggeration. Many older people are set in their ways and may find any change to their lives unsettling, but this care home masterfully covers all the critical issues—first with kindness and then with a complete and genuine regard for comfort and cleanliness. Safety and a pleasant atmosphere are not lacking in any regard. Professional respect for the staff by management is evident and allows each member to be at their best when interacting with resident patients. We were more than comforted to experience the large windows of access for visitation and never felt as if we were not welcome or that anything was being hidden from us regarding the true level of care provided regularly. Mom recovered in part, I believe, due to the high quality of care provided at VIP Living Center, and she was able to return home. Should another incident occur, or when we reach that final season of life when a care facility is necessary, we only hope that Bing and his staff will be available to receive us with the same diligent and loving methods we experienced for many months. Last but not least, we found Bing himself to be a hands-on manager and, therefore, fully aware of the true nature of the care being provided. He chooses to be available and introduces pleasant gestures of kindness as an unexpected surprise to the staff and residents, which always brought about good cheer to people doing their best to deal with life and hardships." name="Shawn Cook" />
			</section>

			{/* Open Positions */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16">
						<h2 className="text-4xl font-bold text-slate-800 mb-4">Current Openings</h2>
						<p className="text-xl text-slate-600 max-w-2xl mx-auto">
							Explore our current job opportunities and find the perfect role to make
							a meaningful impact in the lives of our residents
						</p>
					</motion.div>

					<div className="space-y-8 max-w-5xl mx-auto">
						{openPositions.map((position, index) => (
							<motion.div
								key={position.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ scale: 1.01 }}>
								<Card className="hover:shadow-xl transition-all duration-300 overflow-hidden">
									<CardContent className="p-8">
										<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
											<div>
												<h3 className="text-2xl font-bold text-slate-800 mb-2">
													{position.title}
												</h3>
												<div className="flex flex-wrap gap-4 text-sm text-slate-600">
													<div className="flex items-center">
														<Clock className="w-4 h-4 mr-1" />
														{position.type}
													</div>
													<div className="flex items-center">
														<MapPin className="w-4 h-4 mr-1" />
														{position.shift}
													</div>
												</div>
											</div>
											<motion.div
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}>
												<Button className="mt-4 lg:mt-0 bg-emerald-600 hover:bg-emerald-700">
													Apply Now
												</Button>
											</motion.div>
										</div>

										<div className="grid md:grid-cols-2 gap-8">
											<div>
												<h4 className="font-semibold text-slate-800 mb-3">
													Requirements:
												</h4>
												<ul className="space-y-2">
													{position.requirements.map((req, idx) => (
														<motion.li
															key={idx}
															initial={{ opacity: 0, x: -10 }}
															whileInView={{ opacity: 1, x: 0 }}
															viewport={{ once: true }}
															transition={{ delay: idx * 0.05 }}
															className="flex items-start text-sm text-slate-600">
															<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0" />
															{req}
														</motion.li>
													))}
												</ul>
											</div>

											<div>
												<h4 className="font-semibold text-slate-800 mb-3">
													Responsibilities:
												</h4>
												<ul className="space-y-2">
													{position.responsibilities.map((resp, idx) => (
														<motion.li
															key={idx}
															initial={{ opacity: 0, x: -10 }}
															whileInView={{ opacity: 1, x: 0 }}
															viewport={{ once: true }}
															transition={{ delay: idx * 0.05 }}
															className="flex items-start text-sm text-slate-600">
															<div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0" />
															{resp}
														</motion.li>
													))}
												</ul>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Application Form */}
			<section className="py-20 bg-slate-50">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16">
						<h2 className="text-4xl font-bold text-slate-800 mb-4">
							Ready to Join Our Team?
						</h2>
						<p className="text-xl text-slate-600 max-w-2xl mx-auto">
							Fill out the form below and we'll get back to you soon. We're excited to
							learn more about you and how you can contribute to our caring community.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-2xl mx-auto">
						<Card className="overflow-hidden">
							<CardContent className="p-8">
								<form
									onSubmit={handleSubmit}
									className="space-y-6">
									<div className="grid md:grid-cols-2 gap-6">
										<div>
											<label
												htmlFor="name"
												className="block text-sm font-medium text-slate-700 mb-2">
												Full Name *
											</label>
											<Input
												id="name"
												name="name"
												value={formData.name}
												onChange={handleInputChange}
												required
												className="w-full"
											/>
										</div>
										<div>
											<label
												htmlFor="email"
												className="block text-sm font-medium text-slate-700 mb-2">
												Email Address *
											</label>
											<Input
												id="email"
												name="email"
												type="email"
												value={formData.email}
												onChange={handleInputChange}
												required
												className="w-full"
											/>
										</div>
									</div>

									<div className="grid md:grid-cols-2 gap-6">
										<div>
											<label
												htmlFor="phone"
												className="block text-sm font-medium text-slate-700 mb-2">
												Phone Number
											</label>
											<Input
												id="phone"
												name="phone"
												type="tel"
												value={formData.phone}
												onChange={handleInputChange}
												className="w-full"
											/>
										</div>
										<div>
											<label
												htmlFor="position"
												className="block text-sm font-medium text-slate-700 mb-2">
												Position of Interest
											</label>
											<Input
												id="position"
												name="position"
												value={formData.position}
												onChange={handleInputChange}
												className="w-full"
												placeholder="e.g., CNA, LVN, Activities Coordinator"
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor="experience"
											className="block text-sm font-medium text-slate-700 mb-2">
											Relevant Experience
										</label>
										<Input
											id="experience"
											name="experience"
											value={formData.experience}
											onChange={handleInputChange}
											className="w-full"
											placeholder="Years of experience in healthcare/assisted living"
										/>
									</div>

									<div>
										<label
											htmlFor="message"
											className="block text-sm font-medium text-slate-700 mb-2">
											Tell us about yourself
										</label>
										<Textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleInputChange}
											rows={4}
											className="w-full"
											placeholder="Share your experience, qualifications, and why you'd like to work with VIP Living Centers..."
										/>
									</div>

									<motion.div
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}>
										<Button
											type="submit"
											size="lg"
											className="w-full bg-emerald-600 hover:bg-emerald-700">
											Submit Application
											<Send className="w-5 h-5 ml-2" />
										</Button>
									</motion.div>
								</form>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
