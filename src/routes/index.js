import { Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import FourOFour from "../views/404";
export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="*" element={<FourOFour />} />
    </Routes>
  );
}
