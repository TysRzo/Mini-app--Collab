import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import H1 from "../../atoms/H1";
import Header from "../../layouts/Header";
import Main from "../../layouts/Main";
import Footer from "../../layouts/Footer";
import FormLogin from "../../organisms/FormLogin";
import type { RootState } from "../../store/store";

const Login = () => {
  const { t } = useTranslation();
  const isLogged = useSelector((state: RootState) => state.user.isLogged);

  const location = useLocation();
  const flash = location.state?.flash as string | undefined;

  if (isLogged) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Header />

      <Main>
        <H1 pageTitle={t("login.title")} />

        {flash && (
          <p className="mb-4 rounded-md bg-green-100 px-4 py-3 text-sm font-medium text-green-800">
            {flash}
          </p>
        )}

        <FormLogin />
      </Main>

      <Footer />
    </>
  );
};

export default Login;
