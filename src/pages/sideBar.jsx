import React, { useState } from "react";
import "../CSS/sideBar.css";
import { IoSearch } from "react-icons/io5";

const Sidebar = ({ users, onUserSelect, selectedUserId }) => {
	const [searchInput, setSearchInput] = useState("");
	const [openSearchInput, setOpenSearchInput] = useState(false);

	const toggleSearchInput = () => {
		setOpenSearchInput((prevState) => !prevState);
	};

	const filterInput = (query) => {
		return users.filter((user) =>
			Object.values(user).join(" ").toLowerCase().includes(query.toLowerCase())
		);
	};

	const handleSearchChange = (e) => {
		setSearchInput(e.target.value);
	};

	return (
		<aside className="sidebar">
			<div className="sidebarWrapper">
				<div className="search_patients">
					<h2>Patients</h2>
					<IoSearch className="search_icon" onClick={toggleSearchInput} />
				</div>
				{openSearchInput && (
					<input
						type="text"
						placeholder="Search for patients..."
						onChange={handleSearchChange}
						className={`search_input ${openSearchInput ? "open" : ""}`}
						value={searchInput}
					/>
				)}
				<ul>
					{filterInput(searchInput)?.map((user, index) => (
						<li
							key={index}
							className={`user-item ${
								selectedUserId === user.name ? "active" : ""
							}`}
							onClick={() => onUserSelect(user)}
						>
							<img
								src={user.profile_picture}
								alt={user.name}
								className="w-[50px]"
							/>

							<div className="checkmark">
								{user.name} <br />
								<span>
									({user.gender}, {user.age})
								</span>
							</div>
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
