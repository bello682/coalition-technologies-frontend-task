import React from "react";
import "../CSS/healthCard.css";

export default function HealthCard({
	icon,
	title,
	value,
	unit,
	status,
	custom_styling,
}) {
	return (
		<div className={`health-card ${custom_styling}`}>
			<div className="icon-container">
				<img src={icon} alt={title} className="health-icon" />
			</div>
			<div className="health-info">
				<p className="health-title">{title}</p>
				<p className="health-value">
					{value} <span className="health-unit">{unit}</span>
				</p>
				<p className="health-status">{status}</p>
			</div>
		</div>
	);
}
