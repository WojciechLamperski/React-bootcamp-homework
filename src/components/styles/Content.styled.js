import styled from "styled-components";

export const StyledContent = styled.main`

    background: ${ props => props.darkMode == true ? ({ theme }) => theme.colorsDark.mainBackground : ({ theme }) => theme.colorsLight.mainBackground}};
    min-width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0!important;

  .users{
    min-width: 100%;
    margin: 0;
    color: ${ props => props.darkMode == true ? ({ theme }) => theme.colorsDark.text : ({ theme }) => theme.colorsLight.text}};
  }
  
  .user{
    padding: 5px;
    margin: 0;
  }
  
  .users h1{
    padding: 0;
    margin: 0;
    background-color: ${ props => props.darkMode == true ? ({ theme }) => theme.colorsDark.h1Background : ({ theme }) => theme.colorsLight.h1Background}};
    margin-bottom: 10px;
  }
`