import React from "react";
import "../CSS/labLists.css";
import { FiDownload } from "react-icons/fi";

const LabResults = ({ labResults_userInfo }) => {
	return (
		<div className="lab-results-container">
			<h3 className="lab-results-title">Lab Results</h3>
			<div className="lab-results-list">
				{labResults_userInfo?.lab_results?.map((test, index) => (
					<div key={index} className="lab-result-item">
						<span>{test}</span>
						<FiDownload className="download-icon" />
					</div>
				))}
			</div>
		</div>
	);
};

export default LabResults;
