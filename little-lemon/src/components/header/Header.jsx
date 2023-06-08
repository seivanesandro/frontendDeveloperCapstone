import Nav from "./nav/Nav"
import { Link } from "react-router-dom"
export default function Header() {

    return (
        <header>
            <Nav />
            <Link to="/">
                <img
                    src="/images/logo.png"
                    alt="little lemon"
                />
            </Link>
        </header>
    );
  }
  

  