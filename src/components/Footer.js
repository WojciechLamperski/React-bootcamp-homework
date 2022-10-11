import { StyledFooter } from "./styles/Footer.styled";

export const Footer = ({ text, darkMode }) =>{
    return(
        <StyledFooter darkMode = { darkMode } >
            { text }
        </StyledFooter>
    );
}