import Header from "@/components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const RootLayout = () => {
	return (
		<div className="container flex items-center justify-center px-2 h-screen w-full mx-auto">
			<div className="w-11/12 mx-auto md:w-9/12 lg:w-1/2">
				<div className="w-full mx-auto">
					<Header />
					<Outlet />
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default RootLayout;
