import Skills from "./Skills";
import Gator from "../GatorLogo.png";
export default function About() {
	return (
		<div className="p-8 bg-stone-800">
			<div className="flex flex-col items-center gap-4 px-16 py-8 rounded-xl bg-stone-900 text-stone-100">
				<h2 className="text-[3rem] font-bold">About Me</h2>
				<div className="flex gap-16 mb-8">
					<p className="w-full text-lg">
						Hello and welcome to my portfolio website! My name is Brady and I am
						a recently graduated software developer. I have a strong passion for
						coding and have been fascinated with technology since I was young.
						After completing my education in Computer Science, I am excited to
						begin my career in this field.
						<br /> <br />
						Over the last few years I have learned about have worked with
						various front-end frameworks such as React and Vue.js. In addition,
						I have experience with back-end development using Node.js and
						databases such as MongoDB and MySQL. I am a creative problem-solver
						and enjoy tackling complex challenges. I am always looking for new
						and innovative ways to improve my skills and create the best user
						experience possible. I am excited to bring my passion and skills to
						your team and help you build amazing web applications. <br /> <br />{" "}
						When I am not coding, I enjoy spending time with my family, friends
						and two cats, exploring new technologies and learning new things.
						Thank you for taking the time to learn about me and my work. Please
						feel free to contact me if you have any questions or if you would
						like to discuss a potential project.
					</p>
					<div className="w-full">
						<img src={Gator}></img>
					</div>
				</div>
				<Skills></Skills>
			</div>
		</div>
	);
}
