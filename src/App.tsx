import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pages from "./pages/Pages";
import About from "./pages/About";
import Careers from "./pages/Careers";
import CommunityActivities from "./pages/CommunitActivities";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import Services from "./pages/Services";

gsap.registerPlugin(scrollTrigger);

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/pages"
					element={<Pages />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/careers"
					element={<Careers />}
				/>
				<Route
					path="/community-activities"
					element={<CommunityActivities />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
				<Route
					path="/faqs"
					element={<FAQs />}
				/>
				<Route
					path="/services"
					element={<Services />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
