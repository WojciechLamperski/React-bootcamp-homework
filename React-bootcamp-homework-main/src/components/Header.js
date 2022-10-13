import { StyledHeader } from "./styles/Header.styled";

export const Header = ({ text, logosrc }) =>{
    return(
        <StyledHeader logosrc={ logosrc }>
            <a href="#">{ text }</a>
            <img src={ logosrc } alt="logo" />
        </StyledHeader>
    );
}