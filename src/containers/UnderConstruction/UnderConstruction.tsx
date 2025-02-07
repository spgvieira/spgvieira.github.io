import { FC, memo } from "react";
import underConstructionImg from '../../images/UnderConstruction.png'

const UnderConstruction: FC = memo(() => {
	const myStyle = {
		position: "relative",
		width: '100%',
		overflow: 'hidden',
		borderRadius: '10px',
		display: "flex",
        alignItems: "center",
        justifyContent: "center",
    } as const
	const text = {
		position: 'relative',
		fontFamily: 'sans-serif',
		color: '#FFFBF0',
		textAlign: 'center',
		padding: '20% 15% 15% 15%',
	} as const
	const imageStyle = {
        position: "absolute",
        width: "55%", // Adjust as needed to fit inside the div
		transform: "rotate(-35deg)",
    } as const;
	return (
        <div style={myStyle}>
			<img src={underConstructionImg} style={{ ...imageStyle, top: "25%", left: "-5%"}} />
			<img src={underConstructionImg} style={{ ...imageStyle, bottom: "25%", right: "-5%"}}/>
			<div style={text}>
				<h1> MUCH LIKE ME, THIS WEBSITE IS A WORK IN PROGRESS </h1>
				<p> IMPROVING STEP BY STEP </p>
			</div>
		</div>
	);
});

export default UnderConstruction;