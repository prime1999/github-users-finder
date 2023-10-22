import { FormEvent, useState } from "react";
import axios from "axios";
import { UsersData } from "@/models/UserInterface";
import { HiMagnifyingGlass } from "react-icons/hi2";

type Props = {
	setUsers: React.Dispatch<React.SetStateAction<UsersData[]>>;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchContainer = ({ setUsers, setIsLoading }: Props) => {
	const [text, setText] = useState<string>("");

	const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;
	const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;

	//function to search users
	const searchUsers = async (text: string) => {
		setIsLoading(true);
		const github = axios.create({
			baseURL: GITHUB_URL,
			headers: { Authorization: `token ${GITHUB_TOKEN}` },
		});
		//making the text a query to get a user based on it
		const params = new URLSearchParams({
			q: text,
		});

		const res = await github.get(`${GITHUB_URL}/search/users?${params}`);

		const { items } = await res.data;
		console.log(items);
		setUsers(items);
		setIsLoading(false);
	};

	const handleSearch = (e: FormEvent) => {
		e.preventDefault();
		searchUsers(text);
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
