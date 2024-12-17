import React from "react";
import "../CSS/userInformation.css";
import DiagnosisList from "../components/diagnosisList";
import DiagnosisHistoryWealther from "../components/diagnosisHistoryWealther";
import ProfileCard from "../components/profileCard";
import LabResults from "../components/labList";
import BloodPressureChart from "./../components/bloodResultChart";

const Content = ({ userInfo }) => {
	return (
		<div className="content_container">
			<div className="content_container_wrapper">
				<div className="diagnosisHistory_diagnosiList">
					<h1 className="text-2xl font-extrabold mb-[2rem]">
						Diagnosis History
					</h1>
					<div>
						<div>{/* chart */}</div>
						<div>{/* total amount of chart */}</div>
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
	);
};

export default Content;
