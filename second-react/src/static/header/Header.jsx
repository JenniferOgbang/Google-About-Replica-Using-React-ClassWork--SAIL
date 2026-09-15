import "./Header.css";
import GoogleLogo from "../../assets/GoogleLogo.webp";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerContainer">

        <section className="logo">
            <img src= {GoogleLogo} />
        </section>
    
        <section className="navigation">
            <Link to="/">
                <div className="abouthighlited">
                    <nav>About</nav>
                    <div className="underline"> </div>
                </div>
            </Link>

            <Link to="/Product">
                <nav>Product</nav>
            </Link>

            <Link to="/product">
                <nav>Company Info</nav>
            </Link>

            <Link to="/product">
                <nav>News</nav>
            </Link>
        </section>

    </div>
  );
};

export default Header;