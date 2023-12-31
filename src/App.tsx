import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import Home from "./pages/Home";
import SingleUser from "./pages/SingleUser";
import RootLayout from "./layouts/RootLayout";
import { GithubProvider } from "./contexts/GithubContext";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />} />
				<Route path="/user/:login" element={<SingleUser />} />
			</Route>
		</>
	)
);

const App = () => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<GithubProvider>
				<RouterProvider router={router} />
			</GithubProvider>
		</ThemeProvider>
	);
};

export default App;
