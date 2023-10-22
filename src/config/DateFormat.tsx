import { format, parseISO } from "date-fns";

export const formatCreatedDate = (date: string) => {
	const parsedDate = parseISO(date);

	// Format the date to the desired format
	const formattedDate = format(parsedDate, "d LLL yyyy");
	return formattedDate;
};
