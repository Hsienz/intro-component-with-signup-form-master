import { BaseSyntheticEvent } from "react";
import iconError from "./assets/icon-error.svg";

const Input = (props: { placeholder: string; errorMsg: string }) => {
	return (
		<div className="relative flex-col">
			<input
				type="text"
				className="checkNeeded
				before:contents-[]"
				onClick={handleOnClickEraseError}
				placeholder={props.placeholder}
			/>
			<img
				src={iconError}
				alt=""
				className="absolute right-3 top-0 translate-y-1/2 hidden transition-all"
			/>
			<p className="text-xs font-sans invisible text-right text-Red">
				{props.errorMsg}
			</p>
		</div>
	);
};

const handleSubmit = () => {
	const elem = document.getElementsByClassName("checkNeeded");
	console.log(elem);
	for (let i in elem) {
		if (
			(elem[i] as HTMLInputElement).value === "" &&
			!elem[i].classList.contains("error")
		) {
			elem[i].parentElement?.classList.add("error");
		}
	}
};

const handleOnClickEraseError = (e: BaseSyntheticEvent) => {
	e.target.parentElement.classList.remove("error");
};

const Card = () => {
	return (
		<div className="flex flex-col text-center w-[320px] mx-8 my-16 lg:flex-row lg:w-[1200px] lg:h-fit lg:items-center lg:text-left lg:gap-x-10">
			<div className="font-sans text-white lg:w-5/12">
				<h1 className="font-bold text-3xl lg:text-5xl">
					{" "}
					Learn to code by watching others
				</h1>

				<p className="font-light mt-6">
					See how experienced developers solve problems in real-time.
					Watching scripted tutorials is great, but understanding how
					developers think is invaluable.
				</p>
			</div>

			<div className="lg:w-1/2 h-full">
				<div className="mt-12 bg-Blue w-full h-24 rounded-xl flex flex-col justify-center items-center lg:h-14 lg:mt-0">
					{" "}
					<p className="w-48 text-white font-light lg:w-full lg:text-center">
						
						<span className="font-semibold">
							Try it free 7 days
						</span>{" "}
						then $20/mo. thereafter
					</p>
				</div>

				<div className="bg-white rounded-xl mt-8 lg:h-full">
					<form
						action=""
						className="flex flex-col gap-2 justify-center w-full p-6"
					>
						<Input
							placeholder="First Name"
							errorMsg="First name cannot be empty"
						/>
						<Input
							placeholder="Last Name"
							errorMsg="Last name cannot be empty"
						/>
						<Input
							placeholder="Email Address"
							errorMsg="Look like this is not an email"
						/>
						<Input
							placeholder="Password"
							errorMsg="Password cannot be empty"
						/>
						<button
							type="button"
							onClick={handleSubmit}
							className="uppercase font-semibold bg-Green rounded-lg text-white hover:brightness-110 shadow-md"
						>
							Claim your free trial
						</button>

						<p className="text-xs text-Grayish_Blue lg:text-center">
							By clicking the button, you are agreeing to our{" "}
							<a href="#" className="text-Red">
								Terms and Services
							</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Card;
