import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./../store/actions/userInfoActions";
import "../CSS/mainExportContainer.css";
import Content from "./userInfomation";
import Sidebar from "./sideBar";
import Loader from "../components/loader";

export default function MainExportContainer() {
	const dispatch = useDispatch();
	const [selectedUser, setSelectedUser] = useState(null);
	const { loading, usersData, error } = useSelector((state) => state.userState);

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	const handleUserSelect = (user) => {
		setSelectedUser(user);
	};

	if (loading) {
		return (
			<div>
				<Loader />
			</div>
		);
	}

	if (error) {
		return <div>Error fetching users: {error.message}</div>;
	}

	return (
		<div className="app-container">
			<div className="app-container-wrapper">
				{/* Side bar */}
				<div className="w-[25%]">
					<Sidebar
						users={usersData}
						onUserSelect={handleUserSelect}
						selectedUserId={selectedUser?.name}
					/>
				</div>

				{/* User Info */}
				<div className="w-[70%]">
					{selectedUser && <Content userInfo={selectedUser} />}
				</div>
			</div>
		</div>
	);
}
