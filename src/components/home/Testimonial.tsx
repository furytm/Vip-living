import { motion } from "framer-motion";

function Testimonial({ testimonial, name }: { testimonial: string; name: string }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
            viewport={{ once: true }}
			className="bg-gradient-to-br from-slate-50 to-emerald-50 text-center flex flex-col items-center gap-10 w-full py-5 lg:py-10 px-10 lg:px-20">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3 }}
				className="text-4xl font-bold text-slate-800">
				Testimonial
			</motion.h2>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.4 }}
				className="text-xl text-slate-600 leading-relaxed max-w-lg">
				{testimonial}
			</motion.p>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.5 }}>
				{name}
			</motion.p>
		</motion.div>
	);
}

export default Testimonial;
