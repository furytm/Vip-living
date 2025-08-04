import { motion } from "framer-motion";
import {
	ArrowRight,
	Calendar,
	Music,
	Palette,
	Book,
	Users,
	Heart,
	Gamepad2,
	Dumbbell,
	Monitor,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";

export default function CommunityActivitiesPage() {
	const activities = [
		{
			icon: Music,
			title: "Music Therapy",
			description:
				"Live music performances, sing-alongs, and therapeutic music sessions that engage and uplift our residents",
			schedule: "Daily at 3:00 PM",
			color: "purple",
			image: "/activities/music.jpeg",
		},
		{
			icon: Palette,
			title: "Art & Creative Expression",
			description:
				"Creative workshops including painting, pottery, and seasonal crafts to stimulate creativity and self-expression",
			schedule: "Tuesdays & Thursdays",
			color: "pink",
			image: "/activities/art.jpeg",
		},
		{
			icon: Book,
			title: "Book Clubs & Trivia",
			description:
				"Engaging book discussions, storytelling sessions, and trivia competitions to keep minds sharp and active",
			schedule: "Wednesdays at 10:00 AM",
			color: "blue",
			image: "/activities/book.jpeg",
		},
		{
			icon: Dumbbell,
			title: "Bonsai Classes",
			description:
				"Therapeutic gardening and bonsai cultivation classes that provide peaceful, meditative activities",
			schedule: "Monday & Friday",
			color: "green",
			image: "/activities/bonsai.jpeg",
		},
		{
			icon: Gamepad2,
			title: "Football Competitions",
			description:
				"Watching games together, fantasy football leagues, and sports-related activities for sports enthusiasts",
			schedule: "Game Days",
			color: "orange",
			image: "/activities/sport.jpeg",
		},
		{
			icon: Monitor,
			title: "Technology Programs",
			description:
				"ZOOM sessions for virtual visits with family and participation in online gourmet cooking classes",
			schedule: "As Scheduled",
			color: "indigo",
			image: "/activities/tech.jpeg",
		},
	];

	return (
		<div className="min-h-screen bg-white">
			<Header />

			{/* Hero Section */}
			<section className="relative pt-24 pb-20 overflow-hidden">
				<div className="absolute inset-0">
					<img
						src="/community/20903.jpg"
						alt="Community & Activities at VIP Living Centers"
						className="object-cover w-full h-full"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-900/30" />
				</div>

				<div className="container mx-auto px-4 relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className="max-w-4xl">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
							className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
							<Users className="w-4 h-4 mr-2" />
							Vibrant Community Life
						</motion.div>

						<h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
							COMMUNITY &{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
								ACTIVITIES
							</span>
						</h1>

						<p className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
							Our Life Enrichment program is far from cookie-cutter. We continually
							evaluate and add new programs to engage our residents in meaningful
							ways.
						</p>

						<Button
							size="lg"
							className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8">
							Join Our Community
							<ArrowRight className="w-5 h-5 ml-2" />
						</Button>
					</motion.div>
				</div>
			</section>

			{/* Activities Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16">
						<h2 className="text-4xl font-bold text-slate-800 mb-6">Activities</h2>
						<div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-600 leading-relaxed">
							<p>
								Our Life Enrichment program is far from cookie-cutter. We
								continually evaluate and add new programs to engage our residents in
								meaningful ways.
							</p>
							<p>
								Life Enrichment coordinators plan a rotating calendar of engaging
								activities, including music therapy, art, trivia, book clubs, bonsai
								classes, football competitions, and so much more!
							</p>
							<p>
								We leverage technology to enhance our programs, like ZOOM, to allow
								our less ambulatory residents to be part of a gourmet club cook-off
								with our kitchen staff.
							</p>
						</div>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{activities.map((activity, index) => (
							<motion.div
								key={activity.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ y: -5 }}>
								<Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md group overflow-hidden">
									<div className="relative h-48 overflow-hidden">
										<img
											src={activity.image || "/placeholder.svg"}
											alt={activity.title}
											className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
										<div
											className={`absolute top-4 left-4 w-12 h-12 bg-${activity.color}-100 rounded-lg flex items-center justify-center backdrop-blur-sm`}>
											<activity.icon
												className={`w-6 h-6 text-${activity.color}-600`}
											/>
										</div>
									</div>

									<CardContent className="p-6">
										<h3 className="text-xl font-semibold text-slate-800 mb-3">
											{activity.title}
										</h3>
										<p className="text-slate-600 leading-relaxed mb-4">
											{activity.description}
										</p>
										<div className="flex items-center text-sm text-slate-500">
											<Calendar className="w-4 h-4 mr-2" />
											{activity.schedule}
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Health and Wellness Section */}
			<section className="py-20 bg-slate-50">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="space-y-6">
							<h2 className="text-4xl font-bold text-slate-800">
								Health and Wellness
							</h2>
							<div className="space-y-4 text-slate-600 leading-relaxed">
								<p>
									Expert training and attention to detail are the cornerstones of
									caregiving. Our staff forms tight bonds with residents and their
									families. They often compare caring for residents to caring for
									a member of their own family.
								</p>
								<p>
									Our staff knows each resident intimately. They proactively care
									for residents and notice changes in their condition quickly.
								</p>
								<p>
									A nurse is on staff to oversee and customize care plans for each
									resident and can communicate concerns to the primary care
									physician.
								</p>
								<p>
									Available medical referral services include a shortlist of
									recommended primary care doctors, physical and occupational
									therapists, podiatrists, geriatric psychiatrists, nearby
									pharmacies providing free medication delivery, mobile blood
									work, labs, and X-ray vendors.
								</p>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="relative">
							<div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
								<img
									src="/activities/wellness.jpeg"
									alt="Health and wellness at VIP Living Centers"
									className="object-cover w-full h-full"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
							</div>

							{/* Floating wellness cards */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.5 }}
								className="absolute -left-6 top-8 bg-white rounded-xl shadow-lg p-4 max-w-xs">
								<div className="flex items-center space-x-3">
									<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
										<Heart className="w-5 h-5 text-blue-600" />
									</div>
									<div>
										<div className="font-semibold text-slate-800">
											Expert Care
										</div>
										<div className="text-sm text-slate-600">
											24/7 professional staff
										</div>
									</div>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.7 }}
								className="absolute -right-6 bottom-8 bg-white rounded-xl shadow-lg p-4 max-w-xs">
								<div className="flex items-center space-x-3">
									<div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
										<Users className="w-5 h-5 text-emerald-600" />
									</div>
									<div>
										<div className="font-semibold text-slate-800">
											Family Bonds
										</div>
										<div className="text-sm text-slate-600">
											Personal relationships
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
							className="relative order-2 lg:order-1">
							<div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
								<img
									src="/activities/culture.jpeg"
									alt="Our culture at VIP Living Centers"
									className="object-cover"
								/>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="space-y-6 order-1 lg:order-2">
							<h2 className="text-4xl font-bold text-slate-800">Our Culture</h2>
							<div className="space-y-4 text-slate-600 leading-relaxed">
								<p>
									At VIP Living Centers, our passion for service is what unites
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
							Experience Our Vibrant Community
						</h2>
						<p className="text-xl text-purple-100 mb-8">
							Join us for a day and see how our activities and community spirit can
							enrich your life.
						</p>
						<Link to="https://forms.gle/eVe8DCEiW2Bk6QFq9">
							<Button
								size="lg"
								variant="secondary"
								className="text-lg px-8 border">
								Schedule a Visit
								<ArrowRight className="w-5 h-5 ml-2" />
							</Button>
						</Link>
					</motion.div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
