import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import H1 from "../../atoms/H1";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import Main from "../../layouts/Main";
import VoteCurrent from "../../organisms/VoteCurrent";

import type { RootState } from "../../store/store";

const Homepage = () => {
  const { t } = useTranslation();

  const isLogged = useSelector((state: RootState) => state.user.isLogged);

  return (
    <>
      <Header />
      <Main>
        <H1 pageTitle={t("home.title")} />

        {isLogged && <VoteCurrent />}

        {!isLogged && (
          <section className="mt-6 space-y-6 rounded-xl border border-blue-200 bg-blue-50 p-6 shadow-sm">
            <div>
              <p className="text-sm leading-relaxed text-blue-900">
                Cette application permet de participer à des votes collectifs
                simples et transparents.
                <br />
                <span className="font-medium">
                  Un vote est ouvert à la fois, chacun peut s’exprimer (+1 ou
                  -1), et le score évolue en temps réel.
                </span>
              </p>

              <p className="mt-3 text-sm text-blue-900">
                Pour participer au vote en cours, il suffit de{" "}
                <span className="font-semibold">créer un compte gratuit</span>{" "}
                ou de te connecter.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a
                href="/connexion"
                className="
          flex
          items-center
          justify-center
          rounded-xl
          border
          border-slate-300
          bg-white
          px-6
          py-4
          text-base
          font-medium
          text-slate-800
          shadow-sm
          transition
          hover:bg-slate-50
        "
              >
                Se connecter
              </a>

              <a
                href="/inscription"
                className="
          flex
          items-center
          justify-center
          rounded-xl
          bg-blue-700
          px-6
          py-4
          text-base
          font-semibold
          text-white
          shadow-sm
          transition
          hover:bg-blue-600
        "
              >
                S’inscrire gratuitement
              </a>
            </div>
          </section>
        )}
      </Main>
      <Footer />
    </>
  );
};

export default Homepage;
