import { StyledSidebar } from "./styles/Sidebar.styled";

export const Sidebar = ({ text, onClick, darkMode }) =>{
    return(
        <StyledSidebar onClick={onClick} darkMode={ darkMode }>
            { text }
            <button onClick={onClick}>Change dark/light mode</button>
        </StyledSidebar>
    );
}