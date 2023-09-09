import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";
import GatosOutlet from "../views/outlets/GatosOutlet";
import PerrosOutlet from "../views/outlets/PerrosOutlet";
import TodosOutlet from "../views/outlets/TodosOutlet";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<TodosOutlet />}></Route>
          <Route path="gatos" element={<GatosOutlet />}></Route>
          <Route path="perros" element={<PerrosOutlet />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
