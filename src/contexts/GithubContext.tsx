import { UserData, UsersData } from "@/models/UserInterface";
import {
	Dispatch,
	ReactNode,
	createContext,
	useReducer,
	useContext,
} from "react";
import { GithubReducer } from "@/components/GihubReducer";

// define the initialstate of the states and action types
type initialStateType = {
	users: UsersData[];
	user: UsersData;
	isLoading: boolean;
};

type actionType =
	| { type: "SEARCH_USER"; payload: UsersData[] }
	| { type: "GET_USER"; payload: UsersData }
	| { type: "SET_LOADING" };

// create a context for your counter
type GithubContextType = {
	state: initialStateType;
	dispatch: Dispatch<actionType>;
};

const GithubContext = createContext<GithubContextType | undefined>(undefined);

type GithubProviderProps = { children: ReactNode };

export const GithubProvider = ({ children }: GithubProviderProps) => {
	const initialState: initialStateType = {
		users: [],
		user: UserData,
		isLoading: false,
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	return (
		<GithubContext.Provider
			value={{
				state,
				dispatch,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

// Create a custom hook to access the context in your components
export function useGithub() {
	const context = useContext(GithubContext);
	if (context === undefined) {
		throw new Error("useCounter must be used within a GithubProvider");
	}
	return context;
}
