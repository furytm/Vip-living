import type React from "react";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import MapEmbed from "@/components/Map";
import { Link } from "react-router-dom";

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
		preferredContact: "email",
	});

	const contactInfo = [
		{
			icon: Phone,
			title: "Call Us",
			info: "(972) 555-0123",
			description: "Speak directly with our team",
			action: "tel:+19725550123",
			color: "blue",
		},
		{
			icon: Mail,
			title: "Email Us",
			info: "info@viplivingcenters.com",
			description: "We'll respond within 24 hours",
			action: "mailto:info@viplivingcenters.com",
			color: "emerald",
		},
		{
			icon: MapPin,
			title: "Visit Us",
			info: "3219 Vinson Ct, Irving, TX 75060, USA",
			description: "Tours available by appointment",
			action: "#",
			color: "blue",
		},
	];

	const officeHours = [
		{ day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
		{ day: "Saturday", hours: "9:00 AM - 4:00 PM" },
		{ day: "Sunday", hours: "By Appointment" },
		{ day: "Emergency", hours: "24/7 Available" },
	];

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
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
			<section className="relative pt-24 pb-20 bg-gradient-to-br from-blue-50 via-emerald-50 to-purple-50">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center max-w-4xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
							className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
							<MessageCircle className="w-4 h-4 mr-2" />
							We're Here to Help
						</motion.div>

						<h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
							Get in{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
								Touch
							</span>
						</h1>

						<p className="text-xl text-slate-600 leading-relaxed mb-8">
							Have questions about our services or want to schedule a tour? We'd love
							to hear from you and help you learn more about VIP Living Center.
						</p>
						<Link to="https://forms.gle/eVe8DCEiW2Bk6QFq9">
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

			{/* Contact Information */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16">
						<h2 className="text-4xl font-bold text-slate-800 mb-4">
							Contact Information
						</h2>
						<p className="text-xl text-slate-600 max-w-2xl mx-auto">
							Choose the best way to reach us. We're here to answer your questions and
							provide the information you need.
						</p>
					</motion.div>

					<div className="grid md:grid-cols-3 gap-8 mb-16">
						{contactInfo.map((contact, index) => (
							<motion.div
								key={contact.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ y: -5 }}>
								<Card className="text-center p-8 hover:shadow-xl transition-all duration-300 h-full group">
									<CardContent className="space-y-6">
										<div
											className={`w-16 h-16 bg-${contact.color}-100 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
											<contact.icon
												className={`w-8 h-8 text-${contact.color}-600`}
											/>
										</div>
										<div>
											<h3 className="text-xl font-semibold text-slate-800 mb-2">
												{contact.title}
											</h3>
											<p className="text-lg text-slate-700 font-medium mb-2">
												{contact.info}
											</p>
											<p className="text-sm text-slate-500">
												{contact.description}
											</p>
										</div>
										<Button
											variant="outline"
											className={`border-${contact.color}-200 text-${contact.color}-600 hover:bg-${contact.color}-50`}
											asChild>
											<a href={contact.action}>Contact Now</a>
										</Button>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>

					{/* Office Hours */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-2xl mx-auto">
						<Card>
							<CardContent className="p-8">
								<div className="text-center mb-6">
									<Clock className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
									<h3 className="text-2xl font-bold text-slate-800">
										Office Hours
									</h3>
								</div>
								<div className="space-y-4">
									{officeHours.map((schedule) => (
										<div
											key={schedule.day}
											className="flex justify-between items-center py-2 border-b border-slate-100 last:border-b-0">
											<span className="font-medium text-slate-700">
												{schedule.day}
											</span>
											<span className="text-slate-600">{schedule.hours}</span>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</section>

			{/* Contact Form */}
			<section className="py-20 bg-slate-50">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-start">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="space-y-6">
							<h2 className="text-4xl font-bold text-slate-800">Send Us a Message</h2>
							<p className="text-lg text-slate-600 leading-relaxed">
								Fill out the form below and we'll get back to you as soon as
								possible. Whether you have questions about our services, want to
								schedule a tour, or need more information, we're here to help.
							</p>

							<div className="space-y-4">
								<div className="flex items-center space-x-3">
									<div className="w-2 h-2 bg-emerald-500 rounded-full" />
									<span className="text-slate-600">
										Quick response within 24 hours
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<div className="w-2 h-2 bg-emerald-500 rounded-full" />
									<span className="text-slate-600">
										Personalized consultation available
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<div className="w-2 h-2 bg-emerald-500 rounded-full" />
									<span className="text-slate-600">
										No obligation tours and assessments
									</span>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}>
							<Card>
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
													htmlFor="subject"
													className="block text-sm font-medium text-slate-700 mb-2">
													Subject
												</label>
												<select
													id="subject"
													name="subject"
													value={formData.subject}
													onChange={handleInputChange}
													className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
													<option value="">Select a subject</option>
													<option value="tour">Schedule a Tour</option>
													<option value="services">
														Questions about Services
													</option>
													<option value="admission">
														Admission Information
													</option>
													<option value="costs">Pricing and Costs</option>
													<option value="other">Other</option>
												</select>
											</div>
										</div>

										<div>
											<label
												htmlFor="message"
												className="block text-sm font-medium text-slate-700 mb-2">
												Message *
											</label>
											<Textarea
												id="message"
												name="message"
												value={formData.message}
												onChange={handleInputChange}
												required
												rows={5}
												className="w-full"
												placeholder="Please share your questions or tell us how we can help you..."
											/>
										</div>

										<div>
											<label className="block text-sm font-medium text-slate-700 mb-3">
												Preferred Contact Method
											</label>
											<div className="flex space-x-6">
												<label className="flex items-center">
													<input
														type="radio"
														name="preferredContact"
														value="email"
														checked={
															formData.preferredContact === "email"
														}
														onChange={handleInputChange}
														className="mr-2"
													/>
													Email
												</label>
												<label className="flex items-center">
													<input
														type="radio"
														name="preferredContact"
														value="phone"
														checked={
															formData.preferredContact === "phone"
														}
														onChange={handleInputChange}
														className="mr-2"
													/>
													Phone
												</label>
											</div>
										</div>

										<Button
											type="submit"
											size="lg"
											className="w-full bg-emerald-600 hover:bg-emerald-700">
											Send Message
											<Send className="w-5 h-5 ml-2" />
										</Button>
									</form>
								</CardContent>
							</Card>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Map Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-12">
						<h2 className="text-4xl font-bold text-slate-800 mb-4">Find Us</h2>
						<p className="text-xl text-slate-600 max-w-2xl mx-auto">
							Located in a 3219 Vinson Ct, Irving, TX 75060, USA, our facility is easily
							accessible while maintaining a quiet, residential atmosphere.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-slate-100 rounded-2xl h-96 flex items-center justify-center">
						<MapEmbed />
						{/* <div className="text-center text-slate-500">
							<MapPin className="w-16 h-16 mx-auto mb-4" />
							<p className="text-lg">Interactive Map Coming Soon</p>
							<p className="text-sm">123 Peaceful Lane, South Irving, TX 75060</p>
						</div> */}
					</motion.div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
