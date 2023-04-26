import resume from "../Resume.pdf";
export default function Header() {
	return (
		<header className="z-[3] flex items-center justify-between h-20 bg-stone-900">
			<div className="flex ml-8">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 256 256"
				>
					<path
						fill="rgb(245 245 244)"
						d="M69.12 94.15L28.5 128l40.62 33.85a8 8 0 1 1-10.24 12.29l-48-40a8 8 0 0 1 0-12.29l48-40a8 8 0 0 1 10.24 12.3Zm176 27.7l-48-40a8 8 0 1 0-10.24 12.3L227.5 128l-40.62 33.85a8 8 0 1 0 10.24 12.29l48-40a8 8 0 0 0 0-12.29Zm-82.39-89.37a8 8 0 0 0-10.25 4.79l-64 176a8 8 0 0 0 4.79 10.26A8.14 8.14 0 0 0 96 224a8 8 0 0 0 7.52-5.27l64-176a8 8 0 0 0-4.79-10.25Z"
					/>
				</svg>
			</div>
			<div className="flex gap-4 mr-8">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/bradymenswar"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="2em"
						height="2em"
						viewBox="0 0 256 256"
					>
						<path
							fill="rgb(245 245 244)"
							d="M216 104v8a56.06 56.06 0 0 1-48.44 55.47A39.8 39.8 0 0 1 176 192v40a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-16H72a40 40 0 0 1-40-40a24 24 0 0 0-24-24a8 8 0 0 1 0-16a40 40 0 0 1 40 40a24 24 0 0 0 24 24h24v-8a39.8 39.8 0 0 1 8.44-24.53A56.06 56.06 0 0 1 56 112v-8a58.14 58.14 0 0 1 7.69-28.32A59.78 59.78 0 0 1 69.07 28A8 8 0 0 1 76 24a59.75 59.75 0 0 1 48 24h24a59.75 59.75 0 0 1 48-24a8 8 0 0 1 6.93 4a59.74 59.74 0 0 1 5.37 47.68A58 58 0 0 1 216 104Z"
						></path>
					</svg>
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.linkedin.com/in/brady-menswar/"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="2em"
						height="2em"
						viewBox="0 0 256 256"
					>
						<path
							fill="rgb(245 245 244)"
							d="M216 24H40a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16ZM96 176a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm-8-80a12 12 0 1 1 12-12a12 12 0 0 1-12 12Zm96 80a8 8 0 0 1-16 0v-36a20 20 0 0 0-40 0v36a8 8 0 0 1-16 0v-64a8 8 0 0 1 15.79-1.78A36 36 0 0 1 184 140Z"
						></path>
					</svg>
				</a>
				<a target="_blank" rel="noopener noreferrer" href={resume}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 256 256"
					>
						<path
							fill="rgb(245 245 244)"
							d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66ZM160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48v120Z"
						/>
					</svg>
				</a>
			</div>
		</header>
	);
}
