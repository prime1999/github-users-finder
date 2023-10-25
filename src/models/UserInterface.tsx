export interface UsersData {
	id: number;
	name?: string;
	email?: string;
	avatar_url: string;
	bio?: string;
	blog?: string;
	company?: string;
	created_at: string;
	events_url?: string;
	followers?: number;
	followers_url: string;
	following?: number;
	following_url: string;
	gists_url: string;
	gravatar_id: string;
	hireable?: boolean;
	html_url: string;
	location?: string;
	login: string;
	node_id?: string;
	public_repos?: number;
	organizations_url?: string;
	public_gists?: number;
	received_events_url?: string;
	repos_url?: string;
	site_admin: boolean;
	starred_url?: string;
	subscriptions_url?: string;
	twitter_username?: string | null;
	type: string;
	updated_at?: string;
	url: string;
}

// export interface User_Data {
// 	avatar_url: string;
// 	events_url: string;
// 	followers_url: string;
// 	following_url: string;
// 	gists_url: string;
// 	gravatar_id: string;
// 	html_url: string;
// 	id: number;
// 	login: string;
// 	name: string;
// 	node_id: string;
// 	organizations_url: string;
// 	received_events_url: string;
// 	repos_url: string;
// 	score: number;
// 	site_admin: boolean;
// 	starred_url: string;
// 	subscriptions_url: string;
// 	type: string;
// 	url: string;
// }

export const UserData = {
	avatar_url: "https://avatars.githubusercontent.com/u/5550850?v=4",
	bio: "Full stack web developer and online instructor, specializiing in mostly JS, but also write Python, PHP and some other stuff.",
	blog: "traversymedia.com",
	company: "Traversy Media",
	created_at: "2013-09-26T15:36:02Z",
	email: "traversymedia@gmail.com",
	events_url: "https://api.github.com/users/bradtraversy/events{/privacy}",
	followers: 67367,
	followers_url: "https://api.github.com/users/bradtraversy/followers",
	following: 6,
	following_url:
		"https://api.github.com/users/bradtraversy/following{/other_user}",
	gists_url: "https://api.github.com/users/bradtraversy/gists{/gist_id}",
	gravatar_id: "",
	hireable: true,
	html_url: "https://github.com/bradtraversy",
	id: 5550850,
	location: "Massachusetts",
	login: "bradtraversy",
	name: "Brad Traversy",
	node_id: "MDQ6VXNlcjU1NTA4NTA=",
	organizations_url: "https://api.github.com/users/bradtraversy/orgs",
	public_gists: 47,
	public_repos: 270,
	received_events_url:
		"https://api.github.com/users/bradtraversy/received_events",
	repos_url: "https://api.github.com/users/bradtraversy/repos",
	site_admin: false,
	starred_url:
		"https://api.github.com/users/bradtraversy/starred{/owner}{/repo}",
	subscriptions_url: "https://api.github.com/users/bradtraversy/subscriptions",
	twitter_username: "traversymedia",
	type: "User",
	updated_at: "2023-06-26T17:14:52Z",
	url: "https://api.github.com/users/bradtraversy",
	score: 1,
};
