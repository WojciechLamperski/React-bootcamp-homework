import styled from "styled-components";

export const StyledFooter = styled.footer`

    background: ${ props => props.darkMode == true ? ({ theme }) => theme.colorsDark.headerFooterBackground : ({ theme }) => theme.colorsLight.headerFooterBackground}};
    color: ${ props => props.darkMode == true ? ({ theme }) => theme.colorsDark.text : ({ theme }) => theme.colorsLight.text}};;
    padding: 5px;
  
`