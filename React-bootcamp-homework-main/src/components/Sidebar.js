import { StyledSidebar } from "./styles/Sidebar.styled";

export const Sidebar = ({ text, buttonOnClick, search }) =>{
    
    const searchName = document.querySelector('input');
    function search() {
        console.log(searchName)
    } 

    return(
        <StyledSidebar buttonOnClick ={ buttonOnClick } inputOnChange = { search }>
            { text }
            <button onClick = { buttonOnClick } >Change dark/light mode</button>
            <input type="text" placeholder='search' onChange = { search }></input>
        </StyledSidebar>
    );
}