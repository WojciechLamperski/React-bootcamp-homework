import styled from "styled-components";

export const StyledContent = styled.main`

    background: ${ ({ theme }) => theme.mainBackground };
    min-width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0!important;

  .users{
    min-width: 100%;
    margin: 0;
    color: ${ ({ theme }) => theme.text };
  }
  
  .user{
    padding: 5px;
    margin: 0;
  }
  
  .users h1{
    padding: 0;
    margin: 0;
    background-color: ${ ({ theme }) => theme.h1Background };
    margin-bottom: 10px;
  }
`