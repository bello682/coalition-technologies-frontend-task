import React, { useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { BsGenderFemale } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLocalPolice } from "react-icons/md";
import "../CSS/profileCard.css";

const ProfileCard = ({ profileInfoData }) => {
	const [showMore, setShowMore] = useState(false);

	const toggleShowMore = () => {
		setShowMore(!showMore);
	};

	return (
		<div className="profile-card">
			<div className="profile-header">
				<img
					src={profileInfoData.profile_picture}
					alt="Profile"
					className="profile-image"
				/>
				<h2 className="profile-name">{profileInfoData.name}</h2>
			</div>

			<div className="profile-info">
				<div className="info-item">
					<span className="icon">
						<MdOutlineDateRange />
					</span>
					<span>
						<strong>Date Of Birth:</strong> <br />
						{profileInfoData.date_of_birth}
					</span>
				</div>

				<div className="info-item">
					<span className="icon">
						<BsGenderFemale />
					</span>
					<span>
						<strong>Gender:</strong> <br /> {profileInfoData.gender}
					</span>
				</div>
				<div className="info-item">
					<span className="icon">
						<FiPhone />
					</span>
					<span>
						<strong>Contact Info:</strong> <br />
						{profileInfoData.phone_number}
					</span>
				</div>
				<div className="info-item">
					<span className="icon">
						<FiPhone />
					</span>
					<span>
						<strong>Emergency Contacts:</strong> <br />
						{profileInfoData.emergency_contact}
					</span>
				</div>
				<div className="info-item">
					<span className="icon">
						<MdOutlineLocalPolice />
					</span>
					<span>
						<strong>Insurance Provider:</strong> <br />
						{profileInfoData.insurance_type}
					</span>
				</div>

				{showMore && (
					<>
						<div className="info-item">
							<span className="icon">
								<BsGenderFemale />
							</span>
							<span>
								<strong>Gender:</strong> <br /> {profileInfoData.gender}
							</span>
						</div>
						<div className="info-item">
							<span className="icon">
								<FiPhone />
							</span>
							<span>
								<strong>Contact Info:</strong> <br />
								{profileInfoData.phone_number}
							</span>
						</div>
						<div className="info-item">
							<span className="icon">
								<FiPhone />
							</span>
							<span>
								<strong>Emergency Contacts:</strong> <br />
								{profileInfoData.emergency_contact}
							</span>
						</div>
						<div className="info-item">
							<span className="icon">
								<MdOutlineLocalPolice />
							</span>
							<span>
								<strong>Insurance Provider:</strong> <br />
								{profileInfoData.insurance_type}
							</span>
						</div>
					</>
				)}
			</div>

			<button className="show-more-button" onClick={toggleShowMore}>
				{showMore ? "Show Less" : "Show All Information"}
			</button>
		</div>
	);
};

export default ProfileCard;
