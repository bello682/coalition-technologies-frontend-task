import * as actionTypes from "../actionsTypes/userInfoActionTypes";

const initialState = {
	loading: false,
	usersData: [],
	error: "",
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_USERS_REQUEST:
			return {
				...state,
				loading: true,
				error: "",
			};

		case actionTypes.FETCH_USERS_SUCCESS:
			return {
				...state,
				loading: false,
				usersData: action.payload,
			};

		case actionTypes.FETCH_USERS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default userReducer;
