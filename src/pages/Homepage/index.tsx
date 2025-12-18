import H1 from "../../atoms/H1";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import Main from "../../layouts/Main";

const Homepage = () => {
  return (
    <>
      <Header />
      <Main>
        <H1 pageTitle="Accueil" />
      </Main>
      <Footer />
    </>
  );
};

export default Homepage;
