import { useEffect, useState } from "react";
import axios from "axios";
import H1 from "../../atoms/H1";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import Main from "../../layouts/Main";

const API_URL = "http://localhost:3000/api";

const Homepage = () => {
  const [settings, setSettings] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/settings`)
      .then((res) => {
        const apiSettings = res.data;
        setSettings(apiSettings);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <>
      <Header />
      <Main>
        <H1 pageTitle="Accueil" />

        {settings && (
          <p>
            Inscriptions :{" "}
            {settings.registrationsClosed ? "ouvertes" : "fermées"}
          </p>
        )}
      </Main>
      <Footer />
    </>
  );
};

export default Homepage;
