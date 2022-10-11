import styled from "styled-components";

export const StyledSidebar = styled.nav`
    min-width: 66%;
    color: ${({ theme }) => theme.colorsDark.textMain}; 
    background: ${({ theme }) => theme.colorsDark.navBackground};
`