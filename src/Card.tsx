const Input = (props : {placeholder:string} ) => {
	return (
		<div>
			<input type="text" placeholder={props.placeholder} />
		</div>
	)
}
const Card = () => {
	return (
		<div className="flex flex-col text-center w-[320px] mx-8 my-16">
			<div className="font-sans text-white">
				<h1 className="font-bold text-3xl"> Learn to code by watching others</h1>

				<p className="font-light mt-6">
					See how experienced developers solve problems in real-time.
					Watching scripted tutorials is great, but understanding how
					developers think is invaluable.
				</p>
			</div>

			<div className="mt-16 bg-Blue w-full h-24 rounded-xl flex flex-col justify-center items-center">
				{" "}
				<p className="w-48 text-white font-light"><span className="font-semibold">Try it free 7 days</span> then $20/mo. thereafter</p>
			</div>

			<div className="bg-white rounded-xl mt-8"> 
				<form action="" className="flex flex-col gap-4 justify-center w-full p-6">
					<input placeholder="First Name"></input>
					<input placeholder="Last Name"></input>
					<input placeholder="Email Address"></input>
					<input placeholder="Password"></input>
					<button className="uppercase font-semibold bg-Green rounded-lg text-white">Claim your free trial</button>

					<p className="text-xs text-Grayish_Blue">
						By clicking the button, you are agreeing to our <a href="#" className="text-Red">Terms
						and Services</a>
					</p>
				</form>
			</div>
		</div>
	);
};
export default Card;
