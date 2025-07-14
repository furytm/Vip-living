import { motion } from "framer-motion";
import { ArrowRight, Plus, Minus, HelpCircle, Phone, Mail } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function FAQsPage() {
	const [openFAQ, setOpenFAQ] = useState<number | null>(null);

	const faqCategories = [
		{
			title: "General Information",
			faqs: [
				{
					question: "What type of facility is VIP Living Centers?",
					answer: "VIP Living Centers is a small State licensed Type B assisted living facility located in South Irving. We provide a home-like environment with personalized care in an intimate, family-friendly atmosphere.",
				},
				{
					question: "Where are you located?",
					answer: "We are conveniently located in South Irving at the corner of a quiet cul-de-sac, providing a peaceful residential setting while maintaining easy access to medical facilities and family visits.",
				},
				{
					question: "What makes VIP Living Centers different from other facilities?",
					answer: "Our small size allows for personalized care and individual attention that larger facilities cannot provide. We maintain a low resident-to-staff ratio and create genuine family-like relationships with our residents and their families.",
				},
				{
					question: "How many residents do you accommodate?",
					answer: "As a small assisted living facility, we intentionally maintain a limited number of residents to ensure personalized attention and care. This intimate setting allows our staff to know each resident personally and provide individualized care.",
				},
			],
		},
		{
			title: "Services & Care",
			faqs: [
				{
					question: "What services are included in your care?",
					answer: "We provide comprehensive assisted living services including personal care assistance, medication management, nutritious meals, housekeeping, laundry services, 24-hour care availability, and engaging life enrichment activities.",
				},
				{
					question: "Do you have medical staff on-site?",
					answer: "Yes, we have a nurse on staff to oversee and customize care plans for each resident. Our nurse can communicate concerns to primary care physicians and coordinate with healthcare providers as needed.",
				},
				{
					question: "What kind of activities do you offer?",
					answer: "Our Life Enrichment program includes music therapy, art activities, trivia, book clubs, bonsai classes, football competitions, and technology programs like ZOOM sessions. We continually evaluate and add new programs to engage residents in meaningful ways.",
				},
				{
					question: "Can you accommodate special dietary needs?",
					answer: "Yes, we work with residents and their healthcare providers to accommodate special dietary requirements and preferences. Our kitchen staff can prepare meals that meet various nutritional and medical needs.",
				},
			],
		},
		{
			title: "Admission & Costs",
			faqs: [
				{
					question: "What is the admission process?",
					answer: "Our admission process includes a facility tour, assessment of care needs, review of medical information, and discussion of services and costs. We work closely with families to ensure a smooth transition and proper care planning.",
				},
				{
					question: "How do you determine the level of care needed?",
					answer: "We conduct a comprehensive assessment of each potential resident's needs, including their medical history, current health status, mobility level, and personal care requirements. This helps us develop an appropriate care plan.",
				},
				{
					question: "Do you accept insurance or Medicaid?",
					answer: "We primarily work with private pay arrangements. Please contact us directly to discuss your specific situation and available payment options that may work for your family.",
				},
				{
					question: "Is there a waiting list?",
					answer: "Availability varies based on our current occupancy. We recommend contacting us as soon as you're considering assisted living to discuss current availability and potentially reserve a spot for your loved one.",
				},
			],
		},
		{
			title: "Daily Life & Family Involvement",
			faqs: [
				{
					question: "What is daily life like at VIP Living Centers?",
					answer: "Daily life is structured yet flexible, with regular meal times, engaging activities, personal care assistance as needed, and plenty of opportunities for social interaction. We strive to create a vibrant, inspiring, and purposeful lifestyle for our residents.",
				},
				{
					question: "Can family members visit anytime?",
					answer: "Yes, we encourage family involvement and have flexible visiting policies. Family members are welcome to visit, participate in activities, and share meals with their loved ones. We believe family connections are essential to our residents' well-being.",
				},
				{
					question: "How do you communicate with families?",
					answer: "We maintain regular communication with families about their loved one's care, health status, and daily activities. Our staff forms close relationships with families and keeps them informed about any changes or concerns.",
				},
				{
					question: "Can residents bring personal belongings?",
					answer: "We encourage residents to bring personal furniture, decorations, and meaningful belongings to make their room feel like home. This helps with the transition and maintains a sense of familiarity and comfort.",
				},
			],
		},
		{
			title: "Health & Medical Care",
			faqs: [
				{
					question: "How do you handle medical emergencies?",
					answer: "We have 24-hour staff trained to respond to emergencies. Our team can quickly assess situations, provide immediate care, contact emergency services when needed, and notify family members and healthcare providers.",
				},
				{
					question: "Do you coordinate with outside healthcare providers?",
					answer: "Yes, we work closely with residents' existing healthcare providers and can help coordinate appointments. We also have a network of recommended primary care doctors, specialists, therapists, and other healthcare professionals.",
				},
				{
					question: "How do you monitor residents' health changes?",
					answer: "Our staff knows each resident intimately and proactively monitors their condition. We notice changes quickly and can adjust care plans as needed. Regular communication with healthcare providers ensures comprehensive care coordination.",
				},
				{
					question: "What medical services are available nearby?",
					answer: "We have access to a network of healthcare providers including primary care doctors, physical and occupational therapists, podiatrists, geriatric psychiatrists, pharmacies with free medication delivery, and mobile medical services.",
				},
			],
		},
	];

	const toggleFAQ = (index: number) => {
		setOpenFAQ(openFAQ === index ? null : index);
	};

	return (
		<div className="min-h-screen bg-white">
			<Header />

			{/* Hero Section */}
			<section className="relative pt-24 pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
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
							<HelpCircle className="w-4 h-4 mr-2" />
							Get Your Questions Answered
						</motion.div>

						<h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
							Frequently Asked{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
								Questions
							</span>
						</h1>

						<p className="text-xl text-slate-600 leading-relaxed mb-8">
							Find answers to common questions about VIP Living Centers, our services,
							and what to expect when choosing assisted living care for your loved
							one.
						</p>

						<Button
							size="lg"
							className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
							Contact Us for More Info
							<ArrowRight className="w-5 h-5 ml-2" />
						</Button>
					</motion.div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4 max-w-4xl">
					{faqCategories.map((category, categoryIndex) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: categoryIndex * 0.1 }}
							className="mb-12">
							<motion.h2
								className="text-3xl font-bold text-slate-800 mb-8 text-center"
								whileHover={{ scale: 1.02 }}>
								{category.title}
							</motion.h2>

							<div className="space-y-4">
								{category.faqs.map((faq, faqIndex) => {
									const globalIndex = categoryIndex * 10 + faqIndex;
									const isOpen = openFAQ === globalIndex;

									return (
										<motion.div
											key={faqIndex}
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ delay: faqIndex * 0.05 }}
											whileHover={{ scale: 1.01 }}>
											<Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200">
												<CardContent className="p-0">
													<motion.button
														onClick={() => toggleFAQ(globalIndex)}
														className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
														whileHover={{
															backgroundColor: "rgb(248 250 252)",
														}}>
														<h3 className="text-lg font-semibold text-slate-800 pr-4">
															{faq.question}
														</h3>
														<motion.div
															animate={{ rotate: isOpen ? 180 : 0 }}
															transition={{
																duration: 0.3,
																ease: "easeInOut",
															}}
															className="flex-shrink-0">
															{isOpen ? (
																<Minus className="w-5 h-5 text-blue-600" />
															) : (
																<Plus className="w-5 h-5 text-slate-400" />
															)}
														</motion.div>
													</motion.button>

													<motion.div
														initial={false}
														animate={{
															height: isOpen ? "auto" : 0,
															opacity: isOpen ? 1 : 0,
														}}
														transition={{
															duration: 0.3,
															ease: "easeInOut",
														}}
														className="overflow-hidden">
														<motion.div
															className="px-6 pb-6"
															initial={{ y: -10 }}
															animate={{ y: isOpen ? 0 : -10 }}
															transition={{ duration: 0.3 }}>
															<p className="text-slate-600 leading-relaxed">
																{faq.answer}
															</p>
														</motion.div>
													</motion.div>
												</CardContent>
											</Card>
										</motion.div>
									);
								})}
							</div>
						</motion.div>
					))}
				</div>
			</section>

			{/* Still Have Questions Section */}
			<section className="py-20 bg-slate-50">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center max-w-3xl mx-auto">
						<h2 className="text-4xl font-bold text-slate-800 mb-6">
							Still Have Questions?
						</h2>
						<p className="text-xl text-slate-600 mb-8">
							Our caring team is here to help. Contact us directly for personalized
							answers to your specific questions about VIP Living Centers.
						</p>

						<div className="grid md:grid-cols-2 gap-6 mb-8">
							<motion.div
								whileHover={{ y: -5, scale: 1.02 }}
								transition={{ duration: 0.2 }}>
								<Card className="p-6 hover:shadow-xl transition-all duration-300">
									<CardContent className="text-center space-y-4">
										<motion.div
											className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto"
											whileHover={{ rotate: 360 }}
											transition={{ duration: 0.5 }}>
											<Phone className="w-6 h-6 text-blue-600" />
										</motion.div>
										<h3 className="font-semibold text-slate-800">Call Us</h3>
										<p className="text-slate-600">(972) 555-0123</p>
										<p className="text-sm text-slate-500">
											Monday - Friday, 8 AM - 6 PM
										</p>
									</CardContent>
								</Card>
							</motion.div>

							<motion.div
								whileHover={{ y: -5, scale: 1.02 }}
								transition={{ duration: 0.2 }}>
								<Card className="p-6 hover:shadow-xl transition-all duration-300">
									<CardContent className="text-center space-y-4">
										<motion.div
											className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto"
											whileHover={{ rotate: 360 }}
											transition={{ duration: 0.5 }}>
											<Mail className="w-6 h-6 text-purple-600" />
										</motion.div>
										<h3 className="font-semibold text-slate-800">Email Us</h3>
										<p className="text-slate-600">info@viplivingcenters.com</p>
										<p className="text-sm text-slate-500">
											We'll respond within 24 hours
										</p>
									</CardContent>
								</Card>
							</motion.div>
						</div>

						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}>
							<Button
								size="lg"
								className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
								Schedule a Personal Tour
								<ArrowRight className="w-5 h-5 ml-2" />
							</Button>
						</motion.div>
					</motion.div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
