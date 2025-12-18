import { useTranslation } from "react-i18next";
import H1 from "../../atoms/H1";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import Main from "../../layouts/Main";

const Homepage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Main>
        <H1 pageTitle={t("home.title")} />
      </Main>
      <Footer />
    </>
  );
};

export default Homepage;
