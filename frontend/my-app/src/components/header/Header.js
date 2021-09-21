import './header.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <img src="http://localhost:4000/img/logo" alt="logo"/>
                <nav>
                    <a className="button" href="#">Inicio</a>
                    <a className="button" href="#">Contato</a>
                    <a className="button" href="#">Sobre</a>
                </nav>
            </div>
        </header>);
}

export default Header;