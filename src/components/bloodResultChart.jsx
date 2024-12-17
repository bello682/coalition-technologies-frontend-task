import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from "recharts";
import "../CSS/BloodPressureChart.css";

const BloodPressureChart = ({ bloodPressureData_info }) => {
	const data = [
		{ month: "Oct, 2023", Systolic: 120, Diastolic: 90 },
		{ month: "Nov, 2023", Systolic: 130, Diastolic: 80 },
		{ month: "Dec, 2023", Systolic: 160, Diastolic: 110 },
		{ month: "Jan, 2024", Systolic: 120, Diastolic: 85 },
		{ month: "Feb, 2024", Systolic: 140, Diastolic: 70 },
		{ month: "Mar, 2024", Systolic: 160, Diastolic: 78 },
	];

	return (
		<div className="chart-container">
			<h3 className="chart-title">Blood Pressure</h3>
			<p className="chart-subtitle">Last 6 months</p>

			<div className="bloodPressureChart_wrapper">
				<ResponsiveContainer width="100%" height={350}>
					<LineChart
						data={data}
						margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="month" />
						<YAxis />
						<Tooltip />
						<Legend />

						<Line
							type="monotone"
							dataKey="Systolic"
							stroke="#e74c9e"
							strokeWidth={3}
							dot={{ fill: "#e74c9e", r: 5 }}
						/>
						<Line
							type="monotone"
							dataKey="Diastolic"
							stroke="#7b5ff0"
							strokeWidth={3}
							dot={{ fill: "#7b5ff0", r: 5 }}
						/>
					</LineChart>
				</ResponsiveContainer>

				{bloodPressureData_info?.diagnosis_history
					.slice(0, 1)
					.map((pre, index) => {
						return (
							<div className="chart-legend" key={index}>
								<div className="w-[140px]  mb-7">
									<span
										className="legend-dot"
										style={{ backgroundColor: "#e74c9e" }}
									></span>
									<span className="legend-text">
										<strong>Systolic</strong>
									</span>
									<h1 className="text-3xl font-bold">
										{pre?.blood_pressure?.diastolic?.value}
									</h1>
									<p className="max-w-full">
										-{pre?.blood_pressure?.diastolic?.levels}{" "}
									</p>
								</div>
								<div className="w-[140px]">
									<span
										className="legend-dot"
										style={{ backgroundColor: "#7b5ff0" }}
									></span>
									<span className="legend-text">
										<strong>Diastolic</strong>
									</span>
									<h1 className="text-3xl font-bold">
										{pre?.blood_pressure?.systolic?.value}
									</h1>
									<p className="max-w-full">
										-{pre?.blood_pressure?.systolic?.levels}
									</p>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default BloodPressureChart;
