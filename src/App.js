import Hero from "./components/Hero";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
	return (
		<>
			<Header></Header>
			<Hero></Hero>
			<About></About>
			<div className="flex flex-col items-center bg-stone-800">
				<h2 className="pt-8 text-[3rem] font-bold text-stone-100">Projects</h2>
				<Carousel></Carousel>
			</div>
			<Contact></Contact>
		</>
	);
}

export default App;
