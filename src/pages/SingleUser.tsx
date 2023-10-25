import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaLink, FaTwitter } from "react-icons/fa";
import { formatCreatedDate } from "@/config/DateFormat";
import { useGithub } from "@/contexts/GithubContext";
import { getSingleUser } from "@/components/GithubActions";

const SingleUser = () => {
	const { state, dispatch } = useGithub();
	const params = useParams();
	const { login } = params;

	useEffect(() => {
		const getUser = async (login: string) => {
			dispatch({ type: "SET_LOADING" });
			const user = await getSingleUser(login);
			dispatch({ type: "GET_USER", payload: user });
		};
		getUser(login!);
	}, []);

	return (
		<div className="w-full">
			<div className="mt-4">
				<Link
					to="/"
					className="rounded-md mt-4 p-4 border text-blue-700 uppercase hover:cursor-pointer hover:bg-slate-900"
				>
					Back
				</Link>
			</div>
			<div
				className="w-full rounded-lg p-4 mt-8"
				style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
			>
				{state.user && (
					<div className="flex items-start">
						<div>
							<img
								src={state.user.avatar_url}
								alt={state.user.login}
								className="w-24 rounded-full border-4 border-blue-600"
							/>
						</div>
						<div className="ml-4 w-full">
							<div className="flex justify-between w-full px-2">
								<div>
									{" "}
									<h6 className="font-poppins text-xl font-semibold">
										{state.user.name}
									</h6>
									<p className="text-blue-600">{state.user.login}</p>
								</div>
								<p className="text-sm">
									Joined {formatCreatedDate(state.user.created_at)}
								</p>
							</div>
							<div className="my-8">
								<a
									href={state.user.html_url}
									target="_blank"
									rel="noreferreer"
									className="rounded-md p-4 border text-blue-700 uppercase hover:cursor-pointer hover:bg-slate-900"
								>
									Visit github Profile
								</a>
							</div>
							<div className="mt-4 text-md">
								{state.user.bio ? (
									<p>{state.user.bio}</p>
								) : (
									<p>This user has no bio</p>
								)}
							</div>
							<div className="flex justify-center items-center bg-slate-900 text-center py-4 rounded-md mt-8 text-white">
								<div className="w-1/3">
									<p>Repos</p>
									<p>{state.user.public_repos}</p>
								</div>
								<div className="w-1/3">
									<p>followers</p>
									<p>{state.user.followers}</p>
								</div>
								<div className="w-1/2">
									<p>following</p>
									<p>{state.user.following}</p>
								</div>
							</div>
							<div className="w-full py-2 px-4 mt-4">
								<ul className="flex w-full flex-col items-center justify-between md:flex-row">
									<li className="flex justify-center items-center w-full md:border-r md:w-1/3">
										<FaLocationDot />{" "}
										<p className="ml-2">{state.user.location}</p>
									</li>
									<li className="flex justify-center items-center w-full md:border-r md:w-1/3">
										<FaLink />{" "}
										<a
											href={`https://${state.user.blog}`}
											target="_blank"
											className="ml-2"
										>
											{state.user.blog}
										</a>
									</li>
									<li className="flex justify-center items-center w-full md:w-1/3">
										<FaTwitter />{" "}
										<a
											href={`https://twitter.com/${state.user.twitter_username}`}
											target="_blank"
											className="ml-2"
										>
											{state.user.twitter_username}
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default SingleUser;
