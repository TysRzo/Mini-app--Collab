import H1 from "../../atoms/H1";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import Main from "../../layouts/Main";

const NotFound = () => {
  return (
    <>
      <Header />
      <Main>
        <H1 pageTitle="Page introuvable" />
      </Main>
      <Footer />
    </>
  );
};

export default NotFound;
