import { Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import FourOFour from "../views/404";
import FlightDetail from "../views/FlightDetail";
import ScrollToTop from "../components/ScrollToTop";

export default function RoutesApp() {
  ScrollToTop();
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/flight/:id" element={<FlightDetail />}></Route>
      <Route path="*" element={<FourOFour />} />
    </Routes>
  );
}
