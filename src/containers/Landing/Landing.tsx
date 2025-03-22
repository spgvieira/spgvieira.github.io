import bannerImg from "../../images/banner.png"
import dudeImg from "../../images/dude.png"
import mapImg from "../../images/map.png"
import alfaceImg from "../../images/AlmeidaGarret.png"
import UnderConstruction from "../UnderConstruction/UnderConstruction"
import { Button } from "@material-ui/core"
import "../../fonts/Aloja-Extended.woff"
import "../../fonts/Lovelo-Black.otf"

function Landing() {
	const style = {
        color: '#FFFBF0',
		fontSize: '2em',
		padding: '0.5% 1%',
    } as const
	const bannerStyle = {
		width: '100%',
	}
	const dudeStyle = {
		float: 'right',
		width: '18%',
	} as const
	const mapStyle = {
		backgroundColor: '#FFFBF0',
		color: '#2D4160',
		fontSize: '0.5em',
		borderRadius: '10px',
		padding: '3%',
	}
	return (
        <div style={style}>
			<div>
				<img src={bannerImg} style={bannerStyle}/>
				<h1 style={{fontFamily: "Aloja"}}> Welcome to Sara’s Hyggelig Internet Corner </h1>
			</div>
			<div style = {{display:'grid',gridTemplateColumns: '1fr 1fr', columnGap: '4%'}}>
				<div style={mapStyle}>
					<h1 style={{fontFamily: "Lovelo"}}>Let me give you a bit of a tour</h1>
					<h2 style={{fontFamily: "DM Sans"}}>Born and raised in Lisbon, Portugal I have been a bit around</h2>
					<div style = {{position: 'relative', display: 'flex'}}>
						<span>
							<Button>Education</Button>
							<Button>Work Experience</Button>
							<Button>Tech Enthusiast</Button>
							<Button>Fox's Life</Button>
						</span>
						<img src={mapImg} />
					</div>
				</div>
				<div style={{...mapStyle}}>
					<h1 style={{fontFamily: "Lovelo"}}>Fun Fact</h1>
					<p style={{fontFamily: "DM Sans"}}>People from Lisbon are known as little lettuces or in Portuguese “alfacinhas”. 
						Why the term? Was it due to the Arabs who filled the 7 hills of the city with 
						lettuce plantations at some point in history? Is it because people of Lisbon like
						it so much they stick to Lisbon the same way lettuces root themselves to the earth? 
						I’m definitely guilty of the last one. Walking in Lisbon without a map and never getting lost 
						is definitely one of my favorite activities. 
					</p>
					<img src={alfaceImg} style={{float: 'right'}}/>
				</div>
			</div>
			<UnderConstruction/>
		</div>
	);
}

export default Landing;