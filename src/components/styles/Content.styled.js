import styled from "styled-components";

export const StyledContent = styled.main`

    background: ${({ theme }) => theme.colorsDark.mainBackground};
    min-width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

  .users{
    min-width: 100%;
    color: ${({ theme }) => theme.colorsDark.text};
  }
  
  .user{
    padding: 5px;
  }
  
  .users h1{
    padding: 0;
    margin: 0;
    background-color: ${({ theme }) => theme.colorsDark.h1Background};
    margin-bottom: 10px;
  }
`