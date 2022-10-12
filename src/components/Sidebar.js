import { StyledSidebar } from "./styles/Sidebar.styled";

export const Sidebar = ({ text, buttonOnClick, search }) =>{
    return(
        <StyledSidebar buttonOnClick ={ buttonOnClick } inputOnChange = { search }>
            { text }
            <button onClick = { buttonOnClick } >Change dark/light mode</button>
            <input type="text" placeholder='search' onClick={ search }></input>
        </StyledSidebar>
    );
}