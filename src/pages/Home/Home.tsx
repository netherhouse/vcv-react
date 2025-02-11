import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";
import styles from ".Home.module.scss";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation(["home", "common"]);

  return (
    <main className={styles.container}>
      <h1>{t("home:title")}</h1>
      <p>{t("home:mission")}</p>
      <button>{t("common:joinBtn")}</button>
    </main>
  );
};

export default Home;
