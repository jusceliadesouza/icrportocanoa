import { Link } from "react-router-dom";
import { UserCircle, UserPlus, PaperPlaneTilt } from "phosphor-react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Maps } from "../components/Maps";

export function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />

      <main className="w-full">
        <section
          id="quem-somos"
          className="flex flex-col items-center mx-auto py-20"
        >
          <h1 className="font-['Bebas_Neue'] text-center mb-10">Quem Somos</h1>

          <div className="flex flex-col justify-between mb-20 container">
            <p className="text-justify">
              O nome da nossa igreja declara quem somos, a saber, <strong className="text-emerald-700">IGREJA CRISTÃ
              REFORMADA AVIVALISTA</strong>, isto é, somos <strong className="text-emerald-700">REFORMADOS</strong> e <strong className="text-emerald-700">AVIVALISTAS</strong>.
              Temos somente a bíblia como fundamento da vida Cristã, mas também
              declaramos que o nosso coração arde com a chama do avivamento.
            </p>
          </div>

          <div className="grid grid-cols-3 text-center justify-between gap-16 mb-20 container">
            <div className="flex flex-col gap-5 items-center">
              <h6 className="font-bold uppercase ">Visão</h6>
              <p className="">
                Ser uma igreja missionária que reflita a glória do reino de Deus
                em nossa sociedade.
              </p>
            </div>
            <div className="flex flex-col gap-5  items-center">
              <h6 className="font-bold uppercase">Missão</h6>
              <p className="">
                Estar comprometido em pregar e viver as Sagradas Escrituras, com
                objetivo de adorar a Deus, socorrer os necessitados e formar
                discípulos de Jesus Cristo.
              </p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <h6 className="font-bold uppercase">Lema</h6>
              <p className="">Uma igreja bíblica</p>
            </div>
          </div>

          <button className="btn">Saiba mais</button>
        </section>

        <section
          id="seja-membro"
          className="w-full px-20 py-32 flex flex-col gap-6 items-center bg-teal-500"
        >
          <h5 className="text-white">Seja membro da igreja</h5>

          <div className="text-center text-sm flex flex-col gap-1">
            <p>
              Link exclusivo para aqueles que desejarem ser membros da Igreja
              Cristã Reformada Avivalista Porto Canoa, Serra/ES.
            </p>

            <p>A inscrição será homologada internamente.</p>
          </div>

          <Link to="" className=" btn-rounded ">
            <UserPlus size={24} />
            Inscrever-se como membro
          </Link>
        </section>

        <section
          id="testemunhos"
          className="flex flex-col items-center bg-zinc-600 pb-20 text-white"
        >
          <h1 className="font-['Bebas_Neue']  mt-20 mb-10">Testemunhos</h1>

          <p className="text-center max-w-[52rem]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>

          <hr className="bg-white w-80 h-1 mt-10" />

          <div className="flex gap-2 items-center mt-4 mb-20">
            <UserCircle size={32} />
            <div className="flex flex-col text-xs">
              <span className="font-bold ">Nome Completo</span>
              <span>Cidade/UF</span>
            </div>
          </div>

          <Link to="" className="btn-rounded">
            <PaperPlaneTilt size={28} />
            Envie seu testemunho
          </Link>
        </section>

        <section
          id="maps"
          className="flex items-center bg-zinc-100 justify-evenly p-20"
        >
          <Maps
            id="map"
            url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d234.102228150434!2d-40.2446352!3d-20.1492425!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81e19d01eb5ff%3A0x1e6da2d76bf9bb4d!2sAv.%20Distrito%20Federal%20Lt%20Res%20Solar%20Port%2C%2075%20-%20Plan%C3%ADcie%20da%20Serra%2C%20Serra%20-%20ES%2C%2029168-707!5e0!3m2!1spt-BR!2sbr!4v1665116630175!5m2!1spt-BR!2sbr"
            width="500px"
            height="400px"
          />

          <div className="flex flex-col gap-3 text-center">
            <p className="">
              Estamos localizados na Avenida Distrito Federal, 27<br></br>
              Planície da Serra, Serra-ES - 29168-707
            </p>

            <small className="font-light">
              Em frente à Igreja Ministério Shalom
            </small>
          </div>
        </section>
      </main>

      <Footer id="footer" />
    </div>
  );
}
