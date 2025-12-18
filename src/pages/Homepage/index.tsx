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
      </Main>
      <Footer />
    </>
  );
};

export default Homepage;
