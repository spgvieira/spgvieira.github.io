import { FC, memo } from "react";
import './UnderConstruction.css'
import underConstructionImg from '../../images/UnderConstruction.png'

const UnderConstruction: FC = memo(() => {
	const myStyle = {
        backgroundColor: '#FFFBF0',
        color: '#2D4160',
		textAlign: 'center',
		fontSize: '400%',
		fontFamily: 'sans-serif',
		position: 'fixed',
		width: '100%',
		height: '100%',
    } as const
	const imgStyle = {
		margin: "5%",
		marginBottom: "5%",
		marginLeft: "0",
		width: "100%"
	}
	return (
        <div style={myStyle}>
			<img src={underConstructionImg} style={imgStyle}/>
			<header> MUCH LIKE ME, THIS WEBSITE IS A WORK IN PROGRESS </header>
			<body> IMPROVING STEP BY STEP </body>
			<img src={underConstructionImg} style={imgStyle}/>
		</div>
	);
});

export default UnderConstruction;