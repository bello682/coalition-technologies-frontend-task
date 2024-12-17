import React from "react";
import "../CSS/diagnosisList.css";
import HealthCard from "./card";
import temparature_rateImage from "../assets/images/temperature@2x.jpg";
import heart_rateImage from "../assets/images/HeartBPM@2x.jpg";
import respiratory_rateImage from "../assets/images/respiratory rate.jpg";

const DiagnosisHistoryWealther = ({ diagnosisHistoryWeather_userInfo }) => {
	return (
		<div className="diagnostic-container">
			<div className="flex gap-6 m-auto justify-center items-center">
				{/* Respiratory Rate */}
				{diagnosisHistoryWeather_userInfo.diagnosis_history
					.slice(0, 1)
					.map((history, index) => (
						<li key={index} className="list-none">
							<HealthCard
								icon={respiratory_rateImage}
								title="Respiratory Rate"
								value={history?.respiratory_rate?.value}
								unit="bpm"
								status={history?.respiratory_rate?.levels}
							/>
						</li>
					))}
				{/* Temperature */}
				{diagnosisHistoryWeather_userInfo.diagnosis_history
					.slice(0, 1)
					.map((history, index) => (
						<li key={index} className="list-none">
							<HealthCard
								custom_styling="temparature_background"
								icon={temparature_rateImage}
								title="Temperature"
								value={history?.temperature?.value}
								unit="°C"
								status={history?.temperature?.levels}
							/>
						</li>
					))}
				{/* Heart Rate */}
				{diagnosisHistoryWeather_userInfo.diagnosis_history
					.slice(0, 1)
					.map((history, index) => (
						<li key={index} className="list-none">
							<HealthCard
								custom_styling="heart_background"
								icon={heart_rateImage}
								title="Heart Rate"
								value={history?.heart_rate?.value}
								unit="bpm"
								status={history?.heart_rate?.levels}
							/>
						</li>
					))}
			</div>
		</div>
	);
};

export default DiagnosisHistoryWealther;
