
export const Header = ({ text, logosrc }) =>{
    return(
        <header logosrc={ logosrc }>
            <a href="#">{ text }</a>
            <img src={ logosrc } alt="logo" />
        </header>
    );
}