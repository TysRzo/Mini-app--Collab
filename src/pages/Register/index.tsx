import H1 from "../../atoms/H1";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import Main from "../../layouts/Main";
import FormRegister from "../../organisms/FormRegister";

const Register = () => {
  return (
    <>
      <Header />
      
      <Main>  
        <H1 pageTitle="Register" />
        <FormRegister />
      </Main>

      <Footer />

    </>
  )
}

export default Register;
