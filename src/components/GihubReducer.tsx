import { UsersData } from "@/models/UserInterface";

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

export const GithubReducer = (state: initialStateType, action: actionType) => {
	switch (action.type) {
		case "SEARCH_USER":
			return {
				...state,
				users: action.payload,
				isLoading: false,
			};
		case "GET_USER":
			return {
				...state,
				user: action.payload,
				isLoading: false,
			};
		case "SET_LOADING":
			return {
				...state,
				isLoading: true,
			};
		default:
			return state;
	}
};
