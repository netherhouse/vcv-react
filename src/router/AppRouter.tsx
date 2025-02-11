import { Suspense, lazy } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "components/Layout";

// Динамический импорт страниц
const Home = lazy(() => import("../pages/Home/Home"));
const History = lazy(() => import("../pages/History/History"));
const About = lazy(() => import("../pages/About/About"));
const Events = lazy(() => import("../pages/Events/Events"));
const SingTogether = lazy(() => import("../pages/SingTogether/SingTogether"));
const Repertoire = lazy(() => import("../pages/Repertoire/Repertoire"));
const Contact = lazy(() => import("../pages/Contact/Contact"));

const AppRouter = () => (
  <Suspense fallback={<div className="loading">Загрузка...</div>}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="history" element={<History />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="sing-together" element={<SingTogether />} />
        <Route path="repertoire" element={<Repertoire />} />
        <Route path="contacts" element={<Contact />} />
      </Route>
    </Routes>
  </Suspense>
);

export default AppRouter;
