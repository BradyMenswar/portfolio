import ProjectCard from "./ProjectCard";
import waterfall from "../waterfall.jpg";
import darbie from "../DarbieScreenshot.PNG";
import typing from "../TypingScreenshot.PNG";
import globe from "../GlobeScreenshot.PNG";
import voltorb from "../VoltorbScreenshot.PNG";

export default function Carousel() {
	return (
		<div className="flex flex-wrap justify-center w-full gap-8 p-8 bg-stone-800 h-fit">
			<ProjectCard
				name="JH Darbie & Co."
				img={darbie}
				link="https://darbie.netlify.app"
				tags={["Nuxt", "Freelance"]}
				description="A website for an investment firm client."
				comingSoon={false}
			></ProjectCard>
			<ProjectCard
				name="Typing Tester"
				img={typing}
				link="https://bradymenswar.github.io/typing-website"
				tags={["React", "Personal"]}
				description="A website that lets the user test their typing skills on various prompts."
				comingSoon={false}
			></ProjectCard>
			<ProjectCard
				name="Globe Countries"
				img={globe}
				link="https://bradymenswar.github.io/globe-countries/"
				tags={["React", "Personal"]}
				description="A website where users can search the globe for countries."
				comingSoon={false}
			></ProjectCard>
			<ProjectCard
				name="Voltorb Flip"
				img={voltorb}
				link="https://github.com/BradyMenswar/voltorb-flip"
				tags={["React", "Personal"]}
				description="A recreation of the classic pokemon game Voltorb Flip."
				comingSoon={true}
			></ProjectCard>
		</div>
	);
}
