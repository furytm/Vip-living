const MapEmbed: React.FC = () => {
	return (
		<div className="w-full h-96 rounded-xl overflow-hidden shadow-md">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.4190421544636!2d-96.99244702355101!3d32.80766028241793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e83edcc302d99%3A0xe3682eda29351f5b!2s3219%20Vinson%20Ct%2C%20Irving%2C%20TX%2075060!5e0!3m2!1sen!2sus!4v1739558270845!5m2!1sen!2sus"
				width="100%"
				height="100%"
				style={{ border: 0 }}
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"></iframe>
		</div>
	);
};

export default MapEmbed;
