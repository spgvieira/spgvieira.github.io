import { FC,memo } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import DescriptionIcon from '@material-ui/icons/Description';
import SocialMediaButton from "../../components/SocialMediaButton/SocialMediaButton";
import logoImg from "../../images/logo.png"
import cvPDF from "../../assets/CV_SARA_VIEIRA.pdf"

const Header: FC = memo(() => {
    const style = {
        backgroundColor: '#FFFBF0',
        color: '#2D4160',
        margin: '0.5%',
        padding: '1%',
        font: '',
        borderRadius: '10px',
        position: 'relative',
	    display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    } as const
    const leftCorner = {
        display: 'flex',
	    flexDirection: 'row',
        alignItems: 'center',
    } as const
    const rightCorner = {
	    position: 'relative',
	    display: 'flex',
        right: 0,
    } as const
    return (
        <div style={style}>
            <div style={leftCorner}>
                <img src={logoImg}/>
            </div>
            <div style={rightCorner}>
            <SocialMediaButton
							href={cvPDF}
							icon = {DescriptionIcon}
							label="CV"
						/>
                <SocialMediaButton
							href="https://github.com/spgvieira"
							icon = {GitHubIcon}
							label="Github"
						/>
                <SocialMediaButton
							href="https://www.linkedin.com/in/sarapvieira/"
							icon = {LinkedInIcon}
							label="LinkedIn"
						/>
            </div>
        </div>
    )
});

export default Header;
