import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/TestLogo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdCard } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import practitioner_image from "../assets/images/senior-woman-doctor.jpg";
import "../CSS/header.css";

const Header = () => {
	const [activeLink, setActiveLink] = useState("Patients");
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="header_container">
			<div className="header_sec_container">
				<div className="image_logo">
					<img src={logo} alt="" className="img_logo" />
				</div>

				<div className={`header-links-button ${isOpen ? "active-menu" : ""}`}>
					<div className="header_links">
						<ul className="header_ul">
							<li
								className={activeLink === "Overview" ? "active" : ""}
								onClick={() => {
									setActiveLink("Overview");
									setIsOpen(!isOpen);
								}}
							>
								<GoHome className="text-xl" />
								<Link to="/">Overview</Link>
							</li>
							<li
								className={activeLink === "Patients" ? "active" : ""}
								onClick={() => {
									setActiveLink("Patients");
									setIsOpen(!isOpen);
								}}
							>
								<MdOutlinePeopleOutline className="text-xl" />

								<Link to="/patients">Patients</Link>
							</li>
							<li
								className={activeLink === "Shedule" ? "active" : ""}
								onClick={() => {
									setActiveLink("Shedule");
									setIsOpen(!isOpen);
								}}
							>
								<MdOutlineDateRange className="text-xl" />
								<Link to="/shedules">Shedule</Link>
							</li>
							<li
								className={activeLink === "Message" ? "active" : ""}
								onClick={() => {
									setActiveLink("Message");
									setIsOpen(!isOpen);
								}}
							>
								<FaRegMessage className="text-[15px]" />
								<Link to="/messages">Message</Link>
							</li>
							<li
								className={activeLink === "Transactions" ? "active" : ""}
								onClick={() => {
									setActiveLink("Transactions");
									setIsOpen(!isOpen);
								}}
							>
								<IoMdCard className="text-xl" />
								<Link to="/transactions">Transactions</Link>
							</li>
						</ul>
					</div>

					<div className="header_button">
						<div className="general_images">
							<img src={practitioner_image} alt="" />
							<div className="text_practitioner">
								<h2>Dr. Jose Simmons</h2>
								<p>General Practitioner</p>
							</div>
						</div>
						<button className="header_btn">
							<IoSettingsOutline />
						</button>
						<button className="header_btn">
							<SlOptionsVertical />
						</button>
					</div>
				</div>

				<div className="hamburger" onClick={toggleMenu}>
					{isOpen ? (
						<FaTimes className="closeFaTimes" />
					) : (
						<FaBars className="openFaBars" />
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
