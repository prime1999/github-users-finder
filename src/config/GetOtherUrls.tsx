import axios from "axios";

const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;

const github = axios.create({
	baseURL: GITHUB_URL,
	headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

//function to get users repos
export const getUserRepos = async (login: string) => {
	const params = new URLSearchParams();
	params.set("sort", "created");
	params.set("per_page", "10"); // Convert the number to a string

	const res = await github.get(`${GITHUB_URL}/users/${login}/repos?${params}`);
	const data = await res.data;
	console.log(data);
	return data.length;
};
