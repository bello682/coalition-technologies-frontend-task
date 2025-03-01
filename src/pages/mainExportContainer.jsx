// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUsers } from "./../store/actions/userInfoActions";
// import "../CSS/mainExportContainer.css";
// import Content from "./userInfomation";
// import Sidebar from "./sideBar";
// import Loader from "../components/loader";

// export default function MainExportContainer() {
// 	const dispatch = useDispatch();
// 	const [selectedUser, setSelectedUser] = useState(null);
// 	const { loading, usersData, error } = useSelector((state) => state.userState);

// 	useEffect(() => {
// 		dispatch(fetchUsers());
// 	}, [dispatch]);

// 	const handleUserSelect = (user) => {
// 		setSelectedUser(user);
// 	};

// 	if (loading) {
// 		return (
// 			<div>
// 				<Loader />
// 			</div>
// 		);
// 	}

// 	if (error) {
// 		return <div>Error fetching users: {error.message}</div>;
// 	}

// 	return (
// 		<>
// 			<div className="app-container ">
// 				<div className="app-container-wrapper">
// 					{/* Side bar */}
// 					<div className="md:w-[25%] w-[100%]">
// 						<Sidebar
// 							users={usersData}
// 							onUserSelect={handleUserSelect}
// 							selectedUserId={selectedUser?.name}
// 						/>
// 					</div>

// 					{/* User Info */}
// 					<div className="md:w-[75%] md:z-0 order-1">
// 						{selectedUser && (
// 							<Content
// 								userInfo={selectedUser}
// 								showContent={true}
// 								handleShow={true}
// 							/>
// 						)}
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// }

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
	const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768); // State to track small screens
	const { loading, usersData, error } = useSelector((state) => state.userState);

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	// Update isSmallScreen state on window resize
	useEffect(() => {
		const handleResize = () => {
			console.log("Window width:", window.innerWidth); // Debugging log
			setIsSmallScreen(window.innerWidth < 768);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleUserSelect = (user) => {
		setSelectedUser(user);
	};

	const handleShowSidebar = () => {
		setSelectedUser(null); // Clear the selected user to hide the content
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

	console.log("isSmallScreen in MainExportContainer:", isSmallScreen); // Debugging log

	return (
		<>
			<div className="app-container ">
				<div className="app-container-wrapper">
					{/* Side bar */}
					{(!isSmallScreen || !selectedUser) && ( // Always show sidebar on large screens or when no user is selected
						<div className="md:w-[25%] w-[100%]">
							<Sidebar
								users={usersData}
								onUserSelect={handleUserSelect}
								selectedUserId={selectedUser?.name}
							/>
						</div>
					)}

					{/* User Info */}
					<div className="md:w-[75%] w-[100%] ">
						{selectedUser && (
							<Content
								userInfo={selectedUser}
								showContent={handleShowSidebar} // Pass the function to show the sidebar
								isSmallScreen={isSmallScreen} // Pass the screen size state
							/>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
