import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./index.css";
import Mega from "../pages/Mega";
import Loto from "../pages/Loto";
import Quin from "../pages/Quin";


function Rotas() {
    return (
        <BrowserRouter >
            <nav >
                <ul>
                    <li>
                        <NavLink id = "l_guia" to="/lotofacil">Lotofácil</NavLink>
                    </li>
                    <li>
                        <NavLink id = "m_guia" to="/megasena">Megasena</NavLink>
                    </li>
                    <li>
                        <NavLink id = "q_guia" to="/quina">Quina</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/megasena" element={<Mega />} />
                <Route path="/lotofacil" element={<Loto />} />
                <Route path="/quina" element={<Quin  />}  />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;