
export const Header = ({ title, logosrc }) =>{
    return(
        <header logosrc={ logosrc }>
            <a href="#">{ title }</a>
            <img src={ logosrc } alt="logo" />
        </header>
    );
}