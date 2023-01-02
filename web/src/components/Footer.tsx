import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

import logo from "../assets/logo/logo-white.png";

export function Footer({ ...props }) {
  return (
    <footer className="footer" {...props}>
      <div className="footer container">
        <div className="flex flex-col gap-5 items-center text-white">
          <img src={logo} alt="logo branca ICR" width="50%" />

          <div className="flex flex-col items-center text-sm">
            <p>Av. Distrito Federal, 27, Planície da Serra</p>
            <p>Serra, ES - 29168-707</p>
          </div>
        </div>

        <div className="flex flex-col gap-10 text-center text-white">
          <div className="flex flex-col gap-5">
            <h5>Links Úteis</h5>

            <nav className="flex flex-col uppercase text-sm">
              <a
                href="https://igrejacristareformada.org.br/igreja/"
                target="_blank"
                className="p-2 "
              >
                Encontre uma igreja
              </a>

              <a
                href="https://drive.google.com/file/d/1L8RM0prHMH5R23MrtrV9mxZzQAS3Q3kk/view"
                target="_blank"
                className="p-2  "
              >
                Estatuto da igreja
              </a>

              <Link to="/confissao-de-fe" className="p-2  ">
                Confissão de Fé
              </Link>

              <a
                href="https://igrejacristareformada.org.br/tesouraria/login"
                target="_blank"
                className="p-2  "
              >
                Tesouraria
              </a>

              <a href="/#" className="p-2  ">
                Localização
              </a>

              {/* <a href=""
                className="p-2  "
              >
                Faça uma doação
              </a> */}

              <a
                href="https://igrejacristareformada.org.br/ensino/"
                target="_blank"
                className="p-2  "
              >
                Portal de Ensino
              </a>
            </nav>
          </div>

          <div className="flex flex-col items-center gap-5">
            <h5>Siga-nos</h5>

            <div className="flex gap-3 items-center">
              <a
                href="http://fb.com/icrportocanoa"
                className=" hover:rounded-full p-2"
              >
                <FaFacebook size={24} />
              </a>

              <a
                href="http://instagram.com/icrportocanoa"
                className=" hover:rounded-full p-2"
              >
                <AiFillInstagram size={30} />
              </a>
              <a
                href="http://youtube.com/@icrportocanoa"
                className=" hover:rounded-full p-2"
              >
                <FaYoutube size={32} />
              </a>
              <a
                href="mailto:icrportocanoa@igrejacristareformada.org.br"
                className=" hover:rounded-full p-2"
              >
                <HiMail size={34} />
              </a>
            </div>
          </div>
        </div>

        <form className="footer-form">
          <h5 className="text-white text-center mb-5">Fale com o pastor</h5>

          <input
            type="text"
            name="name"
            id="name"
            className="footer-form-input"
            placeholder="Nome"
          />

          <input
            type="email"
            name="email"
            id="email"
            className="footer-form-input"
            placeholder="E-mail"
          />

          <input
            type="phone"
            name="phone"
            id="phone"
            className="footer-form-input"
            placeholder="Telefone"
          />

          <textarea
            className="footer-form-textarea"
            placeholder="Digite sua mensagem"
          />

          <div className="flex gap-4 mt-5">
            <button type="reset" className="footer-button">
              Limpar
            </button>
            <button type="submit" className="footer-button">
              Enviar
            </button>
          </div>
        </form>
      </div>

      <p className="text-white text-sm">
        2023 • Igreja Cristã Reformada Avivalista Porto Canoa
      </p>
    </footer>
  );
}
