import React from "react";
import "../CSS/modal.css";

const Modal = ({ onClose, data }) => {
	if (!data) return null;

	return (
		<div className="modal_overlay">
			<div className="modal_content">
				<button className="modal_close" onClick={onClose}>
					&times;
				</button>
				<h2>Details</h2>
				<p>
					<strong>Value:</strong> {data.value} {data.unit}
				</p>
				<p>
					<strong>Status:</strong> {data.levels || "N/A"}
				</p>
			</div>
		</div>
	);
};

export default Modal;
