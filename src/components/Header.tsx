import { ModeToggle } from "./ModeToggler";

const Header = () => {
	return (
		<div className="w-full h-2/3">
			<div className="flex items-center justify-between ">
				<h1 className="font-semibold">DevFinder</h1>
				<ModeToggle />
			</div>
		</div>
	);
};

export default Header;
