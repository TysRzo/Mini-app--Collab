import H1 from "../../atoms/H1";
import Header from "../../layouts/Header";
import Main from "../../layouts/Main";
import Footer from "../../layouts/Footer";
import FormLogin from "../../organisms/FormLogin";

const Login = () => {
  return (
    <>
      <Header />

      <Main>
        <H1 pageTitle="Login" />

        <FormLogin />
      </Main>

      <Footer />
    </>
  );
};

export default Login;
