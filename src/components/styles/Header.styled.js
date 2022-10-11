import styled from "styled-components";

export const StyledHeader = styled.header`

    position: relative;
    display: flex;
    justify-content: flex-end;
    text-align: center;
    background: ${ props => props.darkMode == true ? ({ theme }) => theme.colorsDark.headerFooterBackground : ({ theme }) => theme.colorsLight.headerFooterBackground}};
    color: ${ props => props.darkMode == true ? ({ theme }) => theme.colorsDark.text : ({ theme }) => theme.colorsLight.text}};
    text-transform: uppercase;
  
  a {
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${ props => props.darkMode == true ? ({ theme }) => theme.colorsDark.text : ({ theme }) => theme.colorsLight.text}};
  }
  
  img {
    max-width: 60px;
    max-height: 60px;
  }
`