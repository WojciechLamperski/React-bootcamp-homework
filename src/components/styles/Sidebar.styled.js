import styled from "styled-components";

export const StyledSidebar = styled.nav`
    min-width: 66%;
    color: ${ props => props.darkMode == true ? ({ theme }) => theme.colorsDark.textMain : ({ theme }) => theme.colorsLight.textMain}};
    background: ${ props => props.darkMode == true ? ({ theme }) => theme.colorsDark.navBackground : ({ theme }) => theme.colorsLight.navBackground}};
`