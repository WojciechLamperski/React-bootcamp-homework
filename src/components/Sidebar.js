import { StyledSidebar } from "./styles/Sidebar.styled";

export const Sidebar = ({ text, onClick }) =>{
    return(
        <StyledSidebar onClick={onClick}>
            { text }
            <button onClick={onClick}>Change dark/light mode</button>
        </StyledSidebar>
    );
}