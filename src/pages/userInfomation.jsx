// import React from "react";
// import "../CSS/userInformation.css";
// import DiagnosisList from "../components/diagnosisList";
// import DiagnosisHistoryWealther from "../components/diagnosisHistoryWealther";
// import ProfileCard from "../components/profileCard";
// import LabResults from "../components/labList";
// import BloodPressureChart from "./../components/bloodResultChart";
// import { FaArrowAltCircleLeft } from "react-icons/fa";

// const Content = ({ userInfo, showContent }) => {
// 	return (
// 		<>
// 			<div className="content_container">
// 				<div className="content_container_wrapper">
// 					<FaArrowAltCircleLeft onClick={showContent} />

// 					<div className="diagnosisHistory_diagnosiList">
// 						<h1 className="text-2xl font-extrabold mb-[2rem]">
// 							Diagnosis History
// 						</h1>
// 						<div>
// 							<BloodPressureChart bloodPressureData_info={userInfo} />
// 						</div>
// 						<DiagnosisHistoryWealther
// 							diagnosisHistoryWeather_userInfo={userInfo}
// 						/>

// 						<DiagnosisList diagnosisList_userInfo={userInfo} />
// 					</div>
// 					<div className="profile_labResult">
// 						<ProfileCard profileInfoData={userInfo} />
// 						<LabResults labResults_userInfo={userInfo} />
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default Content;

import React from "react";
import "../CSS/userInformation.css";
import DiagnosisList from "../components/diagnosisList";
import DiagnosisHistoryWealther from "../components/diagnosisHistoryWealther";
import ProfileCard from "../components/profileCard";
import LabResults from "../components/labList";
import BloodPressureChart from "./../components/bloodResultChart";
import { FaArrowLeft } from "react-icons/fa";

const Content = ({ userInfo, showContent, isSmallScreen }) => {
	console.log("isSmallScreen in Content:", isSmallScreen); // Debugging log
	return (
		<>
			<div className="content_container">
				<div className="content_container_wrapper">
					{isSmallScreen && ( // Show arrow only on small screens
						<FaArrowLeft
							onClick={showContent} // Call the function to show the sidebar
							className="cursor-pointer"
						/>
					)}

					<div className="diagnosisHistory_diagnosiList ">
						<h1 className="text-2xl font-extrabold pt-[2rem] mb-[2rem]">
							Diagnosis History
						</h1>
						<div>
							<BloodPressureChart bloodPressureData_info={userInfo} />
						</div>
						<DiagnosisHistoryWealther
							diagnosisHistoryWeather_userInfo={userInfo}
						/>

						<DiagnosisList diagnosisList_userInfo={userInfo} />
					</div>
					<div className="profile_labResult">
						<ProfileCard profileInfoData={userInfo} />
						<LabResults labResults_userInfo={userInfo} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Content;
