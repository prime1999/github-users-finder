import axios from "axios";
const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;

const github = axios.create({
	baseURL: GITHUB_URL,
	headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

//function to search users
export const searchUsers = async (text: string) => {
	//making the text a query to get a user based on it
	const params = new URLSearchParams({
		q: text,
	});

	const res = await github.get(`${GITHUB_URL}/search/users?${params}`);

	const { items } = await res.data;
	console.log(items);
	return items;
};

// function to get a single user
export const getSingleUser = async (login: string) => {
	const { data } = await github.get(`${GITHUB_URL}/users/${login}`);
	console.log(data);
	return data;
};
