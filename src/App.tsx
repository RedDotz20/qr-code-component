import qrcode from "./assets/image-qr-code.png";
import "./styles/App.css";

function App() {
	return (
		<div className="qr-wrapper">
			<div className="qr-container">
				<img src={qrcode} alt="qrcode" />
				<h3>Improve your front-end skills by building projects</h3>
				<p>
					Scan the QR code to visit Frontend Mentor and take your coding skills
					to the next level
				</p>
			</div>
		</div>
	);
}

export default App;
