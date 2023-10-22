import { UsersData } from "@/models/UserInterface";
import { Link } from "react-router-dom";
import Loader from "@/components/Loader";

type Props = {
	users: UsersData[];
	isLoading: boolean;
};
const UsersList = ({ users, isLoading }: Props) => {
	return (
		<div className="flex justify-center items-center 500 w-10/12 mx-auto">
			<div className="flex flex-wrap justify-center mx-auto h-[400px] mt-4 p-4 w-full overflow-auto">
				{isLoading && <Loader />}
				{users &&
					users.map((user) => (
						<Link
							to={`/user/${user.login}`}
							key={user.id}
							className="flex items-center w-full p-2 mb-2 ml-4 font-poppins border rounded-md hover:cursor-pointer hover:border-2"
						>
							<img
								src={user.avatar_url}
								alt={user.login}
								className="w-12 rounded-full border-2 border-blue-500"
							/>

							<div className="flex items-center ml-4">
								<h6>{user.login}</h6>
								<p className="px-2 text-xs rounded-md ml-2 bg-blue-400">
									{user.type}
								</p>
							</div>
						</Link>
					))}
			</div>
		</div>
	);
};

export default UsersList;
