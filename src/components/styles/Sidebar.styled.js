import styled from "styled-components";

export const StyledSidebar = styled.nav`
    min-width: 66%;
    color: ${ ({ theme }) => theme.textMain };
    background: ${ ({ theme }) => theme.navBackground }
`