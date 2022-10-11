import { StyledHeader } from "./styles/Header.styled";

export const Header = ({ text, logosrc, darkMode }) =>{
    return(
        <StyledHeader logosrc={ logosrc } darkMode={ darkMode }>
            <a href="#">{ text }</a>
            <img src={ logosrc } alt="logo" />
        </StyledHeader>
    );
}