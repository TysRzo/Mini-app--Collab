import H1 from "../../atoms/H1";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import Main from "../../layouts/Main";

const Dashboard = () => {
  return (
    <>
      < Header />
      < Main>
      < H1 pageTitle="Admin Dashboard" />
       </Main>
      < Footer />

    </>
  )
}

export default Dashboard;
