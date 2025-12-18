import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { useTranslation } from "react-i18next";
import H1 from "../../atoms/H1";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import Main from "../../layouts/Main";
import RegistrationToggle from "../../organisms/RegistrationToggle";
import type { RootState } from "../../store/store";

const Dashboard = () => {
  const { t } = useTranslation();

  const isAdmin = useSelector(
    (state: RootState) => state.user.user?.role === "admin"
  );

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Header />
      <Main>
        <H1 pageTitle={t("admin.dashboard.title")} />
        <RegistrationToggle />
      </Main>
      <Footer />
    </>
  );
};

export default Dashboard;
