import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";
import CatsOutlet from "../views/outlets/CatsOutlet";
import DogsOutlet from "../views/outlets/DogsOutlet";
import AllOutlet from "../views/outlets/AllOutlet";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<AllOutlet />}></Route>
          <Route path="gatos" element={<CatsOutlet />}></Route>
          <Route path="perros" element={<DogsOutlet />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
