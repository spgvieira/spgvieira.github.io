
import bannerImg from "../../images/banner.png"
import dudeImg from "../../images/dude.png"
import UnderConstruction from "../UnderConstruction/UnderConstruction"
function Landing() {
	const style = {
        color: '#FFFBF0',
		fontSize: '2em',
		padding: '0.5% 1%',
		fontFamily: 'sans-serif',
    } as const
	const bannerStyle = {
		width: '100%',
	}
	const dudeStyle = {
		float: 'right',
		width: '18%',
	} as const
	return (
        <div style={style}>
			<img src={bannerImg} style={bannerStyle}/>
			<h1>Welcome to Sara’s Hyggelig Internet Corner 
			<img src={dudeImg} style={dudeStyle}/>
			</h1>
			<UnderConstruction/>
		</div>
	);
}

export default Landing;