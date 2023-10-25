import { FormEvent, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useGithub } from "@/contexts/GithubContext";
import { searchUsers } from "./GithubActions";

const SearchContainer = () => {
	const { dispatch } = useGithub();
	const [text, setText] = useState<string>("");

	const handleSearch = async (e: FormEvent) => {
		e.preventDefault();
		dispatch({ type: "SET_LOADING" });

		const users = await searchUsers(text);
		dispatch({ type: "SEARCH_USER", payload: users });
	};

	return (
		<div className="w-full mt-8">
			<form className="w-full flex justify-between bg-slate-900 p-2 rounded-md">
				<div className="relative w-full">
					<input
						className="w-full p-2 bg-transparent text-white pl-8 focus:outline-none"
						type="text"
						placeholder="Search github username..."
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
					<HiMagnifyingGlass className="absolute top-3 left-1 text-blue-600" />
				</div>
				<button
					onClick={(e) => handleSearch(e)}
					className="bg-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-700"
				>
					Search
				</button>
			</form>
		</div>
	);
};

export default SearchContainer;
