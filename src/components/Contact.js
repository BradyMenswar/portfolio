import emailjs from "emailjs-com";
import { useState } from "react";
export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [sent, setSent] = useState(false);
	const [error, setError] = useState(false);

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		emailjs
			.send(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				{ name, email, message },
				process.env.REACT_APP_PUBLIC_KEY
			)
			.then(() => {
				setSent(true);
				setError(false);
			})
			.catch(() => {
				setError(true);
				setSent(false);
			});
	};

	return (
		<div className="flex justify-center p-8 bg-stone-800">
			<div className="flex flex-col items-center gap-4 px-16 py-8 rounded-xl bg-stone-900 text-stone-100 w-[50%]">
				<h2 className="text-[3rem] font-bold">Contact</h2>

				<form
					onSubmit={handleSubmit}
					className="flex flex-col w-[60%] gap-4 text-stone-950"
				>
					<label className="flex flex-col w-full gap-2 text-stone-100">
						<p className="text-xl">Name:</p>
						<input
							className="w-full px-2 py-1 text-stone-950"
							type="text"
							value={name}
							onChange={handleNameChange}
						/>
					</label>
					<label className="flex flex-col w-full gap-2 text-stone-100">
						<p className="text-xl">Email:</p>
						<input
							className="w-full px-2 py-1 text-stone-950"
							type="email"
							value={email}
							onChange={handleEmailChange}
						/>
					</label>
					<label className="flex flex-col w-full gap-2 text-stone-100">
						<p className="text-xl">Message:</p>
						<textarea
							className="w-full px-2 py-1 text-stone-950 min-h-[150px]"
							value={message}
							onChange={handleMessageChange}
						/>
					</label>
					<button
						className="px-4 py-2 bg-white rounded hover:bg-stone-300"
						type="submit"
					>
						Submit
					</button>

					{sent && (
						<p className="self-center text-stone-100">
							Your message has been sent!
						</p>
					)}
					{error && (
						<p className="self-center text-stone-100">
							There was an error sending your message. Please try again.
						</p>
					)}
				</form>
			</div>
		</div>
	);
}
