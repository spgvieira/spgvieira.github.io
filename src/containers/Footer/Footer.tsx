import { FC,memo } from "react";

const Footer: FC = memo(() => {
    const style = {
        color: '#FFFBF0',
        padding: '0.5% 1%',
		fontFamily: 'sans-serif',
    } as const
    return (
        <div style={style}>
            <h1>Let's get in Touch</h1>
            <ul style={{listStyleType: 'none'}}>
                <li>e-mail: spgva@Proton.me </li>
                <li>Linkedin: https://www.linkedin.com/in/sarapvieira/ </li>
                <li>GitHub: https://github.com/spgvieira</li>
            </ul>
        </div>
    )
});

export default Footer;