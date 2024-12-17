import React from "react";
import "../CSS/diagnosisList.css";

const DiagnosisList = ({ diagnosisList_userInfo }) => {
	return (
		<div className="diagnostic-container">
			<h2 className="diagnostic-title">Diagnostic List</h2>
			<div className="table-container">
				<table className="diagnostic-table">
					<thead>
						<tr>
							<th>Problem/Diagnosis</th>
							<th>Description</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{diagnosisList_userInfo?.diagnostic_list?.map((item, index) => (
							<tr key={index}>
								<td>{item.name}</td>
								<td>{item.description}</td>
								<td>{item.status}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default DiagnosisList;
