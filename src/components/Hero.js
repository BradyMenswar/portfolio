import { useEffect } from "react";
import { useState } from "react";

export default function Hero() {
	let tileSize = 75;
	let columns = Math.floor(window.innerWidth / tileSize);
	let rows = Math.floor(window.innerHeight / tileSize);

	let [tiles, setTiles] = useState(Array.from("0".repeat(columns * rows)));

	useEffect(() => {
		setTiles(Array.from("0".repeat(columns * rows)));
		document.getElementById("tiles").style.setProperty("--columns", columns);
		document.getElementById("tiles").style.setProperty("--rows", rows);
	}, [columns, rows]);

	useEffect(() => {
		document.getElementById("tiles").addEventListener("mousemove", (e) => {
			const rect = document.getElementById("tiles").getBoundingClientRect(),
				x = e.clientX - rect.left,
				y = e.clientY - rect.top;
			document.getElementById("tiles").style.setProperty("--mouse-x", `${x}px`);
			document.getElementById("tiles").style.setProperty("--mouse-y", `${y}px`);
		});
	});

	window.onresize = () => {
		columns = Math.floor(
			parseInt(document.getElementById("tiles").offsetWidth) / tileSize
		);
		rows = Math.floor(
			parseInt(document.getElementById("tiles").offsetHeight) / tileSize
		);
		setTiles(Array.from("0".repeat(columns * rows)));
		document.getElementById("tiles").style.setProperty("--columns", columns);
		document.getElementById("tiles").style.setProperty("--rows", rows);
	};

	return (
		<div className="flex flex-col w-screen hero-container">
			<div id="tiles" className="">
				{tiles.map((tile, index) => {
					return <div key={index} className="tile"></div>;
				})}
			</div>
			<div className="hero-text w-[45rem] mt-[50vh] ml-[10vw] absolute">
				<h1 className="text-[6rem] leading-none font-bold text-stone-100">
					Brady Menswar
				</h1>
				<h2 className="text-[2rem] gradient-text">
					Frontend Engineer, Software Developer
				</h2>
				<p className="text-stone-100 text-[1.2rem]">
					New graduate looking to start a career in the field of Computer
					Science. Experience working with multiple different tech stacks.
				</p>
			</div>
		</div>
	);
}
