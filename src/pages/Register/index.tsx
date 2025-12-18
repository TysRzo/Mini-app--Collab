import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { useTranslation } from "react-i18next";
import H1 from "../../atoms/H1";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import Main from "../../layouts/Main";
import FormRegister from "../../organisms/FormRegister";
import type { RootState } from "../../store/store";

const Register = () => {
  const { t } = useTranslation();

  const isLogged = useSelector((state: RootState) => state.user.isLogged);
  const registrationsClosed = useSelector(
    (state: RootState) => state.settings.registrationsClosed
  );

  if (isLogged) {
    return <Navigate to="/" replace />;
  }

  if (registrationsClosed) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Header />

      <Main>
        <H1 pageTitle={t("register.title")} />
        <FormRegister />
      </Main>

      <Footer />
    </>
  );
};

export default Register;
