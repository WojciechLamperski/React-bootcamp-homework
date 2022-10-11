import { StyledSidebar } from "./styles/Sidebar.styled";

export const Sidebar = ({ text, buttonOnClick, darkMode }) =>{
    return(
        <StyledSidebar buttonOnClick ={ buttonOnClick } darkMode={ darkMode }>
            { text }
            <button onClick = { buttonOnClick } >Change dark/light mode</button>
        </StyledSidebar>
    );
}