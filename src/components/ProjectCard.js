export default function ProjectCard(props) {
	return (
		<a
			style={{
				backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${props.img})`,
			}}
			className="p-4 rounded-lg min-h-[20rem] cursor-pointer bg-center bg-cover hover:brightness-125  hover:scale-[1.02] transition-all duration-500 text-stone-100 w-[40%]  flex items-end"
			href={props.link}
			rel="noopener noreferrer"
			target="_blank"
		>
			<div className="flex flex-col gap-2">
				{props.comingSoon && <h2>Coming soon...</h2>}
				<h3 className="text-3xl">{props.name}</h3>
				<h4>{props.description}</h4>
				<div className="flex items-center justify-start gap-2">
					{props.tags.map((tag) => {
						return (
							<div
								key={tag}
								className="flex items-center justify-center px-4 py-1 bg-white rounded-3xl"
							>
								<p className="font-bold text-stone-900">{tag}</p>
							</div>
						);
					})}
				</div>
			</div>
		</a>
	);
}
