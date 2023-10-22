import { useState } from "react";

import { UsersData } from "@/models/UserInterface";
import SearchContainer from "../components/SearchContainer";
import UsersList from "@/pages/UsersList";

const Home = () => {
	const [users, setUsers] = useState<UsersData[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	return (
		<div className="w-full mx-auto">
			<SearchContainer setIsLoading={setIsLoading} setUsers={setUsers} />
			<UsersList isLoading={isLoading} users={users} />
		</div>
	);
};

export default Home;
