import axios from "axios";
import * as actionTypes from "../actionsTypes/userInfoActionTypes";

export const fetchUsers = () => {
	let username = "coalition";
	let password = "skills-test";
	let auth = btoa(`${username}:${password}`);

	return async (dispatch) => {
		dispatch({ type: actionTypes.FETCH_USERS_REQUEST });

		try {
			const response = await axios.get(
				"https://fedskillstest.coalitiontechnologies.workers.dev",
				{
					headers: {
						Authorization: `Basic ${auth}`,
					},
				}
			);

			dispatch({
				type: actionTypes.FETCH_USERS_SUCCESS,
				payload: response.data,
			});
		} catch (error) {
			dispatch({
				type: actionTypes.FETCH_USERS_FAILURE,
				payload: error.message || "Something went wrong!",
			});
		}
	};
};
