import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../views/Home";
import FourOFour from "../views/404";
import FlightDetail from "../views/FlightDetail";
import ScrollToTop from "../components/ScrollToTop";
import FormFull from "../views/Form";
import InitParalal from "../views/InitParalal";



export default function RoutesApp() {
  ScrollToTop();
  return (
    <Routes>
      <Route path="/" element={<InitParalal/>}></Route>
      <Route path="/search" element={<FormFull />}></Route>
      <Route path="/list" element={<Home />} exact />
      <Route path="/flight/:id" element={<FlightDetail />}></Route>
      <Route path="*" element={<FourOFour />} />
    </Routes>
  );
}
