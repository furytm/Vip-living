import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ name: "Services", href: "/services" },
		{ name: "Community & Activities", href: "/community-activities" },
		{ name: "FAQs", href: "/faqs" },
		{ name: "Careers", href: "/careers" },
		{ name: "About", href: "/about" },
		{ name: "Contact", href: "/contact" },
	];

	return (
		<header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						className="flex items-center space-x-2">
						<Link
							to="/"
							className="flex items-center space-x-2">
							<img
								src="/logo.png"
								alt="logo"
								className="h-12"
							/>
							{/* <div c
							{/* <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
								<Home className="w-6 h-6 text-white" />
							</div>
							<div>
								<h1 className="text-xl font-bold text-slate-800">VIP Living</h1>
								<p className="text-xs text-slate-600">Center</p>
							</div> */}
						</Link>
					</motion.div>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center space-x-6">
						{navItems.map((item, index) => (
							<motion.div
								key={item.name}
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}>
								<Link
									to={item.href}
									className="text-slate-700 hover:text-emerald-600 transition-colors font-medium text-sm">
									{item.name}
								</Link>
							</motion.div>
						))}
						<Link 
						// to="https://forms.gle/eVe8DCEiW2Bk6QFq9"
						to={"/contact"}
						>
							<Button className="bg-emerald-600 hover:bg-emerald-700">
								Schedule Visit
							</Button>
						</Link>
					</nav>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="lg:hidden p-2 text-slate-600 hover:text-slate-800">
						{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<motion.nav
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						className="lg:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
						<div className="flex flex-col space-y-4">
							{navItems.map((item) => (
								<Link
									key={item.name}
									to={item.href}
									className="text-slate-700 hover:text-emerald-600 transition-colors font-medium"
									onClick={() => setIsMenuOpen(false)}>
									{item.name}
								</Link>
							))}
							<Link 
							// to="https://forms.gle/eVe8DCEiW2Bk6QFq9"
							to={"/contact"}
							>
								<Button className="bg-emerald-600 hover:bg-emerald-700 w-fit">
									Schedule Visit
								</Button>
							</Link>
						</div>
					</motion.nav>
				)}
			</div>
		</header>
	);
}
