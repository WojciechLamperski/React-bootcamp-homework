import styled from "styled-components";

export const StyledHeader = styled.header`

    position: relative;
    display: flex;
    justify-content: flex-end;
    text-align: center;
    background: ${ ({ theme }) => theme.headerFooterBackground };
    color: ${ ({ theme }) => theme.text };
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
    color: ${ ({ theme }) => theme.text };
  }
  
  img {
    max-width: 60px;
    max-height: 60px;
  }
`