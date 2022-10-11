import { StyledSidebar } from "./styles/Sidebar.styled";

export const Sidebar = ({ text }) =>{
    return(
        <StyledSidebar>
            { text }
            <buttton></buttton>
        </StyledSidebar>
    );
}