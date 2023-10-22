import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UsersData } from "@/models/UserInterface";
import { formatCreatedDate } from "@/config/DateFormat";

const SingleUser = () => {
	const [user, setUser] = useState<UsersData | null>(null);
	//const [repo, setRepo] = useState<(string | number | boolean | null)[]>([]);
	const params = useParams();
	const { login } = params;
	const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;
	const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;

	useEffect(() => {
		const github = axios.create({
			baseURL: GITHUB_URL,
			headers: { Authorization: `token ${GITHUB_TOKEN}` },
		});
		const getSingleUser = async (login: string) => {
			const { data } = await github.get(`${GITHUB_URL}/users/${login}`);
			console.log(data);
			setUser(data);
		};
		// const getUserRepos = async (login: string) => {
		// 	const params = new URLSearchParams();
		// 	params.set("sort", "created");
		// 	//params.set("per_page", "10"); // Convert the number to a string

		// 	const res = await github.get(
		// 		`${GITHUB_URL}/users/${login}/repos?${params}`
		// 	);
		// 	const data = await res.data;
		// 	console.log(data);
		// 	setRepo(data);
		// };
		getSingleUser(login!);
		//getUserRepos(login!);

		if (user) {
			console.log(user.followers);
		}
	}, []);

	return (
		<div
			className="w-full rounded-lg p-4 mt-4"
			style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
		>
			{user && (
				<div className="flex items-start">
					<div>
						<img
							src={user.avatar_url}
							alt={user.login}
							className="w-24 rounded-full border-4 border-blue-600"
						/>
					</div>
					<div className="ml-4 w-full">
						<div className="flex justify-between w-full px-2">
							<div>
								{" "}
								<h6 className="font-poppins text-xl font-semibold">
									{user.name}
								</h6>
								<p className="text-blue-600">{user.login}</p>
							</div>
							<p className="text-sm">{formatCreatedDate(user.created_at)}</p>
						</div>
						<div className="mt-4 text-md">
							{user.bio ? <p>{user.bio}</p> : <p>This user has no bio</p>}
						</div>
						<div>
							<div>
								<p>Repos</p>
								<p>{user.public_repos}</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default SingleUser;
