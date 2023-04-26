export default function Skills() {
	let skills = [
		"C/C++",
		"HTML",
		"JavaScript",
		"CSS",
		"React",
		"Nuxt/Vue",
		"Node.js",
		"Git",
		"SQL",
		"Python",
	];
	return (
		<div className="flex flex-col gap-8 h-fit">
			<ul className="flex items-center justify-center gap-2">
				{skills.map((skill) => {
					return (
						<div className="flex items-center justify-center px-4 py-1 bg-white rounded-3xl">
							<p className="font-bold text-stone-900">{skill}</p>
						</div>
					);
				})}
			</ul>
		</div>
	);
}
