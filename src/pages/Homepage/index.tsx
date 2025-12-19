import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router";

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
                {t("home.guest.intro")}
                <br />
                <span className="font-medium">{t("home.guest.rule")}</span>
              </p>

              <p className="mt-3 text-sm text-blue-900">
                {t("home.guest.ctaText")}{" "}
                <span className="font-semibold">
                  {t("home.guest.ctaHighlight")}
                </span>{" "}
                {t("home.guest.ctaTextEnd")}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Link
                to="/login"
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
                {t("home.guest.actions.login")}
              </Link>

              <Link
                to="/register"
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
                {t("home.guest.actions.register")}
              </Link>
            </div>
          </section>
        )}
      </Main>
      <Footer />
    </>
  );
};

export default Homepage;
