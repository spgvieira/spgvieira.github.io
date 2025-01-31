import styled from "styled-components";
import { darkTheme } from "../../themes";

const SectionStyled = styled("section")`
	background-color: ${darkTheme.colors.greyDark};

	@media only screen and (max-width: ${darkTheme.breakpoint.md}) {
		height: 600px;
	}
	@media only screen and (max-width: ${darkTheme.breakpoint.sm}) {
		height: 500px;
	}
	h1,
	h2 {
		text-transform: uppercase;
		color: white;
		font-family: ${darkTheme.fontFamily.main};
		font-weight: 400;
		text-align: center;
		margin: 0;
	}
`;

const Wrapper = styled("div")`
	margin: auto;
	height: 100%;
	max-height: 750px;
	max-width: 1920px;
	position: relative;
	display: flex;
	justify-content: flex-end;
	flex-direction: column;

	@media only screen and (min-width: ${darkTheme.breakpoint.lg}) {
		padding: 50px 0 0;
	}
`;

export default function Landing() {
	return (
        <SectionStyled>
            <Wrapper></Wrapper>
        </SectionStyled>
	);
}