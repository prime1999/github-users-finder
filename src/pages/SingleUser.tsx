import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaLink, FaTwitter } from "react-icons/fa";
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
							<p className="text-sm">
								Joined {formatCreatedDate(user.created_at)}
							</p>
						</div>
						<div className="my-8">
							<a
								href={user.html_url}
								target="_blank"
								rel="noreferreer"
								className="rounded-md p-4 border uppercase hover:cursor-pointer hover:bg-slate-900"
							>
								Visit github Profile
							</a>
						</div>
						<div className="mt-4 text-md">
							{user.bio ? <p>{user.bio}</p> : <p>This user has no bio</p>}
						</div>
						<div className="flex justify-center items-center bg-slate-900 text-center py-4 rounded-md mt-8 text-white">
							<div className="w-1/3">
								<p>Repos</p>
								<p>{user.public_repos}</p>
							</div>
							<div className="w-1/3">
								<p>followers</p>
								<p>{user.followers}</p>
							</div>
							<div className="w-1/2">
								<p>following</p>
								<p>{user.following}</p>
							</div>
						</div>
						<div className="w-full py-2 px-4 mt-4">
							<ul className="flex w-full flex-col items-center justify-between md:flex-row">
								<li className="flex justify-center items-center w-full md:border-r md:w-1/3">
									<FaLocationDot /> <p className="ml-2">{user.location}</p>
								</li>
								<li className="flex justify-center items-center w-full md:border-r md:w-1/3">
									<FaLink />{" "}
									<a
										href={`https://${user.blog}`}
										target="_blank"
										className="ml-2"
									>
										{user.blog}
									</a>
								</li>
								<li className="flex justify-center items-center w-full md:w-1/3">
									<FaTwitter />{" "}
									<a
										href={`https://twitter.com/${user.twitter_username}`}
										target="_blank"
										className="ml-2"
									>
										{user.twitter_username}
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default SingleUser;
