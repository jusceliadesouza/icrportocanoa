import { MagnifyingGlass } from "phosphor-react";

import Logo from "../../assets/logo/logo.png";

export default function NavBar() {
  return (
    <nav>
      <div className="navbar container">
        <img src={Logo} alt="" width={"95rem"} />

        <div className="navbar-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Departamentos</a></li>
            <li><a href="#testemunhos">Testemunhos</a></li>
            <li><a href="#">Eventos</a></li>
            <li><a href="#footer">Contato</a></li>
          </ul>
        </div>

        <form className="navbar-form">
          <input
            type="search"
            name="search"
            id="search"
            className="bg-transparent placeholder:text-emerald-700 outline-none "
            placeholder="Pesquisar..."
          />

          <button type="submit">
            <MagnifyingGlass size={24} color={"#006b5d"} />
          </button>
        </form>
      </div>
    </nav>
  );
}
